"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";
import BlendImageFilter from "@/components/BlendImageFilter/BlendImageFilter";

export type PortfolioImageProps = Omit<ImageProps, "src" | "alt"> & {
  previewSrc: string;
  fullSrc: string;
  alt: string;
};

const PortfolioImage = ({
  previewSrc,
  fullSrc,
  alt,
  ...imageProps
}: PortfolioImageProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Preview */}
      <div
        onClick={() => setOpen(true)}
        className="relative w-full h-full cursor-zoom-in"
      >
        <BlendImageFilter src={previewSrc} alt={alt} {...imageProps} />
      </div>

      {/* Fullscreen modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-zoom-out"
        >
          <Image
            src={fullSrc}
            alt={alt}
            width={3000}
            height={2000}
            className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain"
          />
        </div>
      )}
    </>
  );
};

export default PortfolioImage;
