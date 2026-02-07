import type { Metadata } from "next";
import { Space_Grotesk, Lexend, Plus_Jakarta_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: 'swap',
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: 'swap',
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Apex Performance",
  description: "Entrena al siguiente nivel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${lexend.variable} ${plusJakartaSans.variable} ${notoSans.variable} antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
