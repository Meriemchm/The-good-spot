"use client";

import { motion } from "framer-motion";
import { ContactInfoData } from "@/data/ContactData";
import { useTranslations } from "next-intl";

export default function ContactInfo() {
  const t = useTranslations("contact");

  // Variantes pour le conteneur avec stagger
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

  // Variante pour chaque élément
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-thirdary py-16">
      <motion.div
        className="container mx-auto grid md:grid-cols-3 grid-cols-1 text-center gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {ContactInfoData.map((info, index) => {
          const Icon = info.icon;
          const label = t(info.labelKey);
          const value = t(info.valueKey);

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="flex flex-col items-center gap-2"
            >
              {Icon}
              <h3 className="font-bold text-lg">{label}</h3>
              <p className="text-sm text-gray-700">
                {info.labelKey === "email" ? (
                  <a href={`mailto:${value}`} className="hover:underline">
                    {value}
                  </a>
                ) : info.labelKey === "phone" ? (
                  <a href={`tel:${value}`} className="hover:underline">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}