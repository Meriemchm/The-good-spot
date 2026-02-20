"use client";

import { BannerData } from "@/data/BannerData";
import { useLocale, useTranslations } from "next-intl";

interface BannerProps {
  pageKey: string;
}

export const Banner = ({ pageKey }: BannerProps) => {
  const t = useTranslations(`${pageKey}`);

  return (
    <div
      className="w-screen h-[40vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/Images/hero-poster.png')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      <h1 className="relative z-10 text-white text-3xl md:text-5xl font-meduim">
        {t(`${pageKey}`)}
      </h1>
    </div>
  );
};
