"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import NavbarLinks from "../ui/navbar-links";
import { NavbarData } from "@/data/NavbarData";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  const switchLang = (lang: string) => {
    return pathname.replace(`/${locale}`, `/${lang}`);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="md:hidden flex justify-between items-center px-6 h-20">
        <Link href={`/${locale}`}>
          <p className="text-xl">The Good Spot</p>
        </Link>

        <div className="flex items-center gap-4">
          {/* Language */}
          <div className="flex items-center gap-2 text-sm">
            <Link
              href={switchLang("fr")}
              className={locale === "fr" ? "font-bold" : "text-gray-500"}
            >
              FR
            </Link>
            <span>|</span>
            <Link
              href={switchLang("en")}
              className={locale === "en" ? "font-bold" : "text-gray-500"}
            >
              EN
            </Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(true)}>
            <Menu size={26} />
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
        <div className="px-6">
          <NavbarLinks
            items={NavbarData}
            isMobile
            closeMenu={() => setOpen(false)}
          />
        </div>
      </div>
    </>
  );
}
