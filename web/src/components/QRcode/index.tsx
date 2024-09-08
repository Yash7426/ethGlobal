"use client";
import QRCode from "react-qr-code";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/Modal";

interface ModalProps2 {
  displayText?: string;
  heading?: string;
  subheading?: string;
  title?: string;
  buttonText?: string;
  value: string;
  callback?: () => void;
}

const QRCODE: React.FC<ModalProps2> = ({
  displayText,
  heading,
  subheading,
  title,
  value,
  buttonText,
  callback,
}) => {
  return (
    <div className="py-40  flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            {displayText}
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <div
              style={{
                height: "auto",
                margin: "0 auto",
                maxWidth: 256,
                width: "100%",
              }}
            >
              <QRCode
                className="m-4"
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={value}
                viewBox={`0 0 256 256`}
              />
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default QRCODE;
