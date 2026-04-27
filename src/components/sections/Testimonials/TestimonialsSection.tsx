"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";
import { cardContainer, cardItem, container, fadeInUp } from "@/lib/animations";

interface Testimonial {
  name: string;
  company: string;
  position: string;
  testimonial: string;
}

const TestimonialsSection = () => {
  const t = useTranslations("services.testimonials");
  const testimonials = t.raw("list") as Testimonial[];

  return (
    <section id="testimonials-section">
      <motion.div
        className="space-y-4 container px-0 sm:text-center pt-8 md:pt-12 pb-12 md:pb-16"
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h3 variants={fadeInUp}>{t("title")}</motion.h3>
        <motion.h6 variants={fadeInUp}>{t("subtitle")}</motion.h6>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-8 text-left"
          variants={cardContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              variants={cardItem}
              className="group relative h-full overflow-hidden rounded-2xl bg-white/5 dark:bg-white/[0.07] backdrop-blur-md border border-white/10 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 p-6 md:p-8"
            >
              <span
                className="absolute inset-0 bg-gradient-to-br from-aqua-400/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl z-0"
                aria-hidden
              />

              <div className="relative z-10 flex flex-col gap-4 h-full">
                <Quote
                  className="w-8 h-8 text-aqua-400/60 shrink-0"
                  aria-hidden
                />

                <blockquote className="flex-1 text-sm sm:text-base text-foreground/90 leading-relaxed">
                  {testimonial.testimonial}
                </blockquote>

                <footer className="pt-4 border-t border-white/10 dark:border-white/15">
                  <p className="font-prompt font-semibold text-base text-title">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-foreground/70">
                    {testimonial.position} · {testimonial.company}
                  </p>
                </footer>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
