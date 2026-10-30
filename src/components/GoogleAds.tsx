"use client";

import Script from "next/script";
import { useEffect } from "react";

// Vercel ortam değişkenleri: NEXT_PUBLIC_GOOGLE_ADS_ID (AW-XXXXXXXXX)
// ve NEXT_PUBLIC_GOOGLE_ADS_CONVERSION (AW-XXXXXXXXX/etiket). Boşsa hiçbir şey yüklenmez.
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const CONVERSION = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAds() {
  useEffect(() => {
    if (!ADS_ID || !CONVERSION) return;
    // WhatsApp'a giden her tıklama dönüşüm olarak sayılır.
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (link && /wa\.me\//.test(link.href)) {
        window.gtag?.("event", "conversion", { send_to: CONVERSION });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!ADS_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ADS_ID}');`}
      </Script>
    </>
  );
}
