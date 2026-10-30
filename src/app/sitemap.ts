import type { MetadataRoute } from "next";

const base = "https://www.odevimedestek.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tez-danismanligi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/makale-danismanligi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/spss-analizi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/gizlilik`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/kullanim-sartlari`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/iade-politikasi`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/guvenlik`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
