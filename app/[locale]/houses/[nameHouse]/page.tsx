import HouseDetailCard from "@/components/house-detail-card/house-detail-card";
import { HouseData } from "@/data/HouseData";
import { notFound } from "next/navigation";


interface Props {
  params: Promise<{
    locale: string;
    nameHouse: string;
  }>;
}

export default async function HouseDetails({ params }: Props) {
  const { nameHouse, locale } = await params;

  // Recherche de la maison
  const house = HouseData.find((h) => h.nameHouse === nameHouse);
  if (!house) return notFound();

  return <HouseDetailCard house={house} />;
}