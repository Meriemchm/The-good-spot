"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

interface BannerProps {
  pageKey?: string;
  title?: string;
  image?: string;
  highlight?: boolean;
}

export const Banner = ({
  pageKey,
  title,
  image = "/Images/hero-poster.png",
  highlight = true,
}: BannerProps) => {
  const t = useTranslations(`${pageKey}`);

  const displayTitle = title || t(`${pageKey}`);

  return (
    <div
      className="w-screen h-[40vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <h1 className="relative z-10 capitalize text-white text-3xl md:text-5xl font-medium text-center">
        {displayTitle}

        {highlight && (
          <Image
            src="/Highligh.svg"
            alt=""
            width={60}
            height={20}
            className="absolute left-1/2 -translate-x-1/2 -bottom-6 md:-bottom-10 w-12 md:w-16"
          />
        )}
      </h1>
    </div>
  );
};