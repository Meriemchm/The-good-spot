"use client";
import { useGsapFade } from "@/hooks/useGsapFade";
import React from "react";

interface hearderTitleProps {
  title: string;
  subtitle: string;
}

const HearderTitle: React.FC<hearderTitleProps> = ({ title, subtitle }) => {
  const fadeup = useGsapFade("up");
  return (
    <div
      ref={fadeup}
      className="flex flex-col w-full items-center text-center  justify-center pt-4 pb-16 "
    >
      <h1 className="md:text-sm  text-xs capitalize text-primary font-semibold py-2 ">
        {title}
      </h1>
      <p className="text-xl  max-w-md md:text-3xl capitalize text-neutral-500">
        {subtitle}
      </p>
    </div>
  );
};

export default HearderTitle;
