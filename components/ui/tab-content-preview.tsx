"use client";

import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import RoomCard from "./room-card";

interface Props {
  houseName: string;
  activeTab: string;
}

export default function TabContentPreview({ houseName, activeTab }: Props) {
  const t = useTranslations(`property.${houseName}`);

  return (
    <div className="p-6 bg-fourthary rounded-lg">
      <h3 className="md:text-3xl font-medium mb-10">
        {t(`info-house.${activeTab}.title`)}
      </h3>

      {activeTab === "price" && (
        <p className="text-gray-700">{t(`info-house.price.content`)}</p>
      )}

      {activeTab === "service" && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {(t.raw(`info-house.service.content`) as string[]).map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center select-none gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:scale-105 transition-transform"
            >
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-gray-800 text-center">{item}</span>
            </div>
          ))}
        </div>
      )}
      {activeTab === "room" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(t.raw(`info-house.room.content`) as any[]).map((room:any, i) => (
            <RoomCard
              key={i}
              name={room.name}
              description={room.description}
              price={room.price}
              image={room.image}
              status={room.status}
            />
          ))}
        </div>
      )}
    </div>
  );
}
