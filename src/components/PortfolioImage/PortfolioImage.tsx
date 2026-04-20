"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";

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
      <div onClick={() => setOpen(true)} style={{ cursor: "zoom-in" }}>
        <Image src={previewSrc} alt={alt} {...imageProps} />
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
            cursor: "zoom-out",
          }}
        >
          <Image
            src={fullSrc}
            alt={alt}
            width={3000}
            height={2000}
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "95vw",
              maxHeight: "95vh",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </>
  );
};

export default PortfolioImage;
