"use client";
import { Button } from "@/ui";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { PortfolioItem } from "@/app/[locale]/portfolio/portfolioProjects";
import BlendImageFilter from "@/components/BlendImageFilter/BlendImageFilter";

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  const t = useTranslations("portfolio.work");

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white/5 dark:bg-white/[0.07] backdrop-blur-md border border-white/10 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
      {/* Gradient glow on hover */}
      <span
        className="absolute inset-0 bg-gradient-to-br from-aqua-400/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl z-0"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col">
        {/* Image */}
        <Link
          href={item.caseStudyUrl}
          className="block overflow-hidden rounded-t-2xl"
        >
          <div className="relative w-full aspect-[16/10]">
            <BlendImageFilter
              src={item.image}
              alt={t(item.text + ".alt")}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              // loading="eager"
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Content */}
        <div className="flex flex-col gap-4 p-4 sm:p-5 md:p-6">
          <div>
            <h4 className="font-prompt font-semibold text-lg sm:text-xl text-title mb-2">
              {t(item.text + ".title")}
            </h4>
            <p className="text-sm sm:text-base text-foreground/90 line-clamp-2">
              {t(item.text + ".description")}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md px-3 py-1 text-xs font-medium bg-white/10 dark:bg-white/15 text-foreground/90"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col xs:flex-row gap-3 pt-1">
            <Button
              variant="glass"
              size="sm"
              className="w-full xs:w-auto"
              href={item.caseStudyUrl}
            >
              {t("readMore")}
              <ArrowUpRight className="w-4 h-4" />
            </Button>
            <Button
              variant="glass"
              size="sm"
              className="w-full xs:w-auto"
              href={item.visitSiteUrl}
            >
              {t("visitSite")}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
