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
      images: [{ url: "/logo-odevime-destek.png", alt: "Ödevime Destek" }],
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
      images: ["/logo-odevime-destek.png"],
    },
  };
}
