import { servicePolicy } from "@/lib/service-policy";
import Link from "next/link";

export default function ServiceConfidence() {
  return <section id="memnuniyet" className="bg-navy-900 text-white py-14 sm:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl"><p className="text-gold-300 text-sm font-semibold uppercase tracking-wider">Açık iletişim, belirli kapsam</p><h2 className="text-3xl sm:text-4xl font-bold mt-3">Aldığınız desteğin karşılığını bilerek ilerleyin.</h2><p className="mt-5 text-slate-300 leading-relaxed">Memnuniyet, beklentilerin baştan anlaşılmasıyla başlar. Hangi noktada destek istediğinizi, nelerin ele alınacağını ve geri bildiriminizi nasıl paylaşacağınızı birlikte netleştirelim.</p></div>
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="border-t border-slate-600 pt-5"><h3 className="text-lg font-semibold">Teslimden 1–2 gün önce</h3><p className="text-slate-300 mt-3 leading-relaxed">{servicePolicy.preview}</p><Link href="/#surec" className="inline-block mt-4 text-gold-300 underline underline-offset-4">Süreci inceleyin</Link></div>
        <div className="border-t border-slate-600 pt-5"><h3 className="text-lg font-semibold">Aynı çalışma için ücretsiz revizyon</h3><p className="text-slate-300 mt-3 leading-relaxed">{servicePolicy.revision}</p><Link href="/#iletisim" className="inline-block mt-4 text-gold-300 underline underline-offset-4">Geri bildirim iletin</Link></div>
        <div className="border-t border-slate-600 pt-5"><h3 className="text-lg font-semibold">Memnun kalmadığınızda</h3><p className="text-slate-300 mt-3 leading-relaxed">Mevcut iade politikamız kapsamında, danışmanlık hizmetinden memnun kalmazsanız ödediğiniz ücretin tamamı iade edilir.</p><Link href="/iade-politikasi" className="inline-block mt-4 text-gold-300 underline underline-offset-4">Başvuru ve iade koşulları</Link></div>
      </div>
    </div>
  </section>;
}
