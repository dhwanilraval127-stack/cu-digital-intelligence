import { Hero } from "@/components/hero/hero";
import { Positioning } from "@/components/about/positioning";
import { ServicesSection } from "@/components/services/services-section";
import { HowCuWorks } from "@/components/process/how-cu-works";
import { SelectedWork } from "@/components/work/selected-work";
import { CapabilitiesSection } from "@/components/services/capabilities-section";
import { Approach } from "@/components/about/approach";
import { OnDemand } from "@/components/services/on-demand";
import { FinalCta } from "@/components/contact/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Positioning />
      <ServicesSection />
      <HowCuWorks />
      <SelectedWork />
      <CapabilitiesSection />
      <Approach />
      <OnDemand />
      <FinalCta />
    </>
  );
}
