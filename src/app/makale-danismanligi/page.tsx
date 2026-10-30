import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";

export const metadata: Metadata = {
  title: "Makale Danışmanlığı – Akademik Makale Yayın Desteği",
  description:
    "Akademik makaleniz için dergi seçimi, dergi yazım kurallarına uyum, SPSS analizi, akademik editörlük, çeviri ve hakem notlarına yanıt konusunda makale danışmanlığı. İlk görüşme ücretsiz.",
  alternates: { canonical: "/makale-danismanligi" },
};

const faqs = [
  {
    q: "Makale danışmanlığı neleri kapsıyor?",
    a: "Uygun dergi seçimi, derginin yazım kurallarına göre biçimlendirme, yöntem ve analiz rehberliği, akademik dil düzenlemesi ve hakem notlarına yanıt mektubu hazırlığı konularında destek veriyoruz.",
  },
  {
    q: "Hangi dergiler için destek veriyorsunuz?",
    a: "DergiPark'taki ulusal dergiler, TR Dizin, ESCI, SSCI ve Scopus kapsamındaki uluslararası dergiler için destek veriyoruz.",
  },
  {
    q: "Tezimden makale üretmek için destek alabilir miyim?",
    a: "Evet. Tezinizi derginin kelime sınırı ve yapısına uygun bir makaleye nasıl dönüştüreceğiniz konusunda rehberlik ediyoruz.",
  },
  {
    q: "İngilizce makalelerde destek veriyor musunuz?",
    a: "Evet. Türkçe ve İngilizce makalelerde akademik dil düzenlemesi ve çeviri desteği veriyoruz.",
  },
];

export default function Page() {
  return (
    <ServiceLanding
      title="Makale Danışmanlığı"
      intro="Akademik makalenizin dergiye hazırlanmasından yayın sürecine kadar birebir rehberlik veriyoruz. Ulusal ve uluslararası dergilerin beklentilerine uygun bir makale için yanınızdayız."
      waText="Merhaba, makale danışmanlığı almak istiyorum."
      faqs={faqs}
    >
      <h2>Makale Sürecinde Hangi Konularda Destek Veriyoruz?</h2>
      <ul>
        <li>Konuya ve hedefe uygun dergi seçimi</li>
        <li>Dergi yazım kurallarına (APA, Chicago, Vancouver) uyum</li>
        <li>Yöntem kurgusu ve SPSS ile istatistiksel analiz</li>
        <li>Akademik editörlük, dil düzenlemesi ve çeviri</li>
        <li>Özet, anahtar kelime ve başlık düzenlemesi</li>
        <li>Hakem notlarına yanıt mektubu hazırlığı</li>
        <li>Tezden makale üretme rehberliği</li>
      </ul>

      <h2>Makale Danışmanlığı Nasıl İlerliyor?</h2>
      <p>
        Ücretsiz ön görüşmede makalenizin durumunu ve hedef dergiyi konuşuyoruz.
        Ardından derginin kurallarına göre eksikleri belirliyor, yöntem ve
        analiz kısmında rehberlik ediyor ve gönderim öncesi son kontrolü
        birlikte yapıyoruz. Hakem değerlendirmesinden sonra gelen notlarda da
        yanınızdayız.
      </p>

      <h2>Kimler İçin?</h2>
      <p>
        İlk makalesini yazacak lisansüstü öğrenciler, doktora yeterlik veya
        doçentlik için yayın hazırlayan araştırmacılar ve tezini makaleye
        dönüştürmek isteyenler için uygundur.
      </p>
    </ServiceLanding>
  );
}
