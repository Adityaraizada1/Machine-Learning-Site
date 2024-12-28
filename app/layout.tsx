import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google"; // Importing Manrope font
import "./globals.css";

// Existing fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add Manrope font
const manrope = Manrope({
  variable: "--font-manrope", // Font variable name
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Machine Learning | One on One",
  description: "Learing Machine Learning with One on One",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`} // Apply the Manrope font
      >
        {children}
      </body>
    </html>
  );
}
