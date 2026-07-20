import PaymentSuccess from "@/components/payment/SuccessCard";

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{
    subscription_id?: string;
    ba_token?: string;
    token?: string;
  }>;
}) {
  const params = await searchParams;

  if (!params.subscription_id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Missing subscription reference.
      </div>
    );
  }

  return <PaymentSuccess subscriptionId={params.subscription_id} />;
}
