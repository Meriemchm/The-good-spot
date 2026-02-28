import HouseDetailCard from "@/components/house-detail-card/house-detail-card";
import { HouseData } from "@/data/HouseData";
import { notFound } from "next/navigation";

const validSections: Record<string, string[]> = {
  houses: ["houses", "maisons"],
};

interface Props {
  params: Promise<{
    locale: string;
    section: string;
    nameHouse: string;
  }>;
}

export default async function HouseDetails({ params }: Props) {
  const { section, nameHouse } = await params;

  // Vérifie que le segment est valide (houses ou maisons)
  const isValidSection = validSections.houses.includes(section);
  if (!isValidSection) return notFound();

  // Recherche maison
  const house = HouseData.find((h) => h.nameHouse === nameHouse);
  if (!house) return notFound();

  return <HouseDetailCard house={house} />;
}
