"use client";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/Modal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import * as ethers from "ethers";
import { LitContracts } from "@lit-protocol/contracts-sdk";
import { LitNetwork, LIT_RPC, LIT_CHAINS } from "@lit-protocol/constants";
import {
  LitNodeClient,
  encryptString,
  LitResourceAbilityRequest,
} from "@lit-protocol/lit-node-client";
import {
  LitAbility,
  LitActionResource,
  LitPKPResource,
  createSiweMessageWithRecaps,
  generateAuthSig,
  LitAccessControlConditionResource,
} from "@lit-protocol/auth-helpers";
import { AuthCallbackParams } from "@lit-protocol/types";
import toast from "react-hot-toast";

// import { getChainInfo, getEnv } from "./utils";
// import { litActionCode } from "./litAction";

interface ModalProps {
  displayText?: string;
  heading?: string;
  subheading?: string;
  title?: string;
  buttonText?: string;
  callback?: () => void;
}

const NormalInput: React.FC<ModalProps> = ({
  displayText,
  heading,
  subheading,
  title,
  buttonText,
  callback,
}) => {
  const [actual, setActual] = useState("");
  const [answer, setAnswer] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(answer);
    if (answer == actual) {
      toast.success("Succesfully Completed task", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          zIndex: 99990,
        },
      });
    } else {
      toast.error("Error Completing task", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          zIndex: 99990,
        },
      });
    }
    // callback();
  };
  const ONE_WEEK_FROM_NOW = new Date(
    Date.now() + 1000 * 60 * 60 * 24 * 7
  ).toISOString();
  const genActionSource = () => {
    return `(async () => {
    const decryptedString = await Lit.Actions.decryptAndCombine({
      accessControlConditions,
      ciphertext,
      dataToEncryptHash,
      authSig: null,
      chain: 'ethereum',
    });

    // Do something with the decrypted string, e.g., log or send to backend
    console.log("Decrypted string:", decryptedString);
    Lit.Actions.setResponse({ response: decryptedString });
  })();`;
  };

  const genProvider = () => {
    return new ethers.providers.JsonRpcProvider(LIT_RPC.CHRONICLE_YELLOWSTONE);
  };

  const genWallet = () => {
    // known private key for testing, replace with your own key
    return new ethers.Wallet(
      "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      genProvider()
    );
  };

  const genAuthSig = async (
    wallet: ethers.Wallet,
    client: LitNodeClient,
    uri: string,
    resources: LitResourceAbilityRequest[]
  ) => {
    let blockHash = await client.getLatestBlockhash();
    const message = await createSiweMessageWithRecaps({
      walletAddress: wallet.address,
      nonce: blockHash,
      litNodeClient: client,
      resources,
      expiration: ONE_WEEK_FROM_NOW,
      uri,
    });
    const authSig = await generateAuthSig({
      signer: wallet,
      toSign: message,
      address: wallet.address,
    });

    return authSig;
  };

  const genSession = async (
    wallet: ethers.Wallet,
    client: LitNodeClient,
    resources: LitResourceAbilityRequest[]
  ) => {
    let sessionSigs = await client.getSessionSigs({
      chain: "ethereum",
      resourceAbilityRequests: resources,
      authNeededCallback: async (params: AuthCallbackParams) => {
        const authSig = await genAuthSig(
          wallet,
          client,
          params.uri,
          params.resourceAbilityRequests ?? []
        );
        return authSig;
      },
    });

    return sessionSigs;
  };
  async function runnetwork() {
    try {
      let client = new LitNodeClient({
        litNetwork: "datil-dev",
        debug: true,
      });

      const wallet = genWallet();
      const chain = "ethereum";

      const accessControlConditions = [
        {
          contractAddress: "",
          standardContractType: "",
          chain,
          method: "eth_getBalance",
          parameters: [":userAddress", "latest"],
          returnValueTest: {
            comparator: ">=",
            value: "0",
          },
        },
      ];

      await client.connect();

      const stringToEncrypt =
        "JohnDoe_0xf27e08E2135867Cc10dC84142c70F0c8556a2C48";

      const { ciphertext, dataToEncryptHash } = await encryptString(
        {
          accessControlConditions,
          dataToEncrypt: stringToEncrypt,
        },
        client
      );

      console.log("cipher text:", ciphertext, "hash:", dataToEncryptHash);

      const accsResourceString =
        await LitAccessControlConditionResource.generateResourceString(
          accessControlConditions as any,
          dataToEncryptHash
        );
      const sessionForDecryption = await genSession(wallet, client, [
        {
          resource: new LitActionResource("*"),
          ability: LitAbility.LitActionExecution,
        },
        {
          resource: new LitAccessControlConditionResource(accsResourceString),
          ability: LitAbility.AccessControlConditionDecryption,
        },
      ]);

      console.log("action source code: ", genActionSource());

      const res = await client.executeJs({
        sessionSigs: sessionForDecryption,
        code: genActionSource(),
        jsParams: {
          accessControlConditions,
          ciphertext,
          dataToEncryptHash,
        },
      });

      console.log("result from action execution:", res);
      if (res.success) {
        setActual(res.response as string);
        toast.success("Generated Decrypted data", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            zIndex: 99990,
          },
        });
      } else {
        toast.error("Error Generating Decrypted data", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            zIndex: 99990,
          },
        });
      }
    } catch (error) {
      toast.error("Error Generating Decrypted data", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          zIndex: 99990,
        },
      });
    }
  }
  useEffect(() => {
    const runNetworkAsync = async () => {
      if (isOpen) {
        await runnetwork();
      }
    };

    runNetworkAsync();
  }, [isOpen]);
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <div
          onClick={() => {
            setIsOpen(true);
          }}
        >
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
            <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
              <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                {heading}
              </h2>
              <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {subheading}
              </p>
              {actual.length > 0 && (
                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  {actual}
                </p>
              )}

              <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="text">{title}</Label>
                  <Input
                    id="text"
                    placeholder="Input here"
                    type="text"
                    value={answer}
                    onChange={(e) => {
                      setAnswer(e.target.value);
                    }}
                  />
                </LabelInputContainer>

                <button
                  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                >
                  {buttonText} &rarr;
                  <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
              </form>
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

export default NormalInput;
