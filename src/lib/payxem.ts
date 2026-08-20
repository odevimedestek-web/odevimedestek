// PayXem entegrasyonu — kişiye özgü ödeme linki oluşturma
//
// PayXem'in ayrı bir API'si yok: kullanıcı adınız ve tutar, PayXem'in kendi
// barındırdığı ödeme sayfasının URL'sine parametre olarak eklenir
// (https://app.payxem.com/paylink?u=...&amount=...). Müşteri kart bilgisini
// o sayfada girer, bizim sitemizin içine gömülmez.
//
// Site fiyatları müşteriye TL olarak gösterilir; PayXem yalnızca USD kabul
// ettiği için gönderilen TL tutarı linki oluşturmadan hemen önce güncel kur
// ile USD'ye çevrilir. PayXem, tutarın 5-5000 USD aralığında olmasını şart
// koşuyor.
//
// PAYXEM_USERNAME, .env.local içinde tanımlanmalı (PayXem panelindeki
// "SDK'yı inceleyin" kodunda "u=" parametresinin gerçek değeri).

import { convertTryToUsd } from "./exchangeRate";

const MIN_USD = 5;
const MAX_USD = 5000;

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

  const amountUsd = await convertTryToUsd(request.amountTry);

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
