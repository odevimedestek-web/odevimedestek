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

// PayXem destek ekibinin doğruladığı komisyon formülü:
// Payxem ücreti: %2,4 + 0,35$ sabit
// İşlemci (Stripe/PayPal) ücreti: 0,30$ sabit + %3-5 arası komisyon
// Sonucun sana her zaman en az istediğin net tutarı bırakması için işlemci
// tarafında aralığın üst sınırı (%5) kullanılıyor — böylece müşteriden
// hesaplanandan az değil, en fazla birkaç kuruş fazla tahsil edilir.
const PAYXEM_FIXED_FEE_USD = 0.35 + 0.3;
const PAYXEM_VARIABLE_FEE_RATE = 0.024 + 0.05;

export interface PaymentRequest {
  amountTry: number;
}

export interface PaymentLink {
  url: string;
  amountUsd: number;
  feeUsd: number;
  feeTry: number;
  totalTry: number;
}

// Müşteriye gösterilmesi güvenli olan hatalar (tutar aralığı gibi iş
// kuralları) bu sınıfla işaretlenir; diğer hatalar (yapılandırma eksikliği
// gibi) API katmanında genel bir mesajla değiştirilir.
export class PaymentValidationError extends Error {}

// Sen "1500 TL almak istiyorum" dediğinde, PayXem'in keseceği komisyonu
// müşteriye yansıtmak için gönderilecek brüt USD tutarını hesaplar. Böylece
// komisyon düşüldükten sonra sana net olarak istediğin TL karşılığı kalır.
export async function calculateGrossAmount(amountTry: number) {
  const netUsd = await convertTryToUsd(amountTry);
  const compensatedNetUsd = Math.round((netUsd / PAYXEM_RATE_MARKUP) * 100) / 100;

  const grossUsd =
    Math.round(
      ((compensatedNetUsd + PAYXEM_FIXED_FEE_USD) / (1 - PAYXEM_VARIABLE_FEE_RATE)) * 100
    ) / 100;

  const feeUsd = Math.round((grossUsd - compensatedNetUsd) * 100) / 100;

  // TL karşılığını göstermek için aynı oranı (tutar / net dolar) kullanıyoruz,
  // böylece ekrandaki TL rakamları tutarlı kalır.
  const tryPerUsd = amountTry / netUsd;
  const feeTry = Math.round(feeUsd * tryPerUsd);
  const totalTry = amountTry + feeTry;

  return { netUsd: compensatedNetUsd, grossUsd, feeUsd, feeTry, totalTry };
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

  const { grossUsd, feeUsd, feeTry, totalTry } = await calculateGrossAmount(
    request.amountTry
  );

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

  return { url, amountUsd: grossUsd, feeUsd, feeTry, totalTry };
}
