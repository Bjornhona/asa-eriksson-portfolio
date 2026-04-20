"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";

export interface PortfolioImageProps {
  previewSrc: string;
  fullSrc: string;
  alt: string;
  props?: ImageProps;
};

const PortfolioImage = ({ previewSrc, fullSrc, alt, ...props }: PortfolioImageProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Preview */}
      <div onClick={() => setOpen(true)} style={{ cursor: "zoom-in" }}>
        <Image
          src={previewSrc}
          alt={alt}
          width={1400}
          height={900}
          {...props}
        />
      </div>

      {/* Fullscreen modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            cursor: "zoom-out"
          }}
        >
          <Image
            src={fullSrc}
            alt={alt}
            width={3000}
            height={2000}
            {...props}
          />
        </div>
      )}
    </>
  );
}

export default PortfolioImage;
