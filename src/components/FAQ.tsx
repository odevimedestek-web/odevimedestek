import Link from "next/link";
import { faqs } from "@/lib/faqs";

const categories = [...new Set(faqs.map(faq => faq.category))];
export default function FAQ() {
  return <section id="sss" className="py-16 sm:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mb-8"><p className="text-navy-600 text-sm font-semibold uppercase tracking-wider">Aklınızda soru kalmasın</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">Sıkça sorulan sorular</h2>
        <p className="text-slate-600 mt-4 leading-relaxed">Hizmet seçimi, ücret, geri bildirim ve gizlilik hakkında merak ettikleriniz. Her yanıtın altından ilgili kapsamı ayrıntılı inceleyebilirsiniz.</p>
      </div>
      <nav aria-label="Soru konuları" className="flex flex-wrap gap-3 mb-10">{categories.map((category,i)=><a key={category} href={`#soru-grubu-${i}`} className="rounded-full border border-slate-300 px-4 py-3 text-sm text-navy-900 hover:bg-slate-100">{category}</a>)}</nav>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">{categories.map((category,i)=><div id={`soru-grubu-${i}`} key={category}>
        <h3 className="text-xl font-semibold text-navy-900 mb-4">{category}</h3>
        <div className="space-y-3">{faqs.filter(f=>f.category===category).map(faq=><details key={faq.q} className="group border border-slate-200 rounded-xl open:bg-slate-50">
          <summary className="cursor-pointer p-5 font-medium text-navy-900 leading-relaxed">{faq.q}</summary>
          <div className="px-5 pb-5 text-slate-600 leading-relaxed"><p>{faq.a}</p><Link href={faq.href} className="inline-block mt-4 text-sm font-semibold underline underline-offset-4 text-navy-900">{faq.label} →</Link></div>
        </details>)}</div>
      </div>)}</div>
      <p className="mt-10 text-slate-600">Sorunuz farklı mı? <a href="https://wa.me/905384164676" target="_blank" rel="noopener noreferrer" className="font-semibold text-navy-900 underline underline-offset-4">Çalışmanızın durumunu bize yazın.</a></p>
    </div>
  </section>;
}
