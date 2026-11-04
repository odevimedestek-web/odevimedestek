import Image from "next/image";

const pages = [
  {
    src: "/ornek-rapor-1.jpg",
    alt: "Örnek benzerlik raporu: genel sonuç sayfası",
    label: "Benzerlik raporu",
    position: "-rotate-3",
  },
  {
    src: "/ornek-rapor-2.jpg",
    alt: "Örnek benzerlik raporu: kaynak listesi sayfası",
    label: "Kaynak listesi",
    position: "rotate-2 mt-12 lg:mt-20 -ml-16 sm:-ml-24 lg:-ml-32",
  },
];

const highlights = [
  "Benzerlik ve yapay zekâ raporu birlikte",
  "Tek rapor veya hesap seçeneği",
  "WhatsApp'tan doğrudan iletişim",
];

const whatsapp = (message: string) =>
  `https://wa.me/905384164676?text=${encodeURIComponent(message)}`;

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ReportService() {
  return (
    <section id="rapor-hizmeti" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-12 lg:gap-8 items-center">
        <div className="min-w-0">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
            Yeni Hizmetimiz
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-tight mt-3">
            Benzerlik ve Yapay Zekâ{" "}
            <span className="text-gold-500">Raporu</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed mt-5 max-w-xl">
            Çalışmanız için rapor alın ya da size özel hesapla dosyalarınızı
            kendiniz yükleyin. Fiyat ve ayrıntılar için WhatsApp&apos;tan bize
            yazın.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-8">
            <a
              href={whatsapp("Merhaba, rapor almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-navy-900 text-white font-bold rounded-xl hover:bg-navy-700 transition-all hover:shadow-xl hover:shadow-navy-900/20"
            >
              <WhatsAppIcon />
              Rapor Almak İçin Yazın
            </a>
            <a
              href={whatsapp("Merhaba, hesap satın almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-slate-300 text-navy-900 font-semibold rounded-xl hover:border-gold-400 hover:text-gold-500 transition-all"
            >
              <WhatsAppIcon />
              Hesap Almak İçin Yazın
            </a>
          </div>

          <ul className="flex flex-col gap-2 mt-7">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <svg className="w-4 h-4 shrink-0 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="/ornek-benzerlik-raporu.pdf"
            download
            className="inline-block mt-6 text-sm font-semibold text-gold-500 hover:text-gold-400"
          >
            Örnek raporu indir (PDF, 129 KB) →
          </a>
          <p className="mt-3 text-sm text-slate-600">
            Hesabınız var mı?{" "}
            <a
              href="https://rapor-paneli.vercel.app"
              className="font-semibold text-navy-900 underline hover:text-gold-500"
            >
              Giriş yapın
            </a>
          </p>
        </div>

        <div className="min-w-0 flex justify-center lg:justify-end pb-4">
          {pages.map((page) => (
            <a
              key={page.src}
              href={page.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${page.alt} (tam boy aç)`}
              className={`relative z-0 block shrink w-[60%] lg:w-[23rem] ${page.position} bg-white rounded-xl border border-slate-200 shadow-2xl shadow-navy-900/20 motion-safe:transition-all motion-safe:duration-200 hover:z-20 hover:rotate-0 hover:scale-105 focus-visible:z-20 focus-visible:rotate-0 focus-visible:scale-105`}
            >
              <Image
                src={page.src}
                alt=""
                width={850}
                height={1100}
                sizes="(min-width: 1024px) 400px, 60vw"
                className="w-full h-auto rounded-xl"
              />
              <span className="absolute -top-3 right-4 px-3 py-1 bg-navy-900 text-gold-300 text-xs sm:text-sm font-semibold rounded-full shadow-lg">
                {page.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
