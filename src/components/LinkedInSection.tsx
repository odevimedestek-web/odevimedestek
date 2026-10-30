export const LINKEDIN_URL =
  "https://www.linkedin.com/company/akademik-danismanlik-merkezi";

export default function LinkedInSection() {
  return (
    <section id="linkedin" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-gradient-to-br from-navy-900 to-navy-700 rounded-3xl text-center">
          <div className="w-16 h-16 mx-auto bg-[#0A66C2] text-white rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
          <span className="text-gold-300 font-semibold text-sm uppercase tracking-wider">
            LinkedIn Sayfamız
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Akademik Danışmanlık Merkezi
          </h2>
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Tez yazım süreci, APA kuralları, SPSS kullanımı, kaynak bulma ve
            sık yapılan hatalar üzerine kısa ve öğretici paylaşımlar.
            Ücretsiz takip edebilirsiniz.
          </p>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0A66C2] text-white font-bold rounded-xl hover:bg-[#004182] transition-all hover:shadow-xl text-lg"
          >
            LinkedIn&apos;de Takip Et
          </a>
        </div>
      </div>
    </section>
  );
}
