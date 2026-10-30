import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";

export const metadata: Metadata = {
  title: "Seminer Danışmanlığı – Yüksek Lisans ve Doktora Seminer Desteği",
  description:
    "Yüksek lisans ve doktora seminer dersleri için konu seçimi, literatür tarama, seminer metninin enstitü kurallarına uyumu, APA kaynak gösterme ve seminer sunumu hazırlığında danışmanlık.",
  alternates: { canonical: "/seminer-danismanligi" },
};

const faqs = [
  {
    q: "Seminer danışmanlığı neleri kapsıyor?",
    a: "Seminer konusunun belirlenmesi, literatür tarama yöntemi, seminer metninin enstitü yazım kurallarına uyumu, APA ile kaynak gösterme ve seminer sunumunun hazırlanması konularında rehberlik ediyoruz.",
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
    <ServiceLanding
      title="Seminer Danışmanlığı"
      intro="Yüksek lisans ve doktora seminer dersinizde konu seçiminden sunuma kadar birebir rehberlik veriyoruz. Seminerinizi enstitü kurallarına uygun hazırlamanız ve rahatça sunmanız için yanınızdayız."
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
