import React from "react";
import SectionBlock from "../ui/section-block";
import { Container } from "../ui/container";
import ValuesSection from "../value/values";
import CtaSection from "../cta-section/cta-section";
import { motion } from "framer-motion";
import HearderTitle from "../ui/hearderTitleSection";
import { useTranslations } from "next-intl";

export const Community = () => {
  const t = useTranslations("communitylang");
  return (
    <div>
      <Container className="pt-12 pb-24">
        <div className="bg-fourthary lg:p-10 rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <HearderTitle
              title={t("titleheader")}
              subtitle={t("subtitleheader")}
            />
          </motion.div>
          <SectionBlock
            sectionKey="communitylang"
            imageSrc="/Images/community.jpg"
            buttonKey={true}
          />
        </div>
        <SectionBlock
          sectionKey="daily"
          imageSrc={[
            "/Images/1.jpg",
            "/Images/2_.jpg",
            "/Images/3.jpg",
            "/Images/4.jpg",
          ]} // Utilise un tableau pour plusieurs images
          reverse={true}
          sparkles={true} // Affiche l'image sparkles pour ce bloc
        />
      </Container>
      <ValuesSection />

      <CtaSection />
    </div>
  );
};
