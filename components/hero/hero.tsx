"use client";

import { useGsapFade } from "@/hooks/useGsapFade";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Hero = () => {
  const faderight = useGsapFade("up");
  const t = useTranslations("hero"); 

  return (
    <div className="relative w-screen h-screen overflow-hidden grid place-items-center">
      {/* Vidéo en background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover rounded-bl-full"
        autoPlay
        loop
        muted
        playsInline
        poster="/Images/hero-poster.png"
      >
        <source src="/Videos/TheGoodSpot Video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>

      {/* Overlay sombre */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Texte et bouton centrés */}
      <div
        ref={faderight}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
          {t("title")}
        </h1>
        <p className="text-white/90 md:text-md mb-8 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
        <Link href={t("cta.url")}>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition shadow-lg">
            {t("cta.label")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
