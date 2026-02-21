"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface NavbarLinkProps {
  items: any[];
  isMobile?: boolean;
  closeMenu?: () => void;
}

export default function NavbarLinks({
  items,
  isMobile = false,
  closeMenu,
}: NavbarLinkProps) {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (id: number) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  //  Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setOpenMenuId(null);
    if (closeMenu) closeMenu();
  };

  return (
    <div
      ref={containerRef}
      className={isMobile ? "flex flex-col gap-6" : "flex items-center gap-6"}
    >
      {items.map((item) => (
        <div key={item.id} className="relative">
          {item.children ? (
            <>
              <button
                onClick={() => toggleMenu(item.id)}
                className={`flex items-center gap-1 ${
                  isMobile ? "text-base w-full justify-between" : "text-lg"
                }`}
              >
                {t(item.key)}
                {openMenuId === item.id ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}{" "}
              </button>

              {/* Desktop dropdown */}
              {!isMobile && openMenuId === item.id && (
                <div className="absolute mt-5 w-48 bg-white shadow-md rounded z-10">
                  {item.children.map((child: any) => (
                    <Link
                      key={child.id}
                      href={child.link[locale]}
                      onClick={handleLinkClick}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {t(child.key)}
                    </Link>
                  ))}
                </div>
              )}

              {/* Mobile dropdown */}
              {isMobile && openMenuId === item.id && (
                <div className="mt-4 border-t border-gray-300 pt-4 flex flex-col gap-4">
                  {item.children.map((child: any) => (
                    <Link
                      key={child.id}
                      href={child.link[locale]}
                      onClick={handleLinkClick}
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
              onClick={handleLinkClick}
              className={isMobile ? "text-base" : "text-lg"}
            >
              {t(item.key)}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
