"use client";

import { ContactInfoData } from "@/data/ContactData";
import { useTranslations } from "next-intl";

export default function ContactInfo() {
  const t = useTranslations("contact");

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 text-center gap-8">
        {ContactInfoData.map((info, index) => {
          const Icon = info.icon;
          const label = t(info.labelKey);
          const value = t(info.valueKey);

          return (
            <div key={index} className="flex flex-col items-center gap-2">
              {Icon}
              <h3 className="font-bold text-lg">{label}</h3>
              <p className="text-sm text-gray-700">
                {info.labelKey === "email" ? (
                  <a href={`mailto:${value}`} className="hover:underline">{value}</a>
                ) : info.labelKey === "phone" ? (
                  <a href={`tel:${value}`} className="hover:underline">{value}</a>
                ) : (
                  value
                )}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
