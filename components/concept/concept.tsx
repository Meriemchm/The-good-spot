import React from "react";
import ConceptSection from "./concept-section";
import ValuesSection from "../value/values";
import CtaSection from "../cta-section/cta-section";
import { Container } from "../ui/container";
import AudienceSection from "../coliving-audience/coliving-audience";
import CtaFooter from "../cta-footer/cta-footer";
import { useTranslations } from "next-intl";

export const Concept = () => {
  const t = useTranslations("audience");
  return (
    <div>
      {" "}
      <Container className="pt-12 pb-24">
        <ConceptSection />
      </Container>
      <ValuesSection />
      <CtaSection />
      <Container className="py-12">
        <AudienceSection t={t} title={t("title")} description={t("description")} />
      </Container>
      <CtaFooter />
    </div>
  );
};
