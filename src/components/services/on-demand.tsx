import { Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button, ButtonArrow } from "@/components/ui/button";

const flow = ["Idea", "Prototype", "Build", "Integrate", "Scale"];

export function OnDemand() {
  return (
    <Section
      id="on-demand"
      ariaLabel="On-demand technology"
      className="border-t border-cu-border"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="On-Demand Technology"
            title="Something else in mind?"
            description="Not every technology requirement fits into a predefined service. Bring us your challenge, idea or requirement and we'll work with you to determine the right approach."
          />
          <p className="mt-8 border-l-2 border-cu-primary pl-5 text-lg font-medium text-cu-primary-dark">
            Your requirement. Our expertise.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary" size="lg">
              Start a conversation <ButtonArrow />
            </Button>
          </div>
        </Reveal>

        {/* CSS/SVG flow — Idea → Prototype → Build → Integrate → Scale */}
        <Reveal delay={0.08} className="flex items-center">
          <ol
            className="w-full"
            aria-label="On-demand delivery flow: idea, prototype, build, integrate, scale"
          >
            {flow.map((step, i) => {
              const last = i === flow.length - 1;
              return (
                <li key={step} className="flex items-stretch gap-4">
                  {/* Node + connector */}
                  <div className="flex flex-col items-center">
                    <span
                      className={
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold " +
                        (last
                          ? "border-cu-primary-dark bg-cu-primary-dark text-cu-bg"
                          : "border-cu-border-strong bg-cu-bg text-cu-primary-dark")
                      }
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    {!last && (
                      <span
                        aria-hidden="true"
                        className="my-1 w-px flex-1 bg-gradient-to-b from-cu-border-strong to-cu-border"
                      />
                    )}
                  </div>
                  {/* Label + description */}
                  <div className={last ? "pb-0" : "pb-6"}>
                    <p className="pt-1.5 text-base font-semibold text-cu-text">
                      {step}
                    </p>
                    <p className="mt-0.5 text-sm text-cu-muted">
                      {[
                        "Bring the problem, half-formed or fully scoped.",
                        "A working shape of the answer, fast.",
                        "Engineered properly — not just made to work.",
                        "Connected to the systems you already run.",
                        "Grown carefully as the requirement evolves.",
                      ][i]}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
