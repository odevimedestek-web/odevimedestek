import DeliveryPolicy from "@/components/DeliveryPolicy";
import Link from "next/link";
import { serviceExperience } from "@/lib/service-experience";
import PolicyLayout from "@/components/PolicyLayout";
import { hizmetSayfalari } from "@/lib/hizmetler";
import type { Crumb } from "@/lib/seo";

export type ServiceFaq = { q: string; a: string };

export default function ServiceLanding({
  path,
  title,
  intro,
  waText,
  faqs,
  parent,
  children,
}: {
  parent?: Crumb;
  path: string;
  title: string;
  intro: string;
  waText: string;
  faqs: ServiceFaq[];
  children: React.ReactNode;
}) {
  const experience = serviceExperience[path];
  const allFaqs = [...faqs, ...(experience?.faqs ?? [])];
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <PolicyLayout title={title} crumbs={[...(parent ? [parent] : []), { name: title, path }]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd).replace(/</g, "\\u003c"),
        }}
      />
      <p className="text-lg">{intro}</p>
      <a
        href={`https://wa.me/905384164676?text=${encodeURIComponent(waText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-8 py-4 bg-gold-400 text-navy-900 font-bold rounded-xl hover:bg-gold-300 transition-all no-underline"
      >
        Ücretsiz Ön Görüşme (WhatsApp)
      </a>
      <p className="text-sm text-slate-400">
        İlk görüşme ücretsiz. Koşullar için{" "}
        <a href="/iade-politikasi" className="text-gold-400 underline">İade Politikası</a>{" "}
        ve{" "}
        <a href="/gizlilik" className="text-gold-400 underline">Gizlilik Politikası</a>.
      </p>

      <nav aria-label="Sayfa içeriği" className="flex flex-wrap gap-3 text-sm">
        <a href="#hizmet-kapsami" className="border border-slate-600 rounded-lg px-4 py-3 text-gold-300">Hizmet kapsamı</a>
        <a href="#hizmet-sorulari" className="border border-slate-600 rounded-lg px-4 py-3 text-gold-300">Sorular ve yanıtlar</a>
        <a href="#ilgili-hizmetler" className="border border-slate-600 rounded-lg px-4 py-3 text-gold-300">İlgili hizmetler</a>
      </nav>
      <div className="border-l-2 border-gold-300 pl-5 py-2">
        <p className="text-white font-semibold">Karar vermeden önce kapsamı öğrenin.</p>
        <p className="mt-2 text-sm">İlk görüşmede ihtiyacınızı, beklenen çıktıyı, takvimi ve ücreti konuşalım. Geri bildirim ve memnuniyet sorularınız için <Link href="/#memnuniyet" className="text-gold-300 underline">çalışma yaklaşımımızı</Link> ve <Link href="/iade-politikasi" className="text-gold-300 underline">iade koşullarını</Link> inceleyebilirsiniz.</p>
      </div>
      <div id="hizmet-kapsami" className="space-y-6">{children}</div>

      <DeliveryPolicy />
      <section id="hizmet-sorulari" aria-label="Hizmet hakkında sorular">
        <h2>Sıkça Sorulan Sorular</h2>
        <div className="space-y-3">{allFaqs.map((f) => (
          <details key={f.q} className="rounded-xl border border-slate-600 open:bg-navy-800">
            <summary className="cursor-pointer p-5 font-semibold text-white">{f.q}</summary>
            <p className="px-5 pb-5">{f.a}</p>
          </details>
        ))}</div>
        <p className="mt-5 text-sm"><Link href="/#sss" className="text-gold-300 underline">Ücret, süreç, gizlilik ve memnuniyet hakkında diğer sorular →</Link></p>
      </section>

      <a
        href={`https://wa.me/905384164676?text=${encodeURIComponent(waText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center mt-4 px-8 py-4 bg-gold-400 text-navy-900 font-bold rounded-xl hover:bg-gold-300 transition-all no-underline"
      >
        WhatsApp&apos;tan Yazın
      </a>

      <section id="ilgili-hizmetler" aria-label="İlgili hizmetler">
        <h2>Çalışmanızın sonraki adımı ne?</h2>
        <p className="mb-5">Aşağıdaki hizmetler farklı ihtiyaçlara yöneliktir. Yalnız ihtiyacınız olan kapsamı seçebilirsiniz.</p>
        <div className="grid sm:grid-cols-2 gap-4">{(experience?.related ?? hizmetSayfalari.filter(h => h.href !== path).slice(0, 4).map(h => h.href)).filter(href => serviceExperience[href]).map(href => {
          const item = serviceExperience[href];
          return <Link key={href} href={href} className="block rounded-xl border border-slate-600 p-5 hover:border-gold-300 transition-colors no-underline">
            <h3 className="text-gold-300 font-semibold">{item.title} →</h3>
            <p className="mt-2 text-sm text-slate-300">{item.description}</p>
          </Link>;
        })}</div>
        <details className="mt-6 border-t border-slate-600 pt-5"><summary className="cursor-pointer text-gold-300 font-semibold">Tüm hizmetleri keşfedin</summary><ul className="mt-4">{hizmetSayfalari.filter(h=>h.href!==path).map(h=><li key={h.href}><Link href={h.href} className="text-gold-300 underline">{h.ad}</Link></li>)}</ul></details>
      </section>
    </PolicyLayout>
  );
}
