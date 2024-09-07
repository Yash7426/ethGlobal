import { ethers } from "hardhat";

async function main() {

  const parent = await ethers.deployContract("WhitelistMananger")

  await parent.waitForDeployment();

  const lock = await ethers.deployContract("WhitelistHook")

  await lock.waitForDeployment();
  const address1 = await lock.getAddress();
  const address2 = await parent.getAddress();
  console.log(
    address1 + ' '+ address2
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// parent = 0x69828CBee760122A18B24D31EC891ea511df1867
// child = 0x833F492bc634853D3d8d3a80960EDf44856E30f8