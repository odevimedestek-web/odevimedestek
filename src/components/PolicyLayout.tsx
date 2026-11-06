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
      <a href="#ana-icerik" className="skip-link">Ana içeriğe geç</a>
      <header className="bg-navy-900/95 backdrop-blur-md border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 py-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-odevime-destek.png"
                alt="Ödevime Destek"
                width={48}
                height={48}
                className="w-12 h-12 object-contain rounded-xl bg-white p-1"
              />
              <span className="text-white font-semibold hidden sm:inline">Ödevime Destek</span>
            </Link>
            <nav aria-label="Sayfa menüsü" className="flex flex-wrap gap-4 items-center">
            <Link href="/rehber" className="text-sm text-slate-300 hover:text-gold-300">Rehberler</Link>
            <Link href="/#iletisim" className="text-sm text-slate-300 hover:text-gold-300">İletişim</Link>
            <Link
              href="/"
              className="text-sm text-slate-300 hover:text-gold-400 transition-colors"
            >
              Ana Sayfa
            </Link>
            </nav>
          </div>
        </div>
      </header>

      <main id="ana-icerik" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight tracking-tight">
          {title}
        </h1>
        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
          {children}
        </div>
      </main>

      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-3xl mx-auto px-4 text-center text-sm text-slate-400 space-y-3">
          <p>Ankara, Türkiye · 0538 416 46 76 · odevimedestek@gmail.com</p>
          <p className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link href="/rehber" className="hover:text-gold-400">Akademik Rehberler</Link>
            <Link href="/gizlilik" className="hover:text-gold-400">Gizlilik Politikası</Link>
            <Link href="/kullanim-sartlari" className="hover:text-gold-400">Kullanım Şartları</Link>
            <Link href="/iade-politikasi" className="hover:text-gold-400">İade Politikası</Link>
            <Link href="/guvenlik" className="hover:text-gold-400">Güvenlik</Link>
          </p>
          <p>&copy; {new Date().getFullYear()} Ödevime Destek. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
