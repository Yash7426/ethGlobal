import { SignProtocolClient, SpMode, EvmChains, IndexService } from "@ethsign/sp-sdk";
import { privateKeyToAccount } from "viem/accounts";
import React, { useState } from "react";
import { WhitelistHook__factory, WhitelistHook, WhitelistMananger__factory } from "../../../typechain-types";
import { useSigner } from "@thirdweb-dev/react";
import { PageInfo, SchemaInfo } from "@ethsign/sp-sdk/dist/types/indexService";

interface AttestationProps {
  address: string;
}
interface ErrorResponse{
    err : string
}

const QueryAttestation: React.FC<AttestationProps> = ({address}) => {
    const indexService = new IndexService("testnet");
    var [attester, setAttester] = useState<boolean>(false);
    const sign = useSigner();
    async function queryAddress():Promise<(PageInfo & { rows: SchemaInfo[]; }) | ErrorResponse | null> {
        try {
   
          const res = await indexService.querySchemaList({ registrant: address, page: 1 });
          return res;
        } catch (error) {
          console.error(error);
          return { err: "Error Caught" };
        }
      }
    async function querySchema() {
        var schemaArray = await queryAddress();
        if(schemaArray == null) {
            console.log("Value is null");
            return;
        }
        if('err' in schemaArray) {
          console.log(schemaArray.err);
        } else {
            var tot = 0;
            const len = schemaArray.total;
            for(var i = 0; i < len; i++) {
                const numberSet: Set<string> = new Set();
                try{
                var res = await indexService.queryAttestationList({schemaId : schemaArray.rows[i].id, page :1});
                console.log(res);
                if(res == null) continue;
                for(var j = 0; j < res.total; j ++) {
                    numberSet.add(res.rows[j].from);
                }
                if(numberSet.size > 5) tot++;
                }catch(e) {
                    console.log(`Err${i} ` + e);
                }

            }
            if(tot >= 2) return true;
            else return false;
        }

    }
    async function addAttester() {
        const WhitelistHook : WhitelistHook  = WhitelistHook__factory.connect('0x442B7f3595eE078D79bcbdE21A9Bb191f4010De5',sign);
        var attest = await WhitelistHook.whitelist(address);
        if(attest == true) {
            setAttester(true);
            return;
        }
          try{
            const res = await querySchema();
            if(res) {
       
  
        const tx = await WhitelistHook.setWhitelist(address,true);

       await tx.wait();
       console.log(tx);
      console.log(WhitelistHook.whitelist(address));
      setAttester(true);
            }else {
                setAttester(false);
            }
          }catch(e){
            console.log(e);
            setAttester(false);
          }
    }
    return (
      <div>
      <h1>Attestation Result:</h1>
      <button onClick={() => addAttester()}>
        Query Address
      </button>
      <pre>{attester ? `Attester added` : "Not a Attester yet"}</pre>
    </div>
    )
  };

export default QueryAttestation;
