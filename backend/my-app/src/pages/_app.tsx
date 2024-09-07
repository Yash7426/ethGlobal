import { AppProps } from 'next/app';
import { ThirdwebProvider, ChainId,metamaskWallet,coinbaseWallet,walletConnect, embeddedWallet } from '@thirdweb-dev/react';

// Define the active chain you want to use (Mainnet, Rinkeby, etc.)
const activeChainId = ChainId.Sepolia;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
    supportedWallets={[
      metamaskWallet({
        recommended: true
      }),
      coinbaseWallet(),
      walletConnect(),
      embeddedWallet()
    ]}
     clientId={'4010cb5b16705c5a764ad237d5f0eb30'} activeChain={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
// id : 4010cb5b16705c5a764ad237d5f0eb30
// secret key : h1c1NTZbHazoavWDpYR9tD2b9IcdbQvYevg7IaicMypXIb8m6KQxQhK_sLan8pg0Fg45TgvsWcFrUBDqHC2r6A