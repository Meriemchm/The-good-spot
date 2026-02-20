export interface House {
  id: string;
  nameHouse: string; // utilisé dans l’URL
  title: string;
  address: string;
  image: string;
  beds: number;
  baths: number;

  // Optionnel : utilisé uniquement dans la page détails
  description?: string;
  tags?: string[];
  area?: number;
}

export const HouseData: House[] = [
  {
    id: "1",
    nameHouse: "modern-haven",
    title: "Modern Haven",
    address: "123 Street, example, example",
    image: "/Images/house-temp.png",
    beds: 2,
    baths: 2,
    description:
      "Belle maison moderne avec piscine et grand jardin...",
    tags: ["residential", "privateHouse", "duplex"],
    area: 250,
  },
  {
    id: "2",
    nameHouse: "scotia-plaza",
    title: "Sunset Shores Estate",
    address: "123 Street, example, example",
    image: "/Images/house-temp.png",
    beds: 2,
    baths: 2,
    description:
      "Sunset Shores Estate offre confort et luxe au cœur de la ville...",
    tags: ["residential", "apartment", "luxury"],
    area: 300,
  },
  {
    id: "3",
    nameHouse: "casa-villa",
    title: "Casa Villa",
    address: "123 Street, example, example",
    image: "/Images/house-temp.png",
    beds: 3,
    baths: 2,
    description:
      "Villa spacieuse avec piscine et terrasse panoramique...",
    tags: ["residential", "privateHouse", "villa"],
    area: 400,
  },
];