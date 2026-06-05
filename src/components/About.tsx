import Image from "next/image";

const highlights = [
  {
    title: "Uzman Kadro",
    desc: "Alanında deneyimli akademisyen ve araştırmacılardan oluşan ekibimiz.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Gizlilik Garantisi",
    desc: "Tüm çalışmalar ve kişisel bilgiler kesinlikle gizli tutulur.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Zamanında Teslim",
    desc: "Belirlenen tarihlere sadık kalarak çalışmanızı teslim ediyoruz.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Ücretsiz Revizyon",
    desc: "Teslim sonrası gerekli düzeltmeler ek ücret olmadan yapılır.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
];

export default function About() {
  return (
    <section id="hakkimizda" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
              Hakkımızda
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-6">
              5 Yıldır Akademik Dünyada{" "}
              <span className="text-gold-500">Güvenilir Partneriniz</span>
            </h2>

            <div className="flex items-center gap-4 mb-8 p-5 bg-slate-100 border border-slate-200 rounded-2xl">
              <Image
                src="/logo-tez-makale.png"
                alt="Tez Makale SPSS Online Academy"
                width={160}
                height={64}
                className="h-16 w-auto object-contain mix-blend-multiply"
              />
              <p className="text-slate-600 text-sm leading-relaxed">
                Tez, Makale ve SPSS alanında uzmanlaşmış online akademi
                markamızla hizmet veriyoruz.
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              Ödevime Destek olarak, öğrencilerin ve araştırmacıların akademik
              çalışmalarında profesyonel danışmanlık hizmeti sunuyoruz. Ön lisanstan
              doktoraya kadar her seviyede, SPSS analizinden makale yazımına kadar
              geniş bir yelpazede destek veriyoruz.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Misyonumuz, akademik süreçlerde rehberlik ederek öğrencilerin
              kendi potansiyellerini en üst düzeyde kullanmalarına yardımcı
              olmaktır.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-lg hover:border-gold-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-navy-900 to-navy-700 rounded-xl flex items-center justify-center mb-4 group-hover:from-gold-500 group-hover:to-gold-400 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={h.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-navy-900 font-semibold mb-2">{h.title}</h3>
                <p className="text-slate-500 text-sm">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
