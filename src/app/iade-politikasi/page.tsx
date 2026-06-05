import PolicyLayout from "@/components/PolicyLayout";

export const metadata = {
  title: "İade Politikası | Ödevime Destek",
  description: "Ödevime Destek iade ve iptal koşulları.",
};

export default function IadePolitikasiPage() {
  return (
    <PolicyLayout title="İade Politikası">
      <p>Son güncelleme: Haziran 2026</p>

      <p>
        İşler her zaman planlandığı gibi gitmeyebilir, bunu biliyoruz.
        Bu yüzden iade konusunda açık ve adil bir politika izliyoruz.
        Amacımız her iki tarafın da hakkını korumak.
      </p>

      <h2>Henüz Başlamadıysak</h2>
      <p>
        Çalışmanıza daha başlamadıysak ve vazgeçmek istiyorsanız,
        ödemenizin tamamını iade ediyoruz. Hiçbir kesinti yok, hiçbir
        soru sorulmaz.
      </p>

      <h2>Çalışma Devam Ediyorsa</h2>
      <p>
        Bir kısmı tamamlanmış çalışmalarda, yapılan iş miktarı düşülerek
        kalan tutar iade edilir. Bu hesaplamayı sizinle birlikte şeffaf
        bir şekilde yapıyoruz.
      </p>

      <h2>Teslimattan Sonra</h2>
      <p>
        Çalışma teslim edildikten sonra doğrudan iade yapamıyoruz. Ama
        memnun kalmadıysanız önce revizyon hakkınızı kullanmanızı
        öneriyoruz — revizyon ücretsiz. Çoğu durumda revizyon sonrası
        sorun çözülüyor.
      </p>

      <h2>İade Yapamadığımız Durumlar</h2>
      <ul>
        <li>Çalışma teslim edilip revizyon hakkı kullanılmadan yapılan talepler</li>
        <li>Yanlış veya eksik bilgi verilmesinden kaynaklanan sorunlar</li>
        <li>Kapsam dışı talepler nedeniyle oluşan anlaşmazlıklar</li>
      </ul>

      <h2>Revizyon Hakkınız</h2>
      <p>
        Her teslimden sonra ücretsiz revizyon hakkınız var. Teslim
        tarihinden itibaren 14 gün içinde revizyon talebinizi
        iletebilirsiniz. Birçok müşterimiz bu hakla tam memnuniyete
        ulaşıyor.
      </p>

      <h2>İade Nasıl İşliyor?</h2>
      <p>
        WhatsApp üzerinden iade talebinizi yazılı olarak iletmeniz yeterli.
        3 iş günü içinde değerlendirip size dönüyoruz. Onaylanan iadeler
        5 iş günü içinde, ödemeyi yaptığınız yöntemle hesabınıza yansır.
      </p>

      <h2>Bize Ulaşın</h2>
      <p>
        İade veya revizyon talepleriniz için:
        <strong> 0538 416 46 76</strong>
      </p>
    </PolicyLayout>
  );
}
