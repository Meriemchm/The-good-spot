"use client";

import { useTranslations } from "next-intl";
import HouseCard from "./house-row-card";
import { HouseData } from "@/data/HouseData";


export default function HousesSection() {
  const t = useTranslations("houselang");

  return (
    <section className="bg-[#F3F1EC] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-semibold">
            {t("title")}
          </h2>

          <div className="max-w-sm space-y-4">
            <p className="text-gray-600">{t("description")}</p>
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              {t("button")}
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {HouseData.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </div>
    </section>
  );
}