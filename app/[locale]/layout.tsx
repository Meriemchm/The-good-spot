import Navbar from "@/components/navbar/navbar";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Footer from "@/components/footer/footer";
import ScrollToTopButton from "@/components/ui/scroll-to-to-bottom";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ScrollToTopButton />
      <Toaster />
      <Navbar />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
