// data/audienceData.ts
import { Briefcase, GraduationCap, Laptop } from "lucide-react";
import { ReactNode } from "react";

export interface AudienceItem {
  icon?: ReactNode;
  labelKey: string;
  highlighted?: boolean;
}

export const AudienceData: AudienceItem[] = [
  {
    labelKey: "youngProfessionals",
    highlighted: true
  },
  {
    icon: <GraduationCap />,
    labelKey: "students"
  },
  {
    icon: <Laptop />,
    labelKey: "freelancers"
  }
];