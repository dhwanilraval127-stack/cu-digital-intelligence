export const siteConfig = {
  name: "CU Digital Intelligence",
  shortName: "CU",
  tagline: "Technology built around your business.",
  description:
    "CU Digital Intelligence builds practical AI, data, automation and software solutions around how modern businesses work.",
  disciplines: ["AI", "Data", "Automation", "Engineering"] as const,

  // Uses the custom domain when configured.
  // Falls back to the Vercel deployment URL.
  // Falls back to localhost for local development.
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000")
  ).replace(/\/$/, ""),

  contactEmail: process.env.CONTACT_EMAIL ?? "",
  locale: "en-AU",
} as const;

export type SiteConfig = typeof siteConfig;