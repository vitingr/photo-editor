import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "../../figma/styles/globals.css";
import { Room } from "./Room";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Figma",
  description:
    "A minimalist figma model using Fabric.JS and Liveblocks for real-time collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
    <body className={`${workSans.className}`}>
      <Room>
        {children}
      </Room>
    </body>
  </html>
  );
}
