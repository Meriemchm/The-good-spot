import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function CtaFooter() {
  const t = useTranslations("ctaFooterlang");

  return (
    <section className="w-full min-h-[500px] flex flex-col md:flex-row bg-primary">
      
      {/* Texte prend plus d'espace */}
      <div className="flex-[2] flex flex-col justify-center text-black p-12">
        <h2 className="text-2xl md:text-5xl font-meduim mb-6 leading-tight">
          {t("title")}
        </h2>
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-90 transition w-fit">
          {t("button")}
        </button>
      </div>

      {/* Image plus petite */}
      <div className="flex-1 relative w-full min-h-[300px]">
        <Image
          src="/Images/cta-footer-pic.png"
          alt="Communauté"
          fill
          sizes=""
          priority
          className="object-cover"
        />
      </div>

    </section>
  );
}