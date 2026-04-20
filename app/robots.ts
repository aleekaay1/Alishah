import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://alishahcv.vercel.app/sitemap.xml",
    host: "https://alishahcv.vercel.app",
  };
}
