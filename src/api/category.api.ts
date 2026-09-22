import api from "./client";

export type SortOrder = "ASC" | "DESC";

export interface CategoryQueryParams {
  page?: number;
  limit?: number;
  sortBy?: SortOrder;
}

export interface ApiCategory {
  _id: string;
  title: string;
  slug: string;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface CategoryListResponse {
  success: boolean;
  message?: string;
  status?: number;
  data: {
    results: ApiCategory[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
  };
}

export const getCategoriesAPI = async (
  { page = 1, limit = 100, sortBy = "ASC" }: CategoryQueryParams = {}
): Promise<CategoryListResponse> => {
  const { data } = await api.get("/blog-category/get", {
    params: { page, limit, sortBy },
  });

  return data;
};
