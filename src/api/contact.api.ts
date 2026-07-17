import api from "./client";


export interface ContactUsPayload {
  full_name: string;
  business_name: string;
  email: string;
  phone_number?: string;
  business_website?: string;
  business_location?: string;
  company_size: string;
  primary_interest: string;
  goals_or_challenges: string;
}
export interface ContactUsResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const contactUsAPI = async (
  payload: ContactUsPayload
): Promise<ContactUsResponse> => {
  const response = await api.post("/contact-us", payload);
  return response.data;
};