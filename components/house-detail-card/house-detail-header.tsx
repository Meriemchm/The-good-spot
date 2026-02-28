"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

import { useLocale, useTranslations } from "next-intl";
import { House } from "@/data/HouseData";
import Button from "../ui/button";

interface Props {
  house: House;
}

export const HouseDetailHeader = ({ house }: Props) => {
  const locale = useLocale();
  const t = useTranslations(`property.${house.nameHouse}`);

  // Variantes pour le conteneur (stagger)
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
    <motion.div
      className="flex md:items-center justify-between gap-10 flex-col md:flex-row"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="flex flex-col gap-6" variants={itemVariants}>
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-1 text-gray-600"
        >
          <MapPin size={16} className="text-primary" />
          {house.address}
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="md:text-5xl text-3xl font-semibold"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-600 max-w-xl"
        >
          {t("description")}
        </motion.p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Link href={`/${locale}/contact`}>
          <Button className="bg-primary text-white hover:scale-105 transition">
            Contact
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};