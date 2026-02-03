import React from "react";
import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Sara Soares | Psicóloga",
  description:
    "Psicóloga especializada em TCC, Terapia ABA, Terapia do Esquema e Ludoterapia. Cuidando do desenvolvimento emocional do seu filho com carinho e profissionalismo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}
      >
        <header>
          <Header />
        </header>
        {children}
        <Analytics />
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
