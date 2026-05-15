import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sproutly — web development studio",
  description:
    "Sproutly builds custom web pages, full websites, and the automation tools that run behind them. Web work that is built right and shipped fast.",
  openGraph: {
    title: "Sproutly — web development studio",
    description:
      "Custom web pages, full websites, and custom automation tools. Built right, shipped fast.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#16291f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
