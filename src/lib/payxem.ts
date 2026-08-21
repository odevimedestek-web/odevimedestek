// PayXem entegrasyonu — kişiye özgü ödeme linki oluşturma
//
// PayXem'in ayrı bir API'si yok: kullanıcı adınız ve tutar, PayXem'in kendi
// barındırdığı ödeme sayfasının URL'sine parametre olarak eklenir
// (https://app.payxem.com/paylink?u=...&amount=...). Müşteri kart bilgisini
// o sayfada girer, bizim sitemizin içine gömülmez.
//
// Site fiyatları müşteriye TL olarak gösterilir; PayXem yalnızca USD kabul
// ettiği için gönderilen TL tutarı linki oluşturmadan hemen önce güncel kur
// ile USD'ye çevrilir. PayXem canlı desteğine göre minimum tutar 1 USD
// (üst sınır PayXem tarafından belirtilmedi, 5000 USD güvenli bir üst sınır
// olarak korunuyor).
//
// PAYXEM_USERNAME, .env.local içinde tanımlanmalı (PayXem panelindeki
// "SDK'yı inceleyin" kodunda "u=" parametresinin gerçek değeri).

import { convertTryToUsd } from "./exchangeRate";

const MIN_USD = 1;
const MAX_USD = 5000;

// PayXem, ödeme ekranında USD tutarını kendi (bizimkinden biraz yüksek) kuruyla
// tekrar TL'ye çevirip gösteriyor. Gözlemlenen fark tutarlı şekilde ~%3,75
// civarında çıktığı için, PayXem'in ekranında görünen TL rakamının müşteriye
// gösterdiğimiz orijinal tutara yakın kalması için gönderilen USD tutarından
// bu payı düşüyoruz. Yaklaşık bir düzeltme; kur farkı zamanla değişebilir.
const PAYXEM_RATE_MARKUP = 1.0375;

export interface PaymentRequest {
  amountTry: number;
}

export interface PaymentLink {
  url: string;
  amountUsd: number;
}

// Müşteriye gösterilmesi güvenli olan hatalar (tutar aralığı gibi iş
// kuralları) bu sınıfla işaretlenir; diğer hatalar (yapılandırma eksikliği
// gibi) API katmanında genel bir mesajla değiştirilir.
export class PaymentValidationError extends Error {}

export async function createPaymentLink(
  request: PaymentRequest
): Promise<PaymentLink> {
  const username = process.env.PAYXEM_USERNAME;

  if (!username) {
    throw new Error(
      "PAYXEM_USERNAME tanımlı değil. .env.local dosyasına PayXem kullanıcı adınızı ekleyin."
    );
  }

  const rawAmountUsd = await convertTryToUsd(request.amountTry);
  const amountUsd = Math.round((rawAmountUsd / PAYXEM_RATE_MARKUP) * 100) / 100;

  if (amountUsd < MIN_USD || amountUsd > MAX_USD) {
    throw new PaymentValidationError(
      `Bu tutar için ödeme oluşturulamıyor (izin verilen aralık: ${MIN_USD}-${MAX_USD} USD karşılığı). Lütfen bizimle iletişime geçin.`
    );
  }

  const url =
    "https://app.payxem.com/paylink?u=" +
    encodeURIComponent(username) +
    "&amount=" +
    encodeURIComponent(amountUsd.toFixed(2));

  return { url, amountUsd };
}
