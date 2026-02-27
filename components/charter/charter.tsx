// components/charter/Charter.tsx
"use client";

import { CharterData } from "@/data/CharterData";
import { useState } from "react";
import CharterSidebar from "./charter-sidebar";
import CharterPreview from "./charter-preview";
import { Container } from "../ui/container";
import AudienceSection from "../coliving-audience/coliving-audience";
import { useTranslations } from "next-intl";
import CtaSection from "../cta-section/cta-section";

export const Charter = () => {
  const [active, setActive] = useState(1);
  const t = useTranslations("charterlang");

  const current = CharterData.find((c) => c.id === active)!;

  return (
    <>
    <Container className="pt-12 pb-24">
      <AudienceSection title={t("title")} description={t("description")} seeAudience={false} />
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

    </Container>
    <CtaSection />
    </>
  );
};
