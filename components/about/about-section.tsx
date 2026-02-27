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
    <section className="relative flex bg-primary h-screen py-28 overflow-hidden">
      {/* Contenu central – animation au scroll */}
      <motion.div
        className="flex flex-col justify-center items-center max-w-5xl mx-auto text-center px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // se déclenche une fois quand 30% de l'élément est visible
      >
        {/* <motion.div variants={itemVariants}>
          <Image
            src="LogoTheGoodSpot.svg"
            alt="logo"
            width={80}
            height={80}
            className=""
          />
        </motion.div> */}

        <motion.h2
          variants={itemVariants}
          className="text-4xl max-w-xl md:text-5xl font-semibold leading-tight mb-6"
        >
          {t("title")}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-white max-w-2xl mx-auto mb-8"
        >
          {t("description")}
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link href="/concept">
            <button className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition-transform duration-300">
              {t("button")}
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* IMAGE GAUCHE – glisse depuis la gauche au scroll */}
      <motion.div
        className="absolute top-16 left-0 md:-left-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ x: 24 }}
      >
        <Image
          src={leftImage}
          alt="left image"
          width={280}
          height={320}
          className="rounded-2xl object-cover shadow-lg"
        />
      </motion.div>

      {/* IMAGE DROITE – glisse depuis la droite au scroll */}
      <motion.div
        className="absolute bottom-16 right-0 md:-right-10"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ x: -24 }}
      >
        <Image
          src={rightImage}
          alt="right image"
          width={320}
          height={260}
          className="rounded-2xl object-cover shadow-lg"
        />
      </motion.div>
    </section>
  );
}
