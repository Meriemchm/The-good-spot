"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import HouseCard from "./house-row-card";
import { HouseData } from "@/data/HouseData";

export default function HousesSection() {
  const t = useTranslations("houselang");

  // Variantes pour le conteneur de l'en-tête
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Variantes pour la grille des cartes (stagger)
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-thirdary py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header avec animations */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2
            variants={headerVariants}
            className="text-4xl md:text-5xl "
          >
            {t("title")}
          </motion.h2>

          <motion.div variants={headerVariants} className="max-w-sm space-y-4">
            <p className="text-gray-600">{t("description")}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition duration-300"
            >
              {t("button")}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Grille des cartes avec stagger */}
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {HouseData.map((house) => (
            <motion.div key={house.id} variants={cardVariants}>
              <HouseCard house={house} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}