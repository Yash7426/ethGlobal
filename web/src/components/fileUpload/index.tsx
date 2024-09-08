"use client";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import toast from "react-hot-toast";

interface FileUploadDemoProps {
  setuploadUrl: (uploadUrl: string) => void; // Function to update files array
}
export function FileUploadDemo({ setuploadUrl }: FileUploadDemoProps) {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    // if (files.length > 0) return;
    setFiles(files);
    console.log(files);
  };
  const uploadStagedFile = async (stagedFile: File | Blob) => {
    const form = new FormData();
    form.set("file", stagedFile);

    // here /api/upload is the route of my handler
    const res = await fetch("/api/cloudinary", {
      method: "POST",
      body: form,
    });
    console.log(res);
    const data = await res.json();
    if (data.message == "success") {
      toast("Successfully Uploaded Image", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          zIndex: 99990
        },
      });
      setuploadUrl(data.imgUrl)
      // route here
    } else {
      toast.error("Error Uploading Image", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          zIndex: 99990
        },
      });
    }

    // we will return the uploaded image URL from the API to the client
    console.log(data.imgUrl);
  };

  async function handleSubmit() {
    await uploadStagedFile(files[0]);
  }

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg my-4">
      <FileUpload onChange={handleFileUpload} />
      <button
        onClick={() => {
          handleSubmit();
        }}
        className="bg-gradient-to-bl from-[#593de6] via-[#392d82] to-[#593de6]  hover:bg-gradient-to-bl hover:from-[#221a4c] hover:via-[#593de6] hover:to-[#221a4c] transition-all duration-300 ease-in-out  flex flex-row mx-auto py-[10px] px-5 rounded-full items-center justify-center cursor-pointer text-white my-4"
      >
        Upload
      </button>
    </div>
  );
}
