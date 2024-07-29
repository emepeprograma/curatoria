import { Inter, DM_Sans, Space_Mono } from "next/font/google";
import type { Metadata } from "next";
import { cn } from '@/lib/utils'
import "./globals.css";

const fontHeading = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: "400",
});
export const metadata: Metadata = {
  title: "Curatoria",
  description: "momazos curatorios",
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="es">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <body
          className={cn("antialiased", fontHeading.variable, fontBody.variable)}
        >
          {children}
        </body>
      </html>
    );
  }
