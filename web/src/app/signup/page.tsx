"use client";
import React, { useState } from "react";
import Image from "next/image"; // Make sure to import Image if you're using it
import { LazyMotion, m, domAnimation } from "framer-motion";
import { anim } from "@/lib/utils";
import { CrossChainNameServiceLookup, CrossChainNameServiceLookup__factory, CrossChainNameServiceRegister, CrossChainNameServiceRegister__factory } from '../../typechain-types';
import json from  '../../deployments/ethereumSepolia.json' ;
import { ConnectWallet, useAddress, useSigner } from "@thirdweb-dev/react";
import {ethers} from 'ethers'
import { useRouter } from "next/navigation";
import { useUser } from '../../contexts/Usercontext';
export const slideUpOpacity = {
  initial: {
    y: 40,
    opacity: 0,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: 0.05,
      type: "tween",
    },
  },
};

export const scaleUpOpacity = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, type: "tween", delay: 0.05 },
  },
};

export const blurOutFadeIn = {
  initial: {
    filter: "blur(15px)",
    opacity: 0,
  },
  animate: {
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.7, type: "tween" },
  },
};

const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // Add state to track submission
  const [message,setMessage]= useState(false)
  const { username, setUsername } = useUser();
  const {userId, setUserId} = useUser();
  const signer = useSigner();
  var address = useAddress();
  const handleInputChange = (e :any) => {
    setUser(e.target.value);
  };
 
  const handleSubmit = async (e : any) => {
    e.preventDefault();
    console.log(user);
    
    if(signer != undefined) {
      const ccnsLookup: CrossChainNameServiceLookup = CrossChainNameServiceLookup__factory.connect(json.ccnsLookup,signer);
    const ccnsRegister: CrossChainNameServiceRegister = CrossChainNameServiceRegister__factory.connect(json.ccnsRegister,signer);
      try{
    
    console.log(ccnsLookup);
    console.log("reached")
    console.log(user + ".ccns")
    console.log(address)
    const tx = await ccnsLookup.lookup(user);
    console.log(tx)
    if(tx) {
      setIsSubmitted(true);
      setMessage(true);
    } else {
      setMessage(false);
    }
  }catch(e) {
    console.log(e);
    setMessage(false);
    if(address != undefined) {
    var tx1 = await ccnsRegister.register(user+".ccns",address);
    await tx1.wait();
    console.log(tx1.hash);
    setUsername(user);
    setUserId(address);
    
    router.push("/dashboard");
    }
  }
    } else {
      console.log("Login again")
    }
  
    setIsSubmitted(true); // Mark form as submitted

  };

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        {...anim(blurOutFadeIn)}
        className="min-h-screen flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-lg"
      >
        {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent,#0e023524,#0e0235f4_70%)] mix-blend-luminosity"></div> */}
        <div className="w-full max-w-md mx-auto p-8">
          <div className="text-center mb-6">
            {/* Add your logo here */}
            <m.div
              {...anim(slideUpOpacity)}
              className="flex justify-center items-center mb-4 text-white"
            >
              <h2>LOGO</h2>
            </m.div>
            <m.h2
              {...anim(slideUpOpacity)}
              className="text-5xl font-bold text-white font-primary-font"
            >
              SignUp to NAME
            </m.h2>
          </div>
           {!signer && <div className="z-50"><ConnectWallet></ConnectWallet></div>}
          {/* The input field and submit button should always be visible */}
          { signer && <form className="flex flex-col gap-4 z-50" onSubmit={handleSubmit}>
            <input
              value={user}
              onChange={handleInputChange}
              placeholder="Enter your user"
              className="w-full px-8 py-3 bg-gray-800 text-white rounded-lg z-50"
            />
            {message && <p className="text-s text-red-500"> user already exists</p>}
            {!isSubmitted && (
              <m.button
                initial={{
                  y: 40,
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.7,
                    type: "tween",
                    delay: 0.072,
                  },
                }}
                className="z-10 mt-6 group h-12 px-6 bg-indigo-600 text-white rounded-lg inline-flex items-center justify-center whitespace-nowrap gap-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 backdrop-blur-md"
                type="submit"
              >
                SUBMIT
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                >
                  <line
                    x1="5"
                    y1="12"
                    x2="19"
                    y2="12"
                    className="scale-x-0 translate-x-[10px] group-hover:translate-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                  />
                  <polyline
                    points="12 5 19 12 12 19"
                    className="-translate-x-2 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                  />
                </svg>
              </m.button>
            )}
          </form>}

          {/* Conditionally render the blockchain options after form finalizing user */}
          {/* {isSubmitted && (
            <m.div {...anim(blurOutFadeIn)} className="space-y-4 mt-6">
              <m.button
                {...anim(slideUpOpacity)}
                className="w-full px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex flex-row justify-start items-center gap-14"
              >
                <Image
                  src="ethereum.svg"
                  alt="Ethereum"
                  height={20}
                  width={20}
                  className=""
                />
                Continue with Ethereum
              </m.button>

              <m.button
                {...anim(slideUpOpacity)}
                className="w-full px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex flex-row justify-start items-center gap-14"
              >
                <Image
                  src="base.svg"
                  alt="base"
                  height={20}
                  width={20}
                  className=""
                />
                Continue with base
              </m.button>

              <m.button
                {...anim(slideUpOpacity)}
                className="w-full px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex flex-row justify-start items-center gap-14"
              >
                <Image
                  src="solana.svg"
                  alt="solana"
                  height={20}
                  width={20}
                  className=""
                />
                Continue with Solana
              </m.button>
            </m.div>
          )} */}
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default Page;
