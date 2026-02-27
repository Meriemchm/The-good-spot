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
      {/* Image de fond avec zoom progressif */}

        <Image
          src="/Images/cta-section-pic.png"
          alt="Community"
          fill
          priority
          className="object-cover"
        />


      {/* Overlay sombre avec fondu */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Contenu avec apparition décalée */}
      <motion.div
        className="relative z-10 flex h-full items-center justify-between px-8 md:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-white text-3xl md:text-5xl font-semibold max-w-2xl leading-tight"
        >
          {t("title")}
        </motion.h2>

        <motion.div variants={itemVariants}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href={t("url")}
              className="flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-full font-medium"
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