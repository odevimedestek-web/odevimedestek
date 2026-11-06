import Link from "next/link";

const paths = [
  { number: "01", title: "Tezimi planlamak istiyorum", text: "Öneri formu, araştırma sorusu ve yöntem", href: "/tez-danismanligi" },
  { number: "02", title: "Verilerim için analiz desteği arıyorum", text: "SPSS, test seçimi ve bulguların yorumu", href: "/spss-analizi" },
  { number: "03", title: "Metnimi teslime hazırlıyorum", text: "Kılavuz, sayfa düzeni ve kaynakça", href: "/tez-bicimlendirme" },
];

export default function Hero() {
  return (
    <section className="bg-navy-900 text-white pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-gold-300 text-sm font-semibold tracking-wider mb-6">AKADEMİK DANIŞMANLIK VE EDİTÖRLÜK</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]">Tez, makale ve SPSS sürecinde <span className="text-gold-300">anlaşılır destek.</span></h1>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">Araştırmanızı planlarken, verilerinizi yorumlarken veya metninizi düzenlerken takıldığınız noktayı birlikte ele alalım. Çalışmanızın aşamasına göre danışmanlık, analiz ve biçimlendirme desteği sunuyoruz.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://wa.me/905384164676" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-xl bg-gold-300 px-6 py-4 text-navy-900 font-semibold hover:bg-gold-200 transition-colors">Çalışmamı konuşalım</a>
            <a href="#hizmetler" className="inline-flex justify-center rounded-xl border border-slate-500 px-6 py-4 font-semibold hover:bg-navy-800 transition-colors">Hizmetleri incele</a>
          </div>
          <p className="mt-5 text-sm text-slate-300">İlk görüşme ücretsiz · Kapsam ve takvim ön görüşmede belirlenir</p>
        </div>
        <div className="rounded-2xl bg-navy-800 border border-slate-600/60 p-5 sm:p-8">
          <h2 className="text-xl font-semibold">Hangi aşamadasınız?</h2>
          <p className="text-sm text-slate-300 mt-2 mb-5">İhtiyacınıza en yakın başlıkla başlayın.</p>
          <div className="divide-y divide-slate-600/60">
            {paths.map(item => <Link key={item.href} href={item.href} className="group flex gap-4 py-5 items-start rounded-md">
              <span className="text-gold-300 text-sm font-semibold pt-1" aria-hidden="true">{item.number}</span>
              <span className="flex-1"><span className="block font-semibold group-hover:text-gold-300 transition-colors">{item.title}</span><span className="block text-sm text-slate-300 mt-2">{item.text}</span></span>
              <span className="text-gold-300" aria-hidden="true">↗</span>
            </Link>)}
          </div>
          <p className="pt-4 border-t border-slate-600/60 text-sm text-slate-300 leading-relaxed">Henüz nereden başlayacağınızı bilmiyorsanız konunuzu ve mevcut aşamanızı anlatmanız yeterli.</p>
        </div>
      </div>
    </section>
  );
}
