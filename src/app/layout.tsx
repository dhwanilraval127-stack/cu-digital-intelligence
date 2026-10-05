import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "CU Digital Intelligence | AI, Data, Automation & Software",
  description:
    "CU Digital Intelligence builds practical AI, data, automation and software solutions around how modern businesses work.",
  path: "/",
  ogImage: "/opengraph-image",
});

export const viewport: Viewport = {
  themeColor: "#FCF9F5",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden bg-cu-background font-sans text-cu-text antialiased">
        {/* ACCESSIBILITY */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[3px] focus:bg-cu-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to main content
        </a>

        <SiteHeader />

        <main id="main-content">
          {children}
        </main>

        <SiteFooter />

        {/* ORGANIZATION + WEBSITE SCHEMA */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema(),
              websiteSchema(),
            ]),
          }}
        />

      </body>
    </html>
  );
}