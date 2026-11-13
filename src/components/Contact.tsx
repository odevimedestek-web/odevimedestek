import { LINKEDIN_URL } from "./LinkedInSection";

export default function Contact() {
  return <section id="iletisim" className="py-16 sm:py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 lg:p-12">
        <div><p className="text-sm font-semibold uppercase tracking-wider text-navy-600">İletişim</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">Nerede takıldığınızı anlatın.</h2>
          <p className="text-slate-600 mt-5 leading-relaxed">İlk mesajda konunuzu, çalışmanın aşamasını ve beklediğiniz tarihi belirtin. Hangi desteğin uygun olduğunu ön görüşmede netleşir.</p>
          <a href="https://wa.me/905384164676" target="_blank" rel="noopener noreferrer" className="inline-flex mt-7 bg-navy-900 text-white px-6 py-4 rounded-xl font-semibold hover:bg-navy-700">WhatsApp üzerinden görüşelim</a>
          <p className="mt-3 text-sm text-slate-600">0538 416 46 76 · İlk görüşme ücretsiz</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-6 text-sm"><a href="mailto:odevimedestek@gmail.com" className="text-navy-900 underline underline-offset-4 break-all">odevimedestek@gmail.com</a><a id="linkedin" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-navy-900 underline underline-offset-4">LinkedIn sayfamız ↗</a></div>
        </div>
        <div className="bg-slate-50 rounded-xl p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-navy-900">Görüşme öncesinde elinizin altında olsun</h3>
          <ul className="mt-5 space-y-4 text-slate-600 list-disc pl-5 leading-relaxed"><li>Varsa tez öneri formu ve danışmanınızın son notları</li><li>Üzerinde çalıştığınız belgenin güncel sürümü</li><li>Biçimlendirme için enstitü veya dergi kılavuzu</li><li>Analiz için veri dosyası, anket ve değişken açıklamaları</li></ul>
          <p className="mt-5 pt-5 border-t border-slate-200 text-sm text-slate-600 leading-relaxed">Belgeleriniz henüz hazır değilse mevcut durumu anlatabilirsiniz. İlk mesajınıza kişisel veya katılımcılara ait hassas bilgiler eklemeyin.</p>
        </div>
      </div>
    </div>
  </section>;
}
