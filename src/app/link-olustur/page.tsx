"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function randomCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

export default function LinkOlusturPage() {
  const [kod, setKod] = useState(randomCode());
  const [hizmet, setHizmet] = useState("");
  const [tutar, setTutar] = useState("");
  const [copied, setCopied] = useState(false);

  const hazir = hizmet.trim() !== "" && Number(tutar) > 0;

  const link = hazir
    ? `https://odevimedestek.com/odeme/${encodeURIComponent(kod)}?hizmet=${encodeURIComponent(
        hizmet
      )}&tutar=${encodeURIComponent(tutar)}`
    : "";

  async function kopyala() {
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="min-h-screen bg-navy-900 flex flex-col">
      <header className="bg-navy-900/95 backdrop-blur-md border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-odevime-destek.png"
                alt="Ödevime Destek"
                width={48}
                height={48}
                className="w-12 h-12 object-contain mix-blend-multiply"
              />
            </Link>
            <Link
              href="/"
              className="text-sm text-slate-300 hover:text-gold-400 transition-colors"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-md w-full mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-2xl font-bold text-navy-900 mb-1">
            Ödeme Linki Oluştur
          </h1>
          <p className="text-slate-500 text-sm mb-6">
            Hizmet ve tutarı gir, müşteriye göndereceğin linki al.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Hizmet Adı
              </label>
              <input
                type="text"
                value={hizmet}
                onChange={(e) => setHizmet(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="Örn: Tez Danışmanlığı"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Tutar (TL)
              </label>
              <input
                type="number"
                value={tutar}
                onChange={(e) => setTutar(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="Örn: 1500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Referans Kodu
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={kod}
                  onChange={(e) => setKod(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent font-mono"
                />
                <button
                  type="button"
                  onClick={() => setKod(randomCode())}
                  className="px-3 py-2.5 rounded-lg border border-slate-300 text-slate-500 hover:bg-slate-50 transition-colors text-sm"
                >
                  Yenile
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                İstersen müşteri adına göre değiştirebilirsin (örn. AHMET01).
              </p>
            </div>
          </div>

          {hazir && (
            <div className="mt-6 pt-6 border-t border-slate-200">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Oluşan Link
              </label>
              <div className="flex gap-2">
                <input
                  readOnly
                  value={link}
                  className="flex-1 px-3 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-sm font-mono text-slate-600"
                />
                <button
                  type="button"
                  onClick={kopyala}
                  className="px-4 py-2.5 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors text-sm whitespace-nowrap"
                >
                  {copied ? "Kopyalandı!" : "Kopyala"}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-3xl mx-auto px-4 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Ödevime Destek. Tüm hakları
          saklıdır.
        </div>
      </footer>
    </div>
  );
}
