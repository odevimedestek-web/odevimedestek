import type { MetadataRoute } from "next";
import { hizmetSayfalari } from "@/lib/hizmetler";
import { rehberler } from "@/lib/rehberler";
import { analizler } from "@/lib/analizler";

const base = "https://www.odevimedestek.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/spss-analiz-ucretleri`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tez-danismanligi-ucretleri`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/analiz`, changeFrequency: "monthly", priority: 0.8 },
    ...analizler.map((a) => ({
      url: `${base}/analiz/${a.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/hakkimizda`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/iletisim`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/ornek-calismalar`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/rehber`, changeFrequency: "monthly", priority: 0.7 },
    ...rehberler.map((guide) => ({
      url: `${base}/rehber/${guide.slug}`,
      lastModified: guide.updated,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...hizmetSayfalari.map((h) => ({
      url: `${base}${h.href}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${base}/gizlilik`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/kullanim-sartlari`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/iade-politikasi`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/guvenlik`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
