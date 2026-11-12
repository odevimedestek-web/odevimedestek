import Link from "next/link";
import PolicyLayout from "@/components/PolicyLayout";
import { pageMetadata } from "@/lib/seo";
import { servicePolicy } from "@/lib/service-policy";

export const metadata = pageMetadata(
  "Hakkımızda: Akademik Danışmanlık Merkezi",
  "Ankara merkezli, 15 yıllık deneyimle tez, makale ve SPSS analizi süreçlerinde danışmanlık ve editörlük veren ekibimizi ve çalışma ilkelerimizi tanıyın.",
  "/hakkimizda",
);

const aboutLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Hakkımızda",
  url: "https://www.odevimedestek.com/hakkimizda",
  inLanguage: "tr-TR",
};

export default function Page() {
  return (
    <PolicyLayout title="Hakkımızda" crumbs={[{ name: "Hakkımızda", path: "/hakkimizda" }]}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd).replace(/</g, "\\u003c") }} />
      <p className="text-lg">
        Ödevime Destek, Akademik Danışmanlık Merkezi adıyla da tanınan, Ankara merkezli bir akademik danışmanlık ekibidir. 15 yıldır lisans, yüksek lisans ve doktora öğrencilerine tez, makale, istatistiksel analiz ve sunum süreçlerinde danışmanlık veriyoruz. Görüşmeler online yapıldığı için Türkiye&apos;nin her yerinden çalışıyoruz.
      </p>

      <h2>Ne yapıyoruz?</h2>
      <p>
        Öğrencinin kendi çalışmasını geliştirmesine yardımcı oluyoruz. Araştırma sorusunu netleştirmek, yöntemi planlamak, toplanmış veriyi analiz edip yorumlamak, metni kılavuza göre düzenlemek ve savunmaya hazırlanmak bu işlerin başında geliyor. Tüm akademik alanlardan çalışmalarla ilgileniyoruz.
      </p>
      <ul>
        <li><Link href="/tez-danismanligi" className="text-gold-400 underline">Tez danışmanlığı</Link> ve <Link href="/makale-danismanligi" className="text-gold-400 underline">makale danışmanlığı</Link></li>
        <li><Link href="/spss-analizi" className="text-gold-400 underline">SPSS analiz danışmanlığı</Link> ve <Link href="/analiz" className="text-gold-400 underline">diğer analiz türleri</Link></li>
        <li><Link href="/akademik-editorluk" className="text-gold-400 underline">Akademik editörlük</Link> ve <Link href="/tez-bicimlendirme" className="text-gold-400 underline">tez biçimlendirme</Link></li>
        <li><Link href="/tubitak-proje-danismanligi" className="text-gold-400 underline">TÜBİTAK proje</Link>, bildiri, seminer ve sunum hazırlığı</li>
      </ul>

      <h2>Ne yapmıyoruz?</h2>
      <p>
        Hizmetimiz danışmanlık, eğitim ve editörlük niteliğindedir. Çalışmanın yazarı her zaman öğrencidir; öğrencinin yerine tez, makale veya ödev hazırlanmaz. Anket uygulama ya da veri toplama hizmeti de vermiyoruz. İstatistik desteği, sizin topladığınız veri üzerinde analiz, raporlama ve yorumlama ile sınırlıdır.
      </p>

      <h2>Nasıl çalışıyoruz?</h2>
      <p>
        İlk görüşme ücretsizdir. Bu görüşmede çalışmanızın hangi aşamada olduğunu, neye ihtiyaç duyduğunuzu, takvimi ve ücreti konuşuruz. Kapsam netleştikten sonra çalışmaya başlanır.
      </p>
      <ul>
        <li>{servicePolicy.preview}</li>
        <li>{servicePolicy.revision}</li>
      </ul>

      <h2>Gizlilik ve güvence</h2>
      <ul>
        <li>{servicePolicy.privacy}</li>
        <li>{servicePolicy.deletion}</li>
        <li>Aldığınız danışmanlıktan memnun kalmazsanız ödediğiniz ücretin tamamı iade edilir. Ayrıntılar <Link href="/iade-politikasi" className="text-gold-400 underline">iade politikasında</Link>.</li>
      </ul>
      <p>
        Kişisel verilerin işlenmesine ilişkin bilgiler <Link href="/gizlilik" className="text-gold-400 underline">gizlilik politikasında</Link> yer alır.
      </p>

      <h2>Bize ulaşın</h2>
      <p>
        Sorularınız için <Link href="/iletisim" className="text-gold-400 underline">iletişim sayfasından</Link> WhatsApp, telefon veya e-posta ile yazabilirsiniz. Paylaşımlarımızı <a href="https://www.linkedin.com/company/akademik-danismanlik-merkezi" target="_blank" rel="noopener noreferrer" className="text-gold-400 underline">LinkedIn sayfamızdan</a> takip edebilirsiniz.
      </p>
    </PolicyLayout>
  );
}
