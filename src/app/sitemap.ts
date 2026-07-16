import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://mypageseo.com";

const IGNORED_FILES = new Set([
  "layout.tsx",
  "loading.tsx",
  "error.tsx",
  "not-found.tsx",
  "template.tsx",
  "default.tsx",
  "robots.ts",
  "sitemap.ts",
  "manifest.ts",
  "icon.tsx",
  "apple-icon.tsx",
  "opengraph-image.tsx",
  "twitter-image.tsx",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "src/app");

  function scan(dir: string, route = ""): MetadataRoute.Sitemap {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    let urls: MetadataRoute.Sitemap = [];

    for (const entry of entries) {
      const name = entry.name;
      const fullPath = path.join(dir, name);

      // Ignore internal Next.js folders/files
      if (
        name.startsWith("_") ||
        name.startsWith("(") ||
        name.startsWith("[") ||
        name === "api" ||
        IGNORED_FILES.has(name)
      ) {
        continue;
      }

      if (entry.isDirectory()) {
        urls.push(...scan(fullPath, `${route}/${name}`));
        continue;
      }

      if (name === "page.tsx") {
        urls.push({
          url: `${BASE_URL}${route || "/"}`,
          lastModified: new Date(),
          changeFrequency: route === "" ? "daily" : "weekly",
          priority: route === "" ? 1 : 0.8,
        });
      }
    }

    return urls;
  }

  return scan(appDir);
}
