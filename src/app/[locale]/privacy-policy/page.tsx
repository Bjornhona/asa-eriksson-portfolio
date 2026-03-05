const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen pb-12">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-foreground/70">
            Last updated: March 5, 2026
          </p>
          <p className="mt-6 text-base leading-7 text-foreground/90">
            This Privacy Policy explains how information is collected, used, and
            protected when you visit this website.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            1. Website Owner
          </h2>

          <p className="text-base leading-7 text-foreground/90">
            This website is operated by:
          </p>

          <p className="font-semibold text-foreground">Åsa Eriksson</p>
          <p className="text-base leading-7 text-foreground/90">
            Independent Frontend Developer & Product Designer
          </p>
          <p className="text-base leading-7 text-foreground/90">
            Website:{" "}
            <a
              href="https://asaeriksson.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-link underline underline-offset-4 transition-colors hover:text-link-hover"
            >
              https://asaeriksson.com
            </a>
          </p>

          <p className="text-base leading-7 text-foreground/90">
            If you have questions about this policy, you can contact me through
            the contact form available on this website.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            2. Information Collected
          </h2>

          <p className="text-base leading-7 text-foreground/90">
            This website collects limited information in the following ways.
          </p>

          <h3 className="text-lg font-semibold text-foreground sm:text-xl">
            2.1 Contact Form
          </h3>

          <p className="text-base leading-7 text-foreground/90">
            If you contact me through the website&apos;s contact form, you may be
            asked to provide:
          </p>

          <ul className="list-inside list-disc space-y-2 pl-2 text-base leading-7 text-foreground/90">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your message</li>
          </ul>

          <p className="text-base leading-7 text-foreground/90">
            This information is used{" "}
            <strong className="font-semibold text-foreground">
              only to respond to your inquiry
            </strong>{" "}
            and discuss potential collaboration or services.
          </p>

          <p className="text-base leading-7 text-foreground/90">
            The information is{" "}
            <strong className="font-semibold text-foreground">
              not used for marketing purposes
            </strong>
            , newsletters, or shared with third parties.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground sm:text-xl">
            2.2 Analytics Data
          </h3>

          <p className="text-base leading-7 text-foreground/90">
            This website uses{" "}
            <strong className="font-semibold text-foreground">
              Google Analytics
            </strong>{" "}
            to understand how visitors interact with the website.
          </p>

          <p className="text-base leading-7 text-foreground/90">
            Google Analytics may collect information such as:
          </p>

          <ul className="list-inside list-disc space-y-2 pl-2 text-base leading-7 text-foreground/90">
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Device type</li>
            <li>Browser type</li>
            <li>Approximate geographic location</li>
            <li>Referring websites</li>
          </ul>

          <p className="text-base leading-7 text-foreground/90">
            Google may store this data on servers located outside the European
            Union.
          </p>

          <p className="text-base leading-7 text-foreground/90">
            For more information, see Google&apos;s Privacy Policy:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-link underline underline-offset-4 transition-colors hover:text-link-hover"
            >
              https://policies.google.com/privacy
            </a>
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground sm:text-xl">
            2.3 Cookies
          </h3>

          <p className="text-base leading-7 text-foreground/90">
            Google Analytics may use{" "}
            <strong className="font-semibold text-foreground">cookies</strong> to
            analyze website traffic.
          </p>

          <p className="text-base leading-7 text-foreground/90">
            Cookies are small text files stored on your device.
          </p>

          <p className="text-base leading-7 text-foreground/90">
            You can disable cookies through your browser settings if you prefer
            not to allow them.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground sm:text-xl">
            2.4 Purpose of Data Processing
          </h3>

          <p className="text-base leading-7 text-foreground/90">
            The limited data collected is used only for:
          </p>

          <ul className="list-inside list-disc space-y-2 pl-2 text-base leading-7 text-foreground/90">
            <li>Responding to contact inquiries</li>
            <li>Understanding website traffic and usage</li>
            <li>Improving the website</li>
          </ul>

          <p className="text-base leading-7 text-foreground/90">
            No personal data is sold, rented, or used for advertising purposes.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground sm:text-xl">
            2.5 Data Retention
          </h3>

          <p className="text-base leading-7 text-foreground/90">
            Messages sent through the contact form may be stored for a reasonable
            period in order to maintain communication related to services or
            collaboration.
          </p>

          <p className="text-base leading-7 text-foreground/90">
            Analytics data retention is determined by Google Analytics settings.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground sm:text-xl">
            2.6 Your Rights
          </h3>

          <p className="text-base leading-7 text-foreground/90">
            If you are located in the European Union, you have the right to:
          </p>

          <ul className="list-inside list-disc space-y-2 pl-2 text-base leading-7 text-foreground/90">
            <li>Request access to your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to the processing of your data</li>
          </ul>

          <p className="text-base leading-7 text-foreground/90">
            If you wish to exercise any of these rights, please contact me
            through the website.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground sm:text-xl">
            2.7 Third-Party Services
          </h3>

          <p className="text-base leading-7 text-foreground/90">
            This website may use third-party services including:
          </p>

          <p className="font-semibold text-foreground">
            Google Analytics (website analytics)
          </p>
          <p className="text-base leading-7 text-foreground/90">
            These services may collect and process data according to their own
            privacy policies.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground sm:text-xl">
            2.8 Data Security
          </h3>

          <p className="text-base leading-7 text-foreground/90">
            Reasonable technical and organizational measures are taken to
            protect personal information from unauthorized access, disclosure,
            or misuse.
          </p>

          <p className="text-base leading-7 text-foreground/90">
            However, no method of transmission over the internet is completely
            secure.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground sm:text-xl">
            2.9 Changes to This Policy
          </h3>

          <p className="text-base leading-7 text-foreground/90">
            This Privacy Policy may be updated from time to time.
          </p>

          <p className="text-base leading-7 text-foreground/90">
            Any updates will be posted on this page with an updated revision
            date.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground sm:text-xl">
            2.10 Contact
          </h3>

          <p className="text-base leading-7 text-foreground/90">
            If you have any questions about this Privacy Policy, you can contact:
          </p>

          <p className="font-semibold text-foreground">Åsa Eriksson</p>
          <p className="text-base leading-7 text-foreground/90">
            via the contact form on this website or by email to <a href="mailto:info@asaeriksson.com">info@asaeriksson.com</a>.
          </p>
        </section>
      </article>
    </div>
  );
};

export default PrivacyPolicyPage;
