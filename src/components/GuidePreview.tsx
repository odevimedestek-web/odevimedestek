import Link from "next/link";
import { rehberler } from "@/lib/rehberler";

export default function GuidePreview() {
  return <section className="py-16 sm:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between items-end gap-5 mb-8"><div><p className="text-sm font-semibold uppercase tracking-wider text-navy-600">Akademik rehberler</p><h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">Başlamadan önce göz atın.</h2></div><Link href="/rehber" className="font-semibold text-navy-900 underline underline-offset-4">Tüm rehberler →</Link></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{rehberler.map((guide, i) => <article key={guide.slug} className="flex flex-col border border-slate-200 rounded-xl p-6"><span className="text-sm text-slate-500 mb-5">REHBER / 0{i + 1}</span><h3 className="text-lg leading-snug font-semibold text-navy-900"><Link href={`/rehber/${guide.slug}`} className="hover:underline underline-offset-4">{guide.title}</Link></h3><p className="mt-3 text-sm text-slate-600 leading-relaxed">{guide.description}</p><Link href={`/rehber/${guide.slug}`} aria-label={`${guide.title} — rehberi oku`} className="mt-auto pt-6 text-sm font-semibold text-navy-900">Rehberi oku →</Link></article>)}</div>
    </div>
  </section>;
}
