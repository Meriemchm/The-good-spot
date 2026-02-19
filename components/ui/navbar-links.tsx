"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface NavbarLinkProps {
  items: any[];
  isMobile?: boolean;
  closeMenu?: () => void;
}

export default function NavbarLinks({
  items,
  isMobile = false,
  closeMenu
}: NavbarLinkProps) {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  return (
    <div className={isMobile ? "flex flex-col gap-6" : "flex items-center gap-6"}>
      {items.map((item) => (
        <div key={item.id} className="relative">
          {item.children ? (
            <>
              <button
                onClick={() => toggleMenu(item.id)}
                className={`flex items-center gap-1 ${
                  isMobile ? "text-lg w-full justify-between" : "text-xl"
                }`}
              >
                {t(item.key)}
                {openMenuId === item.id ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              {/* Desktop dropdown */}
              {!isMobile && openMenuId === item.id && (
                <div className="absolute mt-2 w-48 bg-white shadow-md rounded z-10">
                  {item.children.map((child: any) => (
                    <Link
                      key={child.id}
                      href={child.link[locale]}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {t(child.key)}
                    </Link>
                  ))}
                </div>
              )}

              {/* Mobile dropdown */}
              {isMobile && openMenuId === item.id && (
                <div className="mt-4 border-t pt-4 flex flex-col gap-4">
                  {item.children.map((child: any) => (
                    <Link
                      key={child.id}
                      href={child.link[locale]}
                      onClick={closeMenu}
                      className="text-base text-gray-600"
                    >
                      {t(child.key)}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.link[locale]}
              onClick={closeMenu}
              className={isMobile ? "text-lg" : "text-xl"}
            >
              {t(item.key)}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
