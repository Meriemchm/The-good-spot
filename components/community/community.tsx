import React from "react";
import SectionBlock from "../ui/section-block";
import { Container } from "../ui/container";
import ValuesSection from "../value/values";
import CtaSection from "../cta-section/cta-section";

export const Community = () => {
  return (
    <div>
      <SectionBlock
        sectionKey="communitylang"
        imageSrc="/Images/community-pic.png"
        buttonKey={true}
      />
      <SectionBlock
        sectionKey="daily"
        imageSrc="/Images/daily-pic.png"
        reverse={true}
      />

      <ValuesSection />

      <CtaSection />
    </div>
  );
};
