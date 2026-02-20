// components/values/ValueCard.tsx
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
  highlighted?: boolean;
};

export default function ValueCard({
  icon,
  title,
  description,
  highlighted = false
}: Props) {
  return (
    <div
      className={`
        p-8 rounded-3xl transition-all
        ${
          highlighted
            ? "bg-primary text-white -rotate-2"
            : "bg-gray-100 text-black"
        }
      `}
    >
      <div className="flex items-start gap-4">
        <div
          className={`
            w-10 h-10 flex items-center justify-center
            ${highlighted ? "text-white" : "text-yellow-500"}
          `}
        >
          {icon}
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>
    </div>
  );
}