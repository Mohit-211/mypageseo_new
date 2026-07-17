import api from "./client";

export interface ValidateCouponPayload {
  coupon_code: string;
  plan_id: string;
}

export interface ValidateCouponResponse {
  success: boolean;
  message: string;
  data: {
    valid: boolean;
    coupon_id: string;
    plan_id: string;
    original_amount: number;
    discount_amount: number;
    final_amount: number;
    monthly_amount:number
  };
}

export const validateCouponAPI = async (
  payload: ValidateCouponPayload
): Promise<ValidateCouponResponse> => {
  const response = await api.post(
    "/subscription/coupon/validate",
    payload
  );

  return response.data;
};