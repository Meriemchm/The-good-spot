import { AudienceData } from "@/data/AudienceData";
import AudienceItem from "./audience-item";
import { useTranslations } from "next-intl";
import AudienceDecorations from "./audience-decoration";

export default function AudienceSection() {
  const t = useTranslations("audience");

  return (
    <section className="relative flex flex-col justify-center items-center text-center h-full py-25 overflow-hidden">
      <AudienceDecorations />
      <h2 className="text-3xl font-semibold mb-4">{t("title")}</h2>

      <p className="max-w-2xl mx-auto text-gray-600 mb-10">
        {t("description")}
      </p>

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
    </section>
  );
}
