import api from "./client";

export type SortOrder = "ASC" | "DESC";

export interface BlogQueryParams {
  page?: number;
  limit?: number;
  sortBy?: SortOrder;
  search?: string;
}

export interface ApiBlog {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  content?: string;
  category?: string;
  author?: string;
  cover_image?: string;
  read_time?: string;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface BlogListResponse {
  success: boolean;
  message?: string;
  status?: number;
  data: {
    results: ApiBlog[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
  };
}

export interface BlogDetailResponse {
  success: boolean;
  message?: string;
  status?: number;
  data: ApiBlog;
}

export const getBlogsAPI = async (
  { page = 1, limit = 100, sortBy = "ASC", search }: BlogQueryParams = {}
): Promise<BlogListResponse> => {
  const { data } = await api.get("/blog/get", {
    params: { page, limit, sortBy, ...(search ? { search } : {}) },
  });

  return data;
};

export const getBlogsByCategoryAPI = async (
  categoryId: string,
  { page = 1, limit = 100, sortBy = "ASC", search }: BlogQueryParams = {}
): Promise<BlogListResponse> => {
  const { data } = await api.get(`/blog-category/${categoryId}`, {
    params: { page, limit, sortBy, ...(search ? { search } : {}) },
  });

  return data;
};

export const getBlogBySlugAPI = async (
  slug: string
): Promise<BlogDetailResponse> => {
  const { data } = await api.get(`/blog/slug/${slug}`);

  return data;
};
