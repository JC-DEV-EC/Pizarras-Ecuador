import type { Metadata } from "next";
import { Syne, Kalam, Permanent_Marker } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-permanent-marker",
});

export const metadata: Metadata = {
  title: "Pizarras Ecuador - Pizarras Premium de Alta Calidad",
  description: "Soluciones profesionales en pizarras para oficinas, escuelas y espacios comerciales. Instalación profesional y diseños personalizados en Ecuador.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${syne.variable} ${kalam.variable} ${permanentMarker.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-syne), system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
