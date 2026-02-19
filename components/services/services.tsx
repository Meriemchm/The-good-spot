// components/Services.jsx
"use client";

import { ServiceData } from "@/data/ServicesData";
import { useTranslations } from "next-intl";
import ServiceCard from "../ui/ServiceCard";


export default function Services() {
  const t = useTranslations("services");

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {ServiceData.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={t(service.titleKey)}
          description={t(service.descriptionKey)}
          highlighted={service.highlighted}
        />
      ))}
    </section>
  );
}
