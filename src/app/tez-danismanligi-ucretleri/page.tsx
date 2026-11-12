import Link from "next/link";
import ServiceLanding from "@/components/ServiceLanding";
import QuoteBuilder from "@/components/QuoteBuilder";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Tez Danışmanlığı Ücretleri 2026",
  "Tez danışmanlığı ücreti neye göre belirlenir? Tez düzeyi, aşama, analiz ihtiyacı ve takvim gibi kapsam bilgilerini ayırın; ücretsiz ön görüşme isteyin.",
  "/tez-danismanligi-ucretleri",
);

const faqs = [
  { q: "Tez danışmanlığı için sabit bir fiyat listesi var mı?", a: "Sabit bir liste yerine ücreti çalışmanın kapsamına göre ön görüşmede belirliyoruz. Aynı düzeydeki iki tezin ihtiyaçları birbirinden çok farklı olabilir." },
  { q: "İlk görüşme ücretli mi?", a: "Hayır, ilk görüşme ücretsizdir. Kapsam, takvim ve ücret bu görüşmede netleşir." },
  { q: "Yalnız bir bölüm için destek alırsam ücret nasıl belirlenir?", a: "Yalnız ihtiyaç duyduğunuz bölüm ya da aşama için kapsam belirleyebiliriz. Ücret o kapsama göre konuşulur." },
  { q: "Memnun kalmazsam ne olur?", a: "Aldığınız danışmanlık hizmetinden memnun kalmazsanız ödediğiniz ücretin tamamı iade edilir. Koşullar iade politikasında yer alır." },
];

export default function Page() {
  return (
    <ServiceLanding
      path="/tez-danismanligi-ucretleri"
      title="Tez Danışmanlığı Ücretleri ve Kapsam"
      intro="Tez danışmanlığı ücretini belirleyen şey, tezin düzeyinden çok hangi aşamada ne kadar desteğe ihtiyaç duyduğunuzdur. Teklif istemeden önce ihtiyacınızı aşağıdaki başlıklarla netleştirirseniz görüşme daha kısa ve verimli geçer."
      waText="Merhaba, tez danışmanlığı ücretleri ve kapsamı hakkında bilgi almak istiyorum."
      faqs={faqs}
      parent={{ name: "Tez Danışmanlığı", path: "/tez-danismanligi" }}
    >
      <h2>Ücreti etkileyen başlıklar</h2>
      <ul>
        <li>Tezin düzeyi: yüksek lisans, doktora ya da uzmanlık tezi.</li>
        <li>Destek istenen aşama: öneri formu, literatür, yöntem, analiz, biçimlendirme veya savunma hazırlığı.</li>
        <li>Nicel analiz gerekiyorsa analiz sayısı ve veri setinin büyüklüğü.</li>
        <li>Biçimlendirme gerekiyorsa sayfa sayısı ve kılavuzun ayrıntısı.</li>
        <li>Teslim tarihiniz ve görüşme sıklığı beklentiniz.</li>
      </ul>

      <h2>İhtiyacınıza göre kapsamı ayırın</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["Planlama aşaması", "Konu, araştırma sorusu ve öneri formu üzerinde çalışıyorsunuz.", "/rehber/tez-oneri-formu", "Öneri formu rehberi"],
          ["Analiz aşaması", "Veriniz toplandı; test seçimi, çıktı yorumu ve bulguların raporlanması gerekiyor.", "/spss-analiz-ucretleri", "SPSS ücret ve kapsam"],
          ["Son aşama", "Metin hazır; kılavuza uyum, kaynakça ve savunma sunumu kaldı.", "/tez-bicimlendirme", "Tez biçimlendirme"],
        ].map(([title, text, href, label]) => (
          <section key={title} className="rounded-xl border border-slate-600 p-5">
            <h3 className="text-white font-bold mb-3">{title}</h3>
            <p>{text}</p>
            <Link href={href} className="inline-block mt-4 text-gold-400 underline">{label} →</Link>
          </section>
        ))}
      </div>

      <h2>Teklifleri karşılaştırırken</h2>
      <p>
        Yalnız rakama bakmak yerine o rakamın neleri kapsadığını sorun. Kaç görüşme yapılacağı, revizyon taleplerinin nasıl karşılanacağı, dosyalarınızın nasıl saklanıp silineceği ve memnun kalmazsanız ne olacağı en az ücret kadar önemlidir. Bizim yaklaşımımızda aynı çalışma için ek revizyon talepleri ücretlendirilmez ve memnun kalmadığınızda ücretin tamamı iade edilir.
      </p>
      <p>
        Hizmetimiz danışmanlık ve eğitim niteliğindedir; tezin yazarı sizsiniz. Kapsamın ayrıntıları için <Link href="/tez-danismanligi" className="text-gold-400 underline">tez danışmanlığı</Link> sayfasına bakabilirsiniz.
      </p>
      <QuoteBuilder initialNeed="Kapsamı birlikte belirleyelim" />
    </ServiceLanding>
  );
}
