import React from "react";
import { CircleX } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/dashboard/Accordion";
import Image from "next/image";
import ProgressDemo from "./Progressbar";
import { cn } from "@/lib/utils";
import { IconTerminal2 } from "@tabler/icons-react";
import { CardSpotlight } from "./card-spotlight";
import { EvmChains, SignProtocolClient, SpMode } from "@ethsign/sp-sdk";
import SignProtocol from "@/app/protocols/signProtocol";
import CaptchaTest from "@/components/captcha";
import NormalInput from "@/components/NormalInput";
import DynamicFields from "@/components/attestSchema";
import blockchainLogo from "../blockchainLogo";
import QRCODE from "@/components/QRcode";
import AadharKYC from "@/components/AadharKYC";

type Task = {
  name: string;
  desc: string;
  icon: React.ReactNode;
  ctaNeeded: React.ReactNode;
};

type Protocol = {
  name: string;
  description: string;
  icon: string;
  tasks: Task[];
};

const blockchainProtocols: Protocol[] = [
  {
    name: "Sign Protocol",
    description:
      "Sign Protocol is used  to verify human identities by requiring users to solve riddles or CAPTCHAs, with additional validation through community vouching",
    icon: "/logo2.png",
    tasks: [
      {
        name: "Attesting Schema",
        desc: "Attest the provided schema and earn rewards",
        ctaNeeded: <CaptchaTest displayText="Test Captcha"></CaptchaTest>,
        icon: <IconTerminal2 />,
      },
      {
        name: "Creating Schema",
        desc: "Create a schema that can only be attested by verified users",
        ctaNeeded: <DynamicFields displayText="Attest Schema" />,
        icon: <IconTerminal2 />,
      },
      {
        name: "Socialize",
        desc: "Get the created schema attested by 5 unique whitelisted users",
        ctaNeeded: "Install MetaMask",
        icon: <IconTerminal2 />,
      },
    ],
  },
  {
    name: "Reclaim Protocol",
    description: "A high-performance blockchain supporting fast transactions.",
    icon: "/logo2.png",
    tasks: [
      {
        name: "Count Amazon Orders",
        desc: "Earn rewards by verfying your orders history on amazon",
        ctaNeeded: <QRCODE value="uber" displayText="Scan QR" />,
        icon: <IconTerminal2 />,
      },
      {
        name: "Paytm Transactions",
        desc: "Earn reward by verifying your paytm transaction history",
        ctaNeeded: "Choose a Validator",
        icon: <IconTerminal2 />,
      },
      {
        name: "Uber Rides",
        desc: "Earn rewards by verifying number of uber rides",
        ctaNeeded: "Choose a Validator",
        icon: <IconTerminal2 />,
      },
    ],
  },
  {
    name: "KYC authenticaion",
    description:
      "Authenticate your real time face with your government verified documents",
    icon: "/logo2.png",
    tasks: [
      {
        name: "Aadhar Card",
        desc: "Use your aadhar card for authenticating your real time face.",
        ctaNeeded: <AadharKYC />,
        icon: <IconTerminal2 />,
      },
      {
        name: "Passport",
        desc: "Use your passport for authenticating your real time face.",
        ctaNeeded: "Connect Polkadot.js",
        icon: <IconTerminal2 />,
      },
      {
        name: "Voter Id",
        desc: "Use your Voter Id for authenticating your real time face.",
        ctaNeeded: "Connect Polkadot.js",
        icon: <IconTerminal2 />,
      },
    ],
  },
  {
    name: "LIT Protocol",
    description:
      "We use Lit Protocol for secure encryption using MPC and TSS, ensuring privacy without any party holding the full key",
    icon: "/logo2.png",
    tasks: [
      {
        name: "Decryption with Access Conditions",
        desc: "Meet the access conditions to decrypt the string and earn points",
        ctaNeeded: (
          <NormalInput
            heading="Encrypted Profile"
            title="Decrypted Output"
            buttonText="Check"
            displayText="Test Decryption"
          ></NormalInput>
        ),
        icon: <IconTerminal2 />,
      },
      {
        name: "Broadcast and collect",
        desc: "Write and deploy smart contracts using the Plutus platform.",
        ctaNeeded: "Access Plutus Playground",
        icon: <IconTerminal2 />,
      },
      {
        name: "Sign Transactions",
        desc: "Write and deploy smart contracts using the Plutus platform.",
        ctaNeeded: "Access Plutus Playground",
        icon: <IconTerminal2 />,
      },
    ],
  },
  {
    name: "On chain verification",
    description:
      "Checks for your transaction history, NFT holdings and balance on verious mainnets.",
    icon: "/logo2.png",
    tasks: [
      {
        name: "Transaction History",
        desc: "Earn rewards by verifying your transaction history on various mainnets.",
        ctaNeeded: "Access Plutus Playground",
        icon: <IconTerminal2 />,
      },
      {
        name: "NFT Holdings",
        desc: "Earn rewards by verifying your NFT holdings on various mainnets.",
        ctaNeeded: "Access Plutus Playground",
        icon: <IconTerminal2 />,
      },
      {
        name: "Balance",
        desc: "Earn rewards by verifying your balance amounts on various mainnets.",
        ctaNeeded: "Access Plutus Playground",
        icon: <IconTerminal2 />,
      },
    ],
  },
];

