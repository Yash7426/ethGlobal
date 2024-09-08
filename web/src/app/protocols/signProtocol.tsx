import { IndexService, SchemaItem } from "@ethsign/sp-sdk";
import { SignProtocolClient, SpMode, EvmChains } from "@ethsign/sp-sdk";
import { useAddress, useSigner } from "@thirdweb-dev/react";
import { WhitelistHook__factory, WhitelistHook } from "../../whiltelist-types";
import { PageInfo, SchemaInfo } from "@ethsign/sp-sdk/dist/types/indexService";
interface ErrorResponse {
  err: string;
}
const indexService = new IndexService("testnet");

export default class SignProtocol {
  client: SignProtocolClient;
  address = "";
  signer = {};

  constructor(client: SignProtocolClient, address: string, signer: object) {
    this.client = client;
    this.address = address;
    this.signer = signer;
  }
  async schemaCreated(data: SchemaItem[], title: string): Promise<String> {
    try {
      const res = await this.client.createSchema({
        name: title,
        data: data,
        hook: "0x442B7f3595eE078D79bcbdE21A9Bb191f4010De5",
      });

      return res.schemaId;
    } catch (e) {
      return `Error : ${e}`;
    }
  }
  async addAttester(): Promise<String> {
    const WhitelistHook: WhitelistHook = WhitelistHook__factory.connect(
      "0x442B7f3595eE078D79bcbdE21A9Bb191f4010De5",
      this.signer
    );
    // @ts-ignore
    var attest = await WhitelistHook.whitelist(this.address);
    if (attest) return "Already a Attester";
    else {
      const res = await querySchema(this.address);
      if (res == "Unique Attesters for schema") {
        // @ts-ignore
        const tx = await WhitelistHook.setWhitelist(this.address, true);

        await tx.wait();
        console.log(tx);
      }
      return res;
    }
  }
  async createNotaryAttestation(
    name: string,
    message: string,
    schemeId: string
  ): Promise<string> {
    this.client
      .createAttestation({
        schemaId: schemeId,
        data: {
          name,
          message,
        },
        indexingValue: this.address ? this.address?.toLowerCase() : "",
      })
      .then((res) => {
        return res.attestationId;
      })
      .catch((e) => {
        console.log(e);
        return `Error : ${e}`;
      });
    return "Unavoidable error";
  }
}
async function querySchema(address: string | undefined): Promise<String> {
  var schemaArray = await queryAddress(address);
  if (schemaArray == null) {
    return "Value is null";
  }
  if ("err" in schemaArray) {
    return schemaArray.err;
  } else {
    var tot = 0;
    const len = schemaArray.total;
    for (var i = 0; i < len; i++) {
      const numberSet: Set<string> = new Set();
      try {
        var res = await indexService.queryAttestationList({
          schemaId: schemaArray.rows[i].id,
          page: 1,
        });
        console.log(res);
        if (res == null) continue;
        for (var j = 0; j < res.total; j++) {
          numberSet.add(res.rows[j].from);
        }
        if (numberSet.size > 5) tot++;
      } catch (e) {
        console.log(`Err${i} ` + e);
      }
    }
    if (tot >= 2) return "Unique Attesters for schema";
    else return "Not appropriate Attester";
  }
}
async function queryAddress(
  address: string | undefined
): Promise<(PageInfo & { rows: SchemaInfo[] }) | ErrorResponse | null> {
  try {
    const res = await indexService.querySchemaList({
      registrant: address,
      page: 1,
    });
    return res;
  } catch (error) {
    console.error(error);
    return { err: "Error Caught" };
  }
}
