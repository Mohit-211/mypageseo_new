"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { getCategoriesAPI } from "@/api/category.api";
import type { ApiCategory } from "@/api/category.api";

export function useCategories() {
  const [categories, setCategories] = useState<ApiCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const requestIdRef = useRef(0);

  const fetchCategories = useCallback(() => {
    const requestId = ++requestIdRef.current;

    setLoading(true);
    setError(null);

    getCategoriesAPI({ page: 1, limit: 100, sortBy: "ASC" })
      .then((res) => {
        if (requestId !== requestIdRef.current) return;

        setCategories(Array.isArray(res?.data?.results) ? res.data.results : []);
      })
      .catch((err: any) => {
        if (requestId !== requestIdRef.current) return;

        setError(
          err?.response?.data?.message ?? err?.message ?? "Failed to load categories"
        );
        setCategories([]);
      })
      .finally(() => {
        if (requestId !== requestIdRef.current) return;

        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return {
    categories,
    loading,
    error,
    refetch: fetchCategories,
  };
}
