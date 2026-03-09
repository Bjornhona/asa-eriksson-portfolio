import Image, { ImageProps } from "next/image";

interface BlendImageFilterProps extends ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const BlendImageFilter = ({ src, alt, width, height, className = "", ...props }: BlendImageFilterProps) => {
  return (
    <div className="relative group overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${className} object-cover w-full h-full grayscale transition duration-500 group-hover:grayscale-0`}
        {...props}
      />
      <div className="absolute inset-0 bg-blue-500 mix-blend-multiply opacity-60 transition-opacity duration-500 group-hover:opacity-0" />
    </div>
  );
};

export default BlendImageFilter;
