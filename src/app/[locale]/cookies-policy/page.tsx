const CookiesPolicyPage = () => {
  return (
    <div className="min-h-screen pb-12">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cookies Policy
          </h1>
          <p className="mt-2 text-sm text-foreground/70">
            Last updated: March 5, 2026
          </p>
          <p className="mt-6 text-base leading-7 text-foreground/90">
            This Cookies Policy explains how cookies are used on this website and
            how you can control them.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            1. What Are Cookies
          </h2>
          <p className="text-base leading-7 text-foreground/90">
            Cookies are small text files stored on your device when you visit a
            website. They help websites function properly and provide information
            about how visitors interact with the site.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            2. How This Website Uses Cookies
          </h2>
          <p className="text-base leading-7 text-foreground/90">
            This website uses cookies only for basic functionality and website
            analytics.
          </p>

          <h3 className="text-lg font-semibold text-foreground sm:text-xl">
            Analytics Cookies
          </h3>
          <p className="text-base leading-7 text-foreground/90">
            This website uses Google Analytics to understand how visitors use the
            website. These cookies collect information such as:
          </p>

          <ul className="list-inside list-disc space-y-2 pl-2 text-base leading-7 text-foreground/90">
            <li>Pages visited</li>
            <li>Time spent on the website</li>
            <li>Device and browser type</li>
            <li>Approximate geographic location</li>
          </ul>

          <p className="text-base leading-7 text-foreground/90">
            This data is collected in an aggregated and anonymous form and is
            used only to improve the website and user experience.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            3. Third-Party Cookies
          </h2>
          <p className="text-base leading-7 text-foreground/90">
            Google Analytics may set cookies on your device. These cookies are
            managed by Google and are subject to Google&apos;s privacy policies.
          </p>
          <p className="text-base leading-7 text-foreground/90">
            You can learn more about how Google uses data here:{" "}
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
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            4. Managing Cookies
          </h2>
          <p className="text-base leading-7 text-foreground/90">
            You can control or disable cookies through your browser settings.
            Most browsers allow you to refuse cookies or delete cookies that have
            already been stored.
          </p>
          <p className="text-base leading-7 text-foreground/90">
            Please note that disabling cookies may affect how some websites
            function.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            5. Changes to This Cookies Policy
          </h2>
          <p className="text-base leading-7 text-foreground/90">
            This Cookies Policy may be updated from time to time. Any updates
            will be posted on this page with a revised date.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            6. Contact
          </h2>
          <p className="text-base leading-7 text-foreground/90">
            If you have any questions about this Cookies Policy, you can contact
            the website owner through the contact form available on this website.
          </p>
        </section>
      </article>
    </div>
  );
};

export default CookiesPolicyPage;
