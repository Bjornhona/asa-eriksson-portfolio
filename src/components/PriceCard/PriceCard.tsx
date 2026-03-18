import { cardItem, fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export interface PriceCardProps {
  title: string;
  description: string;
  price?: string;
  custom?: string;
}

const PriceCard = ({ title, description, price, custom }: PriceCardProps) => {
  const t = useTranslations("services.pricing");

  return (
    <motion.div variants={cardItem} className="px-6 space-y-2 py-4 max-w-sm mx-auto">
      <motion.h4 variants={fadeInUp}>{title}</motion.h4>
      <motion.p variants={fadeInUp}>{description}</motion.p>
      <div className="flex gap-4">
        {price && <motion.p variants={fadeInUp} className="italic">
          {t("from")}
        </motion.p>}
        <motion.h3 variants={fadeInUp} className="font-bold">
          {price || custom}
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default PriceCard;
