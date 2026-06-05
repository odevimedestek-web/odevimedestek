"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Hangi akademik seviyelere destek veriyorsunuz?",
    a: "Ön lisans, lisans, tezli/tezsiz yüksek lisans ve doktora seviyelerinde destek sağlıyoruz.",
  },
  {
    q: "SPSS analizi nasıl yapılıyor?",
    a: "Verilerinizi bize ilettiğinizde, uygun istatistiksel testleri belirleyip analizi gerçekleştiriyoruz. Frekans, güvenilirlik, korelasyon, regresyon ve daha birçok test için destek veriyoruz.",
  },
  {
    q: "Teslim süresi ne kadar?",
    a: "Çalışmanın kapsamına göre değişir. Ön görüşmede teslim tarihini birlikte belirleyip kesin süre bildiriyoruz.",
  },
  {
    q: "Gizlilik konusunda ne yapıyorsunuz?",
    a: "Tüm çalışmalar ve kişisel bilgileriniz kesinlikle gizli tutulur. Hiçbir şekilde üçüncü kişilerle paylaşılmaz.",
  },
  {
    q: "Revizyon hakkım var mı?",
    a: "Evet, teslim sonrası makul revizyonlar ek ücret olmaksızın yapılmaktadır.",
  },
  {
    q: "Ödeme nasıl yapılıyor?",
    a: "Ödeme detayları ön görüşmede belirlenir. Esnek ödeme seçenekleri sunuyoruz.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="sss" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
            SSS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">
            Sıkça Sorulan Sorular
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-navy-900 font-medium pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gold-500 shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
