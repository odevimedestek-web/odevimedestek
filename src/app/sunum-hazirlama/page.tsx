import type { Metadata } from "next";
import ServiceLanding from "@/components/ServiceLanding";

export const metadata: Metadata = {
  title: "Sunum Hazırlama Desteği – Tez Savunma, Seminer ve Kongre Sunumu",
  description:
    "Tez savunma sunumu, seminer, kongre bildirisi ve proje sunumları için PowerPoint sunum hazırlama desteği: slayt düzeni, tasarım, tablo-grafik yerleşimi ve sunum provası. İlk görüşme ücretsiz.",
  alternates: { canonical: "/sunum-hazirlama" },
};

const faqs = [
  {
    q: "Hangi sunumlar için destek veriyorsunuz?",
    a: "Yüksek lisans ve doktora tez savunması, tez izleme komitesi, seminer, kongre bildirisi ve TÜBİTAK proje sunumları için destek veriyoruz.",
  },
  {
    q: "Tez savunma sunumu kaç slayt olmalı?",
    a: "Genellikle 15-20 dakikalık bir savunma için 15-25 slayt yeterlidir. Ön görüşmede enstitünüzün ve jürinizin beklentisine göre birlikte planlıyoruz.",
  },
  {
    q: "Sunum provası yapıyor musunuz?",
    a: "Evet. Sunum öncesi online prova yapıyor, jürinin sorabileceği sorulara nasıl hazırlanacağınız konusunda rehberlik ediyoruz.",
  },
];

export default function Page() {
  return (
    <ServiceLanding
      title="Sunum Hazırlama Desteği"
      intro="Tez savunması, seminer, kongre ve proje sunumlarınızın sade, düzenli ve akılda kalıcı olması için sunum hazırlama desteği veriyoruz. Slayt düzeninden provaya kadar yanınızdayız."
      waText="Merhaba, sunum hazırlama desteği almak istiyorum."
      faqs={faqs}
    >
      <h2>Sunum Hazırlamada Hangi Konularda Destek Veriyoruz?</h2>
      <ul>
        <li>Tez savunma sunumunun bölüm planı ve slayt sayısı</li>
        <li>PowerPoint şablon, renk ve yazı düzeni</li>
        <li>SPSS tablo ve grafiklerinin slayta uygun yerleşimi</li>
        <li>Seminer ve kongre bildirisi sunumları</li>
        <li>TÜBİTAK ve BAP proje sunumları</li>
        <li>Sunum provası ve jüri sorularına hazırlık</li>
      </ul>

      <h2>Süreç Nasıl İlerliyor?</h2>
      <p>
        Ücretsiz ön görüşmede sunumunuzun türünü, süresini ve tarihini
        konuşuyoruz. Ardından slayt planını birlikte çıkarıyor, taslağınıza
        geri bildirim veriyor ve sunum öncesi prova yapıyoruz.
      </p>
    </ServiceLanding>
  );
}
