import Link from "next/link";
import PolicyLayout from "@/components/PolicyLayout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Temsili Akademik Değerlendirme Örnekleri", "Müşteri verisi içermeyen analiz tablosu, gerekçeli paragraf geri bildirimi ve tez biçimlendirme örnekleri. Danışmanlık yaklaşımımızı inceleyin.", "/ornek-calismalar");

export default function ExamplesPage() {
  return <PolicyLayout title="Danışmanlıkta Nasıl Geri Bildirim Veriyoruz?" crumbs={[{ name: "Örnek Çalışmalar", path: "/ornek-calismalar" }]}>
    <p className="text-lg">Bir tabloya, bir paragrafa ve bir belgenin başlıklarına nasıl yaklaştığımızı aşağıdaki üç örnekle inceleyebilirsiniz.</p>
    <aside className="border-l-2 border-gold-300 pl-5 py-2"><p className="text-white font-semibold">Tamamı temsili örnektir.</p><p className="mt-2">Bu sayfa için hazırlanmıştır; gerçek müşteri dosyası, katılımcı bilgisi, araştırma bulgusu veya müşteri yorumu içermez. Örnekler hizmet yaklaşımını gösterir; gerçek çalışmadaki kapsam dosyalarınız üzerinden belirlenir.</p></aside>
    <nav aria-label="Örnekler" className="flex flex-wrap gap-3 text-sm"><a href="#analiz-ornegi" className="border border-slate-600 rounded-lg px-4 py-3 text-gold-300">Analiz tablosu</a><a href="#paragraf-ornegi" className="border border-slate-600 rounded-lg px-4 py-3 text-gold-300">Paragraf geri bildirimi</a><a href="#bicim-ornegi" className="border border-slate-600 rounded-lg px-4 py-3 text-gold-300">Biçimlendirme</a></nav>

    <section id="analiz-ornegi" className="space-y-5">
      <h2>1. Analiz tablosu: Sonucu göstermeden önce neyi kontrol ederiz?</h2>
      <p>Temsili durum: Araştırmacı, iki grubun ölçek puanlarını karşılaştırmak istiyor. Aşağıdaki tablo bir sunum şemasıdır. Gerçek veri olmadığı için sayı, test sonucu veya anlamlılık yorumu eklenmemiştir.</p>
      <div className="overflow-x-auto rounded-xl border border-slate-600" role="region" aria-label="Temsili analiz tablosu" tabIndex={0}>
        <table className="w-full text-sm text-left"><caption className="p-4 text-left text-white font-semibold">Tablo şeması — gerçek analiz çıktısı değildir</caption><thead className="bg-navy-800 text-white"><tr><th scope="col" className="p-4">Grup</th><th scope="col" className="p-4">Katılımcı sayısı (n)</th><th scope="col" className="p-4">Ortalama</th><th scope="col" className="p-4">Standart sapma</th></tr></thead><tbody>{["A grubu", "B grubu"].map(group=><tr key={group} className="border-t border-slate-600"><th scope="row" className="p-4 font-medium">{group}</th><td className="p-4">Veriden hesaplanır</td><td className="p-4">Veriden hesaplanır</td><td className="p-4">Veriden hesaplanır</td></tr>)}</tbody></table>
      </div>
      <div className="rounded-xl bg-navy-800 p-5"><h3 className="text-white font-semibold">Tabloya eşlik eden geri bildirim örneği</h3><ul className="mt-3"><li>A ve B gruplarının neyi temsil ettiği açıklanmalı; kişileri tanımlayan bilgi eklenmemeli.</li><li>Ölçeğin adı, puanlama yönü ve eksik yanıtların nasıl ele alındığı dosyada belirtilmeli.</li><li>Karşılaştırma yöntemi, araştırma sorusu ve veri özellikleri incelendikten sonra seçilmeli.</li><li>Tablodaki değerler analiz çıktısıyla karşılaştırılmalı; yalnız ortalamalara bakılarak anlamlı fark iddiası yazılmamalı.</li></ul></div>
      <p><strong className="text-white">Bu örnekte kazanım:</strong> Tabloyu görmek kadar, hangi bilginin eksik olduğunu ve yorumdan önce neyin kontrol edilmesi gerektiğini anlamak.</p>
      <Link href="/spss-analiz-kontrolu" className="inline-block text-gold-300 underline">Mevcut analizleriniz için kontrol kapsamını inceleyin →</Link>
    </section>

    <section id="paragraf-ornegi" className="space-y-5">
      <h2>2. Paragraf geri bildirimi: Anlamı koruyarak sadeleştirme</h2>
      <p>Bu örnek yalnız anlatım düzenlemesini gösterir. Gerçek bir tezden alınmamıştır; konuya ilişkin bilgi veya kaynak iddiası içermez.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-600 p-5"><h3 className="text-white font-semibold mb-3">İlk ifade</h3><p>“Bu araştırmanın amacı, araştırma kapsamında ele alınan konunun incelenmesi ve konuya ilişkin değerlendirmelerin yapılmasıdır.”</p></div>
        <div className="rounded-xl border border-gold-300/60 p-5"><h3 className="text-gold-300 font-semibold mb-3">Anlatım düzenlemesi</h3><p>“Bu araştırma, ele alınan konuyu incelemeyi ve değerlendirmeyi amaçlamaktadır.”</p></div>
      </div>
      <div className="rounded-xl bg-navy-800 p-5"><h3 className="text-white font-semibold">Düzenleme gerekçesi</h3><p className="mt-3">Tekrarlanan “araştırma”, “konu” ve “yapılması” ifadeleri azaltıldı; yeni bir amaç, yöntem veya bulgu eklenmedi.</p><h3 className="text-white font-semibold mt-5">Akademik açıdan hâlâ ne eksik?</h3><p className="mt-3">Cümle daha kısa olsa da araştırmanın tam olarak neyi inceleyeceği belli değil. Konu ve araştırma sorusu bilinmeden bu eksik tamamlanmaz. Araştırmacıdan öneri formundaki amaç ve sorular istenir; son ifade bunlarla karşılaştırılır.</p></div>
      <p><strong className="text-white">Bu örnekte kazanım:</strong> Dil düzeltmesi ile içerik eksikliğinin ayrılması; daha akıcı bir cümlenin tek başına yeterli kabul edilmemesi.</p>
      <Link href="/tez-danismanligi" className="inline-block text-gold-300 underline">Tez danışmanlığında bölüm geri bildirimini inceleyin →</Link>
    </section>

    <section id="bicim-ornegi" className="space-y-5">
      <h2>3. Biçimlendirme: Başlık sırasını tutarlı hale getirme</h2>
      <p>Temsili bir yöntem bölümünde aynı düzeydeki başlıkların numaralandırmasını karşılaştırın. Kullanılacak yazı tipi, punto ve başlık biçimi gerçek çalışmada kurum kılavuzundan alınır.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-600 p-5"><h3 className="text-white font-semibold mb-3">Düzenleme öncesi</h3><p>2. YÖNTEM<br/>2.1. Araştırma Modeli<br/>2.1. Örneklem<br/>3.1. Veri Toplama</p></div>
        <div className="rounded-xl border border-gold-300/60 p-5"><h3 className="text-gold-300 font-semibold mb-3">Tutarlı sıralama örneği</h3><p>2. YÖNTEM<br/>2.1. Araştırma Modeli<br/>2.2. Örneklem<br/>2.3. Veri Toplama</p></div>
      </div>
      <div className="rounded-xl bg-navy-800 p-5"><h3 className="text-white font-semibold">Düzenleme gerekçesi</h3><p className="mt-3">Yinelenen başlık numarası ve farklı bölüme işaret eden numara düzeltildi. Bölüm metni, sayılar ve atıflar üzerinde değişiklik yapılmadı. Gerçek belgede içindekiler ve metin içindeki başlık göndermeleri de yeni sırayla karşılaştırılır.</p></div>
      <p><strong className="text-white">Bu örnekte kazanım:</strong> İçeriği değiştirmeden tutarlı bir belge düzeni oluşturmak ve bağlantılı dizinleri birlikte kontrol etmek.</p>
      <Link href="/tez-bicimlendirme" className="inline-block text-gold-300 underline">Tez biçimlendirme kapsamını inceleyin →</Link>
    </section>
    <div className="border-t border-slate-600 pt-6"><h2>Kendi çalışmanızda nerede desteğe ihtiyacınız var?</h2><p>İlgili bölümü veya sorununuzu ön görüşmede anlatın. Kişisel ve katılımcılara ait bilgileri dosyanızdan ayıklayın.</p><Link href="/#iletisim" className="inline-block mt-5 rounded-xl bg-gold-300 px-6 py-3 text-navy-900 font-semibold">Ön görüşme için iletişime geçin</Link></div>
  </PolicyLayout>;
}
