import Link from "next/link";
import ServiceLanding from "@/components/ServiceLanding";
import QuoteBuilder from "@/components/QuoteBuilder";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("SPSS Analiz Ücretleri ve Teklif Kapsamı", "SPSS analiz ücreti nasıl belirlenir? Veri hazırlığı, analiz, mevcut çıktı kontrolü ve raporlama ihtiyaçlarını ayırın; ücretsiz ön görüşme talebinizi hazırlayın.", "/spss-analiz-ucretleri");
const faqs = [
  {q:"SPSS analizi için sabit bir ücret var mı?",a:"Ücret, analiz sayısı ve veri setinin büyüklüğüne göre ön görüşmede belirlenir. Bu sayfada otomatik fiyat üretilmez; ihtiyacınızı açıklayan bir görüşme talebi hazırlayabilirsiniz."},
  {q:"İlk görüşme ücretli mi?",a:"İlk görüşme ücretsizdir. Çalışmanın kapsamı, görüşme takvimi ve ödeme ayrıntıları ön görüşmede netleştirilir."},
  {q:"Hangi analize ihtiyacım olduğunu bilmiyorsam ne seçmeliyim?",a:"Talep alanında ‘Kapsamı birlikte belirleyelim’ seçeneğini kullanabilirsiniz. Araştırma sorularınız ve elinizdeki dosyalar üzerinden ihtiyacınızı görüşebiliriz."},
  {q:"Formu doldurunca mesaj otomatik gönderilir mi?",a:"Hayır. Düğme WhatsApp’ta bir mesaj taslağı açar. Mesajı inceleyip gönderme kararını siz verirsiniz; form alanları siteye kaydedilmez."},
];
export default function Page() {
  return <ServiceLanding path="/spss-analiz-ucretleri" title="SPSS Analiz Ücretleri ve Teklif Kapsamı" intro="Fiyat teklifi istemeden önce ihtiyacınızı netleştirin: veri hazırlığı mı, analiz danışmanlığı mı, mevcut çıktıların kontrolü mü? Aşağıdaki karşılaştırma ve kısa talep alanı, ön görüşmeye hazırlanmanıza yardımcı olur." waText="Merhaba, SPSS analiz ücretleri ve kapsamı hakkında bilgi almak istiyorum." faqs={faqs}>
    <p><a href="#teklif-hazirla" className="text-gold-400 underline font-semibold">Ön görüşme talebimi hazırlayayım →</a></p>
    <h2>İhtiyacınıza göre kapsamı ayırın</h2>
    <div className="grid gap-4 sm:grid-cols-3">
      {[
        ["Analize hazırlık", "Veri dosyanızı, değişkenlerinizi ve araştırma sorularınızı nasıl düzenleyeceğiniz konusunda rehberlik arıyorsunuz.", "/rehber/spss-veri-hazirlama", "Hazırlık rehberi"],
        ["Analiz danışmanlığı", "Veriniz hazır; uygun testleri seçme, çıktıları anlama ve bulguları raporlama konusunda desteğe ihtiyaç duyuyorsunuz.", "/spss-analizi", "Hizmet kapsamı"],
        ["Mevcut analiz kontrolü", "Analizleriniz yapılmış; danışman notları, kullanılan testler veya raporlama üzerinde kontrol istiyorsunuz.", "/spss-analiz-kontrolu", "Kontrol kapsamı"],
      ].map(([title,text,href,label])=><section key={title} className="rounded-xl border border-slate-600 p-5"><h3 className="text-white font-bold mb-3">{title}</h3><p>{text}</p><Link href={href} className="inline-block mt-4 text-gold-400 underline">{label} →</Link></section>)}
    </div>
    <h2>Teklif görüşmesinde neleri netleştirmelisiniz?</h2>
    <p>Analiz sayısı ve veri setinin büyüklüğü ücretlendirmede değerlendirilen bilgilerdir. Yalnız bir fiyatı karşılaştırmak yerine, o fiyatın hangi desteği kapsadığını da öğrenin. Ön görüşme için aşağıdaki bilgileri hazırlamanızı öneriyoruz.</p>
    <ul><li>Çalışmanın türü ve araştırma soruları.</li><li>Verinin hazır olup olmadığı; varsa ölçek ve hipotez bilgileri.</li><li>Mevcut çıktıların kontrolü mü, yeni analiz danışmanlığı mı gerektiği.</li><li>Tablo düzenleme, çıktı yorumlama veya savunmaya hazırlık beklentiniz.</li><li>Danışmanınızın notları ve hedef tarihiniz.</li></ul>
    <h2>Ücret kadar kapsamı da karşılaştırın</h2>
    <p>Görüşme sonunda hangi işlerin ele alınacağını, hangi dosyalar üzerinden ilerlenmesini istediğinizi ve geri bildirim ihtiyacınızı netleştirin. Yeni veri, ek hipotez veya sonradan gelen danışman notlarını ayrıca belirtin. Böylece ilk talebiniz ile sonraki ihtiyaçlarınız birbirine karışmaz.</p>
    <QuoteBuilder />
  </ServiceLanding>;
}
