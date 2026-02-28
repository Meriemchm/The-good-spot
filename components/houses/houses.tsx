"use client";

import { motion } from "framer-motion";
import { House, HouseData } from "@/data/HouseData";
import HouseCard from "./house-column-card";
import CtaSection from "../cta-section/cta-section";

export default function PropertySection() {
  // Variantes pour la grille (conteneur principal avec stagger)
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

  // Variante pour chaque carte
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <motion.section
        className="bg-[#f3efec] px-6 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {HouseData.map((house) => (
          <motion.div
            key={house.id}
            variants={itemVariants}
          >
            <HouseCard property={house} />
          </motion.div>
        ))}
      </motion.section>
      <CtaSection />
    </>
  );
}
