"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface CenteredHeroSectionProps {
  namespace: string;
  leftImage: string;
  rightImage: string;
  icon?: ReactNode;
}

export default function AboutSection({
  namespace,
  leftImage,
  rightImage,
  icon,
}: CenteredHeroSectionProps) {
  const t = useTranslations(namespace);

  return (
    <section className="relative flex  bg-thirdary h-screen py-28 overflow-hidden">
      <div className="flex flex-col justify-center items-center max-w-5xl mx-auto text-center px-6 relative z-10">
        <Image
          src='LogoTheGoodSpot.svg'
          alt="left image"
          width={80}
          height={80}
          className=""
        />

        <h2 className="text-4xl max-w-xl md:text-5xl font-semibold leading-tight mb-6">
          {t("title")}
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          {t("description")}
        </p>

        <Link href={'/concept'} className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          {t("button")}
        </Link>
      </div>

      {/* LEFT IMAGE */}
      <div className="absolute top-16 left-0 md:-left-10">
        <div className="transform transition-all duration-700 ease-out hover:translate-x-6">
          <Image
            src={leftImage}
            alt="left image"
            width={280}
            height={320}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute bottom-16 right-0 md:-right-10">
        <div className="transform transition-all duration-700 ease-out hover:-translate-x-6">
          <Image
            src={rightImage}
            alt="right image"
            width={320}
            height={260}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
