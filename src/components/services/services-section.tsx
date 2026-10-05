import { Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ServicesExplorer } from "./services-explorer";
import { CapabilitiesSection } from "./capabilities-section";

export function ServicesSection() {
  return (
    <Section id="services" ariaLabel="Services">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="Six disciplines. One coherent practice."
          description="Everything we do sits across AI, data, automation and software engineering — delivered as focused services that combine rather than compete."
        />
      </Reveal>
      <div className="mt-14 lg:mt-20">
        <ServicesExplorer />
      </div>
      <CapabilitiesSection />
    </Section>
  );
}
