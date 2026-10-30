import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";

export const metadata: Metadata = {
  title: "SPSS Analiz Danışmanlığı – Tez ve Makale İçin İstatistik Desteği",
  description:
    "Tez ve makaleniz için SPSS analiz danışmanlığı: doğru test seçimi, güvenilirlik, t-testi, ANOVA, korelasyon, regresyon ve faktör analizi çıktılarını birlikte yorumluyoruz. İlk görüşme ücretsiz.",
  alternates: { canonical: "/spss-analizi" },
};

const faqs = [
  {
    q: "SPSS analiz danışmanlığında hangi testlerde destek veriyorsunuz?",
    a: "Tanımlayıcı istatistikler, normallik testleri, güvenilirlik (Cronbach alfa), t-testi, ANOVA, ki-kare, korelasyon, regresyon, Mann-Whitney U, Kruskal-Wallis ve açımlayıcı/doğrulayıcı faktör analizi başta olmak üzere tez ve makalelerde kullanılan testlerin tamamında destek veriyoruz.",
  },
  {
    q: "SPSS bilmiyorum, yine de destek alabilir miyim?",
    a: "Evet. Veri girişinden çıktı yorumuna kadar her adımı sizin seviyenize göre anlatıyoruz; amaç analizinizi anlayarak savunabilmenizdir.",
  },
  {
    q: "SPSS tablolarını APA formatında hazırlamayı öğretiyor musunuz?",
    a: "Evet. SPSS çıktılarının APA 7 kurallarına uygun tablo haline getirilmesi ve bulgular bölümünde nasıl raporlanacağı konusunda rehberlik ediyoruz.",
  },
  {
    q: "Ücret nasıl belirleniyor?",
    a: "Ücret, analiz sayısı ve veri setinin büyüklüğüne göre ön görüşmede belirlenir. İlk görüşme ücretsizdir.",
  },
];

export default function Page() {
  return (
    <ServiceLanding
      title="SPSS Analiz Danışmanlığı"
      intro="Tez, makale veya proje verileriniz için doğru istatistiksel testi seçmekten SPSS çıktılarını yorumlamaya kadar her aşamada yanınızdayız. Lisans, yüksek lisans ve doktora öğrencilerine birebir SPSS danışmanlığı veriyoruz."
      waText="Merhaba, SPSS analiz danışmanlığı almak istiyorum."
      faqs={faqs}
    >
      <h2>SPSS Analizinde Neler Yapıyoruz?</h2>
      <ul>
        <li>Araştırma soruları ve hipotezlere uygun test seçimi</li>
        <li>Veri girişi, değişken tanımlama ve veri temizliği</li>
        <li>Normallik, güvenilirlik ve geçerlilik analizleri</li>
        <li>t-testi, ANOVA, ki-kare, korelasyon ve regresyon analizleri</li>
        <li>Parametrik olmayan testler (Mann-Whitney U, Kruskal-Wallis, Wilcoxon)</li>
        <li>Faktör analizi ve ölçek uyarlama çalışmaları</li>
        <li>SPSS çıktılarının APA formatında tablolaştırılması ve yorumlanması</li>
      </ul>

      <h2>Tez ve Makale İçin SPSS Desteği Nasıl İlerliyor?</h2>
      <p>
        Önce ücretsiz ön görüşmede araştırma modelinizi, ölçeklerinizi ve veri
        setinizi konuşuyoruz. Ardından hangi analizlerin gerektiğini birlikte
        belirliyor, her testin neden seçildiğini ve sonuçların nasıl
        okunacağını adım adım anlatıyoruz. Süreç sonunda bulgularınızı
        anlayarak yazabilir ve jüri karşısında rahatça savunabilirsiniz.
      </p>

      <h2>Kimler İçin?</h2>
      <p>
        Yüksek lisans ve doktora tezinin bulgular bölümüne gelen, makalesi için
        istatistik desteğine ihtiyaç duyan ya da hakem/danışman notlarına göre
        analizlerini yenilemesi gereken herkes için uygundur. Eğitim, sağlık,
        psikoloji, işletme ve sosyal bilimler alanlarında çalışıyoruz.
      </p>
    </ServiceLanding>
  );
}
