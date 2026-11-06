import { servicePolicy } from "@/lib/service-policy";
import { pageMetadata } from "@/lib/seo";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata = pageMetadata(
  "Gizlilik Politikası",
  "Ödevime Destek gizlilik politikası ve kişisel verilerin korunması.",
  "/gizlilik",
);

export default function GizlilikPage() {
  return (
    <PolicyLayout title="Gizlilik Politikası">
      <p>Son güncelleme: Kasım 2026</p>

      <p>
        Bizimle çalışırken paylaştığınız bilgi ve dosyaları gizli tutuyoruz.
        Hangi durumda kimlerle paylaşıldığını aşağıda açıkça yazdık.
      </p>

      <h2>Ne Tür Bilgiler Alıyoruz?</h2>
      <p>
        Sizinle çalışabilmemiz için bazı temel bilgilere ihtiyacımız oluyor.
        Adınız, telefon numaranız, çalışmanızın konusu ve seviyesi gibi
        bilgiler bunların başında geliyor. Bunun dışında bize ilettiğiniz
        dosya ve belgeler de bu kapsamda.
      </p>

      <h2>Bu Bilgilerle Ne Yapıyoruz?</h2>
      <p>
        Kısa ve net: Sadece size hizmet vermek için kullanıyoruz. Bilgilerinizi
        pazarlama amacıyla kullanmıyoruz, bir listeye eklemiyoruz, başka birine
        satmıyoruz. Sizden aldığımız bilgiyi sizin işiniz için kullanıyoruz,
        o kadar.
      </p>

      <h2>Danışmanlık Dosyalarını Kim Görür?</h2>
      <p>{servicePolicy.privacy}</p>
      <h2>İsteğe Bağlı Rapor Hizmeti ve Ayrı Onay</h2>
      <p>{servicePolicy.report}</p>
      <p>Rapor sağlayıcısının kendi sistemindeki saklama ve silme koşulları, onay öncesinde ayrıca açıklanır. Tarafımızdaki dosyaların silinmesi, dış sağlayıcının sisteminde otomatik silme yapıldığı anlamına gelmez.</p>
      <h2>Danışmanlık Verileri Ne Zaman Silinir?</h2>
      <p>{servicePolicy.deletion}</p>
      <p>Silme politikası danışmanlık dosyalarına ilişkindir. Kullanılan iletişim ve rapor hizmetlerinin kendi sistemlerindeki kayıtlar, ilgili sağlayıcının koşullarına tabidir.</p>

      <h2>Çerezler</h2>
      <p>
        Sitemiz, daha iyi bir deneyim sunmak ve Google Ads reklamlarımızın
        sonucunu ölçmek için çerez kullanabiliyor. Örneğin reklamdan gelen bir
        ziyaretçinin WhatsApp bağlantısına tıklayıp tıklamadığı ölçülür ve bu
        veri Google tarafından işlenir. Tarayıcı ayarlarınızdan çerezleri
        kapatabilirsiniz, siteyi kullanmanızı etkilemez.
      </p>

      <h2>KVKK Kapsamındaki Haklarınız</h2>
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında
        bilgilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini veya
        silinmesini isteme hakkına sahipsiniz. Bu talepleriniz için bize
        WhatsApp üzerinden ulaşmanız yeterli.
      </p>

      <h2>Sormak İstediğiniz Bir Şey mi Var?</h2>
      <p>
        Gizlilikle ilgili aklınıza takılan her şeyi sorabilirsiniz:
        <strong> 0538 416 46 76</strong>
      </p>
    </PolicyLayout>
  );
}
