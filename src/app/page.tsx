import { faqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReportService from "@/components/ReportService";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import LinkedInSection from "@/components/LinkedInSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export const metadata = pageMetadata(
  "Tez, Makale ve SPSS Analiz Danışmanlığı",
  "Tez, makale ve SPSS analizi için akademik danışmanlık. Araştırma planlama, akademik editörlük, APA ve tez biçimlendirme desteği. İlk görüşme ücretsiz.",
  "/",
);

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <ReportService />
        <LinkedInSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
