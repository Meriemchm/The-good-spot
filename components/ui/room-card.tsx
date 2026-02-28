"use client";

import { BedDouble } from "lucide-react";
import Image from "next/image";

interface RoomCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  status: string;
}

export default function RoomCard({
  name,
  description,
  price,
  image,
  status,
}: RoomCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col">
      <div className="relative h overflow-hidden cursor-pointer group">
        <Image
          src={image}
          alt={name}
          width={400}
          height={350}
          className="object-cover w-full h-72 group-hover:scale-105 transition duration-500"
        />

        {/* Badge en haut à droite */}
        <div className="absolute top-3 right-3 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
          <div className="flex justify-center items-center gap-2">
            <BedDouble size={16} /> {status}
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-2 flex-1">
        <h4 className="text-lg font-semibold">{name}</h4>

        <p className="text-gray-600 text-sm flex-1">{description}</p>

        <div className="pt-3 border-t border-gray-100">
          <span className="text-primary font-semibold text-lg">{price}</span>
        </div>
      </div>
    </div>
  );
}
