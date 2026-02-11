import React from "react";
import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import GTS from "@/components/GTS";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sara Soares | Psicóloga",
  description:
    "Psicóloga clínica com vários anos de experiência em Terapia Cognitivo-Comportamental (TCC). Especialista em relacionamentos, insegurança emocional e ansiedade infantil. Atendimento online e presencial com acolhimento humanizado e individualizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        <header>
          <Header />
        </header>
        {children}
        <Analytics />
        <footer>
          <Footer />
          <GTS />
        </footer>
      </body>
    </html>
  );
}
