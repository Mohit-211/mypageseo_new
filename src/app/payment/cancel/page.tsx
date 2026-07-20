import PaymentCancelledCard from "@/components/payment/CancelCard";

export default async function PaymentCancelledPage({
  searchParams,
}: {
  searchParams: Promise<{
    subscription_id?: string;
    ba_token?: string;
    token?: string;
  }>;
}) {
  // Consume PayPal query parameters (optional)
  await searchParams;

  return <PaymentCancelledCard />;
}
