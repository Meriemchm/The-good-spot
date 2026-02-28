"use client";

import { Container } from "@/components/ui/container";
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";
import { ContactHeader } from "./contact-header";
import ContactLeft from "./contact-left";

export const ContactContainer = () => {
  // Variantes pour la grille avec stagger
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <div
        className="h-full bg-cover bg-center bg-thirdary rounded-br-2xl rounded-bl-2xl"
        style={{ backgroundImage: "url('/Images/contact-bg.png')" }}
      >
        <Container className="py-24">
          <motion.div
            className="grid md:grid-cols-2 grid-cols-1 py-24 gap-12 md:gap-6"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="hidden md:block" variants={itemVariants}>
              <ContactLeft />
            </motion.div>

            <motion.div variants={rightItemVariants}>
              <div className="bg-white rounded-2xl p-8 flex flex-col gap-6">
                <ContactHeader />
                <ContactForm />
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
      <ContactInfo />
    </div>
  );
};