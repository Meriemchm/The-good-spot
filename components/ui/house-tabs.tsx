"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import TabContentPreview from "./tab-content-preview";

interface TabProps {
  houseName: string; 
}

const TABS = ["price", "service", "room"]; 

export default function HouseTabs({ houseName }: TabProps) {
  const t = useTranslations(`property.${houseName}`);
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="flex gap-4 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full transition font-medium ${
              activeTab === tab
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {t(`info-house.${tab}.title`)}  {/* ← corrigé */}
          </button>
        ))}
      </div>
      <TabContentPreview houseName={houseName} activeTab={activeTab} />
    </div>
  );
}