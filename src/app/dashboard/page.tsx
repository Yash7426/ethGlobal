"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { domAnimation, LazyMotion } from "framer-motion";
import { FeaturesSectionDemo } from "../components/dashboard/Grid";
import AccordionComponent from "../components/dashboard/AccordionComponent";
import BarChart from "@/components/chart";
import AccordionComp2 from "../components/dashboard/AccordionComp2";

const page = () => {
  return (
    <LazyMotion features={domAnimation}>
      <Navbar />
      <div className="mt-20 max-w-6xl mx-auto flex items-start justify-center flex-wrap">
        <AccordionComponent />
        <div className="md:w-[58%] w-full mb-10 mt-6 sm:mb-16 sm:mt-10 mx-auto">
          <BarChart />
        </div>
      </div>
      <AccordionComp2 />
    </LazyMotion>
  );
};

export default page;
