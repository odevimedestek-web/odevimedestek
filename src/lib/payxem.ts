// PayXem entegrasyonu — kişiye özgü ödeme linki oluşturma
//
// PayXem'in ayrı bir API'si yok: kullanıcı adınız ve tutar, PayXem'in kendi
// barındırdığı ödeme sayfasının URL'sine parametre olarak eklenir
// (https://app.payxem.com/paylink?u=...&amount=...). Müşteri kart bilgisini
// o sayfada girer, bizim sitemizin içine gömülmez.
//
// Site fiyatları müşteriye TL olarak gösterilir; PayXem yalnızca USD kabul
// ettiği için gönderilen TL tutarı linki oluşturmadan hemen önce güncel kur
// ile USD'ye çevrilir. PayXem'in ödeme linki minimumu 5 USD (üst sınır
// PayXem tarafından belirtilmedi, 5000 USD güvenli bir üst sınır olarak
// korunuyor).
//
// PAYXEM_USERNAME, .env.local içinde tanımlanmalı (PayXem panelindeki
// "SDK'yı inceleyin" kodunda "u=" parametresinin gerçek değeri).

import { convertTryToUsd } from "./exchangeRate";

const MIN_USD = 5;
const MAX_USD = 5000;

// PayXem, ödeme ekranında USD tutarını kendi (bizimkinden biraz yüksek) kuruyla
// tekrar TL'ye çevirip gösteriyor. Gözlemlenen fark tutarlı şekilde ~%3,75
// civarında çıktığı için, PayXem'in ekranında görünen TL rakamının müşteriye
// gösterdiğimiz orijinal tutara yakın kalması için gönderilen USD tutarından
// bu payı düşüyoruz. Yaklaşık bir düzeltme; kur farkı zamanla değişebilir.
const PAYXEM_RATE_MARKUP = 1.0375;

// Müşteriden sabit %5'lik bir "vergi" isteniyor (görünür kalem). PayXem'in
// destek ekibinin doğruladığı gerçek komisyon formülü ise (Payxem %2,4+0,35$,
// işlemci 0,30$+%5) sabit %5'ten her zaman daha yüksek çıkar. Aradaki fark
// ayrıca "İşlem Ücreti" adıyla ikinci bir kalem olarak ekleniyor, böylece
// toplamda müşteriden tam kapsayan tutar tahsil edilir ve sana her zaman
// istediğin net TL tutarı kalır.
const VERGI_RATE = 0.05;
const PAYXEM_FIXED_FEE_USD = 0.35 + 0.3;
const PAYXEM_VARIABLE_FEE_RATE = 0.024 + 0.05;

export interface PaymentRequest {
  amountTry: number;
}

export interface PaymentLink {
  url: string;
  amountUsd: number;
  vergiTry: number;
  islemUcretiTry: number;
  totalTry: number;
}

// Müşteriye gösterilmesi güvenli olan hatalar (tutar aralığı gibi iş
// kuralları) bu sınıfla işaretlenir; diğer hatalar (yapılandırma eksikliği
// gibi) API katmanında genel bir mesajla değiştirilir.
export class PaymentValidationError extends Error {}

// "Hizmet Bedeli" üzerine, PayXem'in gerçek komisyonunu tam karşılayacak
// toplam tutarı hesaplar; bu toplamı "Vergi" (sabit %5) ve "İşlem Ücreti"
// (kalan fark) olmak üzere iki görünür kaleme ayırır.
export async function calculateGrossAmount(amountTry: number) {
  const netUsd = await convertTryToUsd(amountTry);
  const compensatedNetUsd = Math.round((netUsd / PAYXEM_RATE_MARKUP) * 100) / 100;

  const grossUsd =
    Math.round(
      ((compensatedNetUsd + PAYXEM_FIXED_FEE_USD) / (1 - PAYXEM_VARIABLE_FEE_RATE)) * 100
    ) / 100;

  const totalFeeUsd = Math.round((grossUsd - compensatedNetUsd) * 100) / 100;

  // TL karşılığını göstermek için aynı oranı (tutar / net dolar) kullanıyoruz,
  // böylece ekrandaki TL rakamları tutarlı kalır.
  const tryPerUsd = amountTry / netUsd;
  const totalFeeTry = Math.round(totalFeeUsd * tryPerUsd);

  const vergiTry = Math.round(amountTry * VERGI_RATE);
  const islemUcretiTry = Math.max(totalFeeTry - vergiTry, 0);
  const totalTry = amountTry + vergiTry + islemUcretiTry;

  return { grossUsd, vergiTry, islemUcretiTry, totalTry };
}

export async function createPaymentLink(
  request: PaymentRequest
): Promise<PaymentLink> {
  const username = process.env.PAYXEM_USERNAME;

  if (!username) {
    throw new Error(
      "PAYXEM_USERNAME tanımlı değil. .env.local dosyasına PayXem kullanıcı adınızı ekleyin."
    );
  }

  const { grossUsd, vergiTry, islemUcretiTry, totalTry } =
    await calculateGrossAmount(request.amountTry);

  if (grossUsd < MIN_USD || grossUsd > MAX_USD) {
    throw new PaymentValidationError(
      `Bu tutar için ödeme oluşturulamıyor (izin verilen aralık: ${MIN_USD}-${MAX_USD} USD karşılığı). Lütfen bizimle iletişime geçin.`
    );
  }

  const url =
    "https://app.payxem.com/paylink?u=" +
    encodeURIComponent(username) +
    "&amount=" +
    encodeURIComponent(grossUsd.toFixed(2));

  return { url, amountUsd: grossUsd, vergiTry, islemUcretiTry, totalTry };
}
