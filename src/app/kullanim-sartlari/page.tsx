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
        Akademik danışmanlık hizmeti veriyoruz. SPSS danışmanlığı, tez ve makale
        rehberliği, akademik editörlük, kaynak gösterme ve sunum desteği
        bunların başında geliyor. Öğrencinin yerine çalışma hazırlamıyoruz. Sunduğumuz hizmetler danışmanlık ve
        rehberlik niteliğindedir.
      </p>

      <h2>Sizden Beklentimiz</h2>
      <p>
        Bize doğru ve eksiksiz bilgi vermeniz çok önemli. Çalışmanın
        konusunu, seviyesini ve beklentilerinizi ne kadar net paylaşırsanız,
        o kadar iyi sonuç alırsınız. Eksik bilgi verildiyse çıkan
        sorunlardan biz sorumlu olamıyoruz.
      </p>

      <h2>Paylaştığınız Çalışmalar</h2>
      <p>
        Çalışmanın yazarı ve sahibi sizsiniz. Bize ilettiğiniz metin ve
        verileri yalnızca rehberlik için kullanırız; başkasıyla paylaşmayız,
        arşivde tutmayız.
      </p>

      <h2>Görüşme Takvimi</h2>
      <p>
        Danışmanlık görüşmelerini ilk görüşmede birlikte belirlediğimiz
        takvime göre yürütüyoruz. Beklenmedik bir durum olursa sizi
        önceden bilgilendiriyoruz.
      </p>

      <h2>İade</h2>
      <p>
        Danışmanlık hizmetinden memnun kalmazsanız ödediğiniz ücretin
        tamamını iade ediyoruz. Ayrıntılar İade Politikası sayfasında yer
        alır.
      </p>

      <h2>Akademik Etik</h2>
      <p>
        Akademik etik kurallarına uygun çalışıyoruz. Öğrencinin yerine
        ödev, tez veya makale hazırlamıyoruz; bu yöndeki talepleri kabul
        etmiyoruz.
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
