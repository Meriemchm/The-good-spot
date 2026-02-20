// components/charter/CharterSidebar.tsx
"use client";

import { CharterItem } from "@/data/CharterData";
import { useTranslations } from "next-intl";

interface Props {
  items: CharterItem[];
  activeId: number;
  onSelect: (id: number) => void;
}

export default function CharterSidebar({
  items,
  activeId,
  onSelect
}: Props) {
  const t = useTranslations("charterlang");

  return (
    <div className="bg-secondary/40 py-6">
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`
              w-full text-left px-4 py-6 transition-colors
              ${isActive 
                ? "bg-white text-black font-medium" 
                : "hover:bg-gray-200 opacity-80"
              }
            `}
          >
            {item.id} — {t(`${item.key}.title`)}
          </button>
        );
      })}
    </div>
  );
}