import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !["en", "fr"].includes(locale)) locale = "en";

  const messages = {
    ...(await import(`../messages/${locale}/banner.json`)).default,
    ...(await import(`../messages/${locale}/hero.json`)).default,
    ...(await import(`../messages/${locale}/navbar.json`)).default,
    ...(await import(`../messages/${locale}/contact.json`)).default,
    ...(await import(`../messages/${locale}/footer.json`)).default,
    ...(await import(`../messages/${locale}/faqs.json`)).default,
    ...(await import(`../messages/${locale}/serviceslang.json`)).default,
    ...(await import(`../messages/${locale}/charterlang.json`)).default,
    ...(await import(`../messages/${locale}/conceptlang.json`)).default,
    ...(await import(`../messages/${locale}/ctafooterlang.json`)).default,
    ...(await import(`../messages/${locale}/ctasectionlang.json`)).default,
    ...(await import(`../messages/${locale}/values.json`)).default,
    ...(await import(`../messages/${locale}/audience.json`)).default,
    ...(await import(`../messages/${locale}/communitylang.json`)).default,
    ...((await import(`../messages/${locale}/daily.json`)).default),
    ...((await import(`../messages/${locale}/about.json`)).default),
     ...((await import(`../messages/${locale}/houselang.json`)).default),
  };

  return {
    locale,
    messages,
  };
});
