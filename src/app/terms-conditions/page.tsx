export const metadata = {
  title: "Terms & Conditions | MyPageSEO",
  description: "The terms and conditions governing use of MyPageSEO services.",
};

export default function TermsConditionsPage() {
  return (
    <main className="container-page py-20 max-w-3xl">
      <h1 className="text-3xl font-semibold text-foreground">
        Terms &amp; Conditions
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated:{" "}
        {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-foreground">
            1. Acceptance of Terms
          </h2>
          <p className="mt-2">
            By accessing or using MyPageSEO's website, services, or software,
            you agree to be bound by these Terms &amp; Conditions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">2. Services</h2>
          <p className="mt-2">
            MyPageSEO provides Local SEO services and proprietary software
            tools. Features, pricing, and availability may change and are
            described on our Services and Pricing pages.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            3. Payment &amp; Billing
          </h2>
          <p className="mt-2">
            Subscription fees are billed according to the plan selected at
            checkout. All fees are non-refundable except where required by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            4. Acceptable Use
          </h2>
          <p className="mt-2">
            You agree not to misuse our services, attempt unauthorized access to
            our systems, or use our platform for unlawful purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            5. Limitation of Liability
          </h2>
          <p className="mt-2">
            MyPageSEO is not liable for indirect, incidental, or consequential
            damages arising from the use of our services, to the maximum extent
            permitted by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            6. Changes to Terms
          </h2>
          <p className="mt-2">
            We may update these terms from time to time. Continued use of our
            services after changes constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            7. Contact Us
          </h2>
          <p className="mt-2">
            Questions about these terms can be directed to us through our
            contact page.
          </p>
        </section>
      </div>
    </main>
  );
}
