"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, Variants, easeOut } from "framer-motion";
import HearderTitle from "../ui/hearderTitleSection";

export default function ConceptSection() {
  const t = useTranslations("conceptlang");
  const paragraphs = t.raw("paragraphs") as string[];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <>
      <HearderTitle title={t("title")} subtitle={t("subtitle")} />

      <motion.section
        className="grid md:grid-cols-2 gap-10 items-center py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Image */}
        <motion.div className="relative w-full h-112.5" variants={itemVariants}>
          <Image
            src="/Images/concept-pic.png"
            alt="About"
            fill
            className="object-cover rounded-t-full"
          />
        </motion.div>

        {/* Content */}
        <motion.div className="space-y-9" variants={itemVariants}>
          <motion.span
            className="text-yellow-500 text-sm"
            variants={itemVariants}
          >
            {t("title")}
          </motion.span>

          <motion.h2 className="text-2xl md:text-4xl font-meduim" variants={itemVariants}>
            {t("subtitle")}
          </motion.h2>

          <motion.div className="space-y-2">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-gray-600"
                variants={itemVariants}
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}
