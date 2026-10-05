import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import {
  legalNav,
  primaryNav,
} from "@/components/navigation/nav-links";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const hasRealContactEmail =
    Boolean(siteConfig.contactEmail) &&
    !siteConfig.contactEmail.includes("example");

  return (
    <footer className="border-t border-cu-border bg-cu-surface">
      <Container className="py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* BRAND */}
          <div>
            <Link
              href="/"
              aria-label="CU Digital Intelligence — home"
              className="inline-flex items-center"
            >
              <Image
                src="/images/cu-wordmark.png"
                alt="CU Digital Intelligence"
                width={1400}
                height={330}
                priority
                className="h-auto w-[230px] object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cu-muted">
              Technology built around your business.
            </p>

            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cu-primary">
              AI • Data • Automation • Engineering
            </p>
          </div>

          {/* COMPANY */}
          <nav aria-label="Footer company navigation">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cu-text">
              Company
            </h2>

            <ul className="mt-5 space-y-3">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cu-muted transition-colors duration-200 hover:text-cu-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* LEGAL */}
          <nav aria-label="Legal">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cu-text">
              Legal
            </h2>

            <ul className="mt-5 space-y-3">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cu-muted transition-colors duration-200 hover:text-cu-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {hasRealContactEmail && (
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="mt-8 inline-block break-all text-sm font-medium text-cu-primary transition-colors duration-200 hover:text-cu-primary-dark"
              >
                {siteConfig.contactEmail}
              </a>
            )}
          </nav>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-12 flex flex-col gap-4 border-t border-cu-border pt-6 text-xs text-cu-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-cu-primary">
            AI • Data • Automation • Engineering
          </p>
        </div>
      </Container>
    </footer>
  );
}