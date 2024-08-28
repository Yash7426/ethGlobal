"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div className="flex bg-gray-200 rounded-lg shadow-md w-full h-screen z-50 flex-row items-center justify-center relative">
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      {/* Left Section - Login Form */}
      <div className="w-full max-w-xl md:w-1/2 px-8 flex flex-col justify-center items-center z-50 relative">
        <h2
          className="text-4xl font-mono font-extrabold text-gray-700 text-center mb-6 animate-typing overflow-hidden whitespace-nowrap
          border-r-4 border-r-gray-700"
        >
          SignIn into your account
        </h2>
        {/* <p className="text-gray-500 text-center mb-6"></p> */}
        <button className="flex items-center justify-center px-20 py-3 mb-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white transition-all duration-200 hover:text-white hover:bg-gray-700">
          Log in with Google
        </button>

        <button className="flex items-center justify-center px-20 py-3 mb-4 border border-gray-300 rounded-lg text-sm font-medium text-white bg-gray-700 transition-all duration-200 hover:text-black  hover:bg-gray-100">
          Log in with GitHub
        </button>
        <button className="flex items-center justify-center px-20 py-3 mb-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white transition-all duration-200 hover:text-white hover:bg-gray-700">
          Log in with GitHub
        </button>
        <button className="flex items-center justify-center px-20 py-3 mb-4 border border-gray-300 rounded-lg text-sm font-medium text-white bg-gray-700 transition-all duration-200 hover:text-black  hover:bg-gray-100">
          Log in with GitHub
        </button>
        <h5 className="text-grey-900  font-light text-sm text-start">
          Don't have an account, <Link href=""> Register</Link>
        </h5>
      </div>
      {/* Right Section - Image */}
      <div className="relative">
        <img
          src="./finance-growth.svg"
          layout="fill"
          alt="Login Side Image"
          className="object-cover max-w-2xl max-h-2xl"
        />
      </div>
    </div>
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
