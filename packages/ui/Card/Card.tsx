import { Card as CardComponent } from "@/ui/components/card";
import { cardItem } from "@/lib/animations";
import { motion } from "framer-motion";

export interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children, ...props }: CardProps) => {
  return (
    <CardComponent {...props} className="border-none">
      <motion.article
        variants={cardItem}
        className="group relative overflow-hidden rounded-2xl p-6 md:p-8 bg-white/5 dark:bg-white/[0.07] backdrop-blur-md border border-white/10 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5"
      >
        <span
          className="absolute inset-0 bg-gradient-to-br from-aqua-400/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
          aria-hidden
        />
        <div className="relative z-10">
          {children}
        </div>
      </motion.article>
    </CardComponent>
  );
};

export default Card;
