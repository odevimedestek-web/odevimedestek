import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Ödeme Tamamlanamadı | Ödevime Destek",
  description: "Ödeme işlemi tamamlanamadı.",
};

export default async function OdemeBasarisizPage({
  searchParams,
}: {
  searchParams: Promise<{ kod?: string }>;
}) {
  const { kod } = await searchParams;

  const whatsappText = kod
    ? `Merhaba, ${kod} referans kodlu ödemem tamamlanmadı, yardımcı olur musunuz?`
    : "Merhaba, ödemem tamamlanmadı, yardımcı olur musunuz?";

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
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-7 h-7 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-navy-900 mb-2">
            Ödeme Tamamlanamadı
          </h1>
          <p className="text-slate-500 text-sm mb-6">
            Ödemeniz sırasında bir sorun oluştu. Kartınızdan herhangi bir
            tutar çekilmediyse endişelenmenize gerek yok. Size hemen yardımcı
            olabilmemiz için WhatsApp üzerinden bize ulaşın.
          </p>

          <a
            href={`https://wa.me/905384164676?text=${encodeURIComponent(
              whatsappText
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1fbd5a] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.13c-.24.68-1.4 1.31-1.93 1.35-.5.05-1.03.27-3.46-.72-2.93-1.2-4.79-4.14-4.94-4.34-.14-.2-1.18-1.57-1.18-2.99 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.14.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.29.14.46.12.63-.07.17-.2.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.68.79 1.97.93.29.15.48.22.55.34.07.13.07.75-.17 1.43Z" />
            </svg>
            WhatsApp'tan Yardım Al
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
