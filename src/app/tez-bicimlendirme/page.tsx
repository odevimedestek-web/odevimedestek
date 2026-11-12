import Link from "next/link";
import ServiceLanding from "@/components/ServiceLanding";
import QuoteBuilder from "@/components/QuoteBuilder";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Tez Biçimlendirme ve Kılavuza Uyum",
  "Enstitü yazım kılavuzuna göre başlık, içindekiler, tablo-şekil numaraları, kaynakça ve sayfa düzeni desteği. Kapsamı ön görüşmede belirleyelim.", "/tez-bicimlendirme");
const faqs=[
  {q:"Tez biçimlendirme hangi konuları kapsıyor?",a:"Üniversitenizin yazım kılavuzuna göre kenar boşlukları, başlık düzeni, içindekiler, tablo ve şekil numaralandırma ile kaynakça biçimi konularında destek veriyoruz. İhtiyacınıza uygun kapsamı ön görüşmede belirliyoruz."},
  {q:"Hangi dosyaları hazırlamalıyım?",a:"Çalışmanızın güncel dosyasını, enstitünüzün yazım kılavuzunu, varsa şablonunu ve danışmanınızın biçimle ilgili notlarını hazırlamanızı öneriyoruz."},
  {q:"Her tezde APA 7 mi uygulanır?",a:"Atıf ve kaynakça biçimi için üniversitenizin veya ilgili yayının istediği kurallar esas alınır. Ön görüşmede hangi kılavuza göre ilerleyeceğimizi netleştiririz."},
  {q:"Biçimlendirme ile içerik danışmanlığı aynı hizmet mi?",a:"Biçimlendirme, belgenin kılavuza göre düzenlenmesine odaklanır. Araştırma sorusu, yöntem ve bölüm içeriğiyle ilgili geri bildirim için tez danışmanlığı kapsamı ayrıca görüşülür."},
];
export default function Page(){return <ServiceLanding path="/tez-bicimlendirme" title="Tez Biçimlendirme ve Kılavuza Uyum" intro="Tezinizin metni hazır olduğunda başlıklar, dizinler, tablo ve şekiller ile kaynakça düzenini birlikte gözden geçirin. Başlangıç noktası, kendi enstitünüzün yazım kılavuzu ve güncel tez dosyanızdır." waText="Merhaba, tez biçimlendirme ve kılavuza uyum desteği almak istiyorum." faqs={faqs}>
  <h2>Hangi alanlarda destek veriyoruz?</h2>
  <ul><li>Kılavuzda belirtilen sayfa düzeni ve kenar boşlukları.</li><li>Başlık düzeyleri ve numaralandırma.</li><li>İçindekiler ile belge başlıklarının uyumu.</li><li>Tablo ve şekil başlıkları ile numaralarının düzeni.</li><li>İstenen atıf stiline göre kaynakça biçimi.</li></ul>
  <h2>Ön görüşmeden önce hazırlayın</h2>
  <p>Güncel tez dosyanızı, kılavuzunuzu ve varsa kurum şablonunu bir araya getirin. Danışmanınız belirli sayfalara not bıraktıysa bunları da belirtin. İçerik üzerinde çalışmaya devam ediyorsanız hangi bölümlerin değişeceğini görüşmede paylaşın.</p>
  <h2>Başlık düzeni için temsili örnek</h2>
  <p>Aşağıdaki örnek bir müşteri dosyası değildir; yalnız tutarlılık kontrolünün ne anlama geldiğini gösterir. Kullanılacak numaralandırma ve yazım biçimini kendi kılavuzunuz belirler.</p>
  <div className="grid sm:grid-cols-2 gap-4">
    <div className="rounded-xl border border-slate-600 p-5"><h3 className="text-white font-semibold mb-3">Kontrol gerektiren görünüm</h3><p>2. YÖNTEM<br/>2.1 Araştırma Modeli<br/>2.1. Örneklem<br/>3.1 Veri Toplama</p></div>
    <div className="rounded-xl border border-gold-400/50 p-5"><h3 className="text-gold-400 font-semibold mb-3">Tutarlı sıralama örneği</h3><p>2. YÖNTEM<br/>2.1. Araştırma Modeli<br/>2.2. Örneklem<br/>2.3. Veri Toplama</p></div>
  </div>
  <h2>Son kontrolde birlikte bakılacak noktalar</h2>
  <p>İçindekilerdeki başlıkların belgeyle eşleşmesi, tablo ve şekil numaralarının sırası ve kaynakçanın seçilen biçime uyumu kontrol başlıklarıdır. Araştırmanın içeriği veya yöntemi için destek istiyorsanız <Link href="/tez-danismanligi" className="text-gold-400 underline">tez danışmanlığı</Link> kapsamını inceleyin.</p>
  <p>APA isteyen çalışmalar için <Link href="/rehber/apa-7-kaynakca" className="text-gold-400 underline">APA 7 kaynakça rehberi</Link>, savunma aşaması için <Link href="/rehber/tez-savunma-sunumu" className="text-gold-400 underline">sunum hazırlama rehberi</Link> başlangıç noktası sunar.</p>
  <QuoteBuilder initialNeed="Tez biçimlendirme" />
  </ServiceLanding>}
