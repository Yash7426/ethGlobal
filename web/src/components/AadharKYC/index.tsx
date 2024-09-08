"use client";
import React, { useState } from "react";
import axios from "axios";
import { FileUploadDemo } from "../fileUpload";
import CameraComp from "../CameraComp";
import Image from "next/image";
const AadharKYC = () => {
  const [uploadResult, setUploadResult] = useState<string | null>(null);
  const [uploadUrl, setUploadUrl] = useState<string | null>(null);

  async function handleSubmit() {
    // aadhar url -> uploadUrl
    // face url -> uploadResult
    console.log(uploadUrl, uploadResult);
    try {
      const response = await axios.post(
        "https://558djpdp-8000.inc1.devtunnels.ms/compare-faces",
        {
          image_url_1: "https://res.cloudinary.com/di8ui03yr/image/upload/v1725744716/product-images/photo_nb4b6v.png",
          image_url_2: "https://res.cloudinary.com/di8ui03yr/image/upload/v1725744806/product-images/photo_zac0km.png"
        }
      );

      console.log(response);

      // yaha if vali chez check krlena
      if (response.data.success) {
        console.log("Success");
        //add toast here
      } else {
        console.error("Comparison failed");
        //add toast here
      }
    } catch (error) {
      console.error("Request failed");
    }
  }
  return (
    <div className="flex flex-col gap-y-5  p-10 relative">
      <FileUploadDemo setuploadUrl={setUploadUrl} />
      <div className=" absolute right-20 bottom-[400px] w-[500px] h-[400px] -z-10">
        <Image src="/gra5.png" alt="hero-bg" fill className="object-cover" />
      </div>
      <CameraComp setUploadResult={setUploadResult} />
      <button
        className="bg-gradient-to-bl from-[#593de6] via-[#392d82] to-[#593de6]  hover:bg-gradient-to-bl hover:from-[#221a4c] hover:via-[#593de6] hover:to-[#221a4c] transition-all duration-300 ease-in-out  flex flex-row mx-auto py-[10px] px-10 rounded items-center justify-center cursor-pointer text-white my-4"
        onClick={async () => {
          await handleSubmit();
        }}
      >
        Get KYC
      </button>
    </div>
  );
};

export default AadharKYC;
