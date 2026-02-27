"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FAQData } from "@/data/FAQData";
import AccordionItem from "../ui/AccordionItem";
import HearderTitle from "../ui/hearderTitleSection";
import { Container } from "../ui/container";

export default function FAQSection() {
  const t = useTranslations("faqs");

  // Variantes pour le conteneur principal du contenu (image + accordéons)
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

  // Variante pour chaque élément de la grille (image et bloc d'accordéons)
  const gridItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Variante pour les accordéons individuels (effet stagger)
  const accordionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const accordionItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <Container className="pt-12 pb-24">
      <section className="bg-white">
        {/* Titre et sous-titre avec animation de fondu + glissement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <HearderTitle title={t("title")} subtitle={t("subtitle")} />
        </motion.div>

        {/* Grille avec animation sur les deux colonnes */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-start mt-10"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image à gauche */}
          <motion.div variants={gridItemVariants} className="relative w-full h-full">
            <Image
              src="/Images/faq-pic.png"
              alt="FAQ illustration"
              width={600}
              height={600}
              className="rounded-2xl object-cover w-full h-auto"
              priority
            />
          </motion.div>

          {/* Accordéons à droite avec stagger interne */}
          <motion.div
            className="space-y-2"
            variants={accordionContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {FAQData.slice(0, 5).map((item) => (
              <motion.div key={item.id} variants={accordionItemVariants}>
                <AccordionItem
                  questionKey={item.questionKey}
                  answerKey={item.answerKey}
                  isList={item.isList}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </Container>
  );
}