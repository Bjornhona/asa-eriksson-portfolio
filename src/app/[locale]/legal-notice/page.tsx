import { Link } from "@/i18n/navigation";

const LegalNoticePage = () => {
  return (
    <div className="min-h-screen pb-12">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Legal Notice
          </h1>
          <p className="mt-2 text-sm text-foreground/70">
            Last updated: March 5, 2026
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            1. Website Owner
          </h2>
          <p className="text-base leading-7 text-foreground/90">
            In accordance with the provisions of the applicable regulations,
            users of this website are informed that the owner of this website is:
          </p>
          <p className="text-base leading-7 text-foreground/90">
            <strong className="font-semibold text-foreground">Name:</strong> Åsa
            Eriksson
            <br />
            <strong className="font-semibold text-foreground">Website:</strong>{" "}
            https://www.asaeriksson.com
            <br />
            <strong className="font-semibold text-foreground">Activity:</strong>{" "}
            Freelance Frontend Development and Web Design Services
            <br />
            <strong className="font-semibold text-foreground">Contact:</strong>{" "}
            Through the contact form available on this website
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            2. Purpose of the Website
          </h2>
          <p className="text-base leading-7 text-foreground/90">
            The purpose of this website is to present the professional portfolio,
            services, and projects of the website owner related to frontend
            development, web development, and user interface design.
          </p>
          <p className="text-base leading-7 text-foreground/90">
            The website may also provide information about professional services
            and allow visitors to contact the website owner through a contact
            form.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            3. Terms of Use
          </h2>
          <p className="text-base leading-7 text-foreground/90">
            By accessing and using this website, the user agrees to use the
            website in accordance with applicable laws and this Legal Notice.
          </p>
          <p className="text-base leading-7 text-foreground/90">
            The user agrees not to use the website for unlawful purposes or in
            any way that may damage, disable, or impair the website or interfere
            with other users&apos; access to the website.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            4. Intellectual Property
          </h2>
          <p className="text-base leading-7 text-foreground/90">
            All content on this website, including but not limited to text, code,
            graphics, design, logos, and images, is the property of the website
            owner unless otherwise stated.
          </p>
          <p className="text-base leading-7 text-foreground/90">
            Unauthorized reproduction, distribution, modification, or use of any
            content from this website without prior written permission is
            prohibited.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            5. External Links
          </h2>
          <p className="text-base leading-7 text-foreground/90">
            This website may contain links to external websites operated by third
            parties. The website owner has no control over the content of these
            external websites and assumes no responsibility for their content,
            policies, or practices.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            6. Limitation of Liability
          </h2>
          <p className="text-base leading-7 text-foreground/90">
            The website owner makes reasonable efforts to ensure that the
            information on this website is accurate and up to date. However, no
            guarantee is given regarding the completeness, accuracy, or
            reliability of the information.
          </p>
          <p className="text-base leading-7 text-foreground/90">
            The website owner shall not be held liable for any damages arising
            from the use of this website or from reliance on the information
            provided.
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            7. Data Protection
          </h2>
          <p className="text-base leading-7 text-foreground/90">
            Personal data submitted through the contact form will only be used to
            respond to inquiries and will not be used for marketing purposes.
          </p>
          <p className="text-base leading-7 text-foreground/90">
            For more information on how personal data is handled, please refer to
            the{" "}
            <Link
              href="/privacy-policy"
              className="font-medium text-link underline underline-offset-4 transition-colors hover:text-link-hover"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <hr className="my-12 border-foreground/10" />

        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            8. Applicable Law
          </h2>
          <p className="text-base leading-7 text-foreground/90">
            This Legal Notice shall be governed by and interpreted in accordance
            with the laws of Spain.
          </p>
          <p className="text-base leading-7 text-foreground/90">
            Any disputes arising from the use of this website shall be subject to
            the jurisdiction of the competent courts in Spain.
          </p>
        </section>
      </article>
    </div>
  );
};

export default LegalNoticePage;
