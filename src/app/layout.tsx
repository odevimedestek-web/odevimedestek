import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ödevime Destek | Akademik Danışmanlık ve SPSS Analiz Hizmetleri",
  description:
    "Tez, makale, SPSS analizi, editörlük ve akademik danışmanlık hizmetleri. Profesyonel ekibimizle akademik çalışmalarınızda yanınızdayız.",
  keywords:
    "tez danışmanlık, SPSS analizi, makale yazımı, akademik destek, editörlük, Turnitin, intihal kontrolü",
  icons: {
    icon: "/logo-odevime-destek.png",
    apple: "/logo-odevime-destek.png",
  },
  openGraph: {
    title: "Ödevime Destek | Akademik Danışmanlık",
    description:
      "Tez, makale, SPSS analizi ve akademik danışmanlık hizmetleri.",
    url: "https://www.odevimedestek.com",
    siteName: "Ödevime Destek",
    type: "website",
    locale: "tr_TR",
  },
};

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
