import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Section } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button, ButtonArrow } from "@/components/ui/button";
import { HowCuWorks } from "@/components/process/how-cu-works";
import { OnDemand } from "@/components/services/on-demand";
import { buildMetadata } from "@/lib/seo/metadata";
import { services } from "@/lib/services";

export const metadata: Metadata = buildMetadata({
  title: "Services | AI, Automation, Data & Software — CU Digital Intelligence",
  description:
    "Six focused services across AI, automation, data and software engineering — delivered around the way your business works.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Six disciplines, one coherent practice."
        description="Every service draws from the same foundation — business understanding, data, AI, automation and engineering — and combines with the others when your challenge needs it."
      />
      <Breadcrumbs
        className="mx-auto w-full max-w-7xl px-5 pt-8 sm:px-8 lg:px-12"
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <Section className="pt-4">
        <div className="space-y-0">
          {services.map((service, _i) => (
            <Reveal key={service.slug} as="article">
              <article
                id={service.slug}
                className="grid grid-cols-1 gap-8 border-t border-cu-border py-12 lg:grid-cols-[120px_1.2fr_1fr] lg:gap-14 lg:py-16"
              >
                <div>
                  <p className="font-mono text-sm tracking-widest text-cu-sand">
                    {service.number}
                  </p>
                  <div
                    aria-hidden="true"
                    className="mt-4 h-10 w-10 shrink-0 rounded-[4px] border border-cu-border bg-cu-bg flex items-center justify-center text-cu-primary"
                  >
                    <span className="text-sm font-semibold">{service.number}</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-h3 font-semibold text-cu-text">
                    {service.title}
                  </h2>
                  <p className="mt-5 leading-relaxed text-cu-muted">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="cu-link mt-6 inline-block text-sm font-semibold text-cu-primary"
                  >
                    Discuss {service.title.split(" ")[0].toLowerCase()} →
                  </Link>
                </div>
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cu-primary">
                    Capabilities
                  </h3>
                  <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {service.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="border-b border-cu-border/70 pb-2 text-sm text-cu-muted"
                      >
                        {cap}
                      </li>
                    ))}
                  </ul>
                  {service.subCapabilities && service.subCapabilities.length > 0 && (
                    <>
                      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cu-primary">
                        How we work
                      </p>
                      <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {service.subCapabilities.map((cap) => (
                          <li
                            key={cap}
                            className="border-b border-cu-border/70 pb-2 text-sm text-cu-muted"
                          >
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <HowCuWorks />

      <div className="border-t border-cu-border">
        <OnDemand />
      </div>

      <Section className="bg-cu-surface/40" ariaLabel="Services call to action">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2 font-semibold text-cu-text">
            Not sure which service fits?
          </h2>
          <p className="mt-5 text-lead text-cu-muted">
            Most engagements start with a conversation, not a category.
            Describe the problem — we&rsquo;ll shape the approach.
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
