export interface PortfolioItem {
  slug: string;
  text: string;
  date: string;
  appType: "webApp" | "mobileApp" | "desktopApp" | "other";
  myRole: "designerAndDeveloper" | "developer" | "designer";
  images: string[];
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
    images: ["/portfolio/tech-beach-mama/1.png"],
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
    images: ["/portfolio/sculpted-goddess/1.png"],
    caseStudyUrl: "/portfolio/sculpted-goddess",
    visitSiteUrl: "https://sculpted-goddess.vercel.app",
    githubRepoName: "Sculpted-goddess",
    tags: ["Next.js", "TypeScript", "SCSS", "libSQL", "API integration", "AdobeXD"],
  },
  {
    slug: "cg-consulting",
    text: "cgConsulting",
    date: "2026-02-01",
    appType: "webApp",
    myRole: "designerAndDeveloper",
    images: [
      "/portfolio/cg-consulting/laptop.png",
      "/portfolio/cg-consulting/figma-design.jpg",
      "/portfolio/cg-consulting/mobile.png",
      "/portfolio/cg-consulting/lighthouse-before-after.jpg",
      "/portfolio/cg-consulting/sanity-studio.png",
    ],
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
