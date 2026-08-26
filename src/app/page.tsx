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

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
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
