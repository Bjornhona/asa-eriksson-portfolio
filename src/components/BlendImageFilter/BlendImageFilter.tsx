import Image, { ImageProps } from "next/image";

export type BlendImageFilterProps = ImageProps & {
  /** Opacity utility for the blue multiply overlay. Defaults to the original
   *  opacity-60 so existing call sites render unchanged. */
  overlayClassName?: string;
  /** Base filter on the image itself. Defaults to the original grayscale.
   *  Pass grayscale-0 where the photo must read in colour without a hover —
   *  touch devices never fire the group-hover that would otherwise clear it. */
  imageFilterClassName?: string;
};

const BlendImageFilter = ({
  src,
  alt,
  className = "",
  overlayClassName = "opacity-60",
  imageFilterClassName = "grayscale",
  ...props
}: BlendImageFilterProps) => {
  return (
    <div className="relative w-full h-full group overflow-hidden">
      <Image
        src={src}
        alt={alt}
        {...props}
        className={`object-cover w-full h-full ${imageFilterClassName} transition duration-500 group-hover:grayscale-0 ${className}`}
      />
      <div className={`absolute inset-0 bg-blue-500 mix-blend-multiply ${overlayClassName} transition-opacity duration-500 group-hover:opacity-0`} />
    </div>
  );
};

export default BlendImageFilter;
