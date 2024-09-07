import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import './tasks';
/*
PRIVATE_KEY="c783ed09791ee97373e28be71c03a2710ecd8e242f31ddf9e0cc110a0a3de81c"
ETHEREUM_SEPOLIA_RPC_URL="https://eth-sepolia.g.alchemy.com/v2/Gc_VlMr5WTe57ynQps7sKYAEFoqIqxfY"
 */

const config: HardhatUserConfig = {
  solidity: "0.8.26",
  defaultNetwork: 'ethereumSepolia', // Source Chain
  networks: {
    hardhat: {
      chainId: 31337
    },
    ethereumSepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Gc_VlMr5WTe57ynQps7sKYAEFoqIqxfY',
      accounts: ['c783ed09791ee97373e28be71c03a2710ecd8e242f31ddf9e0cc110a0a3de81c'] ,
      chainId: 11155111
    },
  }
};

export default config;
