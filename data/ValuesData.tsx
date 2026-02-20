// data/valuesData.ts
import { Sofa, Sparkles, Shield } from "lucide-react";
import { ReactNode } from "react";

export const ValuesData = [
  {
    icon: <Sofa  />,
    titleKey: "comfort.title",
    descriptionKey: "comfort.description",
    highlighted: true
  },
  {
    icon: <Sparkles />,
    titleKey: "simplicity.title",
    descriptionKey: "simplicity.description"
  },
  {
    icon: <Shield />,
    titleKey: "calm.title",
    descriptionKey: "calm.description"
  }
];