"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";

interface CenteredHeroSectionProps {
  namespace: string;
  leftImage: string;
  rightImage: string;
  icon?: ReactNode;
}

export default function AboutSection({
  namespace,
  leftImage,
  rightImage,
  icon,
}: CenteredHeroSectionProps) {
  const t = useTranslations(namespace);

  // Variants pour le contenu central (effet staggered)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative flex bg-primary h-screen py-16 md:py-28 overflow-hidden">
      {/* Contenu central – animation au scroll */}
      <motion.div
        className="flex flex-col justify-center items-center max-w-5xl mx-auto text-center px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="relative text-3xl md:text-4xl lg:text-5xl lg:max-w-xl max-w-md font-semibold leading-tight mb-6"
        >
          {t("title")}
          {/* Image splash en haut à droite */}
          <Image
            src="/splash.svg"
            alt=""
            width={60}
            height={60}
            className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-8 h-8 md:w-12 md:h-12"
          />
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-white/90 max-w-md mx-auto mb-8 text-sm md:text-base"
        >
          {t("description")}
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link href="/concept">
            <button className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition-transform duration-300 text-sm md:text-base">
              {t("button")}
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* IMAGE GAUCHE */}
      <motion.div
        className="absolute top-10 md:top-16 -left-6 md:-left-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ x: 24 }}
      >
        <Image
          src={leftImage}
          alt="left image"
          width={500}
          height={500}
          className="rounded-2xl object-cover shadow-lg md:w-70 md:h-65 w-56 h-auto"
        />
      </motion.div>

      {/* IMAGE DROITE */}
      <motion.div
        className="absolute bottom-10 md:bottom-16 -right-10"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ x: -24 }}
      >
        <Image
          src={rightImage}
          alt="right image"
          width={500}
          height={500}
          className="rounded-2xl object-cover shadow-lg md:w-[320px] md:h-65 w-56 h-auto"
        />
      </motion.div>
    </section>
  );
}