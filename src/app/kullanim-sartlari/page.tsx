import PolicyLayout from "@/components/PolicyLayout";

export const metadata = {
  title: "Kullanım Şartları | Ödevime Destek",
  description: "Ödevime Destek kullanım şartları ve hizmet koşulları.",
};

export default function KullanimSartlariPage() {
  return (
    <PolicyLayout title="Kullanım Şartları">
      <p>Son güncelleme: Haziran 2026</p>

      <p>
        Bu sayfada hizmetlerimizi kullanırken geçerli olan temel kuralları
        bulacaksınız. Uzun ve karmaşık yasal metinler yerine, her şeyi
        olabildiğince anlaşılır tutmaya çalıştık.
      </p>

      <h2>Ne Yapıyoruz?</h2>
      <p>
        Akademik danışmanlık hizmeti veriyoruz. SPSS analizi, tez ve makale
        yazım desteği, editörlük, özgünlük kontrolü ve sunum hazırlama
        bunların başında geliyor. Sunduğumuz hizmetler danışmanlık ve
        rehberlik niteliğindedir.
      </p>

      <h2>Sizden Beklentimiz</h2>
      <p>
        Bize doğru ve eksiksiz bilgi vermeniz çok önemli. Çalışmanın
        konusunu, seviyesini ve beklentilerinizi ne kadar net paylaşırsanız,
        o kadar iyi sonuç alırsınız. Eksik bilgi verildiyse çıkan
        sorunlardan biz sorumlu olamıyoruz.
      </p>

      <h2>Teslim Edilen Çalışmalar</h2>
      <p>
        Ödemeniz tamamlandığında çalışmanın tüm hakları size geçer. Biz o
        çalışmayı bir daha kullanmayız, başkasıyla paylaşmayız, arşivde
        tutmayız. Sizin çalışmanız, sizin kalır.
      </p>

      <h2>Teslim Süreleri</h2>
      <p>
        İlk görüşmede birlikte belirlediğimiz tarihe sadık kalıyoruz.
        Beklenmedik bir durum olursa sizi mutlaka önceden bilgilendiriyoruz.
        Acil talepler için de çözüm üretebiliyoruz, bunu ön görüşmede
        konuşabiliriz.
      </p>

      <h2>Revizyon Hakkı</h2>
      <p>
        Teslimden sonra bir şeyler eksik kaldıysa veya farklı olmasını
        istediğiniz noktalar varsa, ücretsiz revizyon hakkınız var. Teslim
        tarihinden itibaren 14 gün içinde talebinizi iletmeniz yeterli.
      </p>

      <h2>Akademik Etik</h2>
      <p>
        Akademik etik kurallarına uygun çalışıyoruz. Hazırladığımız
        çalışmalar kaynak ve referans materyali olarak kullanılmak üzere
        hazırlanmaktadır.
      </p>

      <h2>Sonuç Garantisi</h2>
      <p>
        İşimizi en iyi şekilde yapıyoruz ama sonuçları (not, kabul, red
        gibi) garanti edemeyiz. Çünkü bu kararlar bizim kontrolümüzde
        değil. Biz üzerimize düşeni eksiksiz yapıyoruz.
      </p>

      <h2>Değişiklikler</h2>
      <p>
        Bu şartları zaman zaman güncelleyebiliyoruz. Güncel hali her zaman
        bu sayfada yayınlanır.
      </p>

      <h2>Sorularınız İçin</h2>
      <p>
        Herhangi bir sorunuz varsa bize yazın:
        <strong> 0538 416 46 76</strong>
      </p>
    </PolicyLayout>
  );
}
