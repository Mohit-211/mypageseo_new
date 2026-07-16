"use client";

import { useMemo, useState } from "react";
import { BlogHero } from "./blog-hero";
import { CategoryNav } from "./category-nav";
import { FeaturedPost } from "./featured-post";
import { RecentPosts } from "./recent-posts";
import { PopularGuides } from "./popular-guides";
import { SoftwareUpdates } from "./software-updates";
import { FeaturedTopics } from "./featured-topics";
import { NewsletterSignup } from "./newsletter-signup";
import { BlogCTA } from "./blog-cta";
import { categories, featured, posts } from "./blog-data";

export function InsightsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const catOk = cat === "All" || p.c === cat;
      const qOk = !q || (p.t + " " + p.d + " " + p.c).toLowerCase().includes(q.toLowerCase());
      return catOk && qOk;
    });
  }, [q, cat]);

  return (
    <div>
      <BlogHero q={q} setQ={setQ} />
      <CategoryNav categories={categories} cat={cat} setCat={setCat} />

      {(cat === "All" || cat === featured.c) && !q && <FeaturedPost post={featured} />}

      <RecentPosts
        posts={filtered}
        totalCount={posts.length}
        cat={cat}
        onClearFilters={() => {
          setQ("");
          setCat("All");
        }}
      />

      <PopularGuides />
      <SoftwareUpdates />
      <FeaturedTopics setCat={setCat} setQ={setQ} />
      <NewsletterSignup />
      <BlogCTA />
    </div>
  );
}
