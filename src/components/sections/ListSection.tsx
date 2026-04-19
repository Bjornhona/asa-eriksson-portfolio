import { motion } from "framer-motion";
import { fadeInUp, container } from "@/lib/animations";

export interface ListSectionProps {
  title?: string;
  subTitle?: string;
  listItems: string[];
  listIcon?: React.ReactNode;
}

const ListSection = ({title, subTitle, listItems, listIcon}: ListSectionProps) => {
  return (
    <motion.div variants={container} initial="initial" whileInView="animate" viewport={{ once: true }} className="space-y-4">
      {title && <motion.h4 variants={fadeInUp}>{title}</motion.h4>}
      {subTitle && <motion.h6 variants={fadeInUp}>{subTitle}</motion.h6>}
      <motion.ul variants={fadeInUp} className="list-disc list-inside">
        {listItems.map((item) => (
          <motion.li variants={fadeInUp} key={item} className={listIcon ? "flex items-center" : ""}>
            {listIcon && <span className="mr-2">{listIcon}</span>}
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default ListSection;
