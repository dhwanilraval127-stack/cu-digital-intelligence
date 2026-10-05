import Image from "next/image";
import { Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button, ButtonArrow } from "@/components/ui/button";

export function Approach() {
  return (
    <Section id="about" ariaLabel="About CU" className="border-t border-cu-border">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
        {/* Narrative. */}
        <div>
          <SectionHeading
            eyebrow="Why CU exists"
            title="Technology with purpose."
          />
          <Reveal className="mt-8 space-y-6 text-lg leading-relaxed text-cu-muted">
            <p>
              Businesses don&rsquo;t need more software. They need their
              knowledge, data and processes to finally work together — so
              decisions get easier, work gets lighter and the business can
              move.
            </p>
            <p>
              The gap between what technology can do and what it actually does
              for a business is rarely a technology problem. It&rsquo;s an
              understanding problem. So we start with the business — how it
              runs, where it strains, what its data is trying to say — and
              then we build: AI that knows your domain, automation that
              respects your oversight, data that speaks in decisions, and
              software engineered to last.
            </p>
            <p>
              Business understanding, data, AI, automation and software
              engineering — combined into practical systems, and built to grow
              with you.
            </p>
          </Reveal>
          <Reveal className="mt-10" delay={0.1}>
            <Button href="/about" variant="secondary">
              More about CU <ButtonArrow />
            </Button>
          </Reveal>
        </div>

        {/* Image 3 — real-world engineering context (clearly a CU studio image). */}
        <Reveal delay={0.08}>
          <figure>
            <div className="overflow-hidden rounded-[4px] border border-cu-border">
              <div className="relative aspect-[1672/941] w-full">
                <Image
                  src="/images/cu-approach-ai.png"
                  alt="Studio workspace with architectural drawings, measurement tools and a detailed model of an interconnected system — engineering shaped by understanding and design."
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="h-full w-full"
                />
              </div>
            </div>
            <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-cu-muted">
              Studio context — Designed deliberately. Engineered precisely.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
