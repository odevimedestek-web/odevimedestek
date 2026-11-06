import Link from "next/link";
import ServiceLanding from "@/components/ServiceLanding";
import QuoteBuilder from "@/components/QuoteBuilder";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("SPSS Analiz Kontrolü ve Çıktı Yorumlama Desteği", "Mevcut SPSS çıktıları, danışman notları ve bulgular tabloları için kontrol kapsamını belirleyin. Test seçimi ve raporlama konusunda ücretsiz ön görüşme.", "/spss-analiz-kontrolu");
const faqs=[
  {q:"Yalnızca mevcut analizlerim için destek alabilir miyim?",a:"Mevcut çıktılarınız ve danışmanınızın notları üzerinden ihtiyaç duyduğunuz kontrol ve yorumlama desteğini ön görüşmede belirleyebiliriz."},
  {q:"Ön görüşmeye hangi belgeleri hazırlamalıyım?",a:"Varsa araştırma sorularınızı, anket veya ölçek formunu, veri dosyasını, mevcut analiz çıktılarını, bulgular metnini ve danışman notlarını bir araya getirmenizi öneriyoruz."},
  {q:"Analiz kontrolü yeni analiz yapılacağı anlamına gelir mi?",a:"Kontrol talebi ile yeni analiz ihtiyacı ayrı değerlendirilir. Ön görüşmede elinizdeki çalışmayı ve hangi aşamada desteğe ihtiyaç duyduğunuzu konuşuruz."},
];
export default function Page(){return <ServiceLanding path="/spss-analiz-kontrolu" title="SPSS Analiz Kontrolü" intro="Analizleriniz tamamlandı ancak çıktıları yorumlamakta zorlanıyor veya danışmanınızın geri bildirimlerini nasıl uygulayacağınızı netleştirmek istiyorsunuz. Elinizdeki çalışma üzerinden başlayarak kontrol ihtiyacınızı belirleyin." waText="Merhaba, mevcut SPSS analizlerimin kontrolü hakkında ön görüşme istiyorum." faqs={faqs}>
  <h2>Hangi sorularla başlayabilirsiniz?</h2>
  <ul><li>Seçilen analiz araştırma soruma uygun mu?</li><li>Çıktıdaki değerler bulgular tablosuna doğru aktarılmış mı?</li><li>Tablo ile yazılı yorum birbiriyle uyumlu mu?</li><li>Danışmanımın notu açıklama mı, farklı bir analiz mi gerektiriyor?</li></ul>
  <h2>Dosyalarınızı birlikte değerlendirmeye hazırlayın</h2>
  <p>Tek bir ekran görüntüsü yerine, varsa araştırma sorularınızı ve mevcut çıktılarınızı birlikte hazırlayın. Bulgular metniniz ve danışmanınızın notları, hangi noktada zorlandığınızı açıklamanıza yardımcı olur. Veri dosyası henüz hazır değilse bunu ön görüşmede belirtin.</p>
  <h2>Görüşmede hedefinizi belirleyin</h2>
  <p>Önceliğiniz bir tabloyu anlamak, raporlama biçimini düzenlemek veya yeni analiz gereksinimini görüşmek olabilir. Talebinizi bu ayrımla iletin. Kontrolün kapsamı, görüşme takvimi ve ücret ön görüşmede netleştirilir.</p>
  <p>Analize henüz başlamadıysanız <Link href="/spss-analizi" className="text-gold-400 underline">SPSS analiz danışmanlığı</Link>; teklif için hangi bilgilerin gerektiğini öğrenmek istiyorsanız <Link href="/spss-analiz-ucretleri" className="text-gold-400 underline">ücret ve kapsam rehberi</Link> ile ilerleyebilirsiniz.</p>
  <QuoteBuilder initialNeed="Mevcut analizlerin kontrolü" />
  </ServiceLanding>}
