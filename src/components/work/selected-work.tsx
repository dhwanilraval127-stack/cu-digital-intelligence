import Link from "next/link";
import { Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Button, ButtonArrow } from "@/components/ui/button";
import {
  ServiceDeskMockup,
  OperationsMockup,
  DocumentPipelineMockup,
} from "./concept-mockups";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

const mockups = [ServiceDeskMockup, OperationsMockup, DocumentPipelineMockup];

export function SelectedWork() {
  return (
    <Section id="work" ariaLabel="Selected work" className="border-t border-cu-border">
      <Reveal>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected experiments"
            title="Built to show how we think."
            description="Real client work stays with its clients. These are CU concept builds — demonstrations of how we approach AI, data and engineering problems, and a preview of the case studies they will become."
          />
          <Button href="/work" variant="secondary" className="shrink-0">
            View all concepts <ButtonArrow />
          </Button>
        </div>
      </Reveal>

      <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-24">
        {projects.map((project, i) => {
          const Mockup = mockups[i] ?? ServiceDeskMockup;
          const reversed = i % 2 === 1;
          return (
            <Reveal key={project.slug} as="article">
              <div
                className={cn(
                  "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
                  reversed && "lg:[&>*:first-child]:order-2"
                )}
              >
                {/* Mockup. */}
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="cu-grain absolute -inset-4 -z-10 rounded-[4px] bg-cu-surface/60"
                  />
                  <Mockup />
                </div>

                {/* Narrative. */}
                <div className="max-w-xl">
                  <p className="font-mono text-xs tracking-widest text-cu-primary">
                    {project.label}
                  </p>
                  <h3 className="mt-3 text-h3 font-semibold text-cu-text">
                    {project.title}
                  </h3>

                  <dl className="mt-7 space-y-5 text-[15px] leading-relaxed">
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cu-primary">
                        Problem
                      </dt>
                      <dd className="mt-1.5 text-cu-muted">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cu-primary">
                        Solution
                      </dt>
                      <dd className="mt-1.5 text-cu-muted">{project.solution}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cu-primary">
                        Outcome
                      </dt>
                      <dd className="mt-1.5 text-cu-muted">{project.outcome}</dd>
                    </div>
                  </dl>

                  <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technology">
                    {project.technology.map((t) => (
                      <li
                        key={t}
                        className="rounded-[3px] border border-cu-border bg-cu-bg px-3 py-1.5 text-xs text-cu-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-20 border-t border-cu-border pt-10">
        <p className="max-w-2xl text-sm leading-relaxed text-cu-muted">
          Your project could be the first real case study.{" "}
          <Link href="/contact" className="cu-link font-medium text-cu-primary">
            Start the conversation
          </Link>
          .
        </p>
      </Reveal>
    </Section>
  );
}
