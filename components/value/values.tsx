"use client";

import { useTranslations } from "next-intl";
import ValueCard from "./value-card";
import { ValuesData } from "@/data/ValuesData";

export default function ValuesSection() {
  const t = useTranslations("values");

  return (
    <section className="py-16 space-y-10">
      {/* Desktop : deux colonnes pour le header + carte highlight */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Titre et sous-titre */}
        <div>
          <h2 className="text-4xl font-semibold">{t("title")}</h2>
          <p className="text-gray-500 mt-2">{t("subtitle")}</p>
        </div>

        {/* Carte en surbrillance (premier élément) */}
        <ValueCard
          icon={ValuesData[0].icon}
          title={t(ValuesData[0].titleKey)}
          description={t(ValuesData[0].descriptionKey)}
          highlighted
        />
      </div>

      {/* Autres cartes (deux colonnes sur desktop) */}
      <div className="grid md:grid-cols-2 gap-8">
        {ValuesData.slice(1).map((item, i) => (
          <ValueCard
            key={i}
            icon={item.icon}
            title={t(item.titleKey)}
            description={t(item.descriptionKey)}
          />
        ))}
      </div>
    </section>
  );
}