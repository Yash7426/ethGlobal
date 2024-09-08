# 🛡️ **Humanized: Cross-Chain Identity Verification System**

![cover](https://github.com/user-attachments/assets/9946b6d7-279a-4134-ae4f-fc98cea76006)

[Well-crafted document](https://drive.google.com/file/d/1rbG47tGGpYsWcPDiP3e2BgoElbPfcMNg/view?usp=sharing)

Welcome to **Humanized**, a cross-chain identity verification platform that ensures fairness in blockchain airdrops by consolidating multiple blockchain addresses into a single, verifiable identity.

## 🚀 **Introduction**
Humanized is designed to unify blockchain addresses and provide robust human verification mechanisms to combat Sybil attacks, ensuring decentralized integrity and privacy. By combining on-chain and off-chain data, advanced cryptography, and decentralized social validation, it offers a seamless and secure Web3 experience.

## 🛠️ **How Humanized Works**
Humanized uses domain-like names to consolidate blockchain addresses under a single, user-controlled identity. Users complete tasks to earn points, which ensures only genuine human users can participate in activities such as airdrops.

---

## 📝 **Key Protocols**

### 🔐 **Sign Protocol**
1. **Task 1**: Attest the provided schema to prove the user is verified.
2. **Task 2**: Create a schema that can only be attested by verified users, controlled via our custom schema hook.
3. **Task 3**: Get the schema attested by 5 unique users. These users are whitelisted after surpassing a defined number of points, and only they can attest to new schemas.

### 🛡️ **Reclaim Protocol**
1. **Task 1**: Verify Uber ride data using proof of human verification.
2. **Task 2**: Verify Amazon order data using proof of human verification.
3. **Task 3**: Verify Paytm payment data using proof of human verification.

### 🔒 **LIT Protocol**
1. **Task 1**: Connect to the LIT network to check access conditions. If verified as human, decrypt the API key and submit the output.
2. **Task 2**: Sign and combine at least two transactions to produce a unified, verified result.
3. **Task 3**: Broadcast and aggregate account activity scores across LIT nodes to generate a humanized score.

### 🌍 **CCIP Protocol** (Cross-Chain Identity via Self-Defined Domain Names)
The **CCIP Protocol** allows users to create customizable domain names that link all their blockchain addresses into a single identity. This ensures seamless cross-chain interaction, preventing duplicate claims during events like airdrops. It integrates with cross-chain virtual machines (VMs) like Solana, Ethereum, Dase, DNB, and Flow to enhance interoperability across diverse blockchain ecosystems.

---

## 🌉 **Bridging Web2 and Web3**
Humanized serves as a bridge between Web2 and Web3, integrating off-chain and on-chain data while preserving user privacy. Through decentralized human verification and encrypted key management, we provide seamless interactions between traditional platforms and decentralized systems.

---

## 🎯 **Key Features**
- **Privacy & Control**: Encrypted data management ensuring maximum user privacy.
- **Real-World Connections**: Leverage off-chain data to enhance decentralized identities.
- **Robust Verification**: Advanced human and social validation prevent fraudulent activity.
- **Unified Identity**: Simplify cross-chain interactions with a user-defined domain.

---

## 🌟 **Vision and Impact**
Humanized fights Sybil attacks through decentralized identity verification, offering security, seamless cross-chain interoperability, and a user-friendly experience. Our vision is to set a new standard for secure, privacy-respecting decentralized networks in the Web3 ecosystem, promoting fairness and trust across decentralized platforms.

---

## 🔮 **Future Expansion and Applications**

1. **Advanced Airdropping & Cross-Chain NFT Distribution**: Humanized will secure airdrop processes by distributing tokens and NFTs fairly across chains like Ethereum and Solana. Verified identities will prevent multiple claims, and seamless cross-chain transfers will be enabled.
   
2. **3D Biometric Human Verification**: The platform plans to integrate 3D biometric technologies such as facial recognition to add an extra layer of protection against Sybil attacks and fraud, further enhancing user verification.

3. **Decentralized Identity for Web2 Integration**: Humanized’s verified identities could extend to Web2 services, such as e-commerce and gaming, enabling secure and private cross-platform interactions for a variety of use cases.

4. **Reputation-Based Systems & Governance**: Through task-based verification, users can build reputation scores, unlocking exclusive access or participation in secure cross-chain governance, ensuring legitimate voting in DAOs and other decentralized systems.

---

## 💻 **Technology Stack**

- **Web**: Radix UI, Chart.js, Mongoose, Next.js, Tailwind CSS, Three.js, Framer Motion
- **Blockchain**: Chainlink, Oracle, Sign-Global, Solidity, TypeScript, Thirdweb, Ethers.js
- **ML**: Face Recognition, FastAPI, Pandas, Numpy, Pydantic

---

## ⚙️ **Configuration & Installation**

To get started with **Humanized**, make sure you have the necessary dependencies and tools installed:

1. **Next.js**: Install globally using npm:
    ```bash
    npm install -g next
    ```

2. Clone the **Humanized** repository:
    ```bash
    git clone https://github.com/Yash7426/ethGlobal.git
    ```

3. Navigate to the project directory:
    ```bash
    cd ethGlobal/web
    ```

4. Install project dependencies:
    ```bash
    npm install
    ```

5. Create a `.env` file in the root directory and add the following environment variables:

    ```bash
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=
    ```

6. Start the development server:
    ```bash
    npm run dev
    ```

7. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

---

Now you're ready to explore **Humanized** and its features! 🎉
