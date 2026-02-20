import { HouseData } from "@/data/HouseData";
import { notFound } from "next/navigation";

interface Props {
  params: {
    locale: string;
    nameHouse: string;
  };
}

export default function HouseDetails({ params }: Props) {
  const { nameHouse, locale } = params;

  console.log("Locale:", locale, "Slug:", nameHouse); // dev check

  // Recherche la maison correspondant au slug
  const house = HouseData.find(h => h.nameHouse === nameHouse);

  if (!house) return notFound();

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-3xl font-bold mb-6">{house.title}</h1>

      <img
        src={house.image}
        alt={house.title}
        className="w-full h-125 object-cover rounded-xl"
      />

      <p className="mt-6 text-gray-600">{house.description}</p>

      <div className="mt-6 flex flex-wrap gap-4 text-gray-500 text-sm">
        <div><strong>Address:</strong> {house.address}</div>
        <div><strong>Beds:</strong> {house.beds}</div>
        <div><strong>Baths:</strong> {house.baths}</div>
        <div><strong>Area:</strong> {house.area} m²</div>
        {house.tags && <div><strong>Tags:</strong> {house.tags.join(", ")}</div>}
      </div>
    </div>
  );
}