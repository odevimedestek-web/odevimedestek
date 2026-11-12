import Link from "next/link";
import PolicyLayout from "@/components/PolicyLayout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "İletişim ve Ücretsiz Ön Görüşme",
  "WhatsApp, telefon veya e-posta ile ulaşın: 0538 416 46 76 · odevimedestek@gmail.com. Ankara merkezli, Türkiye geneline online danışmanlık.",
  "/iletisim",
);

const contactLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "İletişim",
  url: "https://www.odevimedestek.com/iletisim",
  inLanguage: "tr-TR",
  mainEntity: {
    "@type": "ProfessionalService",
    name: "Ödevime Destek",
    telephone: "+905384164676",
    email: "odevimedestek@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Ankara", addressCountry: "TR" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+905384164676",
      contactType: "customer service",
      availableLanguage: ["Turkish"],
      areaServed: "TR",
    },
  },
};

const waHref = `https://wa.me/905384164676?text=${encodeURIComponent("Merhaba, ücretsiz ön görüşme istiyorum.")}`;

export default function Page() {
  return (
    <PolicyLayout title="İletişim" crumbs={[{ name: "İletişim", path: "/iletisim" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd).replace(/</g, "\\u003c") }} />
      <p className="text-lg">
        İlk görüşme ücretsizdir. Çalışmanızın türünü ve hangi aşamada desteğe ihtiyaç duyduğunuzu kısaca yazmanız yeterli.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-gold-400/60 p-5 no-underline hover:border-gold-300">
          <span className="block text-white font-semibold">WhatsApp</span>
          <span className="text-gold-300">0538 416 46 76</span>
        </a>
        <a href="tel:+905384164676" className="block rounded-xl border border-slate-600 p-5 no-underline hover:border-gold-300">
          <span className="block text-white font-semibold">Telefon</span>
          <span className="text-gold-300">0538 416 46 76</span>
        </a>
        <a href="mailto:odevimedestek@gmail.com" className="block rounded-xl border border-slate-600 p-5 no-underline hover:border-gold-300">
          <span className="block text-white font-semibold">E-posta</span>
          <span className="text-gold-300 break-all">odevimedestek@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/company/akademik-danismanlik-merkezi" target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-slate-600 p-5 no-underline hover:border-gold-300">
          <span className="block text-white font-semibold">LinkedIn</span>
          <span className="text-gold-300">Akademik Danışmanlık Merkezi</span>
        </a>
      </div>
      <p>Konum: Ankara, Türkiye. Görüşmeler online yapılır; Türkiye&apos;nin her yerinden başvurabilirsiniz.</p>

      <h2>İlk mesajınızda neleri paylaşabilirsiniz?</h2>
      <ul>
        <li>Çalışmanın türü: tez, makale, proje, bildiri, seminer veya sunum.</li>
        <li>Düzey: lisans, yüksek lisans ya da doktora.</li>
        <li>Hangi aşamada olduğunuz ve hangi konuda destek istediğiniz.</li>
        <li>Varsa danışmanınızın notları ve teslim tarihiniz.</li>
      </ul>
      <p>
        Dosya göndermeden önce kişisel bilgileri ve katılımcılara ait tanımlayıcı verileri ayıklamanızı öneririz. Ayrıntılar için <Link href="/gizlilik" className="text-gold-400 underline">gizlilik politikasına</Link> bakabilirsiniz. Ücretin nasıl belirlendiğini <Link href="/spss-analiz-ucretleri" className="text-gold-400 underline">SPSS analiz ücretleri</Link> ve <Link href="/tez-danismanligi-ucretleri" className="text-gold-400 underline">tez danışmanlığı ücretleri</Link> sayfalarında anlattık.
      </p>
    </PolicyLayout>
  );
}
