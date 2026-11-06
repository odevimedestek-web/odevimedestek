import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import ServiceLanding from "@/components/ServiceLanding";

export const metadata = pageMetadata(
  "Tez Danışmanlığı – Yüksek Lisans ve Doktora Tez Desteği",
  "Yüksek lisans ve doktora tezinizde konu seçimi, tez önerisi, literatür tarama, yöntem, SPSS analizi, şablon biçimlendirme ve savunma sunumunda birebir tez danışmanlığı. İlk görüşme ücretsiz.",
  "/tez-danismanligi",
);

const faqs = [
  {
    q: "Tez danışmanlığı hangi aşamaları kapsıyor?",
    a: "Konu belirleme, tez önerisi hazırlığı, literatür tarama yöntemi, araştırma tasarımı, veri analizi, üniversite tez yazım kılavuzuna göre biçimlendirme ve savunma sunumu hazırlığı aşamalarında rehberlik veriyoruz.",
  },
  {
    q: "Benim yerime tez yazıyor musunuz?",
    a: "Hayır. Hizmetimiz danışmanlık ve eğitim niteliğindedir. Tezin yazarı sizsiniz; biz her aşamada yol gösteriyor ve geri bildirim veriyoruz.",
  },
  {
    q: "Tezimi üniversitemin şablonuna uygun hale getirmede destek veriyor musunuz?",
    a: "Evet. Enstitünüzün tez yazım kılavuzuna göre kenar boşlukları, başlık düzeni, içindekiler, tablo-şekil numaralandırma ve kaynakça biçimi konusunda destek veriyoruz.",
  },
  {
    q: "Hangi seviyelerde tez danışmanlığı veriyorsunuz?",
    a: "Lisans bitirme tezi, tezli yüksek lisans, doktora ve tıpta uzmanlık tezlerinde destek veriyoruz.",
  },
];

export default function Page() {
  return (
    <ServiceLanding
      title="Tez Danışmanlığı"
      intro="Tezinizin konusunu daraltmak, yöntemini planlamak veya hazırladığınız bölümleri gözden geçirmek için destek alabilirsiniz. Öneri formunuzu ve danışman notlarınızı esas alarak çalışılacak aşamaları birlikte belirliyoruz."
      waText="Merhaba, tez danışmanlığı almak istiyorum."
      faqs={faqs}
    >
      <p>Metniniz hazırsa ve sayfa düzeni için destek arıyorsanız <Link href="/tez-bicimlendirme" className="text-gold-400 underline">tez biçimlendirme ve kılavuza uyum</Link> sayfasına geçebilirsiniz.</p>
      <h2>Tez Sürecinde Hangi Konularda Destek Veriyoruz?</h2>
      <ul>
        <li>Tez konusu belirleme ve tez önerisi (öneri formu) hazırlığı</li>
        <li>Literatür tarama yöntemleri ve kaynak yönetimi (Zotero, Mendeley)</li>
        <li>Araştırma modeli, evren-örneklem ve veri toplama araçları</li>
        <li>SPSS ile veri analizi ve bulguların raporlanması</li>
        <li>APA ve enstitü kılavuzuna göre kaynak gösterme</li>
        <li>Tez yazım kılavuzuna uygun biçimlendirme</li>
        <li>Tez savunması için sunum hazırlığı</li>
      </ul>

      <h2>Yüksek Lisans ve Doktora Tez Danışmanlığı Nasıl İlerliyor?</h2>
      <p>
        Ücretsiz ön görüşmede tezinizin hangi aşamada olduğunu ve danışmanınızın
        beklentilerini konuşuyoruz. Ardından size özel bir çalışma takvimi
        çıkarıyor, her bölüm için geri bildirim veriyor ve danışman/jüri
        notlarını nasıl ele alacağınızı birlikte planlıyoruz.
      </p>

      <h2>İlk Görüşmeye Nasıl Hazırlanabilirsiniz?</h2>
      <p>
        Varsa tez öneri formunuzu, enstitünüzün yazım kılavuzunu, hazırladığınız
        bölümleri ve danışmanınızın son notlarını bir araya getirin. Henüz konu
        seçmediyseniz ilgi alanınızı ve program düzeyinizi belirtin. Görüşmede
        mevcut aşamayı ve hangi konuda rehberliğe ihtiyaç duyduğunuzu
        netleştirerek başlayabiliriz.
      </p>
      <p>
        Öneri aşamasındaysanız <Link href="/rehber/tez-oneri-formu" className="text-gold-400 underline">tez öneri formu rehberini</Link>,{" "}
        kaynakçanızı düzenliyorsanız <Link href="/rehber/apa-7-kaynakca" className="text-gold-400 underline">APA 7 başlangıç rehberini</Link>{" "}
        inceleyebilirsiniz.
      </p>

      <h2>Bulunduğunuz Aşamaya Göre Destek</h2>
      <ul>
        <li>Öneri aşaması: konuyu daraltma, araştırma sorusu ve yöntem planlama konusunda rehberlik.</li>
        <li>Yazım aşaması: hazırladığınız bölümler için geri bildirim ve kaynak gösterme desteği.</li>
        <li>Analiz aşaması: <Link href="/spss-analizi" className="text-gold-400 underline">SPSS analiz danışmanlığı</Link> ile çıktıları anlama ve raporlama.</li>
        <li>Teslim ve savunma aşaması: enstitü kılavuzuna göre biçimlendirme ve <Link href="/rehber/tez-savunma-sunumu" className="text-gold-400 underline">savunma sunumunu planlama</Link>.</li>
      </ul>
      <p>
        Çalışmanın yazarı sizsiniz. Rehberlik ve geri bildirim, kendi metninizi
        geliştirmenize yöneliktir. Danışmanınızın notlarını çalışma takvimiyle
        birlikte ele alıyoruz.
      </p>

      <h2>Görüşme Takvimi ve Ücretlendirme</h2>
      <p>
        İlk görüşme ücretsizdir. Çalışmanın kapsamını, görüşme takvimini ve
        ödeme ayrıntılarını ön görüşmede belirliyoruz. İhtiyaç duyduğunuz
        aşamayı ve danışmanınızın beklediği tarihi paylaşmanız, kapsamı
        birlikte netleştirmemizi sağlar. İade koşullarını{" "}
        <Link href="/iade-politikasi" className="text-gold-400 underline">İade Politikası</Link>{" "}
        sayfasından inceleyebilirsiniz.
      </p>

      <h2>Danışman Notlarıyla Birlikte İlerleyelim</h2>
      <p>
        Danışmanınızdan yeni bir geri bildirim geldiğinde ilgili bölümle birlikte
        paylaşın. İstenen değişikliğin mevcut kapsamla ilişkisini değerlendirelim
        ve sonraki adımı belirleyelim. Böylece farklı belge sürümleri ve notlar
        arasında hangi düzeltmenin yapıldığını takip edebilirsiniz.
      </p>
    </ServiceLanding>
  );
}
