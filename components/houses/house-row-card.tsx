"use client";

import Image from "next/image";
import { MapPin, BedDouble, Bath } from "lucide-react";
import { House } from "@/data/HouseData";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

interface HouseCardProps {
  house: House;
}

export default function HouseCard({ house }: HouseCardProps) {
  const locale = useLocale();
  const t = useTranslations("property");

  return (
    <div className="space-y-2">
      {/* Image cliquable */}
      <Link key={house.id} href={`/${locale}/houses/${house.nameHouse}`}>
        <div className="rounded-2xl overflow-hidden cursor-pointer">
          <Image
            src={house.images[0]}
            alt={t(`${house.nameHouse}.title`)}
            width={400}
            height={350}
            className="object-cover w-full h-80 hover:scale-105 transition duration-500"
          />
        </div>
      </Link>

      {/* Adresse */}
      <div className="flex items-center gap-2 pt-4 text-sm text-gray-600">
        <MapPin size={16} className="text-amber-500" />
        {house.address}
      </div>

      {/* Titre traduit */}
      <Link  href={`/${locale}/houses/${house.nameHouse}`}>
        <h3 className="font-semibold text-lg pb-4">
          {t(`${house.nameHouse}.title`)}
        </h3>{" "}
      </Link>

      {/* Infos */}
      <div className="flex items-center gap-6 text-gray-500 text-sm">
        <div className="flex items-center gap-1">
          <BedDouble size={16} /> {house.beds}
        </div>
        <div className="flex items-center gap-1">
          <Bath size={16} /> {house.baths}
        </div>
      </div>
    </div>
  );
}
