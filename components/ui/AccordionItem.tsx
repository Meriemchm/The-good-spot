"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

interface AccordionItemProps {
  questionKey: string;
  answerKey?: string;
  isList?: boolean;
}

export default function AccordionItem({
  questionKey,
  answerKey,
  isList = false
}: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("faqs");

  return (
    <div className="border-b py-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="font-medium text-lg md:text-xl">
          {t(questionKey)}
        </span>
        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="mt-4 text-black text-sm leading-relaxed">
          {isList ? (
            <>
              <p className="mb-3">{t("faq3_answer_intro")}</p>
              <ul className="list-disc pl-5 space-y-2">
                {t.raw("faq3_answer_list").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>{t(answerKey!)}</p>
          )}
        </div>
      )}
    </div>
  );
}
