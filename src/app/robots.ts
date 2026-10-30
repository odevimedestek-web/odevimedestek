import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/odeme/"],
    },
    sitemap: "https://www.odevimedestek.com/sitemap.xml",
  };
}
