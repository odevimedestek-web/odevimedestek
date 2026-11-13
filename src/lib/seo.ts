import type { Metadata } from "next";

const SITE_URL = "https://www.odevimedestek.com";

/** Keep search and sharing metadata tied to the page being visited. */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | Ödevime Destek`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      siteName: "Ödevime Destek",
      type: "website",
      locale: "tr_TR",
      images: [{ url: "/logo-mark.png", alt: "Ödevime Destek" }],
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
      images: ["/logo-mark.png"],
    },
  };
}

export type Crumb = { name: string; path: string };

/** BreadcrumbList for search results; the home page is always the first step. */
export function breadcrumbLd(crumbs: Crumb[]) {
  const items = [{ name: "Ana sayfa", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === "/" ? "" : c.path}`,
    })),
  };
}
