import { FAQItem } from './faqData';

export const networkIntegrations: FAQItem[] = [
  {
    question: 'What is the Arbitrum L2 Solution?',
    answer: `Arbitrum is a Layer 2 (L2) scaling solution designed to improve the scalability and efficiency of Ethereum. Specifically, it is an Optimistic roll-up built on top of the Ethereum blockchain, relying on Ethereum for security and consensus. Although it functions like an independent network for users interacting with it, Arbitrum is not a standalone Layer 1 (L1) blockchain. 

SkyLink, the Sky system that provides the rails for Sky Ecosystem projects to link assets between the Sky Protocol on Ethereum Mainnet and supported L2 networks, enhances your ability to manage your digital assets efficiently by seamlessly connecting your Ethereum L1-based Sky Protocol tokens and features to Arbitrum. If you have shied away from the Ethereum blockchain due to the high price of gas, SkyLink introduces reduced fees and faster transaction speeds.`,
    categories: ['Network Integrations']
  },
  {
    question: 'What is the Base L2 Solution?',
    answer: `Base is a Coinbase-developed Layer 2 (L2) network that provides easy access to some L1 networks, including Ethereum, Solana, and other L2s. 

SkyLink, the Sky system that provides the rails for Sky Ecosystem projects to link assets between the Sky Protocol on Ethereum Mainnet and supported L2 networks, seamlessly connects your Ethereum L1-based Sky Protocol tokens and features to the Base network. If you have shied away from the Ethereum blockchain due to the high price of gas, SkyLink introduces reduced fees and faster transaction speeds.`,
    categories: ['Network Integrations']
  },
  {
    question: 'What is the Optimism L2 Solution?',
    answer: `Optimism is a Layer 2 (L2) scaling solution designed to improve the scalability and efficiency of Ethereum. Specifically, it uses optimistic rollups, which enable transactions to be processed offchain and then submitted to Ethereum in a compressed form to complete transactions more quickly and at a lower cost than on Ethereum Mainnet.
  
  SkyLink, the Sky system that provides the rails for Sky Ecosystem projects to link assets between the Sky Protocol on Ethereum Mainnet and supported L2 networks, enhances your ability to manage your digital assets efficiently by seamlessly connecting your Ethereum L1-based Sky Protocol tokens and features to L2s. If you have shied away from the Ethereum blockchain due to the high price of gas, SkyLink introduces reduced fees and faster transaction speeds.`,
    categories: ['Network Integrations']
  },
  {
    question: 'What is the Unichain L2 Solution?',
    answer: `Unichain is a Layer 2 (L2) scaling solution designed by Uniswap Labs to improve the scalability and efficiency of Ethereum. Specifically designed to optimize DeFi applications, it uses optimistic rollups, which enable transactions to be processed off-chain and then submitted to Ethereum in a compressed form to complete transactions more quickly and at a lower cost than on Ethereum Mainnet.
    
    SkyLink, the Sky system that provides the rails for Sky Ecosystem projects to link assets between the Sky Protocol on Ethereum Mainnet and supported L2 networks, enhances your ability to manage your digital assets efficiently by seamlessly connecting your Ethereum L1-based Sky Protocol tokens and features to L2s. If you have shied away from the Ethereum blockchain due to the high price of gas, SkyLink introduces reduced fees and faster transaction speeds. 
    `,
    categories: ['Network Integrations']
  },
  {
    question: 'Which Sky tokens can I trade on Supported L2s using the Sky.money web app?',
    answer: `Currently, using the [Sky.money web app](https://app.sky.money/), you can interact with the Peg Stability Module (PSM) for conversions to/from USDS, sUSDS and USDC. The PSM on supported L2s handles conversions programmatically, driven at your direction, between these pairs directly. You can also access the Sky Savings Rate on some supported L2s.

PSMs are smart contracts that allow users to convert certain stablecoins directly with the Sky Protocol for USDS or DAI at a fixed rate and with relatively low fees; however, blockchain (gas) fees may apply. They are designed to maintain the stability of USDS and DAI. Unlike decentralized exchange (DEX) transactions, PSM operations do not involve trading between users. Instead, they are direct, non-custodial conversions (generate and burn) executed with the decentralized smart contracts of the Sky Protocol.`,
    categories: ['Network Integrations']
  },
  {
    question: 'Which native Sky tokens can I trade on supported L2s?',
    answer: 'Currently, USDS and sUSDS are available to trade on Arbitrum.',
    categories: ['Network Integrations']
  },
  {
    question: 'How does trading on supported L2s differ from trading on Ethereum?',
    answer: `On Ethereum mainnet, the [Sky.money web app](https://app.sky.money/) features a native integration of [CoW Swap](https://swap.cow.fi), a third-party decentralized exchange (DEX) aggregator. Please see the [Terms of Use](https://docs.sky.money/terms-of-use) for more information on third-party services. On supported L2s, converting between tokens is made possible through a Peg Stability Module (PSM) deployed to the L2 and powered by [Spark](https://docs.spark.fi/dev/savings/spark-psm). 

PSMs are smart contracts that allow users to convert certain stablecoins directly with the Sky Protocol for USDS or DAI at a fixed rate and with relatively low fees; however, blockchain (gas) fees may apply. They are designed to maintain the stability of USDS and DAI. Unlike decentralized exchange (DEX) transactions, PSM operations do not involve trading between users. Instead, they are direct, non-custodial conversions (generate and burn) executed with the decentralized smart contracts of the Sky Protocol.`,
    categories: ['Network Integrations']
  },
  {
    question:
      "Why do I see activity in my Trade transaction history in the Sky.money web app if I've never used the Trade feature?",
    answer: `If you've accessed the Sky Savings Rate on a supported L2, a conversion from USDS or USDC to sUSDS would have been automatically triggered via the Peg Stability Module (PSM). Therefore, you will see such activity in your Trade transaction history in the [Sky.money web app](https://app.sky.money/), despite not having traded.  

PSMs are smart contracts that allow users to convert certain stablecoins directly with the Sky Protocol for USDS or DAI at a fixed rate and with relatively low fees; however, blockchain (gas) fees may apply. They are designed to maintain the stability of USDS and DAI. Unlike decentralized exchange (DEX) transactions, PSM operations do not involve trading between users. Instead, they are direct, non-custodial conversions (generate and burn) executed with the decentralized smart contracts of the Sky Protocol.`,
    categories: ['Network Integrations']
  },
  {
    question: 'Which tokens can I supply to and withdraw from the Savings Rate Module on supported L2s?',
    answer: `There is no native Sky Savings Rate module deployed to supported L2s. On supported L2s, both USDS and USDC are currently supported. This is made possible through a Peg Stability Module (PSM) deployed to supported L2s and [powered by Spark](https://docs.spark.fi/dev/savings/cross-chain-savings-rate-oracle). 

PSMs are smart contracts that allow users to convert certain stablecoins directly with the Sky Protocol for USDS or DAI at a fixed rate and with relatively low fees; however, blockchain (gas) fees may apply. They are designed to maintain the stability of USDS and DAI. Unlike decentralized exchange (DEX) transactions, PSM operations do not involve trading between users. Instead, they are direct, non-custodial conversions (generate and burn) executed with the decentralized smart contracts of the Sky Protocol.`,
    categories: ['Network Integrations']
  },
  {
    question: 'Is the Savings feature experience on supported L2s the same as on Ethereum Mainnet?',
    answer: `As an end-user of the [Sky.money web app](https://app.sky.money/), the experience of using the Savings feature on supported L2s and Ethereum is very similar. However, given that no native Sky Savings Rate module is deployed to supported L2s, when using the Sky.money web app on a supported L2 you always interact with the Peg Stability Module (PSM) for conversions to/from sUSDS, USDS, and USDC.

PSMs are smart contracts that allow users to convert certain stablecoins directly with the Sky Protocol for USDS or DAI at a fixed rate and with relatively low fees; however, blockchain (gas) fees may apply. They are designed to maintain the stability of USDS and DAI. Unlike decentralized exchange (DEX) transactions, PSM operations do not involve trading between users. Instead, they are direct, non-custodial conversions (generate and burn) executed with the decentralized smart contracts of the Sky Protocol.

SkyLink, the Sky system that provides the rails for Sky Ecosystem projects to link assets between the Sky Protocol on Ethereum Mainnet and supported L2 networks, seamlessly connects your Ethereum L1-based Sky Protocol tokens and features to supported L2s. If you have shied away from the Ethereum blockchain due to the high price of gas, SkyLink introduces reduced fees and faster transaction speeds.`,
    categories: ['Network Integrations']
  },
  {
    question: 'Is the Sky Savings Rate percentage the same on Ethereum Mainnet and supported L2s?',
    answer: `Yes, the Sky Savings Rate percentage on supported L2s tracks the rate on Ethereum Mainnet. This is done programmatically in the Peg Stability Module (PSM) deployed on supported L2s. 

PSMs are smart contracts that allow users to convert certain stablecoins directly with the Sky Protocol for USDS or DAI at a fixed rate and with relatively low fees; however, blockchain (gas) fees may apply. They are designed to maintain the stability of USDS and DAI. Unlike decentralized exchange (DEX) transactions, PSM operations do not involve trading between users. Instead, they are direct, non-custodial conversions (generate and burn) executed with the decentralized smart contracts of the Sky Protocol.`,
    categories: ['Network Integrations']
  }
];
