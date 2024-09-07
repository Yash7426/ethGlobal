import Image from "next/image";
import localFont from "next/font/local";
import { ConnectWallet ,useAddress} from "@thirdweb-dev/react";
import Attestation from "./components/attestation";
import QueryAttestation from "./components/query_attestation_schema";
import Schema from "./components/query_schema";

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
    
    {address ? <div><Attestation address={address} />
    <QueryAttestation address={address}></QueryAttestation>
    <Schema address={address} />
    </div>
    : <div>Please connect your wallet.</div>}

    </div>
  );
}
