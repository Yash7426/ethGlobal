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
import DynamicFields from "@/components/attestSchema";

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
    description: "A decentralized platform that runs smart contracts.",
    icon: "https://freelogopng.com/images/all_img/1683021055metamask-icon.png",
    tasks: [
      {
        name: "Attesting Schema",
        desc: "Deploy your first smart contract on the Ethereum network.",
        ctaNeeded: <CaptchaTest displayText="Test Captcha"></CaptchaTest>,
        icon: <IconTerminal2 />,
      },
      {
        name: "Creating Schema",
        desc: "Use decentralized applications on the Ethereum blockchain.",
        ctaNeeded: <DynamicFields displayText="Attest Schema" />,
        icon: <IconTerminal2 />,
      },
      {
        name: "Deploy Smart Contract",
        desc: "Deploy your first smart contract on the Ethereum network.",
        ctaNeeded: "Install MetaMask",
        icon: <IconTerminal2 />,
      },
      {
        name: "Interact with DApps",
        desc: "Use decentralized applications on the Ethereum blockchain.",
        ctaNeeded: "Connect Wallet",
        icon: <IconTerminal2 />,
      },
      {
        name: "Deploy Smart Contract",
        desc: "Deploy your first smart contract on the Ethereum network.",
        ctaNeeded: "Install MetaMask",
        icon: <IconTerminal2 />,
      },
      {
        name: "Interact with DApps",
        desc: "Use decentralized applications on the Ethereum blockchain.",
        ctaNeeded: "Connect Wallet",
        icon: <IconTerminal2 />,
      },
      {
        name: "Deploy Smart Contract",
        desc: "Deploy your first smart contract on the Ethereum network.",
        ctaNeeded: "Install MetaMask",
        icon: <IconTerminal2 />,
      },
      {
        name: "Interact with DApps",
        desc: "Use decentralized applications on the Ethereum blockchain.",
        ctaNeeded: "Connect Wallet",
        icon: <IconTerminal2 />,
      },
    ],
  },
  {
    name: "Solana",
    description: "A high-performance blockchain supporting fast transactions.",
    icon: "https://freelogopng.com/images/all_img/1683021055metamask-icon.png",
    tasks: [
      {
        name: "Create a Wallet",
        desc: "Set up a Solana wallet to store your tokens.",
        ctaNeeded: "Download Phantom Wallet",
        icon: <IconTerminal2 />,
      },
      {
        name: "Stake SOL",
        desc: "Earn rewards by staking your SOL tokens on the network.",
        ctaNeeded: "Choose a Validator",
        icon: <IconTerminal2 />,
      },
    ],
  },
  {
    name: "Polkadot",
    description:
      "A multi-chain network that enables interoperability between blockchains.",
    icon: "https://freelogopng.com/images/all_img/1683021055metamask-icon.png",
    tasks: [
      {
        name: "Join Parachain Auction",
        desc: "Participate in the auction to support your favorite parachain.",
        ctaNeeded: "Contribute DOT",
        icon: <IconTerminal2 />,
      },
      {
        name: "Transfer Assets",
        desc: "Transfer assets between different parachains using Polkadot.",
        ctaNeeded: "Connect Polkadot.js",
        icon: <IconTerminal2 />,
      },
    ],
  },
  {
    name: "Cardano",
    description:
      "A proof-of-stake blockchain platform with a focus on security and scalability.",
    icon: "https://freelogopng.com/images/all_img/1683021055metamask-icon.png",
    tasks: [
      {
        name: "Delegate ADA",
        desc: "Delegate your ADA to a stake pool to earn rewards.",
        ctaNeeded: "Select a Stake Pool",
        icon: <IconTerminal2 />,
      },
      {
        name: "Use Plutus",
        desc: "Write and deploy smart contracts using the Plutus platform.",
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
                    <Image
                      alt=""
                      src={protocol.icon}
                      width={1000}
                      height={1000}
                      className="rounded-full w-8 h-8 sm:w-12 sm:h-12"
                    />
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
