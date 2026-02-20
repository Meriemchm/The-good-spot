"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound"); 

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-6 text-center"
      style={{ backgroundImage: "url('/images/contact-bg.png')" }}
    >
      {/* Message */}
      <p className="text-xl sm:text-2xl text-white max-w-lg">
        {t("message")}
      </p>

      {/* Bouton retour */}
      <Link
        href="/"
        className="mt-6 px-6 py-3 rounded-full bg-black text-white hover:bg-neutral-800 transition font-medium"
      >
        {t("button")}
      </Link>
    </div>
  );
}