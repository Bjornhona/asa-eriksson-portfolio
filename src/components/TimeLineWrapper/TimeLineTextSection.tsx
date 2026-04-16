import { motion } from "framer-motion";
import { container, fadeInUp } from "@/lib/animations";

export interface TimeLineTextSectionProps {
  id?: string
  title?: string
  description?: string
  textItems?: string[]
}

const TimeLineTextSection = ({id, title, description, textItems}: TimeLineTextSectionProps) => {
  
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

        <motion.h6 variants={fadeInUp}>
          {description}
        </motion.h6>
        {textItems?.map((item) => (
        <motion.h6 variants={fadeInUp} key={item}>
          {item}
          </motion.h6>
        ))}
      </motion.div>
  </section>
  );
};

export default TimeLineTextSection;