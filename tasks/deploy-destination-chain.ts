import { task } from "hardhat/config";
import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path';
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";
import { CrossChainNameServiceLookup, CrossChainNameServiceLookup__factory, CrossChainNameServiceReceiver, CrossChainNameServiceReceiver__factory, CrossChainNameServiceRegister, CrossChainNameServiceRegister__factory} from "../typechain-types";
import { __deploymentsPath, getDeploymentInfo, getRouterConfig } from "./utils";
import { Spinner } from '../utils/spinner'

task(`deploy-destination-chain-step1`, `Sets up the Cross Chain Name Service on the destination network by deploying Lookup and Receiver smart contracts and linking them`)
    .addOptionalParam(`register`, `CrossChainNameServiceRegister smart contract address`)
    .addOptionalParam(`sourcechainselector`, `Source Chain Selector`)
    .addOptionalParam(`router`, `The address of the Chainlink CCIP Router contract on the destination blockchain`)
    .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {

        if (hre.network.name === hre.config.defaultNetwork) {
            console.error(`❌ CrossChainNameServiceReceiver can not be deployed on the source chain. Source chain - ${hre.config.defaultNetwork}`);
            return 1;
        }

        const ccnsRegisterAddress = taskArguments.register ? taskArguments.register : getDeploymentInfo(hre.config.defaultNetwork).ccnsRegister;

        if (!ccnsRegisterAddress) {
            console.error(`❌ CrossChainNameServiceRegister address is undefined. Did you run the "npx hardhat deploy-source-chain" command? Was the "${join(__deploymentsPath, `${hre.config.defaultNetwork}.json`)}" file generated? Try to provide the address of a CrossChainNameServiceRegister smart contract via --register flag.`);
            return 1;
        }

        const spinner: Spinner = new Spinner();
        const [deployer] = await hre.ethers.getSigners();

        console.log(`ℹ️  Attempting to deploy CrossChainNameServiceLookup on the ${hre.network.name} blockchain using ${deployer.address} address`);
        spinner.start();

        // const ccnsLookupFactory: Lookup__factory = await hre.ethers.getContractFactory('Lookup');
        // const ccnsLookup: Lookup = await ccnsLookupFactory.deploy();
        // await ccnsLookup.deployed();
        const ccnsLookupFactory: CrossChainNameServiceLookup__factory = await hre.ethers.getContractFactory('CrossChainNameServiceLookup');
        const ccnsLookup: CrossChainNameServiceLookup = await ccnsLookupFactory.deploy();
        await ccnsLookup.deployed();

        spinner.stop();
        console.log(`✅ CrossChainNameServiceLookup deployed at address ${ccnsLookup.address} on ${hre.network.name} blockchain`);


        console.log(`ℹ️  Attempting to deploy CrossChainNameServiceReceiver on the ${hre.network.name} blockchain`);

        const routerAddress = taskArguments.router ? taskArguments.router : getRouterConfig(hre.network.name).address;
        const sourceChainSelector = taskArguments.sourcechainselector ? taskArguments.sourcechainselector : getRouterConfig(hre.config.defaultNetwork).chainSelector;
        const ccnsReceiverFactory: CrossChainNameServiceReceiver__factory = await hre.ethers.getContractFactory('Receiver');
        const ccnsReceiver: CrossChainNameServiceReceiver = await ccnsReceiverFactory.deploy(routerAddress, ccnsLookup.address, sourceChainSelector);
        await ccnsReceiver.deployed();

        console.log(`✅ CrossChainNameServiceReceiver deployed at address ${ccnsReceiver.address} on ${hre.network.name} blockchain`);

        const filePath = join(__deploymentsPath, `${hre.network.name}.json`);
        !existsSync(__deploymentsPath) && mkdirSync(__deploymentsPath);

        try {
            const data = {
                "network": hre.network.name,
                "ccnsReceiver": ccnsReceiver.address,
                "ccnsLookup": ccnsLookup.address
            };

            writeFileSync(filePath, JSON.stringify(data));
        } catch (error) {
            console.log(`ℹ️  Saving the CrossChainNameReceiver address to ${filePath} file failed, please save it manually from previous log, you will need it for further tasks`);
            console.error(`Error: ${error}`);
        }
//  const ccnsLookup: Lookup = Lookup__factory.connect('0x063714A6b84b4dCa24573547CB0CD13F78887db6', deployer);
//   const ccnsReceiver: Receiver = Receiver__factory.connect('0x72A4C1D977e638c8648898406C585F81c6a93224',deployer);
        console.log(`ℹ️  Attempting to call the setCrossChainNameServiceAddress function on the CrossChainNameServiceLookup smart contract`);
        spinner.start();

        try{
        const tx = await ccnsLookup.setCrossChainNameServiceAddress(ccnsReceiver.address);
        await tx.wait();

        spinner.stop();
        console.log(`✅ CCNS Address set, transaction hash: ${tx.hash}`); 
        } catch(e) {
            console.log(e)
        }
        

        console.log(`✅ Task deploy-destination-chain-step1 finished with the execution`);
    })


task(`deploy-destination-chain-step2`, `Enables previously depolyed CrossChainNameServiceReceiver contract on the source chain`)
    .addParam(`receiverNetwork`, `The network you used in the deploy-destination-chain-step1 command`)
    .addOptionalParam(`register`, `CrossChainNameServiceRegister smart contract address`)
    .addOptionalParam(`receiver`, `CrossChainNameServiceReceiver smart contract address`)
    .addOptionalParam(`destinationchainselector`, `Destination Chain Selector`)
    .setAction(async (taskArguments: TaskArguments, hre: HardhatRuntimeEnvironment) => {
        if (hre.network.name !== hre.config.defaultNetwork) {
            console.error(`❌ Task two must be executed on the source chain. Source chain - ${hre.config.defaultNetwork}`);
            return 1;
        }

        const ccnsRegisterAddress = taskArguments.register ? taskArguments.register : getDeploymentInfo(hre.config.defaultNetwork).ccnsRegister;

        if (!ccnsRegisterAddress) {
            console.error(`❌ CrossChainNameServiceRegister address is undefined. Did you run the "npx hardhat deploy-source-chain" command? Was the "${join(__deploymentsPath, `${hre.config.defaultNetwork}.json`)}" file generated? Try to provide the address of a CrossChainNameServiceRegister smart contract via --register flag.`);
            return 1;
        }

        const [deployer] = await hre.ethers.getSigners()

        const destinationChainSelector = taskArguments.destinationchainselector ? taskArguments.destinationchainselector : getRouterConfig(taskArguments.receiverNetwork).chainSelector;
        const ccnsReceiverAddress = taskArguments.receiver ? taskArguments.receiver : getDeploymentInfo(taskArguments.receiverNetwork).ccnsReceiver;

        const ccnsRegister: CrossChainNameServiceRegister = CrossChainNameServiceRegister__factory.connect(ccnsRegisterAddress, deployer);

        const spinner: Spinner = new Spinner();

        console.log(`ℹ️  Attempting to call the enableChain function on the CrossChainNameServiceRegister smart contract on the ${hre.network.name} blockchain`);
        spinner.start();
        
        console.log(destinationChainSelector)
        const tx = await ccnsRegister.enableChain(destinationChainSelector, ccnsReceiverAddress, 200000);
        await tx.wait();

        spinner.stop();
        console.log(`✅ New Chain enabled, transaction hash: ${tx.hash}`);

        console.log(`✅ Task deploy-destination-chain-step2 finished with the execution`);
    })