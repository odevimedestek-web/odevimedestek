import Image from "next/image";

const pages = [
  {
    src: "/ornek-rapor-1.jpg",
    alt: "Örnek benzerlik raporu: genel sonuç sayfası",
    tilt: "-rotate-3",
  },
  {
    src: "/ornek-rapor-2.jpg",
    alt: "Örnek benzerlik raporu: kaynak listesi sayfası",
    tilt: "rotate-2",
  },
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

export default function ReportOffer() {
  return (
    <aside className="relative z-10 w-full max-w-md mx-auto lg:mx-0 p-6 bg-white/10 border border-white/20 rounded-2xl">
      <h2 className="text-2xl font-bold text-white">
        Rapor veya hesap mı almak istiyorsunuz?
      </h2>
      <p className="text-slate-300 text-sm leading-relaxed mt-2">
        Benzerlik raporu örneğini inceleyin. Fiyat ve ayrıntılar için WhatsApp&apos;tan
        bizimle iletişime geçin.
      </p>

      <div className="flex justify-center gap-4 mt-6">
        {pages.map((page) => (
          <a
            key={page.src}
            href={page.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${page.alt} (tam boy aç)`}
            className={`relative block w-36 origin-right ${page.tilt} rounded-md shadow-xl shadow-navy-900/50 motion-safe:transition-transform motion-safe:duration-200 hover:z-20 focus-visible:z-20 lg:hover:rotate-0 lg:hover:scale-[2.6] lg:focus-visible:rotate-0 lg:focus-visible:scale-[2.6]`}
          >
            <Image
              src={page.src}
              alt=""
              width={850}
              height={1100}
              sizes="380px"
              className="w-full h-auto rounded-md"
            />
          </a>
        ))}
      </div>
      <p className="text-center text-xs text-slate-400 mt-4">
        <span className="hidden lg:inline">Büyütmek için üzerine gelin.</span>
        <span className="lg:hidden">Büyütmek için dokunun.</span>{" "}
        Kişisel bilgiler çıkarılmıştır.
      </p>

      <div className="flex flex-col gap-3 mt-5">
        <a
          href={whatsapp("Merhaba, rapor almak istiyorum.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold-400 text-navy-900 font-bold rounded-xl hover:bg-gold-300 transition-all"
        >
          <WhatsAppIcon />
          Rapor Almak İçin Yazın
        </a>
        <a
          href={whatsapp("Merhaba, hesap satın almak istiyorum.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white/60 hover:bg-white/10 transition-all"
        >
          <WhatsAppIcon />
          Hesap Almak İçin Yazın
        </a>
        <a
          href="/ornek-benzerlik-raporu.pdf"
          download
          className="text-center text-sm font-semibold text-gold-300 hover:text-gold-200 py-1"
        >
          Örnek raporu indir (PDF, 129 KB)
        </a>
      </div>
    </aside>
  );
}
