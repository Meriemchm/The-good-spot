"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

interface SectionBlockProps {
  sectionKey: string;
  buttonKey?: boolean;
  imageSrc: string;
  reverse?: boolean;
}

export default function SectionBlock({
  sectionKey,
  buttonKey = false,
  imageSrc,
  reverse = false,
}: SectionBlockProps) {
  const t = useTranslations(`${sectionKey}`);

  return (
    <section className="w-full py-20">
      <div
        className={`max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <span className="text-sm text-amber-500 font-medium">
            {t('subtitle')}
          </span>

          <h2 className="text-4xl font-semibold leading-tight">
            {t('title')}
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {t('description')}
          </p>

          {buttonKey && (
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              {t('button')}
            </button>
          )}
        </div>

        {/* Image */}
        <div className="flex-1">
          <Image
            src={imageSrc}
            alt="section image"
            width={600}
            height={500}
            className="rounded-2xl object-cover w-full h-auto"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
