"use client";

import Image from "next/image";
import { BannerData } from "@/data/BannerData";
import { useLocale, useTranslations } from "next-intl";

interface BannerProps {
  pageKey: string;
  highlight?: boolean; // Nouvelle prop pour afficher l'image Highlight
}

export const Banner = ({ pageKey, highlight = true }: BannerProps) => {
  const t = useTranslations(`${pageKey}`);

  return (
    <div
      className="w-screen h-[40vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/Images/hero-poster.png')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      <h1 className="relative z-10 text-white text-3xl md:text-5xl font-medium">
        {t(`${pageKey}`)}
        {highlight && (
          <Image
            src="/Highligh.svg"
            alt=""
            width={60}
            height={20}
            className="absolute left-1/2 -translate-x-1/2 -bottom-6 md:-bottom-10 w-12 md:w-16 h-auto"
          />
        )}
      </h1>
    </div>
  );
};