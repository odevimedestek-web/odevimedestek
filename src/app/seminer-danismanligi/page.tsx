import { pageMetadata } from "@/lib/seo";
import ServiceLanding from "@/components/ServiceLanding";

export const metadata = pageMetadata(
  "Seminer Danışmanlığı: Yüksek Lisans, Doktora",
  "Seminer dersi için konu seçimi, literatür tarama, enstitü kurallarına uyum, APA kaynak gösterme ve sunum hazırlığında danışmanlık.",
  "/seminer-danismanligi",
);

const faqs = [
  {
    q: "Seminer danışmanlığı neleri kapsıyor?",
    a: "Seminer konusunun belirlenmesi, literatür tarama yöntemi, seminer metninin enstitü yazım kurallarına uyumu, APA ile kaynak gösterme ve sunum hazırlığı.",
  },
  {
    q: "Seminer konusu tezimle ilişkili olmalı mı?",
    a: "Çoğu enstitüde seminer, tez konusuna hazırlık niteliğindedir. Ön görüşmede danışmanınızın beklentisine göre konuyu birlikte netleştiriyoruz.",
  },
  {
    q: "Benim yerime seminer hazırlıyor musunuz?",
    a: "Hayır. Seminerin yazarı ve sunucusu sizsiniz; biz yöntem, düzen ve kaynak kullanımı konusunda yol gösteriyoruz.",
  },
];

export default function Page() {
  return (
    <ServiceLanding path="/seminer-danismanligi"
      title="Seminer Danışmanlığı"
      intro="Seminer dersi çoğu öğrenci için tezin ilk provasıdır: konu seçilir, literatür taranır, metin yazılır ve sunulur. Bu adımların her birinde, enstitünüzün kurallarına göre birebir danışmanlık alabilirsiniz."
      waText="Merhaba, seminer danışmanlığı almak istiyorum."
      faqs={faqs}
    >
      <h2>Seminer Sürecinde Hangi Konularda Destek Veriyoruz?</h2>
      <ul>
        <li>Seminer konusunun belirlenmesi ve sınırlandırılması</li>
        <li>Literatür tarama ve kaynak seçimi</li>
        <li>Seminer metninin başlık düzeni ve akışı</li>
        <li>Enstitü yazım kılavuzuna uygun biçimlendirme</li>
        <li>APA 7 ile atıf ve kaynakça düzenleme</li>
        <li>Seminer sunumunun hazırlanması ve prova</li>
      </ul>

      <h2>Süreç Nasıl İlerliyor?</h2>
      <p>
        Ücretsiz ön görüşmede seminer dersinizin beklentilerini ve teslim
        tarihini konuşuyoruz. Ardından çalışma planı çıkarıyor, taslağınıza
        geri bildirim veriyor ve sunum öncesi birlikte prova yapıyoruz.
      </p>
    </ServiceLanding>
  );
}
