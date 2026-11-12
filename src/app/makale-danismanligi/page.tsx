import { pageMetadata } from "@/lib/seo";
import ServiceLanding from "@/components/ServiceLanding";

export const metadata = pageMetadata(
  "Makale Danışmanlığı ve Yayın Süreci Desteği",
  "Dergi seçimi, yazım kurallarına uyum, SPSS analizi, akademik editörlük, çeviri ve hakem notlarına yanıt için makale danışmanlığı.",
  "/makale-danismanligi",
);

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
    a: "Evet. Tezinizi derginin kelime sınırına ve yapısına uyan bir makaleye nasıl dönüştüreceğinizi adım adım konuşuyoruz.",
  },
  {
    q: "İngilizce makalelerde destek veriyor musunuz?",
    a: "Evet. Türkçe ve İngilizce makalelerde akademik dil düzenlemesi ve çeviri desteği veriyoruz.",
  },
];

export default function Page() {
  return (
    <ServiceLanding path="/makale-danismanligi"
      title="Makale Danışmanlığı"
      intro="Makalenizi hangi dergiye göndereceğinize karar verdiğiniz andan hakem notlarına kadar birebir danışmanlık alabilirsiniz. Yol haritasını derginin kendi yazım kuralları belirler."
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
        Ardından derginin kurallarına göre eksikleri çıkarıyor, yöntem ve
        analiz kısmı üzerinde çalışıyor, göndermeden önce son kontrolü
        yapıyoruz. Hakem notları geldiğinde süreç oradan devam eder.
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
