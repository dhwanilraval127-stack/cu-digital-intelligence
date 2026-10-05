import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function Positioning() {
  return (
    <section aria-label="Our position" className="border-y border-cu-border bg-cu-surface/40">
      <Container className="py-20 sm:py-24 lg:py-28">
        <Reveal className="max-w-4xl">
          <p className="text-h2 font-medium leading-[1.25] tracking-[-0.015em] text-cu-text">
            Technology should fit the way your business works —{" "}
            <span className="text-cu-primary">not the other way around.</span>
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cu-muted">
            Most software asks a business to bend around it. We take the
            opposite approach: understand how you operate first, then design
            the AI, data, automation and engineering around it. The result is
            technology that feels less like a tool you maintain and more like
            capability you own.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
