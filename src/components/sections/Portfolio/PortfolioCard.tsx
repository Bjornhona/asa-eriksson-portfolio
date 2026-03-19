"use client";

import { Button } from "@/ui";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  alt: string;
  caseStudyUrl: string;
  visitSiteUrl: string;
  tags: string[];
}

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white/5 dark:bg-white/[0.07] backdrop-blur-md border border-white/10 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
      {/* Gradient glow on hover */}
      <span
        className="absolute inset-0 bg-gradient-to-br from-aqua-400/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl z-0"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col">
        {/* Image */}
        <Link href={item.caseStudyUrl} className="block overflow-hidden rounded-t-2xl">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={false}
            />
          </div>
        </Link>

        {/* Content */}
        <div className="flex flex-col gap-4 p-4 sm:p-5 md:p-6">
          <div>
            <h4 className="font-prompt font-semibold text-lg sm:text-xl text-title mb-2">
              {item.title}
            </h4>
            <p className="text-sm sm:text-base text-foreground/90 line-clamp-2">
              {item.description}
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
              View case study
              <ArrowUpRight className="w-4 h-4" />
            </Button>
            <Button
              variant="glass"
              size="sm"
              className="w-full xs:w-auto"
              href={item.visitSiteUrl}
            >
              Visit site
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
