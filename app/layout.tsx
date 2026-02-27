import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Good Spot.",
  description: "The Good Spot.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-theme="light">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}