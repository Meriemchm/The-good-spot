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
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Image */}
        <Link key={property.id} href={`/${locale}/houses/${property.nameHouse}`}>
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={property.image}
                alt={property.title}
                width={700}
                height={500}
                className="w-full h-87.5 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </Link>

        {/* Content */}
        <div className="flex-1 space-y-5">
          {/* Address */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin size={16} className="text-amber-500" />
            {property.address}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-semibold">{property.title}</h3>

          {/* Description */}
          <p className="text-gray-600">{property.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {property.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-200 px-3 py-1 rounded-md"
              >
                {t(tag)}
              </span>
            ))}
          </div>

          {/* Infos */}
          <div className="flex items-center gap-8 text-gray-500 pt-4">
            <div className="flex items-center gap-2">
              <BedDouble size={18} />
              {property.beds}
            </div>
            <div className="flex items-center gap-2">
              <Bath size={18} />
              {property.baths}
            </div>
            <div className="flex items-center gap-2">
              <Maximize2 size={18} />
              {property.area} m²
            </div>
          </div>

          {/* Link */}
          <button className="flex items-center gap-2 pt-4 text-sm font-medium hover:gap-3 transition-all">
            {t("viewMore")}
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
