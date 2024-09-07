import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";
import { WhitelistMananger__factory ,WhitelistMananger} from "../typechain-types";

task(`setassert`, `sets the allowed asserted people`)
.addParam(`address`, `address to be allowed as asserter`)
.setAction(async(taskArguments: TaskArguments , hre : HardhatRuntimeEnvironment) => {
    const [signer] = await hre.ethers.getSigners();
    console.log(signer.address);
    const WhitelistHook : WhitelistMananger  = WhitelistMananger__factory.connect('0x69828CBee760122A18B24D31EC891ea511df1867',signer);
    const address = taskArguments.address ? taskArguments.address : '';
    const tx = await WhitelistHook.setWhitelist(address,true);
    await tx.wait();
    console.log(tx);
})