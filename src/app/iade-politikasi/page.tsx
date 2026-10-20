import PolicyLayout from "@/components/PolicyLayout";

export const metadata = {
  title: "İade Politikası | Ödevime Destek",
  description: "Ödevime Destek iade koşulları: danışmanlıktan memnun kalmazsanız %100 iade.",
};

export default function IadePolitikasiPage() {
  return (
    <PolicyLayout title="İade Politikası">
      <p>Son güncelleme: Ekim 2026</p>

      <h2>%100 Memnuniyet, %100 İade</h2>
      <p>
        Aldığınız danışmanlık hizmetinden memnun kalmazsanız ödediğiniz
        ücretin tamamını iade ediyoruz. Kesinti yapılmaz.
      </p>

      <h2>Danışmanlık Başlamadan Vazgeçerseniz</h2>
      <p>
        Görüşmeler başlamadan vazgeçmeniz durumunda da ödemenizin tamamı
        iade edilir.
      </p>

      <h2>İade Nasıl İşliyor?</h2>
      <p>
        WhatsApp üzerinden iade talebinizi yazılı olarak iletmeniz yeterli.
        3 iş günü içinde size dönüyoruz. İadeler 5 iş günü içinde, ödemeyi
        yaptığınız yöntemle hesabınıza yansır.
      </p>

      <h2>Bize Ulaşın</h2>
      <p>
        İade talepleriniz için:
        <strong> 0538 416 46 76</strong>
      </p>
    </PolicyLayout>
  );
}
