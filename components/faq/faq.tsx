import { FAQData } from "@/data/FAQData";
import AccordionItem from "../ui/AccordionItem";
import HearderTitle from "../ui/hearderTitleSection";
import { useTranslations } from "next-intl";

export default function FAQSection() {
  const t = useTranslations("faqs");
  return (
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
  );
}
