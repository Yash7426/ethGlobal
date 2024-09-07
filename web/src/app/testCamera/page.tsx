"use client";

import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<string | null>(null);

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
          },
        });
        setUploadResult("Upload failed");
      }

      setUploading(false);
    }
  };

  if (!isClient) return null;

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold text-gray-300 py-2">Capture and Upload Image</h1>
      <video ref={videoRef} autoPlay className="w-[520px] h-[380px]" />
      <canvas ref={canvasRef} className="hidden" width={520} height={380} />
      {imgSrc && <img src={imgSrc} alt="Captured" className="border" />}

      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={startCamera}
        >
          Start Camera
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={captureImage}
        >
          Capture Image
        </button>
        <button
          className="px-4 py-2 bg-purple-500 text-white rounded"
          onClick={uploadImage}
          disabled={!imgSrc || uploading}
        >
          {uploading ? "Uploading..." : "Upload to Cloudinary"}
        </button>
      </div>
    </div>
  );
};

export default Home;
