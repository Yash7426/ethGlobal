import { SignProtocolClient, SpMode, EvmChains } from "@ethsign/sp-sdk";
import { privateKeyToAccount } from "viem/accounts";
import React, { useState } from "react";
import { WhitelistHook__factory, WhitelistHook, WhitelistMananger__factory } from "../../../typechain-types";
import { useSigner } from "@thirdweb-dev/react";
// Define props for the Attestation component
interface AttestationProps {
  address: string; // Expecting the Ethereum address as a prop
}
const Attestation: React.FC<AttestationProps> = ({address}) => {
  const sign = useSigner();
const client = new SignProtocolClient(SpMode.OnChain, {
  chain: EvmChains.sepolia,
});
const [attestationResult, setAttestationResult] = useState<string | null>(null);
const [schemaResult, setschemaresult] = useState<string | null>(null);
async function createNotaryAttestation(name: string, message: string,signer:string) {
     client.createAttestation({
      schemaId: "0x11f",
      data: {
        name,
        message
      },
      indexingValue: signer.toLowerCase()
    }).then((res) => {
      setAttestationResult(res.attestationId);
      setschemaresult(res.txHash ? res.txHash : "hello");
    }).catch((e) => {
      console.log(e)
      setschemaresult("You are not valid attester");
    });
   
}
    return (
      <div>
      <h1>Attestation Result:</h1>
      <button onClick={() => createNotaryAttestation("Alice", "This is a message", address)}>
        Create Attestation
      </button>
      <pre>{attestationResult ? `${attestationResult}&&${schemaResult}` : "No attestation created yet."}</pre>
    </div>
    )
  };

export default Attestation;