const Feature = ({
  name,
  desc,
  icon,
  ctaNeeded,
  index,
}: {
  name: string;
  desc: string;
  ctaNeeded: React.ReactNode;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <CardSpotlight className="p-0">
      <div
        className={cn(
          "w-full h-full flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
          (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
          index < 4 && "lg:border-b dark:border-neutral-800"
        )}
      >
        <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
            {name}
          </span>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 pb-2">
          {desc}
        </p>
        {/* <button
          onClick={() => {
            // call cta here
          }}
          className={
            "bg-gradient-to-bl from-[#593de6] via-[#392d82] to-[#593de6]  hover:bg-gradient-to-bl hover:from-[#221a4c] hover:via-[#593de6] hover:to-[#221a4c] transition-all duration-300 ease-in-out  flex flex-row  sm:w-[60%] mx-auto py-[10px] px-5 rounded-full items-center justify-center cursor-pointer text-white mt-auto"
          }
        >
          Cta text
        </button> */}
        <div className="mt-auto">{ctaNeeded}</div>
      </div>
    </CardSpotlight>
  );
};

const AccordionComp2 = () => {
  return (
    <div className="flex w-full max-w-6xl flex-col gap-y-3 sm:gap-y-4 md:gap-y-5 mx-auto">
      {/* rounded-2xl bg-gradient-to-bl from-[#AB57FF] via-[#7180FE] to-[#2ED5F6] */}
      <div className="w-full h-full p-4 bg-black rounded-2xl">
        <h1 className="mb-10 font-primary-font text-center text-8xl sm:text-6xl md:text-8xl mx-auto w-full inline-block text-gray-300 mt-1 mb">
          Protocols
        </h1>
        <Accordion
          type="single"
          collapsible={true}
          className="mx-auto sm:w-full flex flex-col gap-y-4"
        >
          {blockchainProtocols.map((protocol, ind) => {
            return (
              <AccordionItem
                className="dark:bg-black bg-white rounded-2xl shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.5] dark:shadow-white/[0.05] flex flex-col justify-center px-1"
                value={protocol.name}
              >
                <AccordionTrigger className="relative break-words text-left">
                  <ProgressDemo progress={30} />
                  <div className="flex items-center gap-4 text-teal-50 py-4 px-4">
                    <div className="rounded-full bg-gray-200 w-12 h-12 flex justify-center items-center">
                      <Image
                        src="/logo2.png"
                        alt="blockchain Logo"
                        width="30"
                        height="30"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <p className="uppercase font-[900] text-lg sm:text-xl font-primary-font text-gray-200">
                        {protocol.name}
                      </p>
                      <p className="text-gray-300 text-xs">
                        {protocol.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="break-words px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-4 max-w-7xl mx-auto">
                    {protocol.tasks.map((task, index) => {
                      return (
                        <Feature key={task.name} {...task} index={index} />
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionComp2;
