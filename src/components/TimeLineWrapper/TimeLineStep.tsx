import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";
import ListSection from "../sections/ListSection";
import Image from "next/image";
import { ListSectionProps } from "../sections/ListSection";

export interface TimeLineStepProps {
  id?: string;
  title?: string;
  label?: string;
  textItems?: React.ReactNode[];
  lists?: ListSectionProps[];
  imageSrc?: string;
  alt?: string;
  caption?: string;
}

const TimeLineStep = ({
  id,
  title,
  label,
  textItems,
  lists,
  imageSrc,
  alt,
  caption,
}: TimeLineStepProps) => {
  return (
    <section id={id ? id : 'timeline-step'} className="scroll-mt-64">
      <motion.div
        className="space-y-4"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h3 variants={fadeInUp}>{title}</motion.h3>
        {label && (
          <motion.p variants={fadeInUp}>
            <i>-- {label.toUpperCase()}</i>
          </motion.p>
        )}
        {textItems?.map((item, index) => (
          <motion.h6 variants={fadeInUp} key={index}>
            {item}
          </motion.h6>
        ))}
        {lists && lists.map((list, index) => (
          <ListSection
            key={index}
            title={list.title}
            subTitle={list.subTitle}
            listItems={list.listItems}
            listIcon={list.listIcon}
          />
        ))}
        {imageSrc && alt && (
          <>
            <motion.div
              variants={fadeInUp}
              className="relative aspect-[16/10] w-full"
            >
              <Image
                src={imageSrc}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
            {caption && (
              <motion.p variants={fadeInUp}>
                <i>{caption}</i>
              </motion.p>
            )}
          </>
        )}
      </motion.div>
    </section>
  );
};

export default TimeLineStep;
