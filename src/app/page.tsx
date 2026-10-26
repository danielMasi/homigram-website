import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { ConfidenceSection } from "@/components/ConfidenceSection";
import { HowItWorks } from "@/components/HowItWorks";
import { InvestmentSection } from "@/components/InvestmentSection";
import { HandleInvestment } from "@/components/HandleInvestment";
import { PricingSection } from "@/components/PricingSection";
import { WhyChoose } from "@/components/WhyChoose";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/faqs";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
} from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icons/icon-512.png`,
      email: SUPPORT_EMAIL,
      areaServed: { "@type": "Country", name: "Kenya" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en-KE",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={structuredData} />
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <ConfidenceSection />
        <HowItWorks />
        <InvestmentSection />
        <HandleInvestment />
        <PricingSection />
        <WhyChoose />
        <Testimonials />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  );
}
