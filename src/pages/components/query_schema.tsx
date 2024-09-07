import { SignProtocolClient, SpMode, EvmChains } from "@ethsign/sp-sdk";
import { privateKeyToAccount } from "viem/accounts";
import React, { useState } from "react";
import { WhitelistHook__factory, WhitelistHook, WhitelistMananger__factory } from "../../../typechain-types";
import { useSigner } from "@thirdweb-dev/react";
// Define props for the Attestation component
interface AttestationProps {
  address: string; // Expecting the Ethereum address as a prop
}
const Schema: React.FC<AttestationProps> = ({address}) => {
  const sign = useSigner();
const client = new SignProtocolClient(SpMode.OnChain, {
  chain: EvmChains.sepolia,
//   account: privateKeyToAccount('0xc783ed09791ee97373e28be71c03a2710ecd8e242f31ddf9e0cc110a0a3de81c'), // Optional, depending on environment
});
const [attestationResult, setAttestationResult] = useState<string | null>(null);
const [schemaResult, setschemaresult] = useState<string | null>(null);
async function createSchema() {
  try{
  const res = await client.createSchema({
    name: "SDK Test",
    data: [
      { name: "contractDetails", type: "string" },
      { name: "signer", type: "address" },
    ],
    hook : "0x442B7f3595eE078D79bcbdE21A9Bb191f4010De5",
    // registrant :  address? `0x${address.slice(2)}` : "0x442B7f3595eE078D79bcbdE21A9Bb191f4010De5"
  })
  setAttestationResult(res.schemaId)
  console.log(res.schemaId);
} catch(e) {
    console.log(e);
}
}
    return (
      <div>
      <h1>Attestation Result:</h1>
      <button onClick={() => createSchema()}>
        Create Schema
        </button>
      <pre>{attestationResult ? `Schema created` : "No Schema created yet."}</pre>
    </div>
    )
  };

export default Schema;