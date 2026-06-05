import Link from "next/link";
import Image from "next/image";

export default function PolicyLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-navy-900">
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

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          {title}
        </h1>
        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
          {children}
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
