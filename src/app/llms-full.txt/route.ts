import { rehberler } from "@/lib/rehberler";
import { analizler } from "@/lib/analizler";
import { faqs } from "@/lib/faqs";

export const dynamic = "force-static";

const SITE = "https://www.odevimedestek.com";

export function GET() {
  const out: string[] = [];
  out.push("# Ödevime Destek – Akademik Danışmanlık Merkezi (tam metin)", "");
  out.push("> Bu dosya sitedeki rehberlerin, analiz sayfalarının ve sık sorulan soruların tam metnini içerir. Kısa özet: " + SITE + "/llms.txt", "");
  out.push("## Sık sorulan sorular", "");
  for (const f of faqs) out.push(`### ${f.q}`, "", f.a, "");
  out.push("## Analiz türleri", "");
  for (const a of analizler) {
    out.push(`### ${a.title}`, "", `Adres: ${SITE}/analiz/${a.slug}`, "", a.intro, "");
    for (const s of a.sections) {
      out.push(`#### ${s.title}`, "", s.text, "");
      if (s.items) out.push(...s.items.map((i) => `- ${i}`), "");
    }
    for (const f of a.faqs) out.push(`**${f.q}** ${f.a}`, "");
  }
  out.push("## Akademik rehberler", "");
  for (const g of rehberler) {
    out.push(`### ${g.title}`, "", `Adres: ${SITE}/rehber/${g.slug} · Güncelleme: ${g.updated}`, "", g.description, "");
    for (const s of g.sections) {
      out.push(`#### ${s.title}`, "", s.text, "");
      if (s.items) out.push(...s.items.map((i) => `- ${i}`), "");
      if (s.source) out.push(`Kaynak: [${s.source.label}](${s.source.href})`, "");
    }
  }
  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
