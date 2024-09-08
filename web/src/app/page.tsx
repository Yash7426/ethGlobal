"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Particles from "../components/Particles";
import Navbar from "../components/Navbar";
import {
  cubicBezier,
  domAnimation,
  LazyMotion,
  m,
  useScroll,
  useTransform,
} from "framer-motion";
import { anim } from "@/lib/utils";

import React, { Suspense } from "react";
import TextReveal from "@/components/TextReveal";
import BentoGrid from "./components/BentoGrid";
import Ripple from "@/components/magicui/ripple";


const Spline = React.lazy(() => import("@splinetool/react-spline/next"));

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

export default function Home() {
  const [shouldRender, setShouldRender] = useState(false);

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"],
    smooth: 1000,
  });

  const scale = useTransform(scrollYProgress, [0, 0.8], [0, 1], {
    ease: cubicBezier(0.45, 0, 0.55, 1),
  });
  const rotate = useTransform(scrollYProgress, [0, 0.8], [0, 360], {
    ease: cubicBezier(0.45, 0, 0.55, 1),
  });

  const solanaY = useTransform(scrollYProgress, [0, 0.8], [0, -290], {
    ease: cubicBezier(0.45, 0, 0.55, 1),
  });

  const ethereumY = useTransform(scrollYProgress, [0, 0.8], [0, -156], {
    ease: cubicBezier(0.45, 0, 0.55, 1),
  });
  const ethereumX = useTransform(scrollYProgress, [0, 0.8], [0, -400], {
    ease: cubicBezier(0.45, 0, 0.55, 1),
  });

  const mantleY = useTransform(scrollYProgress, [0, 0.8], [0, -156], {
    ease: cubicBezier(0.45, 0, 0.55, 1),
  });
  const mantleX = useTransform(scrollYProgress, [0, 0.8], [0, 400], {
    ease: cubicBezier(0.45, 0, 0.55, 1),
  });

  const bnbY = useTransform(scrollYProgress, [0, 0.8], [0, 176], {
    ease: cubicBezier(0.45, 0, 0.55, 1),
  });
  const bnbX = useTransform(scrollYProgress, [0, 0.8], [0, -320], {
    ease: cubicBezier(0.45, 0, 0.55, 1),
  });

  const baseY = useTransform(scrollYProgress, [0, 0.8], [0, 176], {
    ease: cubicBezier(0.45, 0, 0.55, 1),
  });
  const baseX = useTransform(scrollYProgress, [0, 0.8], [0, 320], {
    ease: cubicBezier(0.45, 0, 0.55, 1),
  });
  const polygonY = useTransform(scrollYProgress, [0, 0.8], [0, 290], {
    ease: cubicBezier(0.45, 0, 0.55, 1),
  });
  const polygonX = useTransform(scrollYProgress, [0, 0.8], [0, 156], {
    ease: cubicBezier(0.45, 0, 0.55, 1),
  });

  const router = useRouter();

  const navigateToPage = () => {
    // Navigate to the "/login" page
    router.push("/login");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex-col justify-center align-center w-screen h-full overflow-x-hidden">
        <Navbar />
        <m.section
          {...anim(blurOutFadeIn)}
          className="w-screen min-h-screen flex flex-col relative justify-center bg-primary-950 items-center gap-10 z-20"
        >
          <Particles
            className="absolute inset-0 z-10 pointer-events-none"
            quantity={50}
            ease={80}
            refresh
          />
          <div className="h-full w-full absolute bottom-0 left-1/2 -translate-x-1/2 right-0 brightness-50">
            <Image
              src="/hero-bg.png"
              alt="hero-bg"
              fill
              className="absolute inset-0 z-[-1] h-full w-full scale-y-[-1] object-cover"
            />
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center">
            <m.h1
              {...anim(slideUpOpacity)}
              className="font-primary-font text-transparent bg-gradient-to-t from-primary-900 via-primary-50/85 to-primary-100 bg-clip-text text-6xl font-extrabold max-w-2xl text-center leading-[1.2] tracking-tighter z-10 drop-shadow"
            >
              Bridge Your Identity
            </m.h1>
            <m.h1
              {...anim(slideUpOpacity)}
              className="font-primary-font text-transparent bg-gradient-to-t from-primary-900 via-primary-50/85 to-primary-100 bg-clip-text text-6xl font-extrabold max-w-2xl text-center leading-[1.2] tracking-tighter z-10 drop-shadow"
            >
              Across Web3
            </m.h1>
            <m.p
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
                  delay: 0.06,
                },
              }}
              className="text-sm font-normal text-primary-100 text-center max-w-lg mt-2 z-10"
            >
              Seamlessly Verify, Secure, and Expand Your Digital Identity Across
              the Web3 Ecosystem, Unlocking New Opportunities and Trust
            </m.p>

            <m.button
              onClick={navigateToPage}
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
              className="z-10 mt-6 group h-12 animate-shimmer bg-[linear-gradient(110deg,#11024b,45%,rgb(38,15,126),55%,#11024b)] bg-[length:200%_100%] px-6 text-white  inline-flex items-center justify-center whitespace-nowrap gap-2 rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 backdrop-blur-md"
            >
              Get Started
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
          </div>
        </m.section>
        <section className="w-screen min-h-screen relative">
          <div className="relative z-10 w-full px-10 text-center pt-20">
            <TextReveal
              text="Explore Features ✨"
              className="text-white font-primary-font text-7xl tracking-tighter"
            />
          </div>
          <div className="mt-20 max-w-6xl mx-auto">
            <BentoGrid />
          </div>
        </section>
        <section className="w-screen h-[130vh] relative flex items-center justify-center bg-[#02000A] my-20">
          <Ripple />
          <m.div
            ref={targetRef}
            className="flex items-center justify-center h-full w-full relative z-10"
          >
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,transparent_65%,#02000A_100%)] z-30" />
            <m.div
              style={{
                y: bnbY,
                x: bnbX,
                scale: scale,
                rotate,
              }}
              className="absolute bg-primary-900 rounded-[3rem] h-[150px] w-[150px] flex items-center justify-center"
            >
              <Image
                src="bnb.svg"
                alt="bnb"
                height={100}
                width={100}
                className="-rotate-90"
              />
            </m.div>
            <m.div
              style={{
                y: baseY,
                x: baseX,
                scale: scale,
                rotate,
              }}
              transition={{
                velocity: 100,
              }}
              className="absolute bg-primary-900 rounded-[3rem] h-[150px] w-[150px] flex items-center justify-center"
            >
              <Image
                src="base.svg"
                alt="base"
                height={100}
                width={100}
                className="rotate-180"
              />
            </m.div>
            <m.div
              style={{
                y: solanaY,
                scale: scale,
                rotate,
              }}
              transition={{
                velocity: 100,
              }}
              className="absolute bg-primary-900 rounded-[3rem] h-[150px] w-[150px] flex items-center justify-center"
            >
              <Image src="solana.svg" alt="solana" height={100} width={100} />
            </m.div>
            <m.div
              style={{
                y: ethereumY,
                scale: scale,
                x: ethereumX,
                rotate,
              }}
              transition={{
                velocity: 1000,
              }}
              className="absolute bg-primary-900 rounded-[3rem] h-[150px] w-[150px] flex items-center justify-center"
            >
              <Image
                src="ethereum.svg"
                alt="ethereum"
                height={60}
                width={60}
                className="-rotate-45"
              />
            </m.div>
            <m.div
              style={{
                y: mantleY,
                x: mantleX,
                scale: scale,
                rotate,
              }}
              className="absolute bg-primary-900 rounded-[3rem] h-[150px] w-[150px] flex items-center justify-center"
            >
              <Image
                src="mantle.svg"
                alt="mantle"
                height={150}
                width={150}
                className="scale-110 rotate-12"
              />
            </m.div>
            <div className="flex flex-col items-center justify-center relative z-50">
              <h1 className="uppercase font-primary-font text-transparent bg-gradient-to-t from-primary-800/50 via-primary-100 to-primary-50 bg-clip-text text-8xl tracking-tighter leading-[1]">
                The Crypto
              </h1>
              <h1 className="transparent-text font-primary-font uppercase text-8xl tracking-tighter leading-[1]">
                Matrix
              </h1>
            </div>
          </m.div>
        </section>
        {/* <section className="w-screen h-screen overflow-y-hidden relative flex justify-center items-center">
          <div>
            <h1 className="text-[150px] text-gray-400 font-primary-font align-center tracking-tighter">
              Unified Identities
            </h1>
          </div>
          <div className="absolute z-10">
            <Suspense fallback={null}>
              <Spline scene="https://prod.spline.design/ROK0VKj08aTBDiZ3/scene.splinecode" />
            </Suspense>
          </div>
          <m.button
            onClick={navigateToPage}
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
            className="text-2xl absolute bottom-20 right-20 z-50 mt-6 group h-20 animate-shimmer bg-[linear-gradient(110deg,#11024b,45%,rgb(38,15,126),55%,#11024b)] bg-[length:200%_100%] px-12 text-white  inline-flex items-center justify-center whitespace-nowrap gap-4 rounded-full  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 backdrop-blur-md"
          >
            Get Started
            <svg
              viewBox="0 0 24 24"
              className="size-8 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
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
        </section> */}
        <section></section>
      </div>
    </LazyMotion>
  );
}
