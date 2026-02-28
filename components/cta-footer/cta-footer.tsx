"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaFooter() {
  const t = useTranslations("ctaFooterlang");

  // Récupérer le titre et le découper
  const titleText = t("title");
  const words = titleText.split(" ");
  const lastSixWords = words.slice(-4).join(" ");
  const firstPart = words.slice(0, -4).join(" ");

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
      className="w-full min-h-125 flex flex-col md:flex-row bg-primary"
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
        {/* Titre avec image à côté et soulignement des 6 derniers mots */}
        <div className="flex items-center gap-3 flex-wrap mb-6">
          <h2 className="relative text-2xl md:text-5xl max-w-2xl font-medium leading-tight">
            {firstPart && <>{firstPart} </>}
            <span className="relative font-semibold inline-block">
              {lastSixWords}
              <span className="absolute left-0 bottom-0 w-full h-1 bg-black" />
            </span>
            <Image
              src="/splash.svg"
              alt=""
              width={40}
              height={40}
              className="absolute top-0 md:right-12 right-0 w-8 h-8 md:w-10 md:h-10"
            />
          </h2>
        </div>

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
        className="flex-1 relative w-full min-h-75"
      >
        <Image
          src="/Images/cta-footer-pic.png"
          alt="Communauté"
          fill
          sizes="100wv"
          priority
          className="object-cover"
        />
      </motion.div>
    </motion.section>
  );
}