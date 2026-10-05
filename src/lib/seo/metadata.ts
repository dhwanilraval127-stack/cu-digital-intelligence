import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  const image = ogImage ?? "/opengraph-image";

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    applicationName: siteConfig.name,
    generator: "Next.js",
    category: "technology",
    alternates: { canonical: url },
    icons: {
      icon: [
        {
          url: "/icon.png",
          type: "image/png",
          sizes: "512x512",
        },
      ],
      apple: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_AU",
      type: "website",
      images: [{
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
