import Image from "next/image";
import { Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/lib/process";

export function HowCuWorks() {
  return (
    <Section id="process" ariaLabel="How CU works" className="bg-cu-surface/40">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        {/* Image 2 — visual anchor. */}
        <Reveal className="lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-[4px] border border-cu-border">
            <div className="relative aspect-[1915/821] w-full">
              <Image
                src="/images/cu-how-it-works-ai.png"
                alt="Sequential architectural frames showing work progressing from scattered complexity into structured, engineered and scalable systems."
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="h-full w-full"
              />
            </div>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-cu-muted">
            From scattered complexity to engineered capability
          </p>
        </Reveal>

        {/* Process content. */}
        <div>
          <SectionHeading
            eyebrow="How CU works"
            title="From complexity to capability."
            description="Every business challenge is different. We combine strategy, design, engineering and intelligent technology to build solutions around the way your organisation actually works."
          />

          {/* Horizontal process — desktop. */}
          <ol className="mt-14 hidden grid-cols-5 gap-6 lg:grid">
            {processSteps.map((step, i) => (
              <li key={step.number} className="relative">
                <div className="flex items-center">
                  <span className="h-[2px] w-full bg-cu-border">
                    <span
                      className="block h-full bg-cu-primary"
                      style={{ width: `${((i + 1) / processSteps.length) * 100}%` }}
                    />
                  </span>
                </div>
                <p className="mt-5 font-mono text-xs tracking-widest text-cu-sand">
                  {step.number}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-cu-text">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cu-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          {/* Vertical timeline — mobile / tablet. */}
          <ol className="mt-12 space-y-0 lg:hidden">
            {processSteps.map((step, i) => (
              <li key={step.number} className="relative flex gap-5 pb-10 last:pb-0">
                {i < processSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[13px] top-9 h-[calc(100%-2.25rem)] w-px bg-cu-border-strong"
                  />
                )}
                <span className="relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cu-border-strong bg-cu-bg">
                  <span className="h-2 w-2 rounded-full bg-cu-primary" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[11px] tracking-widest text-cu-sand">
                    {step.number} — {step.title}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-cu-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cu-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
