"use client"
import type { Metadata } from "next";
import { Toaster } from 'react-hot-toast';
import local from "next/font/local";
import "./globals.css";
import UserProvider from "@/contexts/Usercontext";
import {
  ThirdwebProvider,
  ChainId,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  embeddedWallet,
} from "@thirdweb-dev/react";

const primaryFont = local({
  src: "../assets/primary.ttf",
  display: "swap",
  preload: true,
  variable: "--font-primary",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const activeChainId ={
  Sepolia : 11155111
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThirdwebProvider
        supportedWallets={[
          metamaskWallet({
            recommended: true,
          }),
          coinbaseWallet(),
          walletConnect(),
          embeddedWallet(),
        ]}
        clientId={"4010cb5b16705c5a764ad237d5f0eb30"}
        activeChain={activeChainId.Sepolia}
      >
        <UserProvider>
          <body className={primaryFont.variable}>{children}</body>
          <Toaster />
        </UserProvider>
      </ThirdwebProvider>
    </html>
  );
}