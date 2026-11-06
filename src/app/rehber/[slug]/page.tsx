import Link from "next/link";
import { notFound } from "next/navigation";
import PolicyLayout from "@/components/PolicyLayout";
import { pageMetadata } from "@/lib/seo";
import { rehberler } from "@/lib/rehberler";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return rehberler.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = rehberler.find((item) => item.slug === slug);
  if (!guide) notFound();
  return pageMetadata(guide.title, guide.description, `/rehber/${slug}`);
}
export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = rehberler.find((item) => item.slug === slug);
  if (!guide) notFound();
  const url = `https://www.odevimedestek.com/rehber/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    mainEntityOfPage: url,
    inLanguage: "tr-TR",
    author: { "@type": "Organization", name: "Ödevime Destek", url: "https://www.odevimedestek.com" },
    publisher: { "@type": "Organization", name: "Ödevime Destek", url: "https://www.odevimedestek.com" },
  };
  return (
    <PolicyLayout title={guide.title}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <nav aria-label="Sayfa yolu" className="text-sm"><Link href="/" className="text-gold-400 underline">Ana sayfa</Link> / <Link href="/rehber" className="text-gold-400 underline">Rehberler</Link></nav>
      <p className="text-lg">{guide.description}</p>
      <article>
        {guide.sections.map((section) => (
          <section key={section.title} className="space-y-4">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
            {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
            {section.source && <p className="text-sm">Kaynak: <a href={section.source.href} className="text-gold-400 underline break-words">{section.source.label}</a></p>}
          </section>
        ))}
      </article>
      <aside className="rounded-xl border border-slate-700 p-6 space-y-3">
        <h2 className="!mt-0">Çalışmanıza özel destek</h2>
        <p>Bu konuyu kendi çalışmanıza uygulamak için hizmet kapsamını inceleyebilirsiniz.</p>
        <Link href={guide.service.href} className="text-gold-400 underline">{guide.service.label} →</Link>
      </aside>
      <h2>Diğer rehberler</h2>
      <ul>{rehberler.filter((item) => item.slug !== slug).map((item) => <li key={item.slug}><Link href={`/rehber/${item.slug}`} className="text-gold-400 underline">{item.title}</Link></li>)}</ul>
    </PolicyLayout>
  );
}
