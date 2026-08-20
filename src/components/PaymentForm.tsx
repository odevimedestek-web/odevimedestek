"use client";

import { useState } from "react";

export default function PaymentForm({
  kod,
  hizmet,
  tutar,
}: {
  kod: string;
  hizmet: string;
  tutar: number;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);

  async function handleClick() {
    setError(null);
    setLoading(true);

    // Sekme, kullanıcı tıklamasıyla eş zamanlı açılmalı; yoksa tarayıcı
    // pop-up engelleyicisi fetch bittikten sonra açılan sekmeyi engelleyebilir.
    const newTab = window.open("", "_blank");

    try {
      const res = await fetch("/api/odeme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kod, hizmet, tutar }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error);
      }

      if (newTab) {
        newTab.location.href = data.url;
      }
      setPaymentUrl(data.url);
    } catch (err) {
      newTab?.close();
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Ödemeniz şu anda tamamlanamadı."
      );
    } finally {
      setLoading(false);
    }
  }

  if (paymentUrl) {
    return (
      <div className="rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm p-4 space-y-3">
        <p>
          Ödeme sayfanız yeni bir sekmede açıldı. Orada kart bilgilerinizi
          girerek ödemenizi tamamlayabilirsiniz.
        </p>
        <a
          href={paymentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center px-4 py-2.5 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
        >
          Sekme açılmadıysa buraya tıklayın
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm p-3 space-y-3">
          <p>{error}</p>
          <a
            href={`https://wa.me/905384164676?text=${encodeURIComponent(
              `Merhaba, ${kod} referans kodlu ödemem tamamlanmadı, yardımcı olur musunuz?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1fbd5a] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.13c-.24.68-1.4 1.31-1.93 1.35-.5.05-1.03.27-3.46-.72-2.93-1.2-4.79-4.14-4.94-4.34-.14-.2-1.18-1.57-1.18-2.99 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.14.07.15.12.32.02.51-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.29.14.46.12.63-.07.17-.2.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.68.79 1.97.93.29.15.48.22.55.34.07.13.07.75-.17 1.43Z" />
            </svg>
            WhatsApp'tan Yardım Al
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="block w-full text-center px-5 py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Hazırlanıyor..." : "Ödemeye Geç"}
      </button>
    </div>
  );
}
