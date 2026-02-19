export const NavbarData = [
  {
    id: 1,
    key: "nos Maisons",
    link: { fr: "/nos-maisons", en: "/our-houses" }
  },
  {
    id: 2,
    key: "coliving",
    children: [
      { id: 21, key: "concept", link: { fr: "/concept", en: "/concept" } },
      { id: 22, key: "services", link: { fr: "/services", en: "/services" } },
      { id: 23, key: "communauté", link: { fr: "/communaute", en: "/community" } },
    ]
  },
  {
    id: 3,
    key: "plus",
    children: [
      { id: 31, key: "questions fréquentes", link: { fr: "/faq", en: "/faq" } },
      { id: 32, key: "charte the good spot", link: { fr: "/charte", en: "/charter" } },
    ]
  },
];
