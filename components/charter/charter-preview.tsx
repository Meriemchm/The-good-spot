// components/charter/CharterPreview.tsx
import { useTranslations } from "next-intl";
import { CircleCheckBig  } from "lucide-react";

interface Props {
  sectionKey: string;
}

export default function CharterPreview({ sectionKey }: Props) {
  const t = useTranslations("charterlang");

  const list = t.raw(`${sectionKey}.list`) as string[];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">
        {t(`${sectionKey}.title`)}
      </h2>

      <p className="text-gray-600">
        {t(`${sectionKey}.description`)}
      </p>

      <div className="bg-primary text-white p-6 rounded-md">
        <ul className="space-y-2">
          {list.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <CircleCheckBig  className="w-5 h-5 mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <blockquote className="border-l-4 pl-4 text-gray-600">
        {t(`${sectionKey}.note`)}
      </blockquote>
    </div>
  );
}