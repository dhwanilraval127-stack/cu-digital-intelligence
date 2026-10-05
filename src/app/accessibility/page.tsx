import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Section } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility — CU Digital Intelligence",
  description:
    "CU Digital Intelligence is committed to WCAG 2.2 AA accessibility. Report a barrier and we will fix it.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Inclusion"
        title="Accessibility"
        description="Technology built around people includes everyone. Here is our commitment."
      />
      <Breadcrumbs
        className="mx-auto w-full max-w-7xl px-5 pt-8 sm:px-8 lg:px-12"
        items={[
          { name: "Home", path: "/" },
          { name: "Accessibility", path: "/accessibility" },
        ]}
      />
      <Section className="pt-4 pb-24">
        <div className="mx-auto max-w-3xl space-y-12">
          <section>
            <h2 className="text-h3 font-semibold text-cu-text">Our commitment</h2>
            <p className="mt-4 leading-relaxed text-cu-muted">
              CU Digital Intelligence aims to meet WCAG 2.2 Level AA. We build
              accessibility into how we design and engineer — not as an
              afterthought.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-semibold text-cu-text">
              What this site does
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-cu-muted">
              <li>Semantic HTML with a correct heading hierarchy on every page</li>
              <li>Keyboard-operable navigation, mobile menu and contact form, with visible focus states</li>
              <li>Descriptive alt text on meaningful images</li>
              <li>Colour contrast designed to meet AA thresholds</li>
              <li>Reduced-motion support: non-essential animation is disabled when your system requests it</li>
              <li>Forms with real labels, inline validation messages and screen-reader announcements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-h3 font-semibold text-cu-text">
              Known limitations
            </h2>
            <p className="mt-4 leading-relaxed text-cu-muted">
              Accessibility is an ongoing practice. If you encounter a barrier
              on this site, tell us and we will address it.
            </p>
          </section>

          <section>
            <h2 className="text-h3 font-semibold text-cu-text">Report a barrier</h2>
            <p className="mt-4 leading-relaxed text-cu-muted">
              {siteConfig.contactEmail ? (
                <>Email{" "}<a href={`mailto:${siteConfig.contactEmail}`} className="cu-link font-medium text-cu-primary-dark">{siteConfig.contactEmail}</a> or use the </>
              ) : (
                <>Use the </>
              )}
              <a href="/contact" className="cu-link font-medium text-cu-primary-dark">contact form</a>{" "}
              with the page and what happened. We take accessibility reports seriously and respond promptly.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
