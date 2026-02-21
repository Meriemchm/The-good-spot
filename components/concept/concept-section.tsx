"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import HearderTitle from "../ui/hearderTitleSection";

export default function ConceptSection() {
  const t = useTranslations("conceptlang");

  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <>
      <HearderTitle title={t("title")} subtitle={t("subtitle")} />
      <section className="grid md:grid-cols-2 gap-10 items-center py-12">
        {/* Image */}
        <div className="relative w-full h-112.5">
          <Image
            src="/images/concept-pic.png"
            alt="About"
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Content */}
        <div className="space-y-9">
          <span className="text-yellow-500 text-sm">{t("title")}</span>

          <h2 className="text-2xl font-semibold">{t("subtitle")}</h2>
          <div className="space-y-2">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600">
                {p}
              </p>
            ))}
          </div>

          <Link
            href="/concept"
            className="mt-4 bg-black text-white px-6 py-2 rounded-full"
          >
            {t("cta")}
          </Link>
        </div>
      </section>
    </>
  );
}
