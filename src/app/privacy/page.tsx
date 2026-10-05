import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Section } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy — CU Digital Intelligence",
  description: "How CU Digital Intelligence collects, uses and protects personal information.",
  path: "/privacy",
});

const sections = [
  {
    title: "Overview",
    body: [
      "CU Digital Intelligence respects your privacy. This statement explains what personal information this website collects, how it is used, and the choices available to you.",
      "This statement should be reviewed against the business's actual legal entity, jurisdiction, hosting providers and data-handling practices before the site is launched publicly.",
    ],
  },
  {
    title: "What we collect",
    body: [
      "Contact form: if you submit the contact form, we receive the name, business (optional), email address and message you provide. This information is used solely to respond to your enquiry.",
      "Server logs: like most websites, our hosting provider may record standard technical information (such as IP address and browser type) for security and operational purposes.",
    ],
  },
  {
    title: "What we don't do",
    body: [
      "We do not sell personal information.",
      "We do not add you to marketing lists without your explicit consent.",
      "We do not run advertising trackers or cross-site tracking pixels.",
    ],
  },
  {
    title: "Analytics",
    body: [
      "This site is designed to use privacy-conscious analytics, if and when enabled, that does not identify individuals and does not set cross-site advertising cookies.",
    ],
  },
  {
    title: "Data retention and security",
    body: [
      "Enquiry emails are retained only as long as needed to handle your enquiry and any follow-up. Access is limited to CU Digital Intelligence personnel who need it to respond to you.",
      "Reasonable technical and organisational measures are in place to protect personal information, including encrypted transport (HTTPS) and access-controlled systems.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You may request access to, correction of, or deletion of personal information we hold about you. Use the contact details below and we will respond within a reasonable timeframe.",
    ],
  },
  {
    title: "Contact",
    body: [
      siteConfig.contactEmail
        ? `Privacy questions can be directed to ${siteConfig.contactEmail}.`
        : "Privacy contact details will be published here when the production contact channel is configured.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy"
        description="How CU Digital Intelligence handles personal information — in plain language."
      />
      <Breadcrumbs
        className="mx-auto w-full max-w-7xl px-5 pt-8 sm:px-8 lg:px-12"
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
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
