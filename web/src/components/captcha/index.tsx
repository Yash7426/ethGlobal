"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/Modal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import SignProtocol from "@/app/protocols/signProtocol";
import { toast } from "react-hot-toast";
import { EvmChains, SignProtocolClient, SpMode } from "@ethsign/sp-sdk";
import { useAddress, useSigner } from "@thirdweb-dev/react";
import { Signer } from "ethers";

interface ModalProps {
  displayText?: string;
  heading?: string;
  subheading?: string;
  title?: string;
  buttonText?: string;
  callback?: () => void;
}

const client = new SignProtocolClient(SpMode.OnChain, {
  chain: EvmChains.sepolia,
});

const CaptchaTest: React.FC<ModalProps> = ({
  displayText,
  heading,
  subheading,
  title,
  buttonText,
  callback,
}) => {
  const [userCaptcha, setUserCaptcha] = useState("");
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  // const newUser = new SignProtocol(client,address as string,signer as Signer);

  useEffect(() => {
    if(isOpen)
      loadCaptchaEnginge(6); // Load the captcha engine with 8 characters
  }, [isOpen]);

  async function createNotaryAttestation(
    name: string,
    message: string,
    signer: string
  ): Promise<string> {
    return client
      .createAttestation({
        schemaId: "0x11f",
        data: {
          name,
          message,
        },
        indexingValue: signer.toLowerCase(),
      })
      .then((res) => {
        console.log(res);
        return res.attestationId;
      })
      .catch((e) => {
        console.log(e);
        return "You are not valid attester";
      });
  }

  const handleSubmit = async () => {
    if (validateCaptcha(userCaptcha)) {
      // do your stuff
      const res = await createNotaryAttestation(name, message, "0x11f");
      console.log(res);
      if (res == "You are not valid attester") {
        toast.error("Error Completing Task", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        console.log("validated");
        toast.success(`Successfully Completed Task : ${res}`, {
          duration: 10,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        loadCaptchaEnginge(6); // Reload the captcha after successful match
        resetForm();
      }
    } else {
      setCaptchaError(true);
    }
    setIsOpen(false);
  };

  const resetForm = () => {
    setUserCaptcha("");
    setName("");
    setMessage("");
    setCaptchaError(false);
  };

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <div onClick={()=>{setIsOpen(true)}}>
          <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
              {displayText}
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              ✈️
            </div>
          </ModalTrigger>
        </div>
        <ModalBody>
          <ModalContent>
            <div className="flex justify-center items-center z-50">
              <div className="w-full max-w-sm">
                <div className="flex flex-col items-center space-y-4">
                  <div className="mt-3">
                    <LoadCanvasTemplate reloadText=" " reloadColor="#593de6" />
                  </div>

                  <div className="mt-3 w-full">
                    <Input
                      name="name"
                      id="name"
                      placeholder="Enter Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mt-3 w-full">
                    <Input
                      name="message"
                      id="message"
                      placeholder="Enter Message"
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <div className="mt-3 w-full">
                    <Input
                      name="user_captcha_input"
                      id="user_captcha_input"
                      placeholder="Enter Captcha"
                      type="text"
                      value={userCaptcha}
                      onChange={(e) => setUserCaptcha(e.target.value)}
                    />
                  </div>

                  {captchaError && (
                    <div className="text-red-500">Captcha Does Not Match</div>
                  )}

                  <div className="mt-3">
                    <button
                      className={
                        "bg-gradient-to-bl from-[#593de6] via-[#392d82] to-[#593de6]  hover:bg-gradient-to-bl hover:from-[#221a4c] hover:via-[#593de6] hover:to-[#221a4c] transition-all duration-300 ease-in-out  flex flex-row  mx-auto py-[10px] px-5 rounded-full items-center justify-center cursor-pointer text-white mt-auto"
                      }
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default CaptchaTest;
