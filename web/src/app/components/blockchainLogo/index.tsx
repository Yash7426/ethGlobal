import React from "react";
import Image from "next/image";
const blockchainLogo = () => {
  return (
    <div className="rounded-full bg-gray-200 w-12 h-12 flex justify-center items-center">
      <Image
        src="/logo2.png"
        alt="blockchain Logo"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default blockchainLogo;
