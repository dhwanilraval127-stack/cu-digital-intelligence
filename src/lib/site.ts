export const siteConfig = {
  name: "CU Digital Intelligence",
  shortName: "CU",
  tagline: "Technology built around your business.",
  description:
    "CU Digital Intelligence builds practical AI, data, automation and software solutions around how modern businesses work.",
  disciplines: ["AI", "Data", "Automation", "Engineering"] as const,
  // Required in production. Local development falls back to localhost.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  contactEmail: process.env.CONTACT_EMAIL ?? "",
  locale: "en-AU",
} as const;

if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SITE_URL) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be configured in production.");
}

export type SiteConfig = typeof siteConfig;
