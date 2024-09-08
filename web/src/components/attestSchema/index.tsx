"use client";
import React, { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
  // @ts-ignore
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

interface ModalProps {
  displayText?: string;
  heading?: string;
  subheading?: string;
  title?: string;
  buttonText?: string;
  callback?: () => void;
}

const DynamicFields: React.FC<ModalProps> = ({
  displayText,
  heading,
  subheading,
  title,
  buttonText,
  callback,
}) => {
  const [fields, setFields] = useState([{ name: "", type: "" }]);

  // Handler for adding new fields
  const addField = () => {
    setFields([...fields, { name: "", type: "" }]);
  };

  // Handler for removing a field
  const removeField = (index: number) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  // Handler for updating field values
  const handleInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const newFields = [...fields];
    // @ts-ignore
    newFields[index][name] = value;
    setFields(newFields);
  };

  const handleSubmit = () => {
    // do your stuff
    console.log(fields)
  };

  const resetForm = () => {
    setFields([{ name: "", type: "" }]);
  };

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
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4 text-gray-100">Generate Schema</h2>

              {/* Render dynamic fields */}
              {fields.map((field, index) => (
                <div key={index} className="flex items-center space-x-4 mb-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={field.name}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  <Input
                    type="text"
                    name="type"
                    placeholder="Enter Type"
                    value={field.type}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                  <button
                    onClick={() => removeField(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                onClick={addField}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Add Field
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
              
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

export default DynamicFields;
