"use client";
import React, { useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
  // @ts-ignore
} from "react-simple-captcha";
import { Input } from "../ui/input";

const CaptchaTest: React.FC = () => {
  useEffect(() => {
    loadCaptchaEnginge(8);
  }, []);

  const doSubmit = () => {
    const userCaptcha = (
      document.getElementById("user_captcha_input") as HTMLInputElement
    ).value;

    if (validateCaptcha(userCaptcha)) {
      alert("Captcha Matched");
      loadCaptchaEnginge(8);
      (
        document.getElementById("user_captcha_input") as HTMLInputElement
      ).value = "";
    } else {
      alert("Captcha Does Not Match");
      (
        document.getElementById("user_captcha_input") as HTMLInputElement
      ).value = "";
    }
  };

  return (
    <div className="flex justify-center items-center z-50">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center space-y-4">
          <div className="mt-3">
            <LoadCanvasTemplate
              reloadText="Reload Captcha"
              reloadColor="#593de6"
            />
          </div>

          <div className="mt-3 w-full">
            <Input
              name="user_captcha_input"
              id="user_captcha_input"
              placeholder="Enter Captcha"
              type="text"
            />
          </div>

          <div className="mt-3">
            <button
              className={
                "bg-gradient-to-bl from-[#593de6] via-[#392d82] to-[#593de6]  hover:bg-gradient-to-bl hover:from-[#221a4c] hover:via-[#593de6] hover:to-[#221a4c] transition-all duration-300 ease-in-out  flex flex-row  mx-auto py-[10px] px-5 rounded-full items-center justify-center cursor-pointer text-white mt-auto"
              }
              onClick={doSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptchaTest;
