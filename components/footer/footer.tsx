"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ContactInfoData } from "@/data/ContactData";
import { ContactFooterData } from "@/data/FooterData";
import { SocialFooterLinksData } from "@/data/FooterData";

export default function Footer() {
  const t = useTranslations("footer");
  const tContact = useTranslations("contact");
  const locale = useLocale();

  return (
    <footer className=" px-4 md:px-0 pt-16 pb-6">
      <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-10 text-sm">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Image
              src="/LogoTheGoodSpot.svg"
              alt="The Good Spot"
              width={32}
              height={32}
              className="object-contain"
            />
            {t("logo")}
          </h2>

          <div className="flex gap-4">
            {SocialFooterLinksData.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <Icon className="w-6 h-6 text-black hover:text-yellow-500 transition" />
                </a>
              );
            })}
          </div>

          <p className="text-gray-600">{t("description")}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4">{t("quick_links")}</h3>
          <ul className="space-y-2">
            {ContactFooterData.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link[locale as keyof typeof item.link]}
                  className="hover:underline"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-4">{t("contact")}</h3>
          <ul className="space-y-2">
            {ContactInfoData.map((info, index) => {
              const label = tContact(info.labelKey);
              const value = tContact(info.valueKey);

              return (
                <li key={index}>
                  {info.labelKey === "email" ? (
                    <a href={`mailto:${value}`} className="hover:underline">
                      {value}
                    </a>
                  ) : info.labelKey === "phone" ? (
                    <p>{value}</p>
                  ) : (
                    value
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-neutral-300 pt-6">
        © {new Date().getFullYear()} {t("copyright")}
      </div>
    </footer>
  );
}
