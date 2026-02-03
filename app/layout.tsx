import React from "react";
import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
    "Psicóloga especializada em TCC, Terapia ABA, Terapia do Esquema e Ludoterapia. Cuidando do desenvolvimento emocional do seu filho com carinho e profissionalismo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
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
