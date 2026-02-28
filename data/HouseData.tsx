export interface House {
  id: string;
  nameHouse: string; // utilisé dans l’URL et pour traduire
  images: string[];
  address: string;
  beds: number;
  baths: number;
  area?: number;
  tags?: string[];
}

export const HouseData: House[] = [
  {
    id: "1",
    nameHouse: "modern-haven",
    images: [
      "/Images/house-temp.png",
      "/Images/house-temp.png",
      "/Images/house-temp.png",
    ],
    address: "123 Street",
    beds: 2,
    baths: 2,
    area: 250,
    tags: ["residential", "privateHouse", "duplex"],
  },
  {
    id: "2",
    nameHouse: "scotia-plaza",
    images: ["/Images/house-temp.png"],
    address: "123 Street",
    beds: 2,
    baths: 2,
    area: 300,
    tags: ["residential", "apartment", "luxury"],
  },
  {
    id: "3",
    nameHouse: "casa-villa",
    images: ["/Images/house-temp.png"],
    address: "123 Street",
    beds: 3,
    baths: 2,
    area: 400,
    tags: ["residential", "privateHouse", "villa"],
  },
];
