"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getBlogsAPI, getBlogsByCategoryAPI } from "@/api/blog.api";
import type { ApiBlog } from "@/api/blog.api";

interface UseBlogPostsParams {
  search?: string;
  categoryId?: string;
}

// The `/blog-category/:id` response shape hasn't been confirmed against a real
// payload yet, so this accepts either a paginated `results` list or a plain
// `blogs` array until it's verified.
function extractPosts(data: any): ApiBlog[] {
  if (Array.isArray(data?.results)) return data.results;
  if (Array.isArray(data?.blogs)) return data.blogs;
  if (Array.isArray(data)) return data;
  return [];
}

export function useBlogPosts({ search, categoryId }: UseBlogPostsParams = {}) {
  const [posts, setPosts] = useState<ApiBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const requestIdRef = useRef(0);

  const fetchPosts = useCallback(() => {
    const requestId = ++requestIdRef.current;

    setLoading(true);
    setError(null);

    const params = { page: 1, limit: 100, sortBy: "ASC" as const, search };
    const request = categoryId
      ? getBlogsByCategoryAPI(categoryId, params)
      : getBlogsAPI(params);

    request
      .then((res) => {
        if (requestId !== requestIdRef.current) return;

        setPosts(extractPosts(res?.data));
      })
      .catch((err: any) => {
        if (requestId !== requestIdRef.current) return;

        setError(
          err?.response?.data?.message ?? err?.message ?? "Failed to load posts"
        );
        setPosts([]);
      })
      .finally(() => {
        if (requestId !== requestIdRef.current) return;

        setLoading(false);
      });
  }, [search, categoryId]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return {
    posts,
    loading,
    error,
    refetch: fetchPosts,
  };
}
