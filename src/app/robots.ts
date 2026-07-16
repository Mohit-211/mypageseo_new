import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://mypageseo.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/checkout/", "/api/", "/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
