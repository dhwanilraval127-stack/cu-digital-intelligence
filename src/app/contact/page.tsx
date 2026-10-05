import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Section } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Start a conversation — CU Digital Intelligence",
  description:
    "Tell CU Digital Intelligence what you're trying to build, improve or automate — and we'll help you shape the right approach.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Have a problem worth solving?"
        description="Tell us what you're trying to build, improve or automate."
      />
      <Breadcrumbs
        className="mx-auto w-full max-w-7xl px-5 pt-8 sm:px-8 lg:px-12"
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <Section className="pt-4 pb-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="space-y-10">
              <div>
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cu-primary">
                  What happens next
                </h2>
                <ol className="mt-5 space-y-5">
                  {[
                    "We read it. A real person — not a pipeline — reviews every enquiry.",
                    "We reply honestly. If we can help, we'll say how. If we can't, we'll say that too.",
                    "We shape the approach together. Conversations first, commitments later.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cu-border-strong font-mono text-[10px] text-cu-primary"
                      >
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-cu-muted">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {siteConfig.contactEmail ? (
                <div className="border-t border-cu-border pt-8">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cu-primary">
                    Prefer email?
                  </h2>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="cu-link mt-4 inline-block font-medium text-cu-primary-dark"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
              ) : null}

              <div className="border-t border-cu-border pt-8">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cu-primary">
                  Good to know
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-cu-muted">
                  Your details are used only to respond to your enquiry. No
                  lists, no follow-up sequences, no sharing.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
