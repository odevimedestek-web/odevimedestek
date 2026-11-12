import { pageMetadata } from "@/lib/seo";
import ServiceLanding from "@/components/ServiceLanding";

export const metadata = pageMetadata(
  "Bildiri Danışmanlığı: Kongre ve Sempozyum",
  "Kongre ve sempozyumlar için bildiri özeti, tam metin, yazım kurallarına uyum ve sunum hazırlığında danışmanlık. İlk görüşme ücretsiz.",
  "/bildiri-danismanligi",
);

const faqs = [
  {
    q: "Bildiri danışmanlığı neleri kapsıyor?",
    a: "Uygun kongre seçimi, bildiri özetinin kelime sınırına göre düzenlenmesi, tam metin bildirinin kongre yazım kurallarına uyumu ve sözlü ya da poster sunumun hazırlanması görüşmelerde ele aldığımız konular.",
  },
  {
    q: "Tezimden bildiri hazırlayabilir miyim?",
    a: "Evet. Tezinizin bulgularından kongreye uygun bir bildiri özeti ve tam metin oluşturmanız için yol gösteriyoruz.",
  },
  {
    q: "Poster bildiri için de destek veriyor musunuz?",
    a: "Evet. Poster bildirinin düzeni, bölümlerin yerleşimi ve kongrenin istediği ölçülere uygun tasarımı konusunda destek veriyoruz.",
  },
  {
    q: "İngilizce bildiri için destek var mı?",
    a: "Evet. Uluslararası kongreler için İngilizce bildiri özeti ve tam metinde dil düzenlemesi ve çeviri desteği veriyoruz.",
  },
];

export default function Page() {
  return (
    <ServiceLanding path="/bildiri-danismanligi"
      title="Bildiri Danışmanlığı"
      intro="Ulusal veya uluslararası bir kongreye bildiri göndermeyi düşünüyorsanız özetten sunuma kadar her adımda birebir danışmanlık alabilirsiniz. Ölçüt, kongrenin kendi yazım ve sunum kurallarıdır."
      waText="Merhaba, bildiri danışmanlığı almak istiyorum."
      faqs={faqs}
    >
      <h2>Bildiri Sürecinde Hangi Konularda Destek Veriyoruz?</h2>
      <ul>
        <li>Alanınıza uygun kongre ve sempozyum seçimi</li>
        <li>Bildiri özeti ve anahtar kelimelerin düzenlenmesi</li>
        <li>Tam metin bildirinin kongre yazım kurallarına uyumu</li>
        <li>Yöntem ve SPSS analizi rehberliği</li>
        <li>Sözlü bildiri sunumu ve poster hazırlığı</li>
        <li>İngilizce bildiri için dil düzenlemesi ve çeviri</li>
      </ul>

      <h2>Süreç Nasıl İlerliyor?</h2>
      <p>
        Ücretsiz ön görüşmede çalışmanızı ve hedeflediğiniz kongreyi
        konuşuyoruz. Son başvuru tarihine göre bir plan çıkarıyor, özet ve tam
        metin taslağınıza geri bildirim veriyor, sunumunuzu birlikte
        hazırlıyoruz.
      </p>
    </ServiceLanding>
  );
}
