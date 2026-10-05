const getSiteUrl = () => {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configuredUrl) {
    return configuredUrl.replace(/\/+$/, "");
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();

  if (vercelUrl) {
    return `https://${vercelUrl}`.replace(/\/+$/, "");
  }

  return "http://localhost:3000";
};

export const siteConfig = {
  name: "CU Digital Intelligence",
  shortName: "CU",
  tagline: "Technology built around your business.",
  description:
    "CU Digital Intelligence builds practical AI, data, automation and software solutions around how modern businesses work.",
  disciplines: ["AI", "Data", "Automation", "Engineering"] as const,
  url: getSiteUrl(),
  contactEmail: process.env.CONTACT_EMAIL?.trim() ?? "",
  locale: "en-AU",
} as const;

export type SiteConfig = typeof siteConfig;