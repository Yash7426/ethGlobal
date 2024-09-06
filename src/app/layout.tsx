import type { Metadata } from "next";
import { Inter } from "next/font/google";
import local from "next/font/local";
import "./globals.css";
import UserProvider from "@/contexts/Usercontext";

const primaryFont = local({
  src: "../assets/primary.ttf",
  display: "swap",
  preload: true,
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={primaryFont.variable}>{children}</body>
      </UserProvider>
    </html>
  );
}
