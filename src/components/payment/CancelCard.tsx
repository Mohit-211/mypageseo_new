import Link from "next/link";

export default function PaymentCancelledCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-radial-soft px-5 py-8">
      <div className="animate-pop-in w-full max-w-md overflow-hidden rounded-2xl bg-card shadow-lift">
        <div className="px-9 pt-11 pb-4 text-center">
          <div className="relative mx-auto mb-6 flex h-17 w-17 items-center justify-center rounded-full bg-muted">
            <svg
              className="h-8 w-8 text-accent"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 7L17 17M17 7L7 17"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="mb-1.5 text-[0.8125rem] font-medium tracking-wide text-accent">
            Payment cancelled
          </p>

          <h1 className="mb-5 text-[1.375rem] font-semibold tracking-tight text-card-foreground">
            Your checkout wasn't completed
          </h1>

          <p className="mx-auto max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
            Your payment was cancelled before completion.
            <br />
            <span className="font-medium text-card-foreground">
              No payment has been charged and no subscription has been created.
            </span>
          </p>
        </div>

        <hr className="border-t border-dashed border-border" />

        <div className="flex flex-col gap-3 px-9 py-6 text-left text-sm">
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-muted-foreground">Status</span>
            <span className="font-medium text-card-foreground">Cancelled</span>
          </div>

          <div className="flex items-baseline justify-between gap-4">
            <span className="text-muted-foreground">Payment</span>
            <span className="font-medium text-card-foreground">
              Not Charged
            </span>
          </div>

          <div className="flex items-baseline justify-between gap-4">
            <span className="text-muted-foreground">Subscription</span>
            <span className="font-medium text-card-foreground">
              Not Created
            </span>
          </div>
        </div>

        <div className="receipt-tear h-3" />

        <div className="flex flex-col gap-3 px-9 pb-9 pt-6">
          <Link
            href="/checkout"
            className="rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground transition hover:-translate-y-0.5 hover:shadow-lift"
          >
            Try Again
          </Link>

          <Link
            href="/"
            className="rounded-lg px-4 py-3 text-center text-sm font-medium text-muted-foreground transition hover:bg-surface-muted hover:text-card-foreground"
          >
            Back to Home page
          </Link>
        </div>
      </div>
    </div>
  );
}
