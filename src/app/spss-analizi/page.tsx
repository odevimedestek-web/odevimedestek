import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import ServiceLanding from "@/components/ServiceLanding";

export const metadata = pageMetadata(
  "SPSS Analiz Danışmanlığı – Tez ve Makale İçin İstatistik Desteği",
  "Tez ve makaleniz için SPSS analiz danışmanlığı: doğru test seçimi, güvenilirlik, t-testi, ANOVA, korelasyon, regresyon ve faktör analizi çıktılarını birlikte yorumluyoruz. İlk görüşme ücretsiz.",
  "/spss-analizi",
);

const faqs = [
  {
    q: "SPSS analiz danışmanlığında hangi testlerde destek veriyorsunuz?",
    a: "Tanımlayıcı istatistikler, normallik testleri, güvenilirlik (Cronbach alfa), t-testi, ANOVA, ki-kare, korelasyon, regresyon, Mann-Whitney U, Kruskal-Wallis ve açımlayıcı/doğrulayıcı faktör analizi başta olmak üzere tez ve makalelerde yaygın kullanılan testlerde destek veriyoruz.",
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
      <h2>SPSS Analizinde Neleri Birlikte Çalışıyoruz?</h2>
      <ul>
        <li>Araştırma soruları ve hipotezlere uygun test seçimi</li>
        <li>Veri girişi, değişken tanımlama ve veri temizliğinin nasıl yapılacağı</li>
        <li>Normallik, güvenilirlik ve geçerlilik analizlerinin mantığı</li>
        <li>t-testi, ANOVA, ki-kare, korelasyon ve regresyon analizlerini uygulama</li>
        <li>Parametrik olmayan testler (Mann-Whitney U, Kruskal-Wallis, Wilcoxon)</li>
        <li>Faktör analizi ve ölçek uyarlama çalışmaları</li>
        <li>SPSS çıktılarını okuma ve APA formatında raporlama</li>
      </ul>

      <h2>Tez ve Makale İçin SPSS Desteği Nasıl İlerliyor?</h2>
      <p>
        Önce ücretsiz ön görüşmede araştırma modelinizi, ölçeklerinizi ve veri
        setinizi konuşuyoruz. Ardından hangi analizlerin gerektiğini birlikte
        belirliyor, her testin neden seçildiğini ve sonuçların nasıl
        okunacağını adım adım anlatıyoruz. Süreç sonunda bulgularınızı
        anlayarak yazabilir ve jüri karşısında rahatça savunabilirsiniz.
      </p>

      <h2>İlk Görüşme İçin Neler Hazırlayabilirsiniz?</h2>
      <p>
        Araştırma sorularınızı, varsa hipotezlerinizi, anket veya ölçek formunuzu
        ve mevcut veri dosyanızı bir araya getirmenizi öneriyoruz. Danışmanınızın
        istediği analizler veya önceki çıktılara ilişkin notlar varsa bunları da
        görüşmede ele alabiliriz. Veri toplama aşamasındaysanız hangi noktada
        olduğunuzu belirtmeniz yeterlidir.
      </p>
      <p>
        Dosyanızı düzenlerken <Link href="/rehber/spss-veri-hazirlama" className="text-gold-400 underline">SPSS öncesi veri hazırlama rehberindeki</Link>{" "}
        değişken ve eksik değer kontrollerinden yararlanabilirsiniz.
      </p>

      <h2>Görüşmelerde Hangi Konuları Netleştiriyoruz?</h2>
      <ul>
        <li>Araştırma sorunuzla seçilecek test arasındaki ilişkiyi.</li>
        <li>Veri dosyanızdaki değişkenlerin ve kodların nasıl okunacağını.</li>
        <li>Analiz çıktısında hangi değerlerin ne anlama geldiğini.</li>
        <li>Sonuçları APA biçiminde tabloya ve bulgular metnine nasıl aktaracağınızı.</li>
      </ul>
      <p>
        Amaç, çıktıları kendi araştırmanız açısından yorumlayabilmenizdir.
        Görüşme kapsamını mevcut dosyalarınız ve ihtiyaç duyduğunuz destek
        üzerinden birlikte belirliyoruz.
      </p>

      <h2>Ücret ve Takvim Nasıl Belirleniyor?</h2>
      <p>
        İlk görüşme ücretsizdir. Ücret, analiz sayısı ve veri setinin büyüklüğüne
        göre ön görüşmede belirlenir. Çalışmanızın kapsamına göre görüşme
        takvimini birlikte netleştiriyoruz. İlk mesajınızda çalışmanın türünü,
        veri toplamanın tamamlanıp tamamlanmadığını ve ihtiyaç duyduğunuz
        desteği belirtmeniz görüşmeye hazırlanmamıza yardımcı olur.
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
