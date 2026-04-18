import Image from "next/image";

export interface TimeLineImageSectionProps {
  id?: string;
  title?: string;
  label?: string;
  textItems?: React.ReactNode[];
  imageSrc: string;
  alt: string;
  caption?: string;
}

const TimeLineImageSection = ({ id, title, label, textItems, imageSrc, alt, caption }: TimeLineImageSectionProps) => {
  return (
    <section id={id} className="space-y-4">
      <h3>{title}</h3>
      {label && <p><i>-- {label.toUpperCase()}</i></p>}
      {textItems?.map((item, index) => (
        <h6 key={index}>
          {item}
          </h6>
        ))}
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h6>{caption}</h6>
    </section>
  );
};

export default TimeLineImageSection;
