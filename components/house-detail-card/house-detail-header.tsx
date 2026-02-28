"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

import { useLocale, useTranslations } from "next-intl";
import { House } from "@/data/HouseData";
import Button from "../ui/button";

interface Props {
  house: House;
}

export const HouseDetailHeader = ({ house }: Props) => {
  const locale = useLocale();
  const t = useTranslations(`property.${house.nameHouse}`);

  return (
    <div className="flex md:items-center justify-between gap-10 flex-col md:flex-row">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-1 text-gray-600">
          <MapPin size={16} className="text-primary" />
          {house.address}
        </div>

        <h1 className="md:text-5xl text-3xl font-semibold">
          {t("title")}
        </h1>

        <p className="text-gray-600 max-w-xl">
          {t("description")}
        </p>
      </div>

      <Link href={`/${locale}/contact`}>
        <Button className="bg-primary text-white hover:scale-105 transition">
          Contact
        </Button>
      </Link>
    </div>
  );
};