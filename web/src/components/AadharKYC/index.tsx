"use client";
import React, { useState } from "react";
import { FileUploadDemo } from "../fileUpload";
import CameraComp from "../CameraComp";

const AadharKYC = () => {
  const [uploadResult, setUploadResult] = useState<string | null>(null);
  const [uploadUrl, setUploadUrl] = useState<string | null>(null);

  async function handleSubmit() {
    // aadhar url -> uploadUrl
    // face url -> uploadResult
    console.log(uploadUrl, uploadResult);
  }
  return (
    <div className="flex flex-col gap-y-5">
      <FileUploadDemo setuploadUrl={setUploadUrl} />
      <CameraComp setUploadResult={setUploadResult} />
      <button
        className="bg-gradient-to-bl from-[#593de6] via-[#392d82] to-[#593de6]  hover:bg-gradient-to-bl hover:from-[#221a4c] hover:via-[#593de6] hover:to-[#221a4c] transition-all duration-300 ease-in-out  flex flex-row mx-auto py-[10px] px-5 rounded-full items-center justify-center cursor-pointer text-white my-4"
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
