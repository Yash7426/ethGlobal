import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";
import {/* CrossChainNameServiceLookup, CrossChainNameServiceLookup__factory,*/ Lookup, Lookup__factory} from "../typechain-types";
import { __deploymentsPath, getDeploymentInfo } from "./utils";


task(`ccns-lookup`, `Register new .ccns name`)
    .addParam(`ccnsName`, `CCNS Name you want to register, it must ends with .ccns`)
    .addOptionalParam(`lookup`, `CrossChainNameServiceLookup smart contract address`)
    .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {

        const ccnsLookupAddress = taskArguments.lookup ? taskArguments.lookup : getDeploymentInfo(hre.network.name).ccnsLookup;

        if (!ccnsLookupAddress) {
            console.error(`❌ CrossChainNameServiceLookup address is undefined. Try to provide the address of a CrossChainNameServiceLookup smart contract via --lookup flag.`);
            return 1;
        }
        console.log(hre.network.name)
        const ccnsLookup: Lookup = Lookup__factory.connect('0x4b6685858179c62b10B1c522803ab9aDC7547EDB', hre.ethers.provider);
        console.log(ccnsLookup.address)
        const address = await ccnsLookup.lookup(taskArguments.ccnsName);
        
        console.log(`ℹ️  ${taskArguments.ccnsName} resolved with ${address}`);
    })