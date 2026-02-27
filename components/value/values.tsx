"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ValueCard from "./value-card";
import { ValuesData } from "@/data/ValuesData";
import { Container } from "../ui/container";

export default function ValuesSection() {
  const t = useTranslations("values");

  // Variantes pour les conteneurs avec stagger
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

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="h-full py-25 flex justify-center items-center bg-secondary/50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full"
      >
        <Container className="space-y-10">
          {/* Première grille (titre + carte en surbrillance) avec stagger interne */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-start"
            variants={gridVariants}
          >
            {/* Bloc titre */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-semibold">{t("title")}</h2>
              <p className="text-gray-500 mt-2">{t("subtitle")}</p>
            </motion.div>

            {/* Carte en surbrillance (premier élément) */}
            <motion.div variants={itemVariants}>
              <ValueCard
                icon={ValuesData[0].icon}
                title={t(ValuesData[0].titleKey)}
                description={t(ValuesData[0].descriptionKey)}
                highlighted
              />
            </motion.div>
          </motion.div>

          {/* Deuxième grille (cartes restantes) avec stagger interne */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={gridVariants}
          >
            {ValuesData.slice(1).map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <ValueCard
                  icon={item.icon}
                  title={t(item.titleKey)}
                  description={t(item.descriptionKey)}
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}