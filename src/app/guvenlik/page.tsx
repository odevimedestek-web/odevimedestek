import { servicePolicy } from "@/lib/service-policy";
import { pageMetadata } from "@/lib/seo";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata = pageMetadata(
  "Güvenlik Koridoru",
  "Ödevime Destek güvenlik politikası ve veri koruma önlemleri.",
  "/guvenlik",
);

export default function GuvenlikPage() {
  return (
    <PolicyLayout title="Güvenlik Koridoru">
      <p>Son güncelleme: Kasım 2026</p>

      <p>
        Bize bir dosya gönderdiğinizde veya çalışmanızın detaylarını
        paylaştığınızda, bunların güvende olduğundan emin olmanızı
        istiyoruz. İşte tam olarak neler yapıyoruz:
      </p>

      <h2>Danışmanlıkta Sınırlı Erişim</h2>
      <p>{servicePolicy.privacy}</p>
      <h2>Danışmanlık Sonrası Silme</h2>
      <p>{servicePolicy.deletion}</p>
      <h2>Çalışmanız Sizindir</h2>
      <p>Çalışmanız başka müşterilerle paylaşılmaz, yeniden kullanılmaz veya örnek olarak yayımlanmaz. Sitedeki temsili değerlendirmeler müşteri dosyalarından alınmamıştır.</p>
      <h2>Rapor Hizmeti İçin Ayrı Onay</h2>
      <p>{servicePolicy.report}</p>
      <p>Dış sağlayıcının kendi kayıtlarına ilişkin saklama ve silme koşulları ayrıca açıklanır. Danışmanlık dosyalarının tarafımızdan silinmesi bu sistemlerde otomatik silme taahhüdü değildir.</p>
      <h2>Dosya Göndermeden Önce</h2>
      <p>Çalışma için gerekmeyen ad, kimlik ve iletişim bilgilerini kaldırın. Katılımcı verilerini anonimleştirin. Site içindeki sohbet alanına araştırma verisi veya hassas kişisel bilgi yazmayın.</p>

      <h2>Akademik Etik</h2>
      <p>
        Hizmetlerimiz akademik etik kuralları çerçevesinde sunuluyor.
        Öğrencinin yerine çalışma hazırlamıyoruz; yalnızca danışmanlık ve
        rehberlik veriyoruz.
      </p>

      <h2>Bir Sorun Olursa</h2>
      <p>
        Herhangi bir güvenlik sorunu fark edersek, etkilenen
        müşterilerimizi hemen bilgilendiririz ve gereken önlemleri
        derhal alırız. Bu konuda şeffaf davranmak bizim için önemli.
      </p>

      <h2>Aklınıza Takılan Bir Şey mi Var?</h2>
      <p>
        Güvenlikle ilgili her türlü sorunuz için:
        <strong> 0538 416 46 76</strong>
      </p>
    </PolicyLayout>
  );
}
