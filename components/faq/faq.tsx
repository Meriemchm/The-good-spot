import { FAQData } from "@/data/FAQData";
import AccordionItem from "../ui/AccordionItem";
import HearderTitle from "../ui/hearderTitleSection";
import { useTranslations } from "next-intl";
import { Container } from "../ui/container";

export default function FAQSection() {
  const t = useTranslations("faqs");
  return (
    <Container className="pt-12 pb-24">
      <section className=" bg-white">
        <HearderTitle title={t("title")} subtitle={t("subtitle")} />
        <div className="">
          {FAQData.map((item) => (
            <AccordionItem
              key={item.id}
              questionKey={item.questionKey}
              answerKey={item.answerKey}
              isList={item.isList}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
