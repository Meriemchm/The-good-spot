import React from "react";

interface Props {
  icon: React.ReactNode;
  label: string;
  highlighted?: boolean;
}

export default function AudienceItem({ icon, label, highlighted }: Props) {
  return (
    <div
      className={`flex items-center gap-3 px-6 py-3 rounded-full transition
        ${
          highlighted
            ? "bg-primary text-black"
            : "bg-transparent border border-gray-300"
        }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}