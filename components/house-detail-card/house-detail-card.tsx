"use client";

import Image from "next/image";
import { BedDouble, Bath, Maximize2, MapPin } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { House } from "@/data/HouseData";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // ← corrigé
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HouseTabs from "../ui/house-tabs";
import Button from "../ui/button";
import Link from "next/link";
import HouseImageViewer from "../ui/HouseImageViewer";
import { HouseDetailHeader } from "./house-detail-header";
import { motion } from "framer-motion";

interface HouseDetailCardProps {
  house: House;
}

export default function HouseDetailCard({ house }: HouseDetailCardProps) {
  const locale = useLocale();
  const t = useTranslations("property");

  return (
    <div className="max-w-5xl mx-auto py-20 space-y-8">
      <HouseDetailHeader house={house} />

      {/* Carrousel d'images */}
      {house.images && house.images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <HouseImageViewer
            images={house.images}
            houseName={t(`${house.nameHouse}.title`)}
          />
        </motion.div>
      )}
      {/* Infos générales */}
      {/* <div className="flex flex-wrap gap-6 text-gray-500 text-sm pt-4">
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
      </div> */}

      {/* Tags */}
      {/* {house.tags && (
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
      )} */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <HouseTabs houseName={house.nameHouse} />
      </motion.div>
    </div>
  );
}
