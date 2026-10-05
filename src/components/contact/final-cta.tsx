import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button, ButtonArrow } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section aria-label="Contact CU" className="relative overflow-hidden bg-cu-bg">
      {/* Architectural hairline accents. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cu-primary-via-cu-primary-dark to-cu-soft"
        style={{
          background:
            "linear-gradient(90deg, #C86B3F 0%, #93452D 50%, #D98B60 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-cu-soft via-cu-primary-via-cu-primary-dark to-cu-primary"
        style={{
          background:
            "linear-gradient(90deg, #D98B60 0%, #93452D 50%, #C86B3F 100%)",
        }}
      />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cu-primary">
            Start here
          </p>
          <h2 className="mt-5 text-h1 font-semibold tracking-[-0.02em] text-cu-text">
            Have a problem worth solving?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cu-muted">
            Tell us what you&rsquo;re trying to build, improve or automate.
            We&rsquo;ll tell you honestly whether we can help — and how.
          </p>
          <div className="mt-10">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
            >
              Start a conversation <ButtonArrow />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
