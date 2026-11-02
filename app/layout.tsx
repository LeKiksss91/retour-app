import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "Retour : le rappel qui fait revenir vos clients",
  description:
    "Retour envoie le bon rappel au bon moment pour que vos clients satisfaits reviennent. Commencer, c’est gratuit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={fraunces.variable}>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}