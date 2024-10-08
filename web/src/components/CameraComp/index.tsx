"use client";

import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

interface CameraCompProps {
  setUploadResult: (result: string | null) => void; // Function to set the upload result
}

const CameraComp: React.FC<CameraCompProps> = ({ setUploadResult }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  // Start the camera
  const startCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }
  };

  useEffect(() => {
    startCamera();
    setIsClient(true);
  }, []);
  // Capture image
  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL("image/png");
        setImgSrc(dataUrl);
      }
    }
  };

  // Upload image to Cloudinary
  const uploadImage = async () => {
    if (imgSrc) {
      setUploading(true);

      const formData = new FormData();
      const blob = await (await fetch(imgSrc)).blob();
      const file = new File([blob], "photo.png", { type: "image/png" });
      formData.append("file", file);

      const response = await fetch("/api/cloudinary", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.imgUrl) {
        toast("Successfully Uploaded Image", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            zIndex: 99990
          },
        });
        console.log(data.imgUrl);
        setUploadResult(data.imgUrl);
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
        setUploadResult("Upload failed");
      }

      setUploading(false);
    }
  };

  if (!isClient) return null;

  return (
    <div className="p-8 flex flex-col items-center justify-center space-y-4 w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg my-4 px-4 pb-4">
      <h1 className="text-3xl font-primary-font font-bold text-gray-300 py-2">
        Capture and Upload
      </h1>
      <video ref={videoRef} autoPlay className="w-[520px] h-[380px]" />
      <canvas ref={canvasRef} className="hidden" width={520} height={380} />
      {imgSrc && <img src={imgSrc} alt="Captured" className="border" />}

      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-white  text-black rounded transition-all duration-200 hover:bg-transparent hover:text-white hover:border-2 hover:border-white"
          onClick={captureImage}
        >
          Capture
        </button>
        <button
          className="px-4 py-2 bg-[#392d82]  transition-all duration-200 hover:bg-[#593de6] text-white rounded"
          onClick={uploadImage}
          disabled={!imgSrc || uploading}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  );
};

export default CameraComp;
