import React from "react";
import { CircleX } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/dashboard/Accordion";
import Image from "next/image";
import { div } from "framer-motion/client";

interface UserCryptoData {
  userFound: boolean;
  Domain: string;
  Solana: string[];
  Mantle: string[];
  Base: string[];
  Ethereum: string[];
}
interface Wallet {
  icon: string;
  name: string;
}

const cryptoWallets: Wallet[] = [
  {
    icon: "https://freelogopng.com/images/all_img/1683021055metamask-icon.png",
    name: "MetaMask",
  },
  {
    icon: "https://freelogopng.com/images/all_img/1683021055metamask-icon.png",
    name: "Solana",
  },
  {
    icon: "https://freelogopng.com/images/all_img/1683021055metamask-icon.png",
    name: "Mantle",
  },
  {
    icon: "https://freelogopng.com/images/all_img/1683021055metamask-icon.png",
    name: "Base",
  },
];
const dummyData: UserCryptoData = {
  userFound: true,
  Domain: "exampledomain.com",
  Solana: [
    "5DpF7U77N3N5Y9nF58PsxyZ9gr6d1JbECffy6kTP6nVS",
    "8BHKzD2XBZxRDY5TcF5bXpgpe5Z8FyF5gVn6SZ8t9fZJ",
  ],
  Mantle: [],
  Base: [],
  Ethereum: ["0x742d35Cc6634C0532925a3b844Bc454e4438f44e"],
};

const AccordionComponent = () => {
  function addWallet(wallet: String) {
    console.log(wallet);
  }
  function deleteAccount(address: String) {
    console.log(address);
  }
  return (
    <div className="flex w-full md:w-[35%] flex-col gap-y-3 sm:gap-y-4 md:gap-y-5 mx-auto mb-10 mt-6 sm:mb-16 sm:mt-10 p-[2.5px] rounded-2xl bg-gradient-to-bl from-[#AB57FF] via-[#7180FE] to-[#2ED5F6]">
      <div className="w-full h-full p-4 bg-black rounded-2xl">
        <p className="font-[700] text-center text-xl sm:text-2xl md:text-3xl text-teal-50 pb-3">
          Your Wallets
        </p>
        <Accordion
          type="single"
          collapsible={true}
          className="w-[95%] mx-auto sm:w-[90%] flex flex-col gap-y-2"
        >
          {cryptoWallets.map((wallet, ind) => {
            return (
              <AccordionItem
                className="dark:bg-black bg-white rounded-3xl px-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.5] dark:shadow-white/[0.05] flex flex-col justify-center"
                value={wallet.name}
              >
                <AccordionTrigger className="break-words text-left">
                  <div className="flex items-center gap-4 text-teal-50">
                    <Image
                      alt=""
                      src={wallet.icon}
                      width={1000}
                      height={1000}
                      className="rounded-full w-8 h-8"
                    />
                    <p>{wallet.name}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="break-words ">
                  {(
                    dummyData[wallet.name as keyof UserCryptoData] as string[]
                  )?.map((item, ind) => {
                    return (
                      <div className="flex flex-row justify-between items-center pr-4 py-2 border-b-2 border-[rgb(162,94,255)]">
                        <div className="text-teal-50 ">
                          {item.slice(0, 30)}...
                        </div>
                        <CircleX
                          className=" cursor-pointer h-4 w-4 shrink-0 transition-transform duration-200"
                          color="#ff0000"
                          onClick={() => {
                            deleteAccount(item);
                          }}
                        />
                      </div>
                    );
                  })}
                  <button
                    onClick={() => {
                      addWallet(wallet.name);
                    }}
                    className={
                      "bg-gradient-to-bl from-[#AB57FF] via-[#7180FE] to-[#2ED5F6] flex flex-row w-full sm:w-[90%] mx-auto py-[10px] px-5 rounded-full items-center justify-center cursor-pointer text-white mt-4"
                    }
                  >
                    Add an Account
                  </button>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionComponent;
