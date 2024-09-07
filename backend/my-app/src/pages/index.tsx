import Image from "next/image";
import localFont from "next/font/local";
import { ConnectWallet ,useAddress} from "@thirdweb-dev/react";
import Register from "./components/registe";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  var address = useAddress();
  return (
    <div>
    <ConnectWallet></ConnectWallet>
    
    {address ? 
    <div>
      <Register></Register>
    </div>
    : <div>Please connect your wallet.</div>}

    </div>
  );
}

