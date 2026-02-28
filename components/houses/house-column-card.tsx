"use client";

import Image from "next/image";
import { MapPin, BedDouble, Bath, Maximize2, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { House } from "@/data/HouseData";
import Link from "next/link";

interface PropertyCardProps {
  property: House;
}

export default function HouseCard({ property }: PropertyCardProps) {
  const t = useTranslations("property");
  const locale = useLocale();

  return (
    <div className="py-12 border-b border-gray-300">
      <div className="flex flex-col lg:flex-row gap-10 items-center bg-white rounded-2xl shadow-lg p-6">
        {/* Image */}
        <Link
          key={property.id}
          href={`/${locale}/${locale === "fr" ? "maisons" : "houses"}/${property.nameHouse}`}
        >
          <div className="relative rounded-2xl overflow-hidden cursor-pointer group">
            <Image
              src={property.images[0]}
              alt={t(`${property.nameHouse}.title`)}
              width={400}
              height={350}
              className="object-cover w-full h-80 group-hover:scale-105 transition duration-500"
            />

            {/* Badge en haut à droite */}
            <div className="absolute top-3 right-3 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
              <div className="flex justify-center items-center gap-2">
                <BedDouble size={16} /> {property.beds} disponible
              </div>
            </div>
          </div>
        </Link>

        {/* Contenu */}
        <div className="flex-1 space-y-5">
          {/* Adresse */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin size={16} className="text-amber-500" />
            {property.address}
          </div>

          {/* Titre */}
          <h3 className="text-2xl font-semibold">
            {t(`${property.nameHouse}.title`)}
          </h3>

          {/* Description */}
          <p className="text-gray-600">
            {t(`${property.nameHouse}.description`)}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {property.tags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-200 px-3 py-1 rounded-md"
              >
                {t(`${property.nameHouse}.tags.${tag}`)}
              </span>
            ))}
          </div>

          {/* Infos */}
          <div className="flex items-center gap-8  pt-4">
            {/* <div className="flex items-center gap-2">
              <BedDouble size={18} /> {property.beds}
            </div>
            <div className="flex items-center gap-2">
              <Bath size={18} /> {property.baths}
            </div> */}
            <div className="flex items-center gap-2 text-gray-500">
              <Maximize2 size={18} /> {property.area} m²
            </div>
            <div className="font-semibold text-xl">
               {t(`${property.nameHouse}.info-house.price.content`)}
            </div>
          </div>

          {/* Bouton */}
          <Link
            key={property.id}
            href={`/${locale}/${locale === "fr" ? "maisons" : "houses"}/${property.nameHouse}`}
          >
            <button className="flex items-center gap-2 pt-4 text-sm font-medium hover:gap-3 transition-all">
              {t("viewMore")}
              <ChevronRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
