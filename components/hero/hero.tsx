"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <div className="relative h-screen bg-white overflow-hidden grid place-items-center">
      {/* Vidéo en background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/Images/hero-poster.png"
      >
        <source src="/Videos/TheGoodSpot Video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>

      {/* Overlay animé */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-black/40"
      />

      {/* Contenu animé */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-white max-w-xl text-3xl md:text-5xl font-bold mb-6 leading-tight"
        >
          {t("title")}

          {/* Étoile : position et taille responsives */}
          <Image
            src="/stars.svg"
            alt="stars"
            width={28}
            height={28}
            className="absolute inline-block md:right-0 md:-top-2 -right-2.5 -top-2.5 md:w-7 w-5 h-auto"
          />

          {/* Flèche spirale : position et taille responsives */}
          <Image
            src="/arrow-spiral-down-5.svg"
            alt="spiral-down"
            width={250}
            height={250}
            className="absolute inline-block md:-left-32 md:top-10 -z-1 -left-7.5 top-20 md:w-64 w-32 h-auto"
          />
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/90 md:text-md mb-8 max-w-2xl mx-auto"
        >
          {t("subtitle")}
        </motion.p>

        {/* Bouton */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href={t("cta.url")}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition shadow-lg"
            >
              {t("cta.label")}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;