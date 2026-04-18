import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";

export interface TimeLineTextSectionProps {
  id?: string;
  title?: string;
  label?: string;
  textItems?: React.ReactNode[];
}

const TimeLineTextSection = ({
  id,
  title,
  label,
  textItems,
}: TimeLineTextSectionProps) => {
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
      </motion.div>
    </section>
  );
};

export default TimeLineTextSection;
