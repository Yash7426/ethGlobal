"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { domAnimation, LazyMotion } from "framer-motion";
import { FeaturesSectionDemo } from "../components/dashboard/Grid";
import AccordionComponent from "../components/dashboard/AccordionComponent";
import BarChart from "@/components/chart";
import AccordionComp2 from "../components/dashboard/AccordionComp2";
import Image from "next/image";

const page = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex flex-col w-full h-full relative justify-center items-s pb-20">
        <div className="absolute top-0 left-0 w-screen">
          <Navbar />
        </div>
        <div className=" absolute top-0 w-[500px] h-[500px]">
          <Image src="/gra5.png" alt="hero-bg" fill className="object-cover" />
        </div>
        <div className="flex flex-col mt-40 ml-48">
          <h1 className="text-gray-200 font-primary-font text-5xl z-50">
            Hi UserName
          </h1>
          <p className="text-gray-300 font-light max-w-3xl z-50">
            our journey towards unlocking new opportunities starts here. Each
            task you complete brings you one step closer to building a stronger,
            unique identity in the decentralized world.{" "}
          </p>
        </div>
        <div className="w-full h-full   max-w-6xl mx-auto flex items-start justify-center flex-wrap z-50">
          <AccordionComponent />
          <div className="md:w-[58%] w-full mb-10 mt-6 sm:mb-16 sm:mt-10 mx-auto z-50">
            <BarChart />
          </div>
        </div>

        <div className="relative z-50">
          <AccordionComp2 />
        </div>
        <div className=" absolute right-0 bottom-[400px] w-[500px] h-[400px]">
          <Image src="/gra5.png" alt="hero-bg" fill className="object-cover" />
        </div>
        <div className=" absolute left-0 bottom-0 w-[500px] h-[400px]">
          <Image src="/gra5.png" alt="hero-bg" fill className="object-cover" />
        </div>
      </div>
    </LazyMotion>
  );
};

export default page;
