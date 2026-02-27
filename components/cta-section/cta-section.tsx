"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaSection() {
  const t = useTranslations("ctasectionlang");

  // Variantes pour les animations du contenu
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full h-87.5 md:h-112.5 overflow-hidden">
      {/* Image de fond */}
      <Image
        src="/Images/cta-section-pic.png"
        alt="Community"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay sombre */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Contenu avec apparition décalée */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row h-full items-center justify-center md:justify-between px-8 md:px-20 text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="relative text-white text-3xl md:text-5xl font-semibold max-w-2xl leading-tight mb-6 md:mb-0"
        >
          {t("title")}
          {/* Image ribbon en bas à gauche */}
          <Image
            src="/ribbon.svg"
            alt=""
            width={40}
            height={40}
            className="absolute lg:left-[35%] md:left-[80%] -right-2 bottom-5  w-8 h-8 md:w-12 md:h-12"
          />
        </motion.h2>

        <motion.div variants={itemVariants}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href={t("url")}
              className="flex items-center gap-2 bg-primary text-black px-8 py-4 md:px-6 md:py-3 rounded-full font-medium"
            >
              {t("button")}
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}