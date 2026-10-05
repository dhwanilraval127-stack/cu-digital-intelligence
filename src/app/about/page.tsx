import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Section } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button, ButtonArrow } from "@/components/ui/button";
import { OnDemand } from "@/components/services/on-demand";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About | Technology with a reason to exist — CU Digital Intelligence",
  description:
    "CU Digital Intelligence combines business understanding, data, AI, automation and software engineering into practical systems built around real businesses.",
  path: "/about",
});

const principles = [
  {
    title: "Business first, technology second",
    body: "We don't lead with a platform or a model. We lead with how your business runs — the technology choices follow from that.",
  },
  {
    title: "Practical over impressive",
    body: "A system that quietly saves ten hours a week beats a demo that dazzles once. We build for the weekly rhythm of real work.",
  },
  {
    title: "Engineering you can own",
    body: "We build systems that are documented, maintainable and honest about their limits. Dependency on us should be a choice, not a trap.",
  },
  {
    title: "Designed to grow",
    body: "Requirements change. We architect for the second and third version of the idea, not just the first.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About CU"
        title="Technology with a reason to exist."
        description="CU Digital Intelligence combines business understanding, data, AI, automation and software engineering into practical systems built around real businesses."
      />
      <Breadcrumbs
        className="mx-auto w-full max-w-7xl px-5 pt-8 sm:px-8 lg:px-12"
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <Section className="pt-4">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <Reveal className="space-y-6 text-lg leading-relaxed text-cu-muted">
            <p>
              Businesses don&rsquo;t need more software. They need their
              knowledge, data and processes to finally work together — so
              decisions get easier, work gets lighter and the business can
              move.
            </p>
            <p>
              The gap between what technology can do and what it actually does
              for a business is rarely a technology problem. It&rsquo;s an
              understanding problem. So CU starts with the business — how it
              runs, where it strains, what its data is trying to say — then
              builds: AI that knows your domain, automation that respects your
              oversight, data that speaks in decisions, and software
              engineered to last.
            </p>
            <p className="font-medium text-cu-text">
              Business understanding, data, AI, automation and software
              engineering — combined into practical systems, and built to grow
              with you.
            </p>
          </Reveal>

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
                Designed deliberately. Engineered precisely.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      <Section ariaLabel="Mission and vision" className="border-t border-cu-border bg-cu-surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cu-primary">Vision</p>
            <h2 className="mt-4 text-h2 font-semibold text-cu-text">Make intelligent technology practical for every business.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cu-primary">Mission</p>
            <p className="mt-4 text-lg leading-relaxed text-cu-muted">Combine business understanding, AI, data, automation and engineering to build technology that improves how businesses actually operate.</p>
          </Reveal>
        </div>
      </Section>

      {/* Principles */}
      <Section ariaLabel="Our principles" className="border-t border-cu-border bg-cu-surface/40">
        <Reveal>
          <h2 className="text-h2 font-semibold text-cu-text">How we work.</h2>
        </Reveal>
        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="border-t-2 border-cu-primary pt-6">
                <h3 className="text-lg font-semibold text-cu-text">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-cu-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="border-t border-cu-border">
        <OnDemand />
      </div>

      <Section ariaLabel="About call to action" className="bg-cu-surface">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2 font-semibold text-cu-text">
            Have something in mind?
          </h2>
          <p className="mt-5 text-lead text-cu-muted">
            Tell us what you&rsquo;re trying to build, improve or automate.
            We&rsquo;ll shape the approach together — start with the problem.
          </p>
          <div className="mt-9 flex justify-center">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
            >
              Start a conversation <ButtonArrow />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
