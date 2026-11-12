import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceLanding from "@/components/ServiceLanding";
import QuoteBuilder from "@/components/QuoteBuilder";
import { pageMetadata } from "@/lib/seo";
import { analizler } from "@/lib/analizler";
import { rehberler } from "@/lib/rehberler";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return analizler.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = analizler.find((a) => a.slug === slug);
  if (!page) notFound();
  return pageMetadata(page.seoTitle, page.description, `/analiz/${slug}`);
}
export default async function AnalysisPage({ params }: Props) {
  const { slug } = await params;
  const page = analizler.find((a) => a.slug === slug);
  if (!page) notFound();
  const guides = rehberler.filter((g) => page.guides.includes(g.slug));
  const others = analizler.filter((a) => a.slug !== slug);
  return (
    <ServiceLanding
      path={`/analiz/${slug}`}
      title={page.title}
      intro={page.intro}
      waText={page.waText}
      faqs={page.faqs}
      parent={{ name: "Analiz Türleri", path: "/analiz" }}
    >
      {page.sections.map((s) => (
        <section key={s.title} className="space-y-4">
          <h2>{s.title}</h2>
          <p>{s.text}</p>
          {s.items && <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>}
        </section>
      ))}
      <p className="text-sm text-slate-400">
        {page.note ?? "Danışmanlık, sizin topladığınız veri üzerinde yürütülür; anket uygulama veya veri toplama hizmeti verilmez. Çalışmanın yazarı sizsiniz."}
      </p>
      {guides.length > 0 && (
        <section>
          <h2>Konuyla ilgili rehberler</h2>
          <ul>{guides.map((g) => <li key={g.slug}><Link href={`/rehber/${g.slug}`} className="text-gold-400 underline">{g.title}</Link></li>)}</ul>
        </section>
      )}
      <p>
        Genel kapsam için <Link href="/spss-analizi" className="text-gold-400 underline">SPSS analiz danışmanlığı</Link>, teklif için hangi bilgilerin gerektiğini görmek için <Link href="/spss-analiz-ucretleri" className="text-gold-400 underline">SPSS analiz ücretleri</Link> sayfasına bakabilirsiniz.
      </p>
      <QuoteBuilder initialNeed={page.need ?? "SPSS analiz danışmanlığı"} />
      <section>
        <h2>Diğer analiz türleri</h2>
        <ul>{others.map((a) => <li key={a.slug}><Link href={`/analiz/${a.slug}`} className="text-gold-400 underline">{a.title}</Link></li>)}</ul>
      </section>
    </ServiceLanding>
  );
}
