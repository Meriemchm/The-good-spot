// components/Services.jsx
"use client";

import { motion } from "framer-motion";
import { ServiceData } from "@/data/ServicesData";
import { useTranslations } from "next-intl";
import ServiceCard from "../ui/ServiceCard";
import HearderTitle from "../ui/hearderTitleSection";
import { Container } from "../ui/container";
import CtaSection from "../cta-section/cta-section";

export default function Services() {
  const t = useTranslations("serviceslang");

  // Variantes pour le conteneur des cartes (stagger)
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Container className="pt-12 pb-24">
        {/* Titre et sous-titre avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <HearderTitle title={t("title")} subtitle={t("subtitle")} />
        </motion.div>

        {/* Grille des services avec stagger */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {ServiceData.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ServiceCard
                icon={service.icon}
                title={t(service.titleKey)}
                description={t(service.descriptionKey)}
                highlighted={service.highlighted}
              />
            </motion.div>
          ))}
        </motion.section>
      </Container>
      <CtaSection />
    </>
  );
}