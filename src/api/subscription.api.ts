import api from "./client";

export interface ApiPlan {
  _id: string;
  name: string;
  description: string;
  country: string;
  currency: string;
  monthly_price: number | null;
  setup_fee: number;
  is_active: boolean;
  badge?: string | null;
  created_at: string;
  updated_at: string;
}

export interface BusinessDetails {
  business_name: string;
  website_url: string;
  primary_business_location: string;
  additional_locations: string;
  industry_category: string;
  company_size: string;
  full_name: string;
  business_email: string;
  phone_number: string;
}

export interface CreateSubscriptionPayload {
  plan_id: string;
  coupon_code?: string;
  business_details: BusinessDetails;
}

export interface SubscriptionPaymentStatusResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export const getSubscriptionPlansAPI = async (
  country: string
): Promise<ApiPlan[]> => {
  const { data } = await api.get(`/subscription/plans/country/${country}`);
  return data?.plans ?? data?.data ?? data;
};

export const createSubscriptionAPI = async (
  payload: CreateSubscriptionPayload
) => {
  const { data } = await api.post(
    "/subscription/create-subscription",
    payload
  );

  return data;
};

export const getSubscriptionPaymentStatusAPI = async (
  subscriptionId: string
): Promise<SubscriptionPaymentStatusResponse> => {
  const { data } = await api.get("/subscription/payment-status", {
    params: {
      subscription_id: subscriptionId,
    },
  });

  return data;
};