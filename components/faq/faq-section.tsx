import Image from "next/image";
import { useTranslations } from "next-intl";
import { FAQData } from "@/data/FAQData";
import AccordionItem from "../ui/AccordionItem";
import HearderTitle from "../ui/hearderTitleSection";
import { Container } from "../ui/container";

export default function FAQSection() {
  const t = useTranslations("faqs");

  return (
    <Container className="pt-12 pb-24">
      <section className="bg-white">
        <HearderTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid md:grid-cols-2 gap-8 items-start mt-10">
          {/* Image à gauche */}
          <div className="relative w-full h-full">
            <Image
              src="/Images/faq-pic.png" // Remplacez par le chemin de votre image
              alt="FAQ illustration"
              width={600}
              height={600}
              className="rounded-2xl object-cover w-full h-auto"
              priority // si l'image est dans le premier écran
            />
          </div>

          {/* Accordéons à droite */}
          <div className="space-y-2">
            {FAQData.slice(0, 5).map((item) => (
              <AccordionItem
                key={item.id}
                questionKey={item.questionKey}
                answerKey={item.answerKey}
                // Ou si vous conservez la prop `isList` :
                isList={item.isList}
              />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}