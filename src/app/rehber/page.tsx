import Link from "next/link";
import PolicyLayout from "@/components/PolicyLayout";
import { pageMetadata } from "@/lib/seo";
import { rehberler } from "@/lib/rehberler";

export const metadata = pageMetadata(
  "Akademik Rehberler: Tez, SPSS, APA ve Savunma",
  "SPSS veri hazırlama, tez önerisi, APA 7 kaynakça ve tez savunma sunumu için kaynak bağlantılı, uygulanabilir rehberler.",
  "/rehber",
);

export default function GuidesPage() {
  return (
    <PolicyLayout title="Akademik Rehberler">
      <p>Çalışmanızın bulunduğu aşamaya göre bir rehber seçin. Kısa açıklamalar, kontrol listeleri ve resmî kaynak bağlantılarıyla bir sonraki adımınızı planlayın.</p>
      <div className="grid gap-5 sm:grid-cols-2">
        {rehberler.map((guide) => (
          <article key={guide.slug} className="rounded-xl border border-slate-700 p-6">
            <h2 className="!mt-0"><Link href={`/rehber/${guide.slug}`} className="text-gold-400 hover:underline">{guide.title}</Link></h2>
            <p>{guide.description}</p>
            <Link href={`/rehber/${guide.slug}`} className="inline-block mt-4 text-gold-400 underline" aria-label={`${guide.title} — rehberi oku`}>Rehberi oku →</Link>
          </article>
        ))}
      </div>
    </PolicyLayout>
  );
}
