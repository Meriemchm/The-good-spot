"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import NavbarLinks from "../ui/navbar-links";
import { NavbarData } from "@/data/NavbarData";
import LanguageSwitcher from "../ui/language-switcher";
import Button from "../ui/button";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const currentLang = useLocale();

  const t = useTranslations("contactLink");
  return (
    <>
      {/* Top Bar */}
      <div className="md:hidden flex justify-between items-center px-1 h-20">
        <Link href={`/${currentLang}`} className="flex items-center gap-2">
          <img src="/LogoTheGoodSpot.svg" alt="Logo" className="h-10 w-auto" />
          <p className="capitalize text-xl text-white">The Good Spot</p>
        </Link>

        <div className="flex items-center gap-4">
          {/* Language */}
          <LanguageSwitcher variant="light" />

          {/* Hamburger */}
          <button onClick={() => setOpen(true)}>
            <Menu className="text-white" size={26} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Links */}
        <div className="px-6 ">
          <NavbarLinks
            items={NavbarData}
            isMobile
            closeMenu={() => setOpen(false)}
          />
          <div className="py-6">
            <Link href={`/${currentLang}/contact`}>
              <Button className="bg-primary text-white hover:bg-primary/90 transition">
                {t("contactLink")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
