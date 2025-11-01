import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { ReactNode } from "react";
import CursorFollower from "./components/shared/cursor-follower";
import Footer from "./components/shared/footer";
import MenuTop from "./components/shared/menu-top/menu-top";
import "./globals.css";
import { unifyFlow } from "grid-settings";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HubsAI - Powered by RWA and AI",
  description:
    "Setting the standards for the future of digital retail experiences. Join us in shaping commerce powered by AI + blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {unifyFlow(132);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.variable} bg-background overflow-x-hidden text-white antialiased`}
      >
        <MenuTop />
        {children}
        <Footer />
        <CursorFollower />
      </body>
    </html>
  );
}
