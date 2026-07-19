export const metadata = {
  title: "Privacy Policy | MyPageSEO",
  description:
    "Learn how MyPageSEO collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container-page py-20 max-w-3xl">
      <h1 className="text-3xl font-semibold text-foreground">Privacy Policy</h1>
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
            1. Information We Collect
          </h2>
          <p className="mt-2">
            We collect information you provide directly to us, such as your
            name, email address, business details, and payment information when
            you sign up for our services or contact us.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            2. How We Use Your Information
          </h2>
          <p className="mt-2">
            We use the information we collect to provide, maintain, and improve
            our services, process transactions, communicate with you, and comply
            with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            3. Sharing of Information
          </h2>
          <p className="mt-2">
            We do not sell your personal information. We may share it with
            service providers who help us operate our business, or when required
            by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            4. Data Security
          </h2>
          <p className="mt-2">
            We implement reasonable technical and organizational measures to
            protect your information from unauthorized access, loss, or misuse.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            5. Your Choices
          </h2>
          <p className="mt-2">
            You may request access to, correction of, or deletion of your
            personal information at any time by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground">
            6. Contact Us
          </h2>
          <p className="mt-2">
            If you have questions about this policy, please reach out through
            our contact page.
          </p>
        </section>
      </div>
    </main>
  );
}
