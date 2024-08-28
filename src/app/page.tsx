"use client";
import Image from "next/image";
import Link from "next/link";
import AnimatedTextWord from "./components/AnimatedTextWord";
import RippleBg from "./components/RippleBg";
import { FaArrowRight } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
export default function Home() {
  return (
    <div className="flex-col justify-center align-center w-screen h-full bg-slate-950 overflow-x-hidden">
      <nav className="fixed top-0 w-screen px-10 z-50 flex justify-evenly py-4">
        <div className="">
          <p className="text-xl font-bold py-2 text-white">XYZName</p>
          {/* Add more navigation links or components */}
        </div>
        <div className="flex justify-center gap-8">
          <a
            href="#about"
            className="hover:border-b-2 hover:border-white py-4 font-semibold text-white"
          >
            About
          </a>
          <a
            href="#service"
            className="hover:border-b-2 hover:border-white py-4 font-semibold text-white"
          >
            Services
          </a>
          <a
            href="#service"
            className="border-b-2 hover:border-white py-4 border-transparent font-semibold text-white"
          >
            Contact Us
          </a>
        </div>
        <div className="flex flex-row gap-4">
          <div className="text-gray-200 font-semibold py-4">
            <Link href="./login">Sign In</Link>
          </div>
          <button
            className="px-4 py-1 rounded-lg text-white border border-white transition-all duration-200 hover:bg-gray-200 
          hover:text-black hover:scale-x-105"
          >
            <Link href="/register">Register</Link>
          </button>
        </div>
      </nav>
      <div className="w-screen h-screen flex flex-col relative bg-slate-950 justify-center items-center gap-10">
        <Image
          alt="bg-image"
          className="absolute top-0 left-0 blur-2xl"
          layout="fill"
          src="/glow-bottom.svg"
        />
        <div
          className="flex flex-col w-full h-full bg-slate-950 justify-center items-center p-6 gap-10
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
        bg-[size:24px_24px]"
        >
          <h1 className="font-sans text-white text-6xl font-extrabold tracking-wide z-50">
            <AnimatedTextWord text=" Unlock your Digital Identity" />
          </h1>
          <h3 className="font-sans text-md font-light text-white text-center z-50">
            No more isolated credentials—your cross-platform passport gives you
            the freedom to move effortlessly between
            <br /> decentralized communities, unlocking opportunities and
            experiences wherever you go.
          </h3>
          <div className="flex flex-row gap-5">
            <button
              className="bg-gray-300 px-4 py-2 gap-3 text-black font-sarif font-bold z-50 rounded-xl flex flex-row text-center 
          transition-all duration-200 hover:bg-white hover:scale-102 hover:gap-4"
            >
              Let's get Started
              <span className="pt-1">
                <FaArrowRight />
              </span>
            </button>
            <button
              className="bg-gray-800 opacity-80 text-gray-200 font-sarif font-bold z-50 rounded-md   transition-all duration-200 
              hover:bg-gray-900 hover:scale-102 hover:text-white px-4 py-1"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
      <div className=" relative w-screen max-h-full h-screen flex flex-row justify-center items-center py-4 px-10">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="flex flex-col gap-8 justify-center items-start">
          <h1 className="font-sans text-gray-200 text-5xl font-bold tracking-wide z-50">
            Knowing XYZName
          </h1>
          <p className="text-gray-200 font-light text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ex
            facere error laborum sapiente minus in quisquam quia obcaecati et
            adipisci dolore perspiciatis commodi similique, voluptates veniam
            amet quidem nostrum? <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            a officia beatae magni ad assumenda numquam doloribus odio
            praesentium. Eaque commodi vel officiis quos, distinctio dolorem
            fugit impedit id iste.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full h-full">
          <div className="absolute right-0 h-full flex justify-center items-center">
            <RippleBg />
          </div>
          <div className="bg-gray-900 p-3 rotate-12 border border-gray-500 rounded-lg">
            <FaCrown className="h-30 w-30 border-gray-500" color="gray" />
          </div>
        </div>
      </div>
    </div>
  );
}
