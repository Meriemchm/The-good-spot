"use client";

import { Banner } from "@/components/banner/banner";
import { Charter } from "@/components/charter/charter";
import { Community } from "@/components/community/community";
import { Concept } from "@/components/concept/concept";
import FAQ from "@/components/faq/faq";

import Houses  from "@/components/houses/houses";
import Services  from "@/components/services/services";
import { useParams } from "next/navigation";
import NotFound from "../not-found";

// Tous les slugs FR/EN
const slugs: Record<string, string[]> = {
  houses: ["nos-maisons", "our-houses"],
  concept: ["concept"],
  services: ["services"],
  community: ["communaute", "community"],
  faq: ["faq"],
  charte: ["charte", "charter"],
};

export default function DynamicPage() {
  const params = useParams();
  const slugArr = params.slug;
  const slug = Array.isArray(slugArr) ? slugArr[0] : slugArr;

  if (!slug) return <div>Slug introuvable</div>;

  let pageKey: string = "default";
  for (const key in slugs) {
    if (slugs[key].includes(slug)) {
      pageKey = key;
      break;
    }
  }

  if (pageKey === "default") return <NotFound />;

  const renderPage = () => {
    switch (pageKey) {
      case "houses":
        return <Houses/>;
      case "concept":
        return <Concept />;
      case "services":
        return <Services />;
      case "community":
        return <Community />;
      case "faq":
        return <FAQ />;
      case "charte":
        return <Charter />;
      default:
        return null;
    }
  };

  console.log("PageKey déterminé :", pageKey);

  return (
    <div className="overflow-hidden">
      <Banner pageKey={pageKey} />
      {renderPage()}
    </div>
  );
}
