"use client";

import { useEffect, useMemo, useState } from "react";
import { BlogHero } from "./blog-hero";
import { CategoryNav } from "./category-nav";
import type { CategoryOption } from "./category-nav";
import { FeaturedPost } from "./featured-post";
import { RecentPosts } from "./recent-posts";
import { PopularGuides } from "./popular-guides";
import { SoftwareUpdates } from "./software-updates";
import { FeaturedTopics } from "./featured-topics";
import { NewsletterSignup } from "./newsletter-signup";
import { BlogCTA } from "./blog-cta";
import { mapApiBlogToPost } from "./blog-data";
import { useCategories } from "@/hooks/use-categories";
import { useBlogPosts } from "@/hooks/use-blog-posts";

const ALL_CATEGORY_ID = "all";

export function InsightsPage() {
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState("");
  const [catId, setCatId] = useState(ALL_CATEGORY_ID);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedQ(q.trim()), 300);
    return () => clearTimeout(timeout);
  }, [q]);

  const { categories: apiCategories, loading: categoriesLoading } = useCategories();
  const {
    posts: apiPosts,
    loading: postsLoading,
    error: postsError,
  } = useBlogPosts({
    search: debouncedQ || undefined,
    categoryId: catId === ALL_CATEGORY_ID ? undefined : catId,
  });
  const categoryOptions: CategoryOption[] = useMemo(
    () => [
      { id: ALL_CATEGORY_ID, title: "All" },
      ...apiCategories.map((c) => ({ id: c._id, title: c.title })),
    ],
    [apiCategories]
  );
  const catLabel = categoryOptions.find((c) => c.id === catId)?.title ?? "All";

  const posts = useMemo(() => apiPosts.map((p) => mapApiBlogToPost(p)), [apiPosts]);
  const featured = posts[0];

  const handleSearch = (value: string) => {
    setQ(value);
    if (value.trim()) setCatId(ALL_CATEGORY_ID);
  };

  const handleCategorySelect = (id: string) => {
    setCatId(id);
    setQ("");
  };
console.log(posts,'posts')
  return (
    <div>
      <BlogHero q={q} setQ={handleSearch} />
      {!categoriesLoading && (
        <CategoryNav categories={categoryOptions} activeId={catId} onSelect={handleCategorySelect} />
      )}

      {postsLoading && (
        <div className="container-page py-16 space-y-6" aria-hidden>
          <div className="h-64 rounded-3xl animate-pulse bg-muted/40" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-72 rounded-2xl animate-pulse bg-muted/40" />
            ))}
          </div>
        </div>
      )}

      {!postsLoading && postsError && (
        <div className="container-page py-16">
          <p className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
            Couldn&apos;t load articles: {postsError}
          </p>
        </div>
      )}

      {!postsLoading && !postsError && (
        
        <>
          {featured && !q && <FeaturedPost post={featured} />}

          <RecentPosts
            posts={posts}
            totalCount={posts.length}
            cat={catLabel}
            onClearFilters={() => {
              setQ("");
              setCatId(ALL_CATEGORY_ID);
            }}
          />
        </>
      )}

      <PopularGuides />
      <SoftwareUpdates />
      <FeaturedTopics categories={categoryOptions} setCatId={handleCategorySelect} setQ={setQ} />
      <NewsletterSignup />
      {/* <BlogCTA /> */}
    </div>
  );
}
