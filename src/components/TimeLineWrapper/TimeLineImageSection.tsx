import Image from "next/image";
import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";

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
    <section id={id} className="scroll-mt-64">
      <motion.div
        className="space-y-4"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h3 variants={fadeInUp}>{title}</motion.h3>
        {label && <motion.p variants={fadeInUp}><i>-- {label.toUpperCase()}</i></motion.p>}
        {textItems?.map((item, index) => (
          <motion.h6 variants={fadeInUp} key={index}>
            {item}
          </motion.h6>
        ))}
        <motion.div variants={fadeInUp} className="relative aspect-[16/10] w-full">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
        <motion.p variants={fadeInUp}><i>{caption}</i></motion.p>
      </motion.div>
    </section>
  );
};

export default TimeLineImageSection;
