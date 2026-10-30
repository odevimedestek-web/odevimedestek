import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";

export const metadata: Metadata = {
  title: "Tez Danışmanlığı – Yüksek Lisans ve Doktora Tez Desteği",
  description:
    "Yüksek lisans ve doktora tezinizde konu seçimi, tez önerisi, literatür tarama, yöntem, SPSS analizi, şablon biçimlendirme ve savunma sunumunda birebir tez danışmanlığı. İlk görüşme ücretsiz.",
  alternates: { canonical: "/tez-danismanligi" },
};

const faqs = [
  {
    q: "Tez danışmanlığı hangi aşamaları kapsıyor?",
    a: "Konu belirleme, tez önerisi hazırlığı, literatür tarama yöntemi, araştırma tasarımı, veri analizi, üniversite tez yazım kılavuzuna göre biçimlendirme ve savunma sunumu hazırlığı aşamalarında rehberlik veriyoruz.",
  },
  {
    q: "Benim yerime tez yazıyor musunuz?",
    a: "Hayır. Hizmetimiz danışmanlık ve eğitim niteliğindedir. Tezin yazarı sizsiniz; biz her aşamada yol gösteriyor ve geri bildirim veriyoruz.",
  },
  {
    q: "Tezimi üniversitemin şablonuna uygun hale getirmede destek veriyor musunuz?",
    a: "Evet. Enstitünüzün tez yazım kılavuzuna göre kenar boşlukları, başlık düzeni, içindekiler, tablo-şekil numaralandırma ve kaynakça biçimi konusunda destek veriyoruz.",
  },
  {
    q: "Hangi seviyelerde tez danışmanlığı veriyorsunuz?",
    a: "Lisans bitirme tezi, tezli yüksek lisans, doktora ve tıpta uzmanlık tezlerinde destek veriyoruz.",
  },
];

export default function Page() {
  return (
    <ServiceLanding
      title="Tez Danışmanlığı"
      intro="Yüksek lisans ve doktora tezinizin her aşamasında deneyimli ekibimizden birebir rehberlik alın. Konu seçiminden savunmaya kadar süreci planlı ve güvenle yürütmeniz için yanınızdayız."
      waText="Merhaba, tez danışmanlığı almak istiyorum."
      faqs={faqs}
    >
      <h2>Tez Sürecinde Hangi Konularda Destek Veriyoruz?</h2>
      <ul>
        <li>Tez konusu belirleme ve tez önerisi (öneri formu) hazırlığı</li>
        <li>Literatür tarama yöntemleri ve kaynak yönetimi (Zotero, Mendeley)</li>
        <li>Araştırma modeli, evren-örneklem ve veri toplama araçları</li>
        <li>SPSS ile veri analizi ve bulguların raporlanması</li>
        <li>APA ve enstitü kılavuzuna göre kaynak gösterme</li>
        <li>Tez yazım kılavuzuna uygun biçimlendirme</li>
        <li>Tez savunması için sunum hazırlığı</li>
      </ul>

      <h2>Yüksek Lisans ve Doktora Tez Danışmanlığı Nasıl İlerliyor?</h2>
      <p>
        Ücretsiz ön görüşmede tezinizin hangi aşamada olduğunu ve danışmanınızın
        beklentilerini konuşuyoruz. Ardından size özel bir çalışma takvimi
        çıkarıyor, her bölüm için geri bildirim veriyor ve danışman/jüri
        notlarını nasıl ele alacağınızı birlikte planlıyoruz.
      </p>

      <h2>Neden Bizimle Çalışmalısınız?</h2>
      <p>
        5 yıllık deneyimimizle farklı üniversitelerin tez kılavuzlarına ve jüri
        beklentilerine hakimiz. Tüm görüşmeler ve dosyalarınız gizli tutulur;
        hizmetten memnun kalmazsanız ücretin tamamı iade edilir.
      </p>
    </ServiceLanding>
  );
}
