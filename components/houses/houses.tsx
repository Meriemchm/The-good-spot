"use client";

import { useLocale } from "next-intl";

export function Houses() {
  const locale = useLocale();

  return (
    <div>
      <h1 className="text-3xl font-bold">
        {locale === "fr" ? "Nos Maisons" : "Our Houses"}
      </h1>
      <p className="mt-4">
        {locale === "fr"
          ? "Voici le contenu pour nos maisons en français."
          : "Here is the content for our houses in English."}
      </p>
    </div>
  );
}
