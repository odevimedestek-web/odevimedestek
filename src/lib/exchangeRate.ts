// TL -> USD çevrimi. Site fiyatları TL, PayXem ödemeleri USD üzerinden
// yürüdüğü için ödeme linki oluşturulmadan hemen önce güncel kur ile
// sunucu tarafında çevrim yapılır.

let cachedRate: { value: number; fetchedAt: number } | null = null;
const CACHE_MS = 5 * 60 * 1000; // 5 dakika

async function getTryToUsdRate(): Promise<number> {
  if (cachedRate && Date.now() - cachedRate.fetchedAt < CACHE_MS) {
    return cachedRate.value;
  }

  const res = await fetch("https://api.frankfurter.app/latest?from=TRY&to=USD", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Güncel döviz kuru alınamadı");
  }

  const data = await res.json();
  const rate = data?.rates?.USD;

  if (typeof rate !== "number") {
    throw new Error("Döviz kuru yanıtı beklenen formatta değil");
  }

  cachedRate = { value: rate, fetchedAt: Date.now() };
  return rate;
}

export async function convertTryToUsd(amountTry: number): Promise<number> {
  const rate = await getTryToUsdRate();
  return Math.round(amountTry * rate * 100) / 100;
}
