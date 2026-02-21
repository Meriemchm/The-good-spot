"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

type LanguageSwitcherProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function LanguageSwitcher({
  variant = "dark",
  className = "",
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();

  const switchLang = (lang: string) => {
    return pathname.replace(`/${locale}`, `/${lang}`);
  };

  const activeColor =
    variant === "light" ? "font-bold text-white" : "font-bold text-black";

  const inactiveColor =
    variant === "light"
      ? "text-white/70 hover:text-white"
      : "text-gray-500 hover:text-black";

  const separatorColor =
    variant === "light" ? "text-white/50" : "text-gray-400";

  return (
    <div className={`flex items-center gap-2 text-sm ${className}`}>
      <Link
        href={switchLang("fr")}
        className={locale === "fr" ? activeColor : inactiveColor}
      >
        FR
      </Link>

      <span className={separatorColor}>|</span>

      <Link
        href={switchLang("en")}
        className={locale === "en" ? activeColor : inactiveColor}
      >
        EN
      </Link>
    </div>
  );
}