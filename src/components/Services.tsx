const services = [
  {
    title: "SPSS Analizi",
    desc: "Veri analizi, istatistiksel testler, frekans, güvenilirlik, regresyon ve tüm SPSS çıktılarının yorumlanması.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13h2v8H3zM8 9h2v12H8zM13 5h2v16h-2zM18 1h2v20h-2z" />
      </svg>
    ),
  },
  {
    title: "Tez Danışmanlığı",
    desc: "Lisans, yüksek lisans ve doktora tezlerinde konu belirleme, literatür tarama, yazım ve düzenleme desteği.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Makale Yazımı",
    desc: "Ulusal ve uluslararası dergilere uygun formatta akademik makale hazırlama ve yayın süreç desteği.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Editörlük Hizmetleri",
    desc: "Akademik yazım kurallarına uygunluk kontrolü, dil bilgisi düzeltme ve biçimlendirme.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Özgünlük Kontrolü",
    desc: "Turnitin ve profesyonel araçlarla intihal kontrolü, benzerlik oranı düşürme ve kaynak düzenleme.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Sunum Hazırlama",
    desc: "Tez savunması, konferans ve seminer sunumlarınız için profesyonel PowerPoint tasarımı.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2m5 2V2m5 2V2M3 8h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
            Hizmetlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">
            Akademik İhtiyacınıza Uygun Çözümler
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Her seviyedeki akademik çalışmanız için uzman kadromuzla kapsamlı
            destek sağlıyoruz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-gold-400/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-navy-900/5 text-navy-900 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold-400/10 group-hover:text-gold-500 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                {s.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
