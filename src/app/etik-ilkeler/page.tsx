import Link from "next/link";
import PolicyLayout from "@/components/PolicyLayout";
import { pageMetadata } from "@/lib/seo";
import { servicePolicy } from "@/lib/service-policy";

export const metadata = pageMetadata(
  "Etik İlkeler ve Danışmanlık Sınırları",
  "Akademik danışmanlıkta yazarlık, veri dürüstlüğü, kaynak gösterme, gizlilik ve kurum kurallarına uyum konusundaki ilkelerimiz.",
  "/etik-ilkeler",
);

export default function Page() {
  return (
    <PolicyLayout title="Etik İlkeler" crumbs={[{ name: "Etik İlkeler", path: "/etik-ilkeler" }]}>
      <p className="text-lg">
        Akademik danışmanlıkta neyin yapılıp neyin yapılmadığı baştan açık olmalıdır. Aşağıdaki ilkeler, her çalışmada uyguladığımız sınırları anlatır.
      </p>

      <h2>1. Çalışmanın yazarı sizsiniz</h2>
      <p>
        Hizmetimiz danışmanlık, eğitim ve editörlük niteliğindedir. Öğrencinin yerine tez, makale, proje veya ödev hazırlanmaz. Araştırmanın akademik kararları size ve danışmanınıza aittir; biz bu kararları verirken gerekçeleriyle yol gösteririz.
      </p>

      <h2>2. Veri dürüstlüğü</h2>
      <ul>
        <li>Anket uygulama, katılımcı bulma veya veri toplama hizmeti vermiyoruz. Analiz, sizin topladığınız veri üzerinde yapılır.</li>
        <li>Veri üretilmez, eklenmez ya da beklenen sonucu elde etmek için değiştirilmez.</li>
        <li>Anlamlı çıkmayan sonuçlar da olduğu gibi raporlanır.</li>
        <li>Veri temizleme ve aykırı değer kararları gerekçesiyle birlikte size açıklanır.</li>
      </ul>

      <h2>3. Kaynak gösterme</h2>
      <p>
        Kaynak uydurulmaz; var olmayan bir esere, sayfaya veya yıla atıf önerilmez. Önerdiğimiz her kaynağın künyesi eserin kendisinden kontrol edilir. Doğrudan alıntıların ve yararlanılan fikirlerin kurallara uygun gösterilmesine özen gösterilir.
      </p>

      <h2>4. Gizlilik</h2>
      <ul>
        <li>{servicePolicy.privacy}</li>
        <li>{servicePolicy.deletion}</li>
        <li>{servicePolicy.report}</li>
      </ul>

      <h2>5. Kurum kurallarına uyum</h2>
      <p>
        Üniversitelerin ve dergilerin dış destek, editörlük ve yapay zekâ kullanımı konusundaki kuralları farklıdır. Çalışmanızın tabi olduğu yönergeyi kontrol etmek ve gerekiyorsa aldığınız desteği beyan etmek sizin sorumluluğunuzdadır. Bu konuda soru işaretiniz varsa ilk görüşmede birlikte konuşabiliriz.
      </p>

      <h2>6. Kabul etmediğimiz talepler</h2>
      <ul>
        <li>Öğrencinin yerine çalışma yazılması veya sınav ve ödevlerin yapılması.</li>
        <li>Veri uydurma, sonuç değiştirme veya sahte katılımcı yanıtı üretme.</li>
        <li>Kaynak uydurma ya da benzerlik denetimini atlatmaya yönelik müdahaleler.</li>
      </ul>

      <p>
        Hizmet koşullarının tamamı için <Link href="/kullanim-sartlari" className="text-gold-400 underline">kullanım şartlarına</Link>, kişisel verilerle ilgili ayrıntılar için <Link href="/gizlilik" className="text-gold-400 underline">gizlilik politikasına</Link> bakabilirsiniz. Sorularınız için <Link href="/iletisim" className="text-gold-400 underline">bize ulaşın</Link>.
      </p>
    </PolicyLayout>
  );
}
