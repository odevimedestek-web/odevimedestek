import Link from "next/link";
import Image from "next/image";
import PaymentForm from "@/components/PaymentForm";
import { calculateGrossAmount } from "@/lib/payxem";

export const metadata = {
  title: "Ödeme | Ödevime Destek",
  description: "Ödevime Destek kişiye özel ödeme sayfası.",
};

function formatAmount(amount: number) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format(amount);
}

export default async function OdemePage({
  params,
  searchParams,
}: {
  params: Promise<{ kod: string }>;
  searchParams: Promise<{ hizmet?: string; tutar?: string }>;
}) {
  const { kod } = await params;
  const { hizmet, tutar } = await searchParams;

  const amount = tutar ? Number(tutar) : NaN;
  const hasValidLink = Boolean(hizmet) && Number.isFinite(amount) && amount > 0;

  let vergiTry: number | null = null;
  let islemUcretiTry: number | null = null;
  let totalAmount = amount;
  if (hasValidLink) {
    try {
      const result = await calculateGrossAmount(amount);
      vergiTry = result.vergiTry;
      islemUcretiTry = result.islemUcretiTry;
      totalAmount = result.totalTry;
    } catch {
      // Kur bilgisi alınamazsa orijinal tutarı göster; asıl hesaplama
      // ödeme linki oluşturulurken tekrar yapılacak.
    }
  }

  return (
    <div className="min-h-screen bg-navy-900 flex flex-col">
      <header className="bg-navy-900/95 backdrop-blur-md border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-odevime-destek.png"
                alt="Ödevime Destek"
                width={48}
                height={48}
                className="w-12 h-12 object-contain mix-blend-multiply"
              />
            </Link>
            <Link
              href="/"
              className="text-sm text-slate-300 hover:text-gold-400 transition-colors"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-md w-full mx-auto px-4 sm:px-6 py-16 flex flex-col justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-2xl font-bold text-navy-900 mb-1">
            Ödeme Bilgileri
          </h1>
          <p className="text-slate-500 text-sm mb-6">
            Referans kodu: <span className="font-mono">{kod}</span>
          </p>

          {!hasValidLink && (
            <div className="rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm p-4">
              Bu ödeme linki geçerli değil veya süresi dolmuş olabilir.
              Lütfen size ilettiğimiz güncel linki kullanın ya da WhatsApp
              üzerinden bize ulaşın.
            </div>
          )}

          {hasValidLink && (
            <>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Hizmet</span>
                  <span className="font-medium text-navy-900">{hizmet}</span>
                </div>
                <div className="flex justify-between text-sm pt-3 border-t border-slate-200">
                  <span className="text-slate-500">Hizmet Bedeli</span>
                  <span className="font-medium text-navy-900">
                    {formatAmount(amount)}
                  </span>
                </div>
                {vergiTry !== null && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Vergi</span>
                    <span className="font-medium text-navy-900">
                      {formatAmount(vergiTry)}
                    </span>
                  </div>
                )}
                {islemUcretiTry !== null && islemUcretiTry > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">İşlem Ücreti</span>
                    <span className="font-medium text-navy-900">
                      {formatAmount(islemUcretiTry)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-base pt-3 border-t border-slate-200">
                  <span className="text-slate-600 font-medium">
                    Ödenecek Tutar
                  </span>
                  <span className="font-bold text-navy-900">
                    {formatAmount(totalAmount)}
                  </span>
                </div>
              </div>

              <PaymentForm kod={kod} hizmet={hizmet!} tutar={amount} />

              <p className="text-xs text-slate-400 text-center mt-3">
                Ödeme ekranında tutar dolar (USD) karşılığı olarak
                görünecektir. Kartınız TL ile çekildiğinde bankanız güncel
                kur üzerinden çevrim yapar.
              </p>
            </>
          )}

          <a
            href="https://wa.me/905384164676"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center mt-4 px-5 py-3 text-sm text-slate-500 hover:text-navy-900 transition-colors"
          >
            Sorun mu var? WhatsApp üzerinden bize ulaşın
          </a>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-3xl mx-auto px-4 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Ödevime Destek. Tüm hakları
          saklıdır.
        </div>
      </footer>
    </div>
  );
}
