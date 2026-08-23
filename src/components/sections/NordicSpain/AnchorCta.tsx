"use client";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/components/button";
import { focusRing } from "./styles";

export interface AnchorCtaProps {
  /** Id of the element to jump to, without the `#`. */
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * In-page CTA link.
 *
 * It is a real `<a href="#...">`, so it still works with JavaScript disabled.
 * The click handler exists only because browsers are inconsistent about moving
 * *focus* on same-page navigation — Safari in particular scrolls without
 * focusing, which strands keyboard and screen reader users at the top of the
 * page. Moving focus explicitly satisfies WCAG 2.4.3 Focus Order.
 */
const AnchorCta = ({ targetId, children, className }: AnchorCtaProps) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
    target.focus({ preventScroll: true });

    // Keep the URL shareable without triggering a second jump.
    window.history.replaceState(null, "", `#${targetId}`);
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={cn(
        buttonVariants({ variant: "glass" }),
        "h-11 px-6 text-base text-foreground",
        focusRing,
        className,
      )}
    >
      {children}
    </a>
  );
};

export default AnchorCta;
