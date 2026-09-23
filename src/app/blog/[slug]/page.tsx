import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";
import { getBlogBySlugAPI, getBlogsAPI } from "@/api/blog.api";
import {
  extractHeadings,
  mapApiBlogToArticle,
  mapApiBlogToRelated,
} from "@/components/blog/article/article-data";
import { ReadingProgress } from "@/components/blog/article/reading-progress";
import { ArticleHero } from "@/components/blog/article/article-hero";
import { ArticleContent } from "@/components/blog/article/article-content";
import { AuthorBio } from "@/components/blog/article/author-bio";
import { RelatedArticles } from "@/components/blog/article/related-articles";
import { ArticleCTA } from "@/components/blog/article/article-cta";

const getArticle = cache(async (slug: string) => {
  try {
    const res = await getBlogBySlugAPI(slug);
    return res?.data ? mapApiBlogToArticle(res.data) : null;
  } catch {
    return null;
  }
});

async function getRelatedArticles(slug: string, categoryId: string) {
  try {
    const res = await getBlogsAPI({ limit: 4, category_id: categoryId || undefined });
    const blogs = res?.data?.results ?? [];
    return blogs
      .filter((b) => b.slug !== slug)
      .slice(0, 3)
      .map(mapApiBlogToRelated);
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: "Article not found — MyPageSEO",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${article.title} — MyPageSEO Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const sections = extractHeadings(article.content);
  const relatedArticles = await getRelatedArticles(slug, article.categoryId);

  return (
    <div>
      <ReadingProgress />
      <ArticleHero article={article} />
      <ArticleContent content={article.content} sections={sections}/>
      {/* <AuthorBio author={article.author} position={article.author_position} /> */}
      <RelatedArticles articles={relatedArticles} />
      <ArticleCTA />
    </div>
  );
}
