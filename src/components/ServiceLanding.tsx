import PolicyLayout from "@/components/PolicyLayout";
import { hizmetSayfalari } from "@/lib/hizmetler";

export type ServiceFaq = { q: string; a: string };

export default function ServiceLanding({
  title,
  intro,
  waText,
  faqs,
  children,
}: {
  title: string;
  intro: string;
  waText: string;
  faqs: ServiceFaq[];
  children: React.ReactNode;
}) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <PolicyLayout title={title}>
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

      {children}

      <h2>Sıkça Sorulan Sorular</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3 className="font-semibold text-white">{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <a
        href={`https://wa.me/905384164676?text=${encodeURIComponent(waText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center mt-4 px-8 py-4 bg-gold-400 text-navy-900 font-bold rounded-xl hover:bg-gold-300 transition-all no-underline"
      >
        WhatsApp&apos;tan Yazın
      </a>

      <h2>Diğer Hizmetlerimiz</h2>
      <ul>
        {hizmetSayfalari.map((h) => (
          <li key={h.href}><a href={h.href} className="text-gold-400">{h.ad}</a></li>
        ))}
      </ul>
    </PolicyLayout>
  );
}
