"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export interface BackButtonProps {
  href: string;
  label: string;
}

const MotionLink = motion(Link);

const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <MotionLink
      href={href}
      className="relative z-20 inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors mt-6 mb-2 group"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      whileHover={{ x: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
      {label}
    </MotionLink>
  );
};

export default BackButton;
