import type { Metadata } from "next";
import "./globals.css";
import GoogleAds from "@/components/GoogleAds";
import { faqs } from "@/lib/faqs";

const SITE_URL = "https://www.odevimedestek.com";
const LINKEDIN_URL = "https://www.linkedin.com/company/akademik-danismanlik-merkezi";
const DESCRIPTION =
  "Tez, makale, SPSS analizi, TÜBİTAK proje, bildiri, seminer ve sunum hazırlamada 15 yıllık deneyimle akademik danışmanlık. Editörlük, APA ve şablon biçimlendirme. İlk görüşme ücretsiz.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tez, Makale ve SPSS Analiz Danışmanlığı | Ödevime Destek",
    template: "%s | Ödevime Destek",
  },
  description: DESCRIPTION,
  keywords: [
    "tez danışmanlığı",
    "makale danışmanlığı",
    "SPSS analizi",
    "TÜBİTAK proje danışmanlığı",
    "2209-A proje",
    "bildiri danışmanlığı",
    "seminer danışmanlığı",
    "sunum hazırlama",
    "SPSS danışmanlığı",
    "istatistik danışmanlığı",
    "SPSS analiz eğitimi",
    "akademik danışmanlık",
    "araştırma yöntemleri danışmanlığı",
    "akademik editörlük",
    "APA kaynak gösterme",
    "tez şablonu biçimlendirme",
    "tez savunma sunumu",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo-odevime-destek.png",
    apple: "/logo-odevime-destek.png",
  },
  openGraph: {
    title: "Tez, Makale ve SPSS Analiz Danışmanlığı | Ödevime Destek",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Ödevime Destek",
    type: "website",
    locale: "tr_TR",
    images: [{ url: "/logo-odevime-destek.png", alt: "Ödevime Destek" }],
  },
  twitter: {
    card: "summary",
    title: "Tez, Makale ve SPSS Analiz Danışmanlığı | Ödevime Destek",
    description: DESCRIPTION,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ödevime Destek",
    alternateName: "Akademik Danışmanlık Merkezi",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-odevime-destek.png`,
    image: `${SITE_URL}/logo-odevime-destek.png`,
    description: DESCRIPTION,
    telephone: "+905384164676",
    email: "odevimedestek@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ankara",
      addressCountry: "TR",
    },
    areaServed: "TR",
    knowsAbout: [
      "SPSS",
      "İstatistik",
      "Araştırma yöntemleri",
      "Akademik editörlük",
      "APA",
    ],
    sameAs: [
      LINKEDIN_URL,
      "https://whatsapp.com/channel/0029Vb9KOnH0Qeahcy0Ois2f",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <GoogleAds />
      </body>
    </html>
  );
}
