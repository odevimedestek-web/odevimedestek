const steps = [
  {
    num: "01",
    title: "İletişime Geçin",
    desc: "WhatsApp veya chatbot üzerinden ihtiyacınızı anlatın. İlk görüşme tamamen ücretsizdir.",
  },
  {
    num: "02",
    title: "Detayları Belirleyelim",
    desc: "Çalışmanızın kapsamı, teslim süresi ve gereksinimlerinizi birlikte netleştirelim.",
  },
  {
    num: "03",
    title: "Çalışmaya Başlayalım",
    desc: "Uzman ekibimiz çalışmanıza başlar. Süreç boyunca sizi bilgilendiririz.",
  },
  {
    num: "04",
    title: "Teslim ve Revizyon",
    desc: "Çalışmanız zamanında teslim edilir. Gerekli revizyonlar ücretsiz yapılır.",
  },
];

export default function Process() {
  return (
    <section id="surec" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
            Süreç
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Dört basit adımda akademik desteğinizi alın.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px bg-gradient-to-r from-slate-300 to-transparent" />
              )}
              <div className="text-5xl font-bold text-gold-400/30 mb-4">
                {step.num}
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
