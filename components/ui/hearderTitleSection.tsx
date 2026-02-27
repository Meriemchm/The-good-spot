"use client";
import React from "react";
import { motion } from "framer-motion";

interface HearderTitleProps {
  title: string;
  subtitle: string;
}

const HearderTitle: React.FC<HearderTitleProps> = ({ title, subtitle }) => {
  const words = subtitle.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  return (
    <div className="flex flex-col w-full items-center text-center justify-center pt-4 pb-16">
      <motion.h1
        className="md:text-sm text-xs capitalize text-primary font-semibold py-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="text-2xl max-w-md md:text-4xl font-medium capitalize"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        {firstPart}{" "} 
        <span className="relative inline-block underline">
          {lastWord}
        </span>
      </motion.p>
    </div>
  );
};

export default HearderTitle;