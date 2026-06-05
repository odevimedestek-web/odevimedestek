import PolicyLayout from "@/components/PolicyLayout";

export const metadata = {
  title: "Güvenlik Koridoru | Ödevime Destek",
  description: "Ödevime Destek güvenlik politikası ve veri koruma önlemleri.",
};

export default function GuvenlikPage() {
  return (
    <PolicyLayout title="Güvenlik Koridoru">
      <p>Son güncelleme: Haziran 2026</p>

      <p>
        Bize bir dosya gönderdiğinizde veya çalışmanızın detaylarını
        paylaştığınızda, bunların güvende olduğundan emin olmanızı
        istiyoruz. İşte tam olarak neler yapıyoruz:
      </p>

      <h2>Dosyalarınız Nasıl Korunuyor?</h2>
      <p>
        Bize gönderdiğiniz her dosya şifreli kanallar üzerinden aktarılıyor.
        Sunucularımızda güvenli şekilde saklanıyor ve sadece çalışmanıza
        atanan uzman tarafından görüntülenebiliyor. Başka hiç kimse
        dosyalarınıza erişemiyor.
      </p>

      <h2>Dosyalar Ne Kadar Saklanıyor?</h2>
      <p>
        Çalışmanız tamamlandıktan 30 gün sonra tüm dosyalarınız
        sistemimizden kalıcı olarak siliniyor. Geri getirilmesi mümkün
        olmayacak şekilde imha ediliyor. Daha erken silinmesini isterseniz,
        bize yazmanız yeterli — anında hallederiz.
      </p>

      <h2>Kimse Göremez</h2>
      <p>
        Çalışmanız başka müşterilerle paylaşılmaz, tekrar kullanılmaz,
        bir yerde sergilenmez. Sizin çalışmanız sizindir ve sadece sizin
        kalır. Ekibimizin tamamı gizlilik sözleşmesi imzalamıştır.
      </p>

      <h2>İletişim Güvenliği</h2>
      <p>
        WhatsApp üzerinden yaptığımız tüm yazışmalar uçtan uca şifreli.
        Site içindeki chatbot konuşmaları da güvenli sunucularda işleniyor.
        Ödeme bilgilerinizi ise hiçbir şekilde sistemimizde saklamıyoruz.
      </p>

      <h2>Akademik Etik</h2>
      <p>
        Hizmetlerimiz akademik etik kuralları çerçevesinde sunuluyor.
        Çalışmalar danışmanlık ve rehberlik amacıyla hazırlanıyor.
        Özgünlük kontrolleri profesyonel araçlarla yapılıyor.
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
