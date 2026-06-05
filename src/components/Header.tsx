"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#surec", label: "Nasıl Çalışıyoruz" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#sss", label: "SSS" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/logo-odevime-destek.png"
              alt="Ödevime Destek"
              width={44}
              height={44}
              className="w-11 h-11 object-contain rounded-xl"
            />
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              <span className="text-gold-500">Ödevime</span>
              <span className="text-navy-900"> Destek</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-slate-600 hover:text-navy-900 transition-colors rounded-lg hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/905384164676"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2.5 bg-navy-900 text-white font-semibold text-sm rounded-lg hover:bg-navy-800 transition-all hover:shadow-lg"
            >
              WhatsApp ile Ulaşın
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-slate-600 hover:text-navy-900"
            aria-label="Menüyü aç"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-slate-600 hover:text-navy-900 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/905384164676"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 px-4 py-3 bg-navy-900 text-white font-semibold rounded-lg text-center"
            >
              WhatsApp ile Ulaşın
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
