"use client";
import { ViewTransition } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import BlendImageFilter from "@/components/BlendImageFilter/BlendImageFilter";

/** Responsive circle size used by the four hero routes. Any page overriding
 *  this must override `sizes` to match, or next/image will request the wrong
 *  candidate. */
export const HERO_CIRCLE_SIZE =
  "w-[50vw] h-[50vw] sm:w-[40vw] sm:h-[40vw] lg:w-[35vw] lg:h-[35vw] xl:w-[30vw] xl:h-[30vw] 2xl:w-[25vw] 2xl:h-[25vw]";

/** Anchors the circle to the right edge of the nearest positioned ancestor,
 *  matching the `container` padding scale so it lines up with the page gutter. */
export const HERO_CIRCLE_OFFSET =
  "right-[var(--space-4)] sm:right-[var(--space-6)] md:right-[var(--space-8)] lg:right-[var(--space-10)] xl:right-[var(--space-12)]";

/** Mirrors HERO_CIRCLE_SIZE at the Tailwind breakpoints (sm 640, lg 1024,
 *  xl 1280, 2xl 1536), widest-first as the spec requires. */
export const HERO_CIRCLE_SIZES =
  "(min-width: 1536px) 25vw, (min-width: 1280px) 30vw, (min-width: 1024px) 35vw, (min-width: 640px) 40vw, 50vw";

export interface HeroCircleImageProps {
  src: string;
  alt: string;
  /** When set, the circle is wrapped in a ViewTransition and its entry
   *  animation is suppressed so the transition owns the motion. */
  transitionName?: string;
  eager?: boolean;
  /** Responsive width/height classes. Override together with `sizes`. */
  sizeClassName?: string;
  /** Responsive right-offset classes. */
  offsetClassName?: string;
  /** Extra classes on the circle wrapper — e.g. a hard pixel cap. */
  className?: string;
  /** object-position utility for the square crop, e.g. "object-top". */
  objectPositionClassName?: string;
  /** Opacity utility for the blue multiply overlay. Defaults to the
   *  BlendImageFilter default of opacity-60. */
  overlayClassName?: string;
  /** Base filter on the image. Defaults to the BlendImageFilter default of
   *  grayscale; pass grayscale-0 where the photo must read in colour on touch. */
  imageFilterClassName?: string;
  sizes?: string;
}

const HeroCircleImage = ({
  src,
  alt,
  transitionName,
  eager = true,
  sizeClassName = HERO_CIRCLE_SIZE,
  offsetClassName = HERO_CIRCLE_OFFSET,
  className,
  objectPositionClassName,
  overlayClassName,
  imageFilterClassName,
  sizes = HERO_CIRCLE_SIZES,
}: HeroCircleImageProps) => {
  const circle = (
    <motion.div
      className={[
        "absolute",
        offsetClassName,
        sizeClassName,
        "aspect-square overflow-hidden rounded-full",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      variants={fadeInUp}
      initial={transitionName ? false : "initial"}
      animate="animate"
    >
      <BlendImageFilter
        src={src}
        alt={alt}
        width={400}
        height={400}
        loading={eager ? "eager" : "lazy"}
        sizes={sizes}
        className={objectPositionClassName}
        overlayClassName={overlayClassName}
        imageFilterClassName={imageFilterClassName}
      />
    </motion.div>
  );

  return transitionName ? (
    <ViewTransition name={transitionName}>{circle}</ViewTransition>
  ) : (
    circle
  );
};

export default HeroCircleImage;
