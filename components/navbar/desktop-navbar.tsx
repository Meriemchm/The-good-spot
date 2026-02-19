"use client";

import Link from "next/link";
import Button from "../ui/button";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import NavbarLinks from "../ui/navbar-links";
import { NavbarData } from "@/data/NavbarData";

export default function DesktopNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLang = useLocale(); // <-- useLocale instead of parsing

  const t = useTranslations("contactLink");

  const toggleLanguage = () => {
    const newLang = currentLang === "fr" ? "en" : "fr";
    const segments = pathname.split("/");

    // If the URL starts with /fr or /en, replace it
    if (segments[1] === "fr" || segments[1] === "en") {
      segments[1] = newLang;
    } else {
      // If there is no locale prefix (should not happen), add it
      segments.splice(1, 0, newLang);
    }

    router.push(segments.join("/") || `/${newLang}`);
  };

  return (
    <div className="hidden md:flex w-full justify-between items-center">
      {/* Logo */}
      <Link href={`/${currentLang}`} className="flex items-center gap-2">
        <img src="/LogoTheGoodSpot.svg" alt="Logo" className="h-10 w-auto" />
        <p className="capitalize text-xl text-white">The Good Spot</p>
      </Link>

      <div className="flex justify-center items-center bg-white py-4 px-8 rounded-full h-20 gap-8">
        {/* Nav Items */}
        <div className="flex items-center gap-8">
          <NavbarLinks items={NavbarData} />
        </div>

        {/* Right Side: Contact + Language */}
        <div className="flex items-center gap-4">
          <Link href={`/${currentLang}/contact`}>
            <Button className="bg-primary text-black hover:bg-primary/90 transition">
              {t("contactLink")}
            </Button>
          </Link>

          {/* Language Selector */}
          <div className="flex items-center gap-2 text-sm">
            <Link
              href={pathname.replace(`/${currentLang}`, "/fr")}
              className={`transition ${
                currentLang === "fr"
                  ? "font-bold text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              FR
            </Link>

            <span className="text-gray-400">|</span>

            <Link
              href={pathname.replace(`/${currentLang}`, "/en")}
              className={`transition ${
                currentLang === "en"
                  ? "font-bold text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              EN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
