import Link from "next/link";
import ServiceLanding from "@/components/ServiceLanding";
import QuoteBuilder from "@/components/QuoteBuilder";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Akademik Editörlük ve APA Düzenleme",
  "Tez ve makalelerde dil-anlatım düzeltmesi, kılavuza uygun biçim, APA 7 atıf ve kaynakça kontrolü için akademik editörlük. İlk görüşme ücretsiz.",
  "/akademik-editorluk",
);

const faqs = [
  { q: "Akademik editörlük neleri kapsıyor?", a: "Yazdığınız metinde dil ve anlatım düzeltmesi, akademik yazım kurallarına uygunluk, biçimlendirme ve kaynak düzeni. İçerik ve yazarlık size ait kalır." },
  { q: "Editörlük metnimin içeriğini değiştirir mi?", a: "Hayır. Amaç düşüncenizi daha açık ve kurallara uygun ifade etmektir. Anlamı etkileyebilecek bir yer görürsek değiştirmeden önce size soruyoruz." },
  { q: "APA dışındaki atıf stilleriyle de çalışıyor musunuz?", a: "Enstitünüzün ya da derginizin istediği atıf stili esas alınır. Hangi kılavuza göre ilerleyeceğimizi ön görüşmede netleştiririz." },
  { q: "Ücret nasıl belirleniyor?", a: "Metnin uzunluğu, dili ve istediğiniz kapsam ücreti belirler. Rakamı ücretsiz ön görüşmede söylüyoruz." },
];

export default function Page() {
  return (
    <ServiceLanding
      path="/akademik-editorluk"
      title="Akademik Editörlük ve APA"
      intro="Yazdığınız tez, makale veya bildirinin dilini, biçimini ve kaynaklarını ilgili kılavuza göre gözden geçiriyoruz. Önerilerimizi görüp değerlendirebileceğiniz biçimde iletiyoruz; metin sizin kalır."
      waText="Merhaba, akademik editörlük ve APA düzenlemesi hakkında bilgi almak istiyorum."
      faqs={faqs}
    >
      <h2>Metninizde neleri gözden geçiriyoruz?</h2>
      <h3 className="text-white font-semibold">Dil ve anlatım</h3>
      <ul>
        <li>Yazım, noktalama ve dil bilgisi.</li>
        <li>Akademik üsluba uygunluk ve anlatım tutarlılığı.</li>
        <li>Terimlerin metin boyunca aynı biçimde kullanılması.</li>
        <li>Paragraflar ve bölümler arasındaki akış.</li>
      </ul>
      <h3 className="text-white font-semibold">Biçim</h3>
      <ul>
        <li>Enstitü kılavuzuna veya dergi şablonuna uyum.</li>
        <li>Başlık stilleri, otomatik içindekiler, tablo ve şekil listeleri.</li>
        <li>Sayfa numaraları, kenar boşlukları ve satır aralığı.</li>
      </ul>
      <h3 className="text-white font-semibold">Kaynak gösterme</h3>
      <ul>
        <li>Metin içi atıfların ve kaynakçanın istenen stile (ör. APA 7) göre düzenlenmesi.</li>
        <li>Metindeki atıflarla kaynakçanın karşılıklı kontrolü.</li>
        <li>Doğrudan alıntı ve yeniden ifade etme kuralları.</li>
        <li>Zotero ve Mendeley gibi kaynak yönetim programlarının kullanımı.</li>
      </ul>

      <h2>APA 7 ile sık karşılaşılan durumlar</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead><tr><th className="py-2 pr-4 text-white">Durum</th><th className="py-2 text-white">Metin içi atıf örneği</th></tr></thead>
          <tbody>
            <tr className="border-t border-slate-700"><td className="py-2 pr-4">Tek yazar</td><td className="py-2">(Yılmaz, 2024)</td></tr>
            <tr className="border-t border-slate-700"><td className="py-2 pr-4">İki yazar</td><td className="py-2">(Yılmaz ve Kaya, 2024)</td></tr>
            <tr className="border-t border-slate-700"><td className="py-2 pr-4">Üç veya daha fazla yazar</td><td className="py-2">(Yılmaz vd., 2024)</td></tr>
            <tr className="border-t border-slate-700"><td className="py-2 pr-4">Doğrudan alıntı</td><td className="py-2">(Yılmaz, 2024, s. 15)</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm">Örnek adlar temsilîdir. Enstitünüzün kılavuzu farklı bir kural öngörüyorsa kılavuz esas alınır. Kaynakça için <Link href="/rehber/apa-7-kaynakca" className="text-gold-400 underline">APA 7 kaynakça rehberimize</Link>, istatistik tabloları için <Link href="/rehber/spss-tablolari-apa-raporlama" className="text-gold-400 underline">SPSS çıktılarını APA&apos;ya göre raporlama</Link> yazımıza bakabilirsiniz.</p>

      <h2>Süreç nasıl ilerliyor?</h2>
      <p>
        Metninizi, uymanız gereken kılavuzu ve teslim tarihini ücretsiz ön görüşmede konuşuyoruz. Kapsam netleşince çalışmaya başlıyoruz. Yalnız biçim düzenlemesine ihtiyacınız varsa <Link href="/tez-bicimlendirme" className="text-gold-400 underline">tez biçimlendirme</Link> sayfasını inceleyin.
      </p>
      <QuoteBuilder initialNeed="Kapsamı birlikte belirleyelim" />
    </ServiceLanding>
  );
}
