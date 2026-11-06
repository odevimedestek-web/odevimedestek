import type { MetadataRoute } from "next";
import { hizmetSayfalari } from "@/lib/hizmetler";

const base = "https://www.odevimedestek.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
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
