import React from "react";
import { m } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  return (
    <m.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, type: "tween", delay: 0 }}
      className="fixed top-0 z-[9999] left-0 right-0 h-16 backdrop-blur bg-gradient-to-b border-b border-primary-50/10 from-primary-950 via-primary-950/40 to-transparent"
    >
      <nav className="max-w-5xl mx-auto flex justify-between items-center w-full h-full px-7">
        <div className="">
          {/* <p className="text-xl font-bold text-primary-50">

          </p> */}
          <Image
            alt=""
            src="/logo.png"
            width={1000}
            height={1000}
            className="w-[200px] h-[60px]"
          />
          {/* Add more navigation links or components */}
        </div>
        <div className="flex justify-center gap-8">
          <a
            href="#about"
            className="font-medium text-primary-50 text-sm link-underline link-underline-black"
          >
            About
          </a>
          <a
            href="#service"
            className="font-medium text-primary-50 text-sm link-underline link-underline-black"
          >
            Services
          </a>
          <a
            href="#service"
            className="font-medium text-primary-50 text-sm link-underline link-underline-black"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </m.header>
  );
};

export default Navbar;
