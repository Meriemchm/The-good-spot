"use client";


import { House, HouseData } from "@/data/HouseData";
import HouseCard from "./house-column-card";


interface PropertySectionProps {
  houses: House[];
}

export default function PropertySection({ houses }: PropertySectionProps) {
  return (
    <section className="bg-[#F3F1EC] px-6 lg:px-20">
      {HouseData.map((house) => (
        <HouseCard key={house.id} property={house} />
      ))}
    </section>
  );
}