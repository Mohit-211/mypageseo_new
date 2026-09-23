import type { ApiBlog } from "@/api/blog.api";

export type CoverKind = "map" | "gbp" | "chart" | "reviews" | "citations";

export type Article = {
  title: string;
  category: string;
  categoryId: string;
  excerpt: string;
  content: string;
  date: string;
  updated: string;
  read: string;
  author: string;
  cover: CoverKind;
  coverImage?: string;
  author_position?: string;
};

export type Section = { id: string; title: string };

const COVER_CYCLE: CoverKind[] = ["map", "gbp", "chart", "reviews", "citations"];

function coverFromSlug(slug: string): CoverKind {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  return COVER_CYCLE[hash % COVER_CYCLE.length];
}

function formatDate(value?: string): string {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[*_`~]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolveCategory(blog: ApiBlog): { category: string; categoryId: string } {
  const fromArray = blog.categories?.[0];
  if (fromArray) return { category: fromArray.title ?? "", categoryId: fromArray._id ?? "" };

  const rawCategory = blog.category;
  if (rawCategory && typeof rawCategory === "object") {
    return { category: rawCategory.title ?? "", categoryId: rawCategory._id ?? "" };
  }

  return { category: rawCategory ?? "", categoryId: blog.category_id ?? "" };
}

export function mapApiBlogToArticle(blog: ApiBlog): Article {
  const { category, categoryId } = resolveCategory(blog);
  return {
    title: blog.name,
    category,
    categoryId,
    excerpt: blog.short_description ?? "",
    content: blog.content ?? "",
    date: formatDate(blog.date ?? blog.created_at),
    author_position: blog.author_position ?? "",
    updated: formatDate(blog.updated_at ?? blog.created_at),
    read: blog.read_time ?? "---",
    author: blog.author ?? "",
    cover: coverFromSlug(blog.slug || blog.name),
    coverImage: blog.main_image ?? undefined,
  };
}

// Builds the "on this page" table of contents from the article's h2 headings.
export function extractHeadings(markdown: string): Section[] {
  if (!markdown) return [];

  const seen = new Map<string, number>();
  const sections: Section[] = [];

  for (const match of markdown.matchAll(/^##\s+(.+)$/gm)) {
    const title = match[1].replace(/[*_`~]/g, "").trim();
    if (!title) continue;

    const base = slugify(title);
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    const id = count === 0 ? base : `${base}-${count}`;

    sections.push({ id, title });
  }

  return sections;
}

export type RelatedArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  cover: CoverKind;
  coverImage?: string;
};

export function mapApiBlogToRelated(blog: ApiBlog): RelatedArticle {
  const { category } = resolveCategory(blog);

  return {
    slug: blog.slug,
    title: blog.name,
    category,
    date: formatDate(blog.date ?? blog.created_at),
    excerpt: blog.short_description ?? "",
    cover: coverFromSlug(blog.slug || blog.name),
    coverImage: blog.main_image ?? undefined,
  };
}
