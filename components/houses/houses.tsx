"use client";

import { motion } from "framer-motion";
import { House, HouseData } from "@/data/HouseData";
import HouseCard from "./house-column-card";

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
    <motion.section
      className="bg-[#F3F1EC] px-6 lg:px-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {HouseData.map((house) => (
        <motion.div
          key={house.id}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <HouseCard property={house} />
        </motion.div>
      ))}
    </motion.section>
  );
}