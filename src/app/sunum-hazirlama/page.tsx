import { pageMetadata } from "@/lib/seo";
import ServiceLanding from "@/components/ServiceLanding";

export const metadata = pageMetadata(
  "Tez Savunma ve Seminer Sunumu Hazırlama",
  "Tez savunması, seminer, kongre ve proje sunumları için slayt düzeni, tablo-grafik yerleşimi ve prova desteği. İlk görüşme ücretsiz.",
  "/sunum-hazirlama",
);

const faqs = [
  {
    q: "Hangi sunumlar için destek veriyorsunuz?",
    a: "Yüksek lisans ve doktora tez savunması, tez izleme komitesi, seminer, kongre bildirisi ve TÜBİTAK proje sunumları için destek veriyoruz.",
  },
  {
    q: "Tez savunma sunumu kaç slayt olmalı?",
    a: "Genellikle 15-20 dakikalık bir savunma için 15-25 slayt yeterlidir. Ön görüşmede enstitünüzün ve jürinizin beklentisine göre birlikte planlıyoruz.",
  },
  {
    q: "Sunum provası yapıyor musunuz?",
    a: "Evet. Sunum öncesi online prova yapıyor, jürinin sorabileceği sorular üzerine konuşuyoruz.",
  },
];

export default function Page() {
  return (
    <ServiceLanding path="/sunum-hazirlama"
      title="Sunum Hazırlama Desteği"
      intro="Tez savunması, seminer, kongre ya da proje sunumu için slayt düzeninden provaya kadar destek alabilirsiniz. Hedef, dinleyicinin takip edebileceği sade bir sunum."
      waText="Merhaba, sunum hazırlama desteği almak istiyorum."
      faqs={faqs}
    >
      <h2>Sunum Hazırlamada Hangi Konularda Destek Veriyoruz?</h2>
      <ul>
        <li>Tez savunma sunumunun bölüm planı ve slayt sayısı</li>
        <li>PowerPoint şablon, renk ve yazı düzeni</li>
        <li>SPSS tablo ve grafiklerinin slayta uygun yerleşimi</li>
        <li>Seminer ve kongre bildirisi sunumları</li>
        <li>TÜBİTAK ve BAP proje sunumları</li>
        <li>Sunum provası ve jüri sorularına hazırlık</li>
      </ul>

      <h2>Süreç Nasıl İlerliyor?</h2>
      <p>
        Ücretsiz ön görüşmede sunumunuzun türünü, süresini ve tarihini
        konuşuyoruz. Ardından slayt planını birlikte çıkarıyor, taslağınıza
        geri bildirim veriyor ve sunum öncesi prova yapıyoruz.
      </p>
    </ServiceLanding>
  );
}
