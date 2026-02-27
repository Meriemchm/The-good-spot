import React from "react";

interface Props {
  icon: React.ReactNode;
  label: string;
  highlighted?: boolean;
}

export default function AudienceItem({ icon, label, highlighted }: Props) {
  return (
    <div
      className={`flex items-center gap-3 px-6 py-3 rounded-full select-none hover:scale-105 transition-transform duration-300 text-sm md:text-base
        ${
          highlighted
            ? "bg-thirdary text-black"
            : "bg-transparent border border-gray-300"
        }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}