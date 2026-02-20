"use client";

import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  houseName: string;
  activeTab: string;
}

export default function TabContentPreview({ houseName, activeTab }: Props) {
  const t = useTranslations(`property.${houseName}`);

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">
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
              className="flex flex-col items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
              <span className="text-gray-800 text-center">{item}</span>
            </div>
          ))}
        </div>
      )}
      {activeTab === "room" && (
        <ul className="list-disc pl-5 space-y-2">
          {(t.raw(`info-house.room.content`) as string[]).map((item, i) => (
            <li key={i} className="text-gray-700">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}