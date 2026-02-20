import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CtaSection() {
  const t = useTranslations("ctasectionlang");

  return (
    <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/Images/cta-section-pic.png"
        alt="Community"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-between px-8 md:px-20">
        
        <h2 className="text-white text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
          {t("title")}
        </h2>

        <Link
          href={t("url")}
          className="flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
        >
          {t("button")}
          <ArrowUpRight size={18} />
        </Link>

      </div>
    </section>
  );
}