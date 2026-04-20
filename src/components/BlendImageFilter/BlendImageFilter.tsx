import Image, { ImageProps } from "next/image";

const BlendImageFilter = ({ src, alt, className = "", ...props }: ImageProps) => {
  return (
    <div className="relative w-full h-full group overflow-hidden">
      <Image
        src={src}
        alt={alt}
        {...props}
        className={`object-cover w-full h-full grayscale transition duration-500 group-hover:grayscale-0 ${className}`}
      />
      <div className="absolute inset-0 bg-blue-500 mix-blend-multiply opacity-60 transition-opacity duration-500 group-hover:opacity-0" />
    </div>
  );
};

export default BlendImageFilter;
