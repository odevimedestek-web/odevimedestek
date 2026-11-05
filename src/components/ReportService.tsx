import Image from "next/image";

const samplePdf = "/ornek-benzerlik-raporu.pdf";
const samplePages = [
  { src: "/ornek-rapor-1.jpg", alt: "Temsilî örnek rapor: oranlar ve kaynak türleri" },
  { src: "/ornek-rapor-2.jpg", alt: "Temsilî örnek rapor: eşleşen kaynaklar ve işaretlemeler" },
];

const whatsappUrl = `https://wa.me/905384164676?text=${encodeURIComponent(
  "Merhaba, benzerlik ve yapay zekâ raporu hakkında bilgi almak istiyorum."
)}`;

export default function ReportService() {
  return (
    <section id="rapor-hizmeti" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-8 items-center p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-2xl">
          <div className="min-w-0">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
            Ek Hizmet
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-2">
            Benzerlik ve Yapay Zekâ Raporu
          </h2>
          <p className="text-slate-600 leading-relaxed mt-4">
            Kendi çalışmanızı teslim etmeden önce kontrol etmek için rapor
            alabilirsiniz. Sonuçlar yol göstericidir; yapay zekâ tespiti hata
            payı taşır ve üniversitenizin kullandığı sistemle aynı sonucu
            vermeyebilir.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed mt-3">
            Raporun üretilmesi için dosyanız hizmet sağlayıcımıza aktarılır.
            Ayrıntılar{" "}
            <a href="/gizlilik" className="font-semibold text-navy-900 underline hover:text-gold-500">
              Gizlilik Politikası
            </a>
            &apos;nda yer alır.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-700 transition-all"
            >
              Bilgi Almak İçin Yazın
            </a>
          </div>
          </div>

          <div className="min-w-0">
            <div className="grid grid-cols-2 gap-3">
              {samplePages.map((page) => (
                <a
                  key={page.src}
                  href={samplePdf}
                  download
                  aria-label={`${page.alt} (PDF indir)`}
                  className="block bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-gold-400 hover:shadow-lg transition-all"
                >
                  <Image
                    src={page.src}
                    alt={page.alt}
                    width={850}
                    height={1100}
                    sizes="(min-width: 1024px) 220px, 45vw"
                    className="w-full h-auto"
                  />
                </a>
              ))}
            </div>
            <a
              href={samplePdf}
              download
              className="inline-block mt-3 text-sm font-semibold text-navy-900 underline hover:text-gold-500"
            >
              Örnek raporu indir (PDF)
            </a>
            <p className="text-xs text-slate-500 mt-1">
              Temsilî örnektir; gerçek raporun düzeni ve dili farklı olabilir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
