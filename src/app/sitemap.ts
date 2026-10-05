import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.8 },
    { path: "/work", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    { path: "/accessibility", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority,
  }));
}
