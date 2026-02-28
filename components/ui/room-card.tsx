"use client";

import Image from "next/image";

interface RoomCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function RoomCard({
  name,
  description,
  price,
  image,
}: RoomCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5 flex flex-col gap-2 flex-1">
        <h4 className="text-lg font-semibold">{name}</h4>

        <p className="text-gray-600 text-sm flex-1">{description}</p>

        <div className="pt-3 border-t border-gray-100">
          <span className="text-primary font-semibold text-lg">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
}