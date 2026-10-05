import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Section } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button, ButtonArrow } from "@/components/ui/button";
import {
  ServiceDeskMockup,
  OperationsMockup,
  DocumentPipelineMockup,
} from "@/components/work/concept-mockups";
import { buildMetadata } from "@/lib/seo/metadata";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Work | Concept Projects & Experiments — CU Digital Intelligence",
  description:
    "CU concept builds and experiments — demonstrations of how we approach AI, data and engineering problems.",
  path: "/work",
});

const mockups = [ServiceDeskMockup, OperationsMockup, DocumentPipelineMockup];

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected experiments"
        title="Concept builds, clearly labelled."
        description="These are CU's own product demonstrations — not client case studies. Each shows how we think, and each is designed to become a real case study as client work lands."
      />
      <Breadcrumbs
        className="mx-auto w-full max-w-7xl px-5 pt-8 sm:px-8 lg:px-12"
        items={[
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ]}
      />

      <Section className="pt-4">
        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, i) => {
            const Mockup = mockups[i] ?? ServiceDeskMockup;
            const reversed = i % 2 === 1;
            return (
              <Reveal key={project.slug} as="article">
                <article
                  id={project.slug}
                  className={cn(
                    "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
                    reversed && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  <div>
                    <p className="font-mono text-xs tracking-widest text-cu-primary">
                      {project.label}
                    </p>
                    <h2 className="mt-3 text-h2 font-semibold text-cu-text">
                      {project.title}
                    </h2>
                    <dl className="mt-8 space-y-6 text-[15px] leading-relaxed">
                      {[
                        ["Problem", project.problem],
                        ["Solution", project.solution],
                        ["Outcome", project.outcome],
                      ].map(([term, desc]) => (
                        <div key={term}>
                          <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cu-primary">
                            {term}
                          </dt>
                          <dd className="mt-1.5 text-cu-muted">{desc}</dd>
                        </div>
                      ))}
                    </dl>
                    <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technology">
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
                  <div className="relative">
                    <div
                      aria-hidden="true"
                      className="cu-grain absolute -inset-4 -z-10 rounded-[4px] bg-cu-surface/60"
                    />
                    <Mockup />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="border-t border-cu-border bg-cu-surface/40" ariaLabel="Work call to action">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2 font-semibold text-cu-text">
            The next one could be yours.
          </h2>
          <p className="mt-5 text-lead text-cu-muted">
            We&rsquo;re looking for the first real problems to point this
            practice at. If your business has one, we should talk.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Start a conversation <ButtonArrow />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
