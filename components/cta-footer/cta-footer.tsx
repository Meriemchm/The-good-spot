"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaFooter() {
  const t = useTranslations("ctaFooterlang");

  // Variantes pour les deux blocs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="w-full min-h-[500px] flex flex-col md:flex-row bg-primary"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Bloc texte */}
      <motion.div
        variants={itemVariants}
        className="flex-2 flex flex-col justify-center text-black p-12"
      >
        <h2 className="text-2xl md:text-5xl max-w-2xl py-4 font-medium mb-6 leading-tight">
          {t("title")}
        </h2>
    
          <Link
            href={"/contact"}
            className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 duration-200 transition w-fit block"
          >
            {t("button")}
          </Link>
        </motion.div>


      {/* Bloc image */}
      <motion.div
        variants={itemVariants}
        className="flex-1 relative w-full min-h-[300px]"
      >
        <Image
          src="/Images/cta-footer-pic.png"
          alt="Communauté"
          fill
          sizes=""
          priority
          className="object-cover"
        />
      </motion.div>
    </motion.section>
  );
}