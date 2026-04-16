export interface PortfolioItem {
  slug: string;
  text: string;
  date: string;
  appType: "webApp" | "mobileApp" | "desktopApp" | "other";
  myRole: "designerAndDeveloper" | "developer" | "designer";
  image: string;
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
    image: "/portfolio/tech-beach-mama/1.png",
    caseStudyUrl: "/portfolio/tech-beach-mama",
    visitSiteUrl: "https://techbeachmama.com",
    tags: [
      "Next.js",
      "HTML",
      "Tailwind CSS",
      "Shadcn UI",
      "Figma",
      "Lemon Squeezy",
    ],
  },
  {
    slug: "sculpted-goddess",
    text: "sculptedGoddess",
    date: "2025-11-01",
    appType: "webApp",
    myRole: "designerAndDeveloper",
    image: "/portfolio/sculpted-goddess/1.png",
    caseStudyUrl: "/portfolio/sculpted-goddess",
    visitSiteUrl: "https://sculpted-goddess.vercel.app",
    githubRepoName: "Sculpted-goddess",
    tags: ["Next.js", "TypeScript", "SCSS", "libSQL", "API integration"],
  },
  {
    slug: "cg-consulting",
    text: "cgConsulting",
    date: "2026-02-01",
    appType: "webApp",
    myRole: "designerAndDeveloper",
    image: "/portfolio/cg-consulting/laptop.png",
    designImage: "/portfolio/cg-consulting/figma-design.jpg",
    caseStudyUrl: "/portfolio/cg-consulting",
    visitSiteUrl: "https://cg-consulting.es",
    githubRepoName: "cg-consulting",
    tags: [
      "Next.js",
      "TypeScript",
      "Sanity CMS",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
];

export const portfolioItems: PortfolioItem[] = unsortedPortfolioItems.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
