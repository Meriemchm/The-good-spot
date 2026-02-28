"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface SectionBlockProps {
  sectionKey: string;
  buttonKey?: boolean;
  imageSrc: string | string[]; // accepte une ou plusieurs images
  reverse?: boolean;
  sparkles?: boolean;
}

export default function SectionBlock({
  sectionKey,
  buttonKey = false,
  imageSrc,
  reverse = false,
  sparkles = false,
}: SectionBlockProps) {
  const t = useTranslations(`${sectionKey}`);

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

  const isImageArray = Array.isArray(imageSrc);

  return (
    <motion.section
      className="w-full py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className={`max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
        variants={containerVariants}
      >
        {/* Texte */}
        <motion.div className="flex-1 space-y-6" variants={itemVariants}>
          <motion.span
            variants={itemVariants}
            className="text-sm text-primary font-medium"
          >
            {t("subtitle")}
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="relative text-5xl font-medium leading-tight"
          >
            <span className="inline-flex items-start gap-1 flex-wrap">
              {t("title")}
              {sparkles && (
                <Image
                  src="/sparkles.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="absolute left-75 w-16 h-16 -translate-y-1 md:-translate-y-1.5"
                />
              )}
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 leading-relaxed max-w-md"
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

        {/* Image(s) */}
        <motion.div className="flex-1 w-full" variants={itemVariants}>
          {isImageArray ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {imageSrc.map((src, index) => (
                <div
                  key={index}
                  className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`section image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <Image
              src={imageSrc}
              alt="section image"
              width={600}
              height={600}
              className="rounded-2xl object-cover w-full h-auto hover:scale-105 transition-transform duration-300"
              loading="eager"
            />
          )}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
