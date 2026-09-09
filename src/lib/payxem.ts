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

// Müşteriye yansıtılan tek kalem: %5 vergi. Ekranda yüzde olarak değil,
// sadece tutar olarak gösterilir.
const VERGI_RATE = 0.05;
const ISLEM_UCRETI_TRY = 0;

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

// "Hizmet Bedeli" üzerine %5 vergi ve sabit işlem ücreti ekleyip
// toplam TL tutarını ve bunun karşılığı USD tutarını hesaplar.
export async function calculateGrossAmount(amountTry: number) {
  const vergiTry = Math.round(amountTry * VERGI_RATE);
  const islemUcretiTry = ISLEM_UCRETI_TRY;
  const totalTry = amountTry + vergiTry + islemUcretiTry;

  const rawAmountUsd = await convertTryToUsd(totalTry);
  const grossUsd = Math.round((rawAmountUsd / PAYXEM_RATE_MARKUP) * 100) / 100;

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
