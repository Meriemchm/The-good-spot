// components/charter/Charter.tsx
"use client";

import { CharterData } from "@/data/CharterData";
import { useState } from "react";
import CharterSidebar from "./charter-sidebar";
import CharterPreview from "./charter-preview";


export const Charter = () => {
  const [active, setActive] = useState(1);

  const current = CharterData.find((c) => c.id === active)!;

  return (
    <section className="grid md:grid-cols-3 gap-8">
      <CharterSidebar
        items={CharterData}
        activeId={active}
        onSelect={setActive}
      />

      <div className="md:col-span-2">
        <CharterPreview sectionKey={current.key} />
      </div>
    </section>
  );
};
