"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { LayoutGrid, Image as ImageIcon } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface HouseImageViewerProps {
  images: string[];
  houseName?: string;
}

export default function HouseImageViewer({ images, houseName = "" }: HouseImageViewerProps) {
  const [viewMode, setViewMode] = useState<"grid" | "slider">("slider");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const goToPrevious = () =>
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () =>
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative space-y-4">
      {/* Boutons avec icônes, au-dessus des images */}
      <div className="absolute flex z-5 top-5 right-5 justify-end gap-2">
        <button
          onClick={() => setViewMode("slider")}
          className={`p-2 rounded-full transition ${
            viewMode === "slider"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-label="Vue diaporama"
        >
          <ImageIcon size={20} />
        </button>
        {/* <button
          onClick={() => setViewMode("grid")}
          className={`p-2 rounded-full transition ${
            viewMode === "grid"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-label="Vue grille"
        >
          <LayoutGrid size={20} />
        </button> */}
      </div>

      {/* Affichage conditionnel */}
      {viewMode === "slider" ? (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={2}
          className="rounded-xl overflow-hidden [&_.swiper-button-next]:text-primary [&_.swiper-button-prev]:text-primary [&_.swiper-pagination-bullet-active]:bg-primary"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <Image
                  src={img}
                  alt={houseName ? `${houseName} - image ${idx + 1}` : `Image ${idx + 1}`}
                  width={1200}
                  height={600}
                  className="w-full h-125 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-xl"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={img}
                alt={houseName ? `${houseName} - image ${idx + 1}` : `Image ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox (inchangée) */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl z-10 hover:opacity-70"
            >
              &times;
            </button>

            {images.length > 1 && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 text-white text-4xl z-10 hover:opacity-70"
              >
                ‹
              </button>
            )}

            <div className="relative w-full h-full">
              <Image
                src={images[selectedImageIndex]}
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>

            {images.length > 1 && (
              <button
                onClick={goToNext}
                className="absolute right-4 text-white text-4xl z-10 hover:opacity-70"
              >
                ›
              </button>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}