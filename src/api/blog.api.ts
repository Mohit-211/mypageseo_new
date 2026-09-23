import api from "./client";

export type SortOrder = "ASC" | "DESC";

export interface BlogQueryParams {
  page?: number;
  limit?: number;
  sortBy?: SortOrder;
  search?: string;
  category_id?: string;
}

export interface ApiBlogCategory {
  _id: string;
  title: string;
  slug?: string;
}

export interface ApiBlog {
  name: string;
  categories: ApiBlogCategory[];
  short_description: string;
  date: string | undefined;
  main_image: string | undefined;
  author_position: string;
  _id: string;
  slug: string;
  content?: string;
  category?: string | ApiBlogCategory;
  category_id?: string;
  author?: string;
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
  { page = 1, limit = 100, sortBy = "ASC", search, category_id }: BlogQueryParams = {}
): Promise<BlogListResponse> => {
  const { data } = await api.get("/blog/get", {
    params: {
      page,
      limit,
      sortBy,
      ...(search ? { search } : {}),
      ...(category_id ? { category_id } : {}),
    },
  });

  return data;
};

export const getBlogBySlugAPI = async (
  slug: string
): Promise<BlogDetailResponse> => {
  const { data } = await api.get(`/blog/slug/${slug}`);

  return data;
};
