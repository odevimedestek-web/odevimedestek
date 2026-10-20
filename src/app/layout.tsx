import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ödevime Destek | Akademik Danışmanlık ve SPSS Analiz Hizmetleri",
  description:
    "Tez ve makale rehberliği, SPSS analiz danışmanlığı, akademik editörlük ve öğretici WhatsApp kanalı.",
  keywords:
    "tez danışmanlığı, SPSS danışmanlığı, akademik rehberlik, APA, editörlük, WhatsApp kanal",
  icons: {
    icon: "/logo-odevime-destek.png",
    apple: "/logo-odevime-destek.png",
  },
  openGraph: {
    title: "Ödevime Destek | Akademik Danışmanlık",
    description:
      "Tez ve makale rehberliği, SPSS danışmanlığı ve akademik editörlük.",
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
