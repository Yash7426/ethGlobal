"use client";
import QRCode from "react-qr-code";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/Modal";

interface ModalProps3 {
  displayText?: string;
  heading?: string;
  subheading?: string;
  title?: string;
  buttonText?: string;
  value:string;
  api?: string;
  callback?: () => void;
}

const QRCODE: React.FC<ModalProps3> = ({
  displayText,
  heading,
  subheading,
  title,
  api,
  value,
  buttonText,
  callback,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data,setData] = useState({requesturl: "",statusurl : ""});


  const fetchRequestUrl = async () => {
    console.log(value + "hello");
  
    fetch('/api/reclaim',
    {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify({
        sessionId: "0x146167bc053D356f7A26AA39d45207fd4658BaFa", // add the cluster id
        addressUser: "0x9217aBD6cD0a54ef915944Ff4bE80A6915EE9086", // add the wallet address
        messageUser: "Please sign this", // add the item being calculated
        provider : value.toLowerCase() //company to perform task
      })
    }).then(async (response) => {
      const data = await  response.json();
      setData({requesturl : data[0], statusurl : data[1]});
      // await fetchData(data[1],value.toLowerCase())
    }).catch (async (error) => {
      const data = await  error;
      console.error('Error fetching data:',  data);
    });
};


  useEffect(()=>{
    if(isOpen){
      fetchRequestUrl();
    }
  },[isOpen])
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
                value={data.requesturl}
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
