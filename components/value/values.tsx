"use client";

import { useTranslations } from "next-intl";
import ValueCard from "./value-card";
import { ValuesData } from "@/data/ValuesData";
import { Container } from "../ui/container";

export default function ValuesSection() {
  const t = useTranslations("values");

  return (
    <section className=" h-full py-25 flex justify-center items-center bg-secondary/50">
      <Container className="space-y-10">
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
      </Container>
    </section>
  );
}
