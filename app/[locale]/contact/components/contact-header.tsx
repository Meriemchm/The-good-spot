import { useTranslations } from "next-intl";
import React from "react";

export const ContactHeader = () => {
  const t = useTranslations("contact");
  return (
    <div className="flex flex-col gap-4 py-5">
      <p className="text-primary font-bold">contact</p>
      <h2 className="text-5xl font-bold">{t("title")}</h2>
      <p className="text-sm">
        {t("description")}
      </p>
    </div>
  );
};
