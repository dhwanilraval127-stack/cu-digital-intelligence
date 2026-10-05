import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CU Digital Intelligence",
    short_name: "CU",
    description:
      "CU Digital Intelligence builds practical AI, data, automation and software solutions around how modern businesses work.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#FCF9F5",
    theme_color: "#FCF9F5",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
