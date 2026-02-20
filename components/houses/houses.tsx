"use client";


import { House, HouseData } from "@/data/HouseData";
import HouseCard from "./house-column-card";

export default function PropertySection() {
  return (
    <section className="bg-[#F3F1EC] px-6 lg:px-20">
      {HouseData.map((house) => (
        <HouseCard key={house.id} property={house} />
      ))}
    </section>
  );
}