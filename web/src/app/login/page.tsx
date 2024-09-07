"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {ConnectWallet} from '@thirdweb-dev/react'
import {
  cubicBezier,
  domAnimation,
  LazyMotion,
  m,
  useScroll,
  useTransform,
} from "framer-motion";
import { anim } from "@/lib/utils";
import { ConnectWallet } from "@thirdweb-dev/react";
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

//    code for logging the user and saving context
//    const pathname = usePathname();
//    const { username, userId, setUsername, setUserId } = useUser();
//    const router = useRouter();
//    const connectWallet = async () => {
//        if (localStorage.getItem("user")) {
//            const userData = JSON.parse(localStorage.getItem("user")!);
//            setUsername(userData.address);
//            setUserId(userData._id);
//            router.push("/chat");
//            return;
//        }
//        // @ts-ignore
//        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//        // Assuming there's at least one account, get the first one
//        const address = accounts[0];
//        const response = await axios.post(
//            process.env.NEXT_PUBLIC_BASE_URL + "user/add",
//            {
//                address,
//            }
//        );
//        console.log(response)
//        setUserId(response.data._id);
//        setUsername(address as string);
//        localStorage.setItem("user", JSON.stringify(response.data));
//        // router.push("/chat");
//    };

const page = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        {...anim(blurOutFadeIn)}
        className="min-h-screen flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-lg"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent,#0e023524,#0e0235f4_70%)] mix-blend-luminosity -z-50"></div>
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
              Login to NAME
            </m.h2>
          </div>

          <m.div className="space-y-4 flex justify-center">
            {/* <m.button
              {...anim(slideUpOpacity)}
              className="w-full px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Login with faceLock
            </m.button>

            <m.button
              {...anim(slideUpOpacity)}
              className="w-full px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 flex flex-row justify-start items-center gap-14"
            >
              <Image
                src="ethereum.svg"
                alt="Etherium"
                height={20}
                width={20}
                className=""
              />
              Continue with Etherium
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
                alt="base"
                height={20}
                width={20}
                className=""
              />
              Continue with solana
            </m.button> */}
            <ConnectWallet></ConnectWallet>
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default page;
{
  /* <Image
        className="absolute top-20 left-0 blur-2xl w-14 h-14 border"
        layout="fill"
        src="/loginImg.png"
      />
      <div
        className="relative z-50 backdrop-filter backdrop-blur-xl bg-opacity-30 rounded-md py-10 px-6 min-w-72 
      min-h-96 max-w-full max-h-full flex flex-col justify-center items-center gap-8 border-gray-600 border"
      >
        <h1
          className="text-4xl text-gray-300 font-bold font-mono animate-typing overflow-hidden whitespace-nowrap border-r-4 
        border-r-white"
        >
          SignIn into your account
        </h1>
        <div className="max-w-full max-h-full min-h-96 flex flex-col justify-center items-center gap-6 relative">
          <button
            type="button"
            class=" min-w-96 text-white bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Purple
          </button>
         
          <button
            type="button"
            class=" min-w-96 rounded-3xl px-4 py-2 bg-white transition-all duration-200 hover:scale-102 hover:bg-transparent hover:text-white hover:border-2 hover:border-white"
          >
            Default
          </button>
          <h5 className="absolute text-white bottom-10 right-2 font-light text-sm">
            Don't have an account, Register
          </h5>
        </div>
      </div> */
}
//  <div className="flex bg-slate-950 rounded-lg shadow-md w-full h-screen z-50 flex-row items-center justify-center relative">
//       <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
//       {/* Left Section - Login Form */}
//       <div className="w-full max-w-xl md:w-1/2 px-8 flex flex-col justify-center items-center z-50 relative">
//         <h2
//           className="text-5xl font-mono font-extrabold text-gray-200 text-center mb-6 animate-typing overflow-hidden whitespace-nowrap
//           border-r-4 border-r-white"
//         >
//           SignIn into your account
//         </h2>
//         {/* <p className="text-gray-500 text-center mb-6"></p> */}
//         <button className="flex items-center justify-center px-20 py-3 mb-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-gray-200 transition-all duration-200 hover:text-white hover:bg-gray-700">
//           Log in with Google
//         </button>
//         <button className="flex items-center justify-center px-20 py-3 mb-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-gray-200 transition-all duration-200 hover:text-white hover:bg-gray-700">
//           Log in with Google
//         </button>
//         <button className="flex items-center justify-center px-20 py-3 mb-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-gray-200 transition-all duration-200 hover:text-white hover:bg-gray-700">
//           Log in with GitHub
//         </button>
//         <button className="flex items-center justify-center px-20 py-3 mb-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-gray-200 transition-all duration-200 hover:text-white hover:bg-gray-700">
//           Log in with Google
//         </button>
//         <h5 className="text-grey-900  font-light text-sm text-start">
//           Don't have an account, <Link href=""> Register</Link>
//         </h5>
//       </div>
//       {/* Right Section - Image */}
//       <div className="relative">
//         <img
//           src="/finance-growth.svg"
//           layout="fill"
//           alt="Login Side Image"
//           className="object-cover max-w-2xl max-h-2xl"
//         />
//       </div>
//     </div>
