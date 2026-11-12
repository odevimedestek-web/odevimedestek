import Link from "next/link";
import Image from "next/image";
import { breadcrumbLd, type Crumb } from "@/lib/seo";

export default function PolicyLayout({
  title,
  crumbs,
  children,
}: {
  title: string;
  crumbs?: Crumb[];
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
            <Link href="/analiz" className="text-sm text-slate-300 hover:text-gold-300">Analiz Türleri</Link>
            <Link href="/hakkimizda" className="text-sm text-slate-300 hover:text-gold-300">Hakkımızda</Link>
            <Link href="/iletisim" className="text-sm text-slate-300 hover:text-gold-300">İletişim</Link>
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
        {crumbs && crumbs.length > 0 && (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd(crumbs)).replace(/</g, "\\u003c") }}
            />
            <nav aria-label="Sayfa yolu" className="mb-5 text-sm text-slate-400">
              <ol className="flex flex-wrap gap-x-2 gap-y-1">
                <li><Link href="/" className="text-gold-400 underline">Ana sayfa</Link></li>
                {crumbs.map((c, i) => (
                  <li key={c.path} className="flex gap-2">
                    <span aria-hidden="true">/</span>
                    {i === crumbs.length - 1
                      ? <span aria-current="page">{c.name}</span>
                      : <Link href={c.path} className="text-gold-400 underline">{c.name}</Link>}
                  </li>
                ))}
              </ol>
            </nav>
          </>
        )}
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
            <Link href="/hakkimizda" className="hover:text-gold-400">Hakkımızda</Link>
            <Link href="/iletisim" className="hover:text-gold-400">İletişim</Link>
            <Link href="/analiz" className="hover:text-gold-400">Analiz Türleri</Link>
            <Link href="/etik-ilkeler" className="hover:text-gold-400">Etik İlkeler</Link>
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
