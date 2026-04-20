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
  visitSiteUrl: string;
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
      "hero": "/portfolio/tech-beach-mama/1.png",
      "steps": {}
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
      "hero": "/portfolio/sculpted-goddess/1.png",
      "steps": {}
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
      "AdobeXD",
    ],
  },
  {
    slug: "cg-consulting",
    text: "cgConsulting",
    date: "2026-02-01",
    appType: "webApp",
    myRole: "designerAndDeveloper",
    // images: [
    //   "/portfolio/cg-consulting/lighthouse-before-after.jpg",
    //   "/portfolio/cg-consulting/sanity-studio.png",
    // ],
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
        }
      }
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
];

export const portfolioItems: PortfolioItem[] = unsortedPortfolioItems.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
