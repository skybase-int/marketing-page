import { FAQItem } from './faqData';

export const skyLink: FAQItem[] = [
  {
    question: 'What is SkyLink, and how does it work?',
    answer: `SkyLink is the official Sky bridge system that enables users to move their Ethereum mainnet-based assets between supported L2 networks. Bridged assets are non-custodially locked in a smart contract of the Sky Protocol, and an equivalent amount of assets is generated on the destination chain.  

If you have shied away from the Ethereum blockchain due to the high price of gas, SkyLink introduces reduced fees and faster transaction speeds.`,
    categories: ['SkyLink']
  },
  {
    question: 'What can I do with my assets once they are bridged to an L2 network?',
    answer: `On many L2s, you can perform the same types of transactions on Ethereum L2s as on Ethereum Mainnet— i.e., trade tokens, use DeFi applications (dApps), buy NFTs, etc.— but with reduced  fees and faster transaction speeds. Many popular dapps have L2 versions, though not all are available on every L2. Please note that some features of Sky.money or the Sky Protocol will not be available on L2s.`,
    categories: ['SkyLink']
  },
  {
    question: 'What are Layer 2 networks, and how do they benefit users?',
    answer: `Layer 2 (L2) networks are blockchain scalability solutions built on top of existing blockchains (Layer 1 or L1 networks). While L2s exist across several blockchains, they are most commonly used with the Ethereum blockchain, where they are designed to solve two major problems: high transaction (gas) fees and slow transaction speeds.

L2 solutions usually work by processing transactions on their own blockchain, and then bundling those transactions and submitting them back to the underlying L1 as a single transaction for final validation, which drastically increases the throughput. 

Moving assets between L1 and L2 networks requires specialised protocols called bridges. While bridges can be designed to connect any two blockchain networks, L2 networks are specifically designed to inherit their security from their L1 while delivering improved efficiency. 

L2s used with Ethereum not only offer users much lower fees (often 95%+ cheaper than Mainnet) and much faster speeds (transactions can be near-instant), they can enable users to transact using the wallets and tools they are already familiar with. There is a tradeoff, however. Users bridging their assets between L1 and L2 networks generally must pay a transaction fee. For users making multiple transactions, the savings may  outweigh that cost. Also, L1 networks may  provide stronger security guarantees compared to L2s, which often rely on centralised components and actors, which could potentially introduce points of failure.
`,
    categories: ['SkyLink']
  },
  {
    question: 'How do USDS and DAI maintain stability to stay reliably close in value to $1?',
    answer: `Special types of smart contracts called Peg Stability Modules (PSMs) are designed to maintain the stability of Sky Protocol stablecoins, USDS and DAI. PSMs allow users to trade certain stablecoins directly with Sky stablecoins at a fixed rate and with relatively low fees. Unlike decentralised exchange (DEX) transactions, PSM trades do not involve trading between users. Instead, they are direct, non-custodial exchanges executed with the decentralised smart contracts of the Sky Protocol . 

Through PSMs, USDS or DAI is obtained via predictable-rate trades (typically a 1:1 ratio with certain stablecoins, or, in the case of sUSDS, for an amount reflecting its current price) rather than through borrowing. For example, given the existence of a USDC-backed PSM, a user could trade 100 USDC stablecoins for 100 USDS or 100 DAI (minus fees), without taking on any debt. Given that PSM trades are facilitated on the Sky Protocol directly and not on a DEX, price slippage (i.e., the difference between the expected price of a token and the actual price when traded) is not a concern. Low (or zero) fees and no slippage are some of the benefits of  PSM trading, which adds liquidity to the assets backing the PSM. That liquidity helps to keep the value of USDS and DAI stable.
`,
    categories: ['SkyLink']
  }
];
