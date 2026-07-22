export interface PortfolioImagesStep {
  preview: string;
  full: string;
}

export interface PortfolioImages {
  hero: string;
  steps: {
    step1?: PortfolioImagesStep;
    step2?: PortfolioImagesStep;
    step3?: PortfolioImagesStep;
    step4?: PortfolioImagesStep;
    step5?: PortfolioImagesStep;
    step6?: PortfolioImagesStep;
    step7?: PortfolioImagesStep;
  };
}

export interface PortfolioItem {
  slug: string;
  text: string;
  date: string;
  appType: "webApp" | "mobileApp" | "desktopApp" | "other";
  myRole: "designerAndDeveloper" | "developer" | "designer";
  images: PortfolioImages;
  designImage?: string;
  caseStudyUrl: string;
  visitSiteUrl?: string;
  githubRepoName?: string;
  tags: string[];
}

const unsortedPortfolioItems: PortfolioItem[] = [
  {
    slug: "tech-beach-mama",
    text: "techBeachMama",
    date: "2025-07-01",
    appType: "webApp",
    myRole: "designerAndDeveloper",
    images: {
      hero: "/portfolio/tech-beach-mama/hero.webp",
      steps: {
        step2: {
          preview: "/portfolio/tech-beach-mama/design-system-preview.webp",
          full: "/portfolio/tech-beach-mama/design-system-full.webp",
        },
        step4: {
          preview: "/portfolio/tech-beach-mama/freebie-full.webp",
          full: "/portfolio/tech-beach-mama/freebie-full.webp",
        },
        step5: {
          preview: "/portfolio/tech-beach-mama/ai-blueprint-full.webp",
          full: "/portfolio/tech-beach-mama/ai-blueprint-full.webp",
        },
        step6: {
          preview: "/portfolio/tech-beach-mama/performance-preview.webp",
          full: "/portfolio/tech-beach-mama/performance-full.webp",
        },
      },
    },
    caseStudyUrl: "/portfolio/tech-beach-mama",
    visitSiteUrl: "https://techbeachmama.com",
    tags: [
      "Next.js",
      "HTML",
      "Tailwind CSS",
      "Shadcn UI",
      "Lemon Squeezy",
      "ConvertKit",
      "Figma",
    ],
  },
  {
    slug: "sculpted-goddess",
    text: "sculptedGoddess",
    date: "2025-11-01",
    appType: "webApp",
    myRole: "designerAndDeveloper",
    images: {
      hero: "/portfolio/sculpted-goddess/sculpted-goddess-preview.webp",
      steps: {
        step2: {
          preview: "/portfolio/sculpted-goddess/adobexd-design-preview.webp",
          full: "/portfolio/sculpted-goddess/adobexd-design-full.webp",
        },
        step4: {
          preview: "/portfolio/sculpted-goddess/core-features-preview.webp",
          full: "/portfolio/sculpted-goddess/core-features-full.webp",
        },
        step5: {
          preview: "/portfolio/sculpted-goddess/performance-preview.webp",
          full: "/portfolio/sculpted-goddess/performance-full.webp",
        },
        step6: {
          preview: "/portfolio/sculpted-goddess/design-system-preview.webp",
          full: "/portfolio/sculpted-goddess/design-system-full.webp",
        },
      },
    },
    caseStudyUrl: "/portfolio/sculpted-goddess",
    visitSiteUrl: "https://sculpted-goddess.vercel.app",
    githubRepoName: "Sculpted-goddess",
    tags: [
      "Next.js",
      "TypeScript",
      "SCSS",
      "libSQL",
      "API integration",
      "Authentication",
      "AdobeXD",
    ],
  },
  {
    slug: "cg-consulting",
    text: "cgConsulting",
    date: "2026-02-01",
    appType: "webApp",
    myRole: "designerAndDeveloper",
    images: {
      hero: "/portfolio/cg-consulting/hero.webp",
      steps: {
        step2: {
          preview: "/portfolio/cg-consulting/design-preview.webp",
          full: "/portfolio/cg-consulting/design-full.webp",
        },
        step4: {
          preview: "/portfolio/cg-consulting/responsive-preview.webp",
          full: "/portfolio/cg-consulting/responsive-full.webp",
        },
        step5: {
          preview: "/portfolio/cg-consulting/performance-preview.webp",
          full: "/portfolio/cg-consulting/performance-full.webp",
        },
        step6: {
          preview: "/portfolio/cg-consulting/sanity-preview.webp",
          full: "/portfolio/cg-consulting/sanity-full.webp",
        },
      },
    },
    caseStudyUrl: "/portfolio/cg-consulting",
    visitSiteUrl: "https://cg-consulting.es",
    githubRepoName: "cg-consulting",
    tags: [
      "Next.js",
      "TypeScript",
      "Sanity CMS",
      "Tailwind CSS",
      "Framer Motion",
      "i18n",
      "Figma",
    ],
  },
  {
    slug: "matchkit",
    text: "matchKit",
    date: "2026-05-17",
    appType: "webApp",
    myRole: "designerAndDeveloper",
    images: {
      hero: "/portfolio/matchkit/hero.webp",
      steps: {
        step2: {
          preview: "/portfolio/matchkit/step2.webp",
          full: "/portfolio/matchkit/step2.webp",
        },
        step4: {
          preview: "/portfolio/matchkit/step4-preview.webp",
          full: "/portfolio/matchkit/step4-full.webp",
        },
        step5: {
          preview: "/portfolio/matchkit/step5.webp",
          full: "/portfolio/matchkit/step5.webp",
        },
        step6: {
          preview: "/portfolio/matchkit/step6.webp",
          full: "/portfolio/matchkit/step6.webp",
        },
      },
    },
    caseStudyUrl: "/portfolio/matchkit",
    visitSiteUrl: "https://matchkit-cv-analyzer.vercel.app/",
    tags: ["Next.js", "HTML", "TypeScript", "Tailwind CSS", "Gemini AI API"],
  },
  {
    slug: "hexad-car-client-platform",
    text: "hexadCarClientPlatform",
    date: "2023-02-01",
    appType: "webApp",
    myRole: "designerAndDeveloper",
    images: {
      hero: "/portfolio/vw/hero.webp",
      steps: {
        step2: {
          preview: "/portfolio/vw/new-product-development-full.webp",
          full: "/portfolio/vw/new-product-development-full.webp",
        },
        step4: {
          preview: "/portfolio/vw/world-map-preview.webp",
          full: "/portfolio/vw/world-map-full.webp",
        },
        step5: {
          preview: "/portfolio/vw/design-system-preview.webp",
          full: "/portfolio/vw/design-system-full.webp",
        },
        step6: {
          preview: "/portfolio/vw/multi-equipo-preview.webp",
          full: "/portfolio/vw/multi-equipo-full.webp",
        },
      },
    },
    caseStudyUrl: "/portfolio/hexad-car-client-platform",
    tags: [
      "React",
      "TypeScript",
      "SCSS",
      "Sketch",
      "Vite",
      "Brand Design System",
      "Brand Component Library"
    ],
  },
  // {
  //   slug: "casa-madre",
  //   text: "casaMadre",
  //   date: "2026-07-22",
  //   appType: "webApp",
  //   myRole: "designerAndDeveloper",
  //   images: {
  //     hero: "/portfolio/tech-beach-mama/hero.webp",
  //     steps: {
  //       step2: {
  //         preview: "/portfolio/tech-beach-mama/design-system-preview.webp",
  //         full: "/portfolio/tech-beach-mama/design-system-full.webp",
  //       },
  //       step4: {
  //         preview: "/portfolio/tech-beach-mama/freebie-full.webp",
  //         full: "/portfolio/tech-beach-mama/freebie-full.webp",
  //       },
  //       step5: {
  //         preview: "/portfolio/tech-beach-mama/ai-blueprint-full.webp",
  //         full: "/portfolio/tech-beach-mama/ai-blueprint-full.webp",
  //       },
  //       step6: {
  //         preview: "/portfolio/tech-beach-mama/performance-preview.webp",
  //         full: "/portfolio/tech-beach-mama/performance-full.webp",
  //       },
  //     },
  //   },
  //   caseStudyUrl: "/portfolio/tech-beach-mama",
  //   visitSiteUrl: "https://casamadreliving.com",
  //   tags: [
  //     "Next.js",
  //     "HTML",
  //     "Tailwind CSS",
  //     "Sanity CMS",
  //     "AI listing composer",
  //     "AI Journal writer",
  //     "Bilingual",
  //     "Property Listings",
  //     "Journal",
  //     "Personal Agent Cards",
  //     "Enquiry Funnel",
  //     "AI assistant",
  //   ],
  // },
];

export const portfolioItems: PortfolioItem[] = unsortedPortfolioItems.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
