import Link from "next/link";

const principles = [
  { title: "Önce mevcut çalışma", text: "Öneri formunuz, hazırladığınız bölümler ve danışman notlarınız üzerinden ihtiyacı belirliyoruz." },
  { title: "Açık bir kapsam", text: "Hangi bölümün ele alınacağını, beklenen çıktıyı ve takvimi çalışmaya başlamadan konuşuyoruz." },
  { title: "Anlaşılır geri bildirim", text: "Düzeltme önerisinin gerekçesini açıklıyoruz; analizde sonuçların ne anlama geldiği üzerinde duruyoruz." },
  { title: "Çalışmanın yazarı sizsiniz", text: "Danışmanlık ve editörlük, kendi araştırmanızı geliştirmenize yardımcı olur. Akademik kararları danışmanınızla birlikte değerlendirirsiniz." },
];

export default function About() {
  return <section id="hakkimizda" className="py-16 sm:py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-20">
      <div>
        <p className="text-sm font-semibold text-navy-600 uppercase tracking-wider">Çalışma yaklaşımımız</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 leading-tight">İhtiyacınız kadar destek, ne yapıldığını bilerek ilerleme.</h2>
        <p className="text-slate-600 leading-relaxed mt-5">Ödevime Destek; tez, makale, analiz ve sunum süreçlerinde danışmanlık ve editörlük sunar. Bütün bir süreç için ya da yalnız zorlandığınız aşama için başvurabilirsiniz.</p>
        <p className="text-slate-600 leading-relaxed mt-4">Dosya paylaşmadan önce kişisel ve katılımcılara ait bilgileri ayıklayın. Verilerin işlenmesine ilişkin ayrıntıları <Link href="/gizlilik" className="underline underline-offset-4 text-navy-900">gizlilik politikasında</Link> bulabilirsiniz.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">{principles.map(item => <div key={item.title} className="border-t-2 border-gold-400 pt-5"><h3 className="text-lg font-semibold text-navy-900">{item.title}</h3><p className="mt-3 text-slate-600 leading-relaxed">{item.text}</p></div>)}</div>
    </div>
  </section>;
}
