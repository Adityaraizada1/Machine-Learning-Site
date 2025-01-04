import { UserProvider } from "@/app/context/UserContext"; // Import your UserContext
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "ML | One on One",
  description: "Learning Machine Learning with One on One",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased`}
      >
        <UserProvider>
          {children}
        </UserProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
