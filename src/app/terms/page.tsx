import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Section } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms — CU Digital Intelligence",
  description: "Terms of use for the CU Digital Intelligence website.",
  path: "/terms",
});

const sections = [
  {
    title: "Use of this website",
    body: [
      "This website is provided by CU Digital Intelligence for information about our services. By using it, you agree to these terms.",
      "Concept projects are illustrative demonstrations of how CU approaches problems — not client case studies — and are labelled as such.",
    ],
  },
  {
    title: "Content and intellectual property",
    body: [
      "Text, design, graphics and concept demonstrations on this site are the property of CU Digital Intelligence unless otherwise stated.",
      "You may not reproduce or republish site content without written permission.",
    ],
  },
  {
    title: "No professional advice",
    body: [
      "Website content is general information, not professional, technical or legal advice for your specific situation. Engagements are governed by separately agreed contracts or statements of work.",
    ],
  },
  {
    title: "Accuracy and availability",
    body: [
      "We aim to keep content accurate and current, but we don't guarantee it. The site is provided on an 'as available' basis and may change without notice.",
    ],
  },
  {
    title: "Liability",
    body: [
      "To the extent permitted by law, CU Digital Intelligence is not liable for indirect or consequential loss arising from use of this website. Nothing in these terms excludes rights you have under applicable consumer law.",
    ],
  },
  {
    title: "Contact",
    body: [siteConfig.contactEmail ? `Questions about these terms: ${siteConfig.contactEmail}.` : "Questions about these terms can be submitted through the contact page."],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms"
        description="The ground rules for using this website."
      />
      <Breadcrumbs
        className="mx-auto w-full max-w-7xl px-5 pt-8 sm:px-8 lg:px-12"
        items={[
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ]}
      />
      <Section className="pt-4 pb-24">
        <div className="mx-auto max-w-3xl space-y-12">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-h3 font-semibold text-cu-text">{s.title}</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-cu-muted">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
