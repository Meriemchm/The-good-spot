"use client";

import Image from "next/image";
import { BedDouble, Bath, Maximize2, MapPin } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { House } from "@/data/HouseData";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";   // ← corrigé
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HouseTabs from "../ui/house-tabs";

interface HouseDetailCardProps {
  house: House;
}

export default function HouseDetailCard({ house }: HouseDetailCardProps) {
  const locale = useLocale();
  const t = useTranslations("property");

  return (
    <div className="max-w-5xl mx-auto py-20 space-y-8">
      {/* Titre traduit */}
      <h1 className="text-3xl font-bold">{t(`${house.nameHouse}.title`)}</h1>

      {/* Carrousel d'images */}
      {house.images && house.images.length > 0 && (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={2}
          className="rounded-xl overflow-hidden"
        >
          {house.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={img}
                alt={t(`${house.nameHouse}.title`)}
                width={1200}
                height={600}
                className="w-full h-125 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Description */}
      <p className="text-gray-600">{t(`${house.nameHouse}.description`)}</p>

      {/* Infos générales */}
      <div className="flex flex-wrap gap-6 text-gray-500 text-sm pt-4">
        <div className="flex items-center gap-1">
          <MapPin size={16} /> {house.address}
        </div>
        <div className="flex items-center gap-1">
          <BedDouble size={16} /> {house.beds}
        </div>
        <div className="flex items-center gap-1">
          <Bath size={16} /> {house.baths}
        </div>
        <div className="flex items-center gap-1">
          <Maximize2 size={16} /> {house.area} m²
        </div>
      </div>

      {/* Tags */}
      {house.tags && (
        <div className="flex flex-wrap gap-2 pt-4">
          {house.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-200 px-3 py-1 rounded-md"
            >
              {t(`${house.nameHouse}.tags.${tag}`)}
            </span>
          ))}
        </div>
      )}


      <HouseTabs houseName={house.nameHouse} />
    </div>
  );
}