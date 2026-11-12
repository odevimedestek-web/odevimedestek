import Link from "next/link";
import PolicyLayout from "@/components/PolicyLayout";
import { pageMetadata } from "@/lib/seo";
import { analizler } from "@/lib/analizler";

export const metadata = pageMetadata(
  "İstatistiksel Analiz Türleri ve Danışmanlık",
  "Faktör analizi, AMOS-YEM, regresyon, PROCESS, ANOVA, AHP-TOPSIS, VZA, panel veri, zaman serisi, ROC, G*Power, bibliyometri ve meta-analiz danışmanlığı.",
  "/analiz",
);

export default function Page() {
  return (
    <PolicyLayout title="İstatistiksel Analiz Türleri" crumbs={[{ name: "Analiz Türleri", path: "/analiz" }]}>
      <p className="text-lg">
        Tez ve makalelerde en sık kullanılan analizler için ayrı sayfalar hazırladık. Her sayfada analizin ne zaman kullanıldığını, çıktıda hangi değerlere bakıldığını ve danışmanlıkta neleri birlikte ele aldığımızı bulabilirsiniz. Hangi analize ihtiyacınız olduğundan emin değilseniz araştırma sorularınızla birlikte ön görüşme isteyebilirsiniz.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {analizler.map((a) => (
          <Link key={a.slug} href={`/analiz/${a.slug}`} className="block rounded-xl border border-slate-600 p-5 hover:border-gold-300 transition-colors no-underline">
            <h2 className="!mt-0 !mb-2 !text-lg text-gold-300">{a.title}</h2>
            <p className="text-sm text-slate-300">{a.description}</p>
          </Link>
        ))}
      </div>
      <p>
        Analizleriniz yapıldıysa ve yalnız çıktıların kontrolüne ihtiyacınız varsa <Link href="/spss-analiz-kontrolu" className="text-gold-400 underline">SPSS analiz kontrolü</Link> sayfasına bakın. Ücretin neye göre belirlendiğini <Link href="/spss-analiz-ucretleri" className="text-gold-400 underline">ücret ve kapsam</Link> sayfasında anlattık.
      </p>
    </PolicyLayout>
  );
}
