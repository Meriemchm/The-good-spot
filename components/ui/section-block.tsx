"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface SectionBlockProps {
  sectionKey: string;
  buttonKey?: boolean;
  imageSrc: string;
  reverse?: boolean;
}

export default function SectionBlock({
  sectionKey,
  buttonKey = false,
  imageSrc,
  reverse = false,
}: SectionBlockProps) {
  const t = useTranslations(`${sectionKey}`);

  // Variantes pour le conteneur principal (stagger)
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
    <motion.section
      className="w-full py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className={`max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
        variants={containerVariants}
      >
        {/* Text Content */}
        <motion.div className="flex-1 space-y-6" variants={itemVariants}>
          <motion.span
            variants={itemVariants}
            className="text-sm text-amber-500 font-medium"
          >
            {t("subtitle")}
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl font-semibold leading-tight"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 leading-relaxed"
          >
            {t("description")}
          </motion.p>

          {buttonKey && (
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                {t("button")}
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Image */}
        <motion.div className="flex-1" variants={itemVariants}>
          <Image
            src={imageSrc}
            alt="section image"
            width={600}
            height={500}
            className="rounded-2xl object-cover w-full h-auto"
            loading="eager"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}