import { FAQItem } from './faqData';

export const networkIntegrations: FAQItem[] = [
  {
    question: 'On what chains can I access USDS and other Sky Protocol tokens?',
    answer: `USDS is available on the Solana blockchain, the Base network, Arbitrum, Optimism and Unichain.
On Solana, only USDS is available. On supported L2 networks, you can trade between USDS, sUSDS and USDC, and access the Sky Savings Rate. 
SkyLink is the Sky system that provides the rails for Sky Ecosystem projects to link assets between the Sky Protocol on Ethereum Mainnet and supported L2 networks.`,
    categories: ['Network Integrations']
  },
  {
    question: 'What is SkyLink and how does it work?',
    answer: `SkyLink is the Sky system that provides the rails for Sky Ecosystem projects, such as [Spark](https://spark.fi/), to link assets between the Sky Protocol on Ethereum Mainnet and supported L2 networks. This enables end users on L2s, such as Base, Arbitrum, Optimism and Unichain, to tap into Sky Protocol features via the Sky Ecosystem projects' rails. 

If you have shied away from the Ethereum blockchain due to the high price of gas, SkyLink introduces reduced fees and faster transaction speeds.`,
    categories: ['Network Integrations']
  },
  {
    question: 'What are Layer 2 networks, and how do they benefit users?',
    answer: `Layer 2 (L2) networks are blockchain scalability solutions built on top of existing blockchains (Layer 1 or L1 networks). While L2s exist across several blockchains, they are most commonly used with the Ethereum blockchain, where they are designed to solve two major problems: high transaction (gas) fees and slow transaction speeds, which can hinder scalability.

L2 solutions usually work by processing transactions on their own blockchain, and then bundling those transactions and submitting them back to the underlying L1 as a single transaction for final validation, which drastically increases the throughput. 

Moving assets between L1 and L2 networks requires specialized protocols called bridges. While bridges can be designed to connect any two blockchain networks, L2 networks operate on top of L1s, inheriting their security, while delivering improved efficiency. 

L2s used with Ethereum not only offer users much lower fees and much faster speeds (transactions can be near-instant), they can enable users to transact using the wallets and tools they are already familiar with. There is a tradeoff, however, as users bridging their assets between L1 and L2 networks generally must pay a transaction fee. For users making multiple transactions, the savings may outweigh that cost and you must use your own discretion. Also, L1 networks may provide stronger security guarantees compared to L2s, which often rely on centralized components and actors, which could potentially introduce points of failure.`,
    categories: ['Network Integrations']
  },
  {
    question: 'What can I do with my assets once they are linked to an L2 network?',
    answer: `On many L2s, you can perform the same types of transactions as on Ethereum Mainnet—i.e., trade tokens, use DeFi applications (dApps), etc.— but with reduced fees and faster transaction speeds. Many popular dApps have L2 versions, though not all are available on every L2. Please note that some features of  the [Sky.money web app](https://app.sky.money/) or the Sky Protocol will not be available on L2s.`,
    categories: ['Network Integrations']
  },
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
    question: 'What are Layer 2 networks, and how do they benefit users?',
    answer: `Layer 2 (L2) networks are blockchain scalability solutions built on top of existing blockchains (Layer 1 or L1 networks). While L2s exist across several blockchains, they are most commonly used with the Ethereum blockchain, where they are designed to solve two major problems: high transaction (gas) fees and slow transaction speeds, which can hinder scalability.

L2 solutions usually work by processing transactions on their own blockchain, and then bundling those transactions and submitting them back to the underlying L1 as a single transaction for final validation, which drastically increases the throughput. 

Moving assets between L1 and L2 networks requires specialized protocols called bridges. While bridges can be designed to connect any two blockchain networks, L2 networks operate on top of L1s, inheriting their security, while delivering improved efficiency. 

L2s used with Ethereum not only offer users much lower fees and much faster speeds (transactions can be near-instant), they can enable users to transact using the wallets and tools they are already familiar with. There is a tradeoff, however, as users bridging their assets between L1 and L2 networks generally must pay a transaction fee. For users making multiple transactions, the savings may outweigh that cost and you must use your own discretion. Also, L1 networks may provide stronger security guarantees compared to L2s, which often rely on centralized components and actors, which could potentially introduce points of failure.`,
    categories: ['Network Integrations']
  },
  {
    question: 'What can I do with my assets once they are linked to a supported L2 network?',
    answer:
      'On many supported Layer 2 (L2) networks, you can perform the same types of transactions as on Ethereum Mainnet—i.e., trade tokens, use DeFi applications (dApps), etc.— but with reduced fees and faster transaction speeds. Many popular dApps have L2 versions, though not all are available on every L2. Please note that some features of Sky.money or the Sky Protocol are not available on L2s.',
    categories: ['Network Integrations']
  },
  {
    question: 'Which native Sky tokens can I trade on supported L2s?',
    answer:
      'USDS and sUSDS are available to trade on supported Layer 2 (L2) networks using the Sky.money web app.',
    categories: ['Network Integrations']
  },
  {
    question: 'Which tokens can I trade on supported L2s?',
    answer: `Using the Sky.money web app, you can interact with the Peg Stability Module [(PSM)](#tooltip-psm) for conversions to/from USDS, sUSDS and USDC. The PSM handles conversions programmatically, driven at your direction, between these pairs directly. 

On some supported L2s, you can also access the Sky Savings Rate.

SkyLink is the Sky system that provides the rails for Sky Ecosystem projects to link assets between the Sky Protocol on Ethereum Mainnet and supported L2 networks. If you have shied away from the Ethereum blockchain due to the high price of gas, SkyLink introduces reduced fees and faster transaction speeds.
`,
    categories: ['Network Integrations']
  },
  {
    question: 'How does trading on supported L2s differ from trading on Ethereum?',
    answer: `On Ethereum mainnet, the Sky.money web app features a native integration of [CoW Swap](https://swap.cow.fi/#/1/swap/WETH), a third-party decentralized exchange (DEX) aggregator. On supported L2s, converting between tokens is made possible through a Peg Stability Module [(PSM)](#tooltip-psm). Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.`,
    categories: ['Network Integrations']
  },
  {
    question:
      "Why do I see activity in my Trade transaction history in the Sky.money web app if I've never used the Trade feature?",
    answer: `If you've accessed the Sky Savings Rate on a supported Layer 2 (L2) network, a conversion from USDS or USDC to sUSDS would have been automatically triggered via the Peg Stability Module [(PSM)](#tooltip-psm). Therefore, you will see such activity in your Trade transaction history, despite not having traded.`,
    categories: ['Network Integrations']
  },
  {
    question: 'Which tokens can I supply to and withdraw from the Savings Rate Module on supported L2s?',
    answer: `Some features of Sky.money or the Sky Protocol are not available on supported Layer 2 (L2) solutions. There is no native Sky Savings Rate module deployed to supported L2s, for example. However, on some L2s, both USDS and USDC token support is made possible through a Peg Stability Module [(PSM)](#tooltip-psm) deployed to those L2s.`,
    categories: ['Network Integrations']
  },
  {
    question: 'Is the Savings feature experience on L2s the same as on Ethereum Mainnet?',
    answer: `Some features of Sky.money or the Sky Protocol are not available on supported Layer 2 (L2) solutions. There is no native Sky Savings Rate module deployed to supported L2s, for example. However, on some L2s, both USDS and USDC token support is made possible through a Peg Stability Module [(PSM)](#tooltip-psm) deployed to those L2s. In those cases, the experience of using the Savings feature on supported Layer 2 (L2) networks and Ethereum is very similar.`,
    categories: ['Network Integrations']
  },
  {
    question: 'Is the Sky Savings Rate percentage the same on Ethereum Mainnet and supported L2s?',
    answer: `Yes, the Sky Savings Rate percentage noted on supported Layer 2 (L2) solutions tracks the rate on Ethereum Mainnet. This is done programmatically in the Peg Stability Module [(PSM)](#tooltip-psm) where deployed on supported L2s.`,
    categories: ['Network Integrations']
  }
];
