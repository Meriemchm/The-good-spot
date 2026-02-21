"use client";

import { AudienceData } from "@/data/AudienceData";
import AudienceItem from "./audience-item";
import AudienceDecorations from "./audience-decoration";

interface AudienceSectionProps {
  t?: any; 
  title?: string;
  description?: string;
  seeAudience?: boolean; // true par défaut
}

export default function AudienceSection({
  t,
  title,
  description,
  seeAudience = true,
}: AudienceSectionProps) {
  

  return (
    <section className="relative flex flex-col justify-center items-center text-center h-full py-25 overflow-hidden">
      <AudienceDecorations />

      {/* Titre et description personnalisables ou traduction par défaut */}
      <h2 className="text-3xl font-semibold mb-4">
        {title}
      </h2>

      <p className="max-w-2xl mx-auto text-gray-600 mb-10">
        {description}
      </p>

      {/* Affiche les items seulement si seeAudience = true */}
      {seeAudience && (
        <div className="flex justify-center gap-6 flex-wrap">
          {AudienceData.map((item, i) => (
            <AudienceItem
              key={i}
              icon={item.icon}
              label={t(item.labelKey)}
              highlighted={item.highlighted}
            />
          ))}
        </div>
      )}
    </section>
  );
}