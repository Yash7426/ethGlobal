"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        {...anim(blurOutFadeIn)}
        className="min-h-screen flex items-center justify-center bg-slate-950 relative"
      >
        {/* Quarter image in the top right corner */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] overflow-hidden">
          <Image
            src="/gra5.png"
            alt="Quarter Image"
            width={800}
            height={800}
            className="object-cover object-top-right"
          />
        </div>

        <div className="w-full mx-auto flex flex-col justify-center items-center gap-10">
          <m.div
            {...anim(slideUpOpacity)}
            className="text-4xl font-bold text-gray-200 font-primary-font inline-flex items-baseline gap-2"
          >
            Login to HUMANIZE
          </m.div>

          <m.div className="space-y-4 flex justify-center">
            <ConnectWallet />
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default Page;
