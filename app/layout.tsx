import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Fbosolution.it — Innovazione Applicata agli Ambienti | In arrivo",
  description:
    "Fbosolution.it: infrastrutture di rete WiFi enterprise e materiali edili nanotecnologici (IGK2, SuperFluid, SuperElastiK). Innovazione tecnologica applicata agli ambienti. Presto online.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${barlowCondensed.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
