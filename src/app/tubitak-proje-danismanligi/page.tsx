import { pageMetadata } from "@/lib/seo";
import ServiceLanding from "@/components/ServiceLanding";

export const metadata = pageMetadata(
  "TÜBİTAK Proje Danışmanlığı – 2209-A, 2209-B, 1001, 1002 Proje Desteği",
  "TÜBİTAK 2209-A, 2209-B, 1001, 1002 ve BAP proje başvurularında proje önerisi, amaç, yöntem, iş-zaman planı, bütçe ve yaygın etki bölümleri için proje danışmanlığı. İlk görüşme ücretsiz.",
  "/tubitak-proje-danismanligi",
);

const faqs = [
  {
    q: "Hangi TÜBİTAK programlarında proje danışmanlığı veriyorsunuz?",
    a: "Üniversite öğrencilerine yönelik 2209-A ve sanayiye yönelik 2209-B başta olmak üzere 1001, 1002 ve üniversitelerin BAP proje başvurularında destek veriyoruz.",
  },
  {
    q: "Proje danışmanlığı hangi bölümleri kapsıyor?",
    a: "Özgün değer, amaç ve hedefler, yöntem, iş-zaman çizelgesi, risk yönetimi, bütçe gerekçesi ve yaygın etki bölümlerinin başvuru formuna uygun kurgulanmasında rehberlik ediyoruz.",
  },
  {
    q: "Proje önerimi benim yerime yazıyor musunuz?",
    a: "Hayır. Proje fikri ve başvuru size aittir. Biz formun beklentilerini anlatıyor, taslağınıza geri bildirim veriyor ve eksikleri birlikte tamamlamanızı sağlıyoruz.",
  },
  {
    q: "Proje sonuç raporunda da destek alabilir miyim?",
    a: "Evet. Ara rapor, sonuç raporu ve projeden üretilecek bildiri veya makale aşamasında da rehberlik veriyoruz.",
  },
];

export default function Page() {
  return (
    <ServiceLanding
      title="TÜBİTAK Proje Danışmanlığı"
      intro="TÜBİTAK ve BAP proje başvurunuzu değerlendirme ölçütlerine uygun, güçlü bir öneriye dönüştürmeniz için birebir proje danışmanlığı veriyoruz. Fikir aşamasından sonuç raporuna kadar yanınızdayız."
      waText="Merhaba, TÜBİTAK proje danışmanlığı almak istiyorum."
      faqs={faqs}
    >
      <h2>TÜBİTAK Projesinde Hangi Konularda Destek Veriyoruz?</h2>
      <ul>
        <li>Proje fikrinin netleştirilmesi ve özgün değerin ortaya konması</li>
        <li>Amaç, hedef ve araştırma sorularının yazımı</li>
        <li>Yöntem, veri toplama ve analiz planının kurgulanması</li>
        <li>İş paketleri, iş-zaman çizelgesi ve risk yönetimi tablosu</li>
        <li>Bütçe kalemleri ve gerekçelerinin hazırlanması</li>
        <li>Yaygın etki ve proje çıktılarının tanımlanması</li>
        <li>Ara rapor ve sonuç raporu hazırlığı</li>
      </ul>

      <h2>2209-A ve 2209-B Proje Desteği</h2>
      <p>
        Lisans öğrencileri için açılan 2209-A ve sanayi odaklı 2209-B
        çağrılarında başvuru formunun her bölümünü değerlendirme ölçütleriyle
        birlikte ele alıyoruz. Danışman öğretim üyenizle birlikte
        yürüttüğünüz projenin formda doğru ve eksiksiz anlatılması için geri
        bildirim veriyoruz.
      </p>

      <h2>Süreç Nasıl İlerliyor?</h2>
      <p>
        Ücretsiz ön görüşmede proje fikrinizi ve başvuracağınız çağrıyı
        konuşuyoruz. Ardından başvuru takvimine göre bir çalışma planı
        çıkarıyor, her bölüm için taslağınızı inceleyip geri bildirim
        veriyoruz.
      </p>
    </ServiceLanding>
  );
}
