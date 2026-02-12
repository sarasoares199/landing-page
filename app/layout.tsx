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

export const metadata = {
  title: 'Psicóloga em Arcoverde - PE | Sara Soares | Terapia TCC',
  description: 'Atendimento psicológico clínico e infantil em Arcoverde - PE. Especialista em TCC, ansiedade e relacionamentos. Agende sua consulta presencial ou online com a Dra. Sara Soares.',
  keywords: ['Psicóloga Arcoverde', 'Terapia TCC Arcoverde', 'Psicologia Infantil Pernambuco', 'Sara Soares Psicóloga'],
  openGraph: {
    title: 'Sara Soares - Psicologia Clínica em Arcoverde',
    description: 'Cuidando da sua saúde mental com acolhimento em Arcoverde e região.',
    url: 'https://www.psicologasarasoares.com.br',
    siteName: 'Sara Soares Psicologia',
    images: [
      {
        url: '/images/hero-sara.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Psychologist",
              "name": "Sara Soares - Psicóloga Clínica",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Dr. Carlos Howard Bradley, 35 - Centro",
                "addressLocality": "Arcoverde",
                "addressRegion": "PE",
                "postalCode": "56506-000"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-8.419",
                "longitude": "-37.058"
              },
              "url": "https://www.psicologasarasoares.com.br",
              "telephone": "+5587996297153",
              "priceRange": "$$"
            })
          }}
        />
      </head>
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
