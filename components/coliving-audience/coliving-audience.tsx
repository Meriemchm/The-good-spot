"use client";

import { motion } from "framer-motion";
import { AudienceData } from "@/data/AudienceData";
import AudienceItem from "./audience-item";
import AudienceDecorations from "./audience-decoration";

interface AudienceSectionProps {
  t?: any;
  title?: string;
  description?: string;
  seeAudience?: boolean; // true par défaut
}

export default function AudienceSection({
  t,
  title,
  description,
  seeAudience = true,
}: AudienceSectionProps) {
  // Variantes pour le contenu principal (titre, description, grille)
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
    <section className="relative flex flex-col justify-center items-center text-center h-full py-25 overflow-hidden">
      {/* Décoration avec animation de fondu */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <AudienceDecorations />
      </motion.div>

      {/* Contenu principal avec stagger */}
      <motion.div
        className="flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Titre */}
        <motion.h2 variants={itemVariants} className="text-3xl font-semibold mb-4">
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-gray-600 mb-10">
          {description}
        </motion.p>

        {/* Éléments (AudienceItem) seulement si seeAudience = true */}
        {seeAudience && (
          <motion.div
            className="flex justify-center gap-6 flex-wrap"
            variants={containerVariants} // on réutilise le stagger pour les items
          >
            {AudienceData.map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <AudienceItem
                  icon={item.icon}
                  label={t(item.labelKey)}
                  highlighted={item.highlighted}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}