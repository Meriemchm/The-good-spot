"use client";

import Link from "next/link";
import Button from "../ui/button";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import NavbarLinks from "../ui/navbar-links";
import { NavbarData } from "@/data/NavbarData";
import LanguageSwitcher from "../ui/language-switcher";

export default function DesktopNavbar() {

  const currentLang = useLocale();

  const t = useTranslations("contactLink");

  return (
    <div className="hidden md:flex w-full justify-between items-center">
      {/* Logo */}
      <Link href={`/${currentLang}`} className="flex items-center gap-2">
        <img src="/LogoTheGoodSpot.svg" alt="Logo" className="h-10 w-auto" />
        <p className="capitalize text-xl text-white">The Good Spot</p>
      </Link>

      <div className="flex justify-center items-center bg-white py-2 px-8 rounded-full h-20 gap-8">
        {/* Nav Items */}
        <div className="flex items-center gap-8">
          <NavbarLinks items={NavbarData} />
        </div>

        {/* Right Side: Contact + Language */}
        <div className="flex items-center gap-4">
          <Link href={`/${currentLang}/contact`}>
            <Button className="bg-primary text-white hover:bg-primary/90 transition">
              {t("contactLink")}
            </Button>
          </Link>

          {/* Language Selector */}
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
