import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, Nunito } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wingate Integrated Farms | Fresh from Our Fields to Your Table",
  description: "Ethically farmed, locally sourced produce delivered with care from Epe, Lagos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${sourceSerif.variable} ${nunito.variable} antialiased font-body`}
      >
        {children}
      </body>
    </html>
  );
}
