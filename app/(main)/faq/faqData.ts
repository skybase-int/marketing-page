import { cryptoGeneral } from './faqCryptoGeneral';
import { skyEcosystem } from './faqSkyEcosystem';
import { skyTokens } from './faqSkyTokens';
import { upgradeTrade } from './faqUpgradeAndTrade';
import { skySavingsRate } from './faqSkySavingsRate';
import { skyTokenRewards } from './faqSkyTokenRewards';

type Category =
  | 'All FAQs'
  | 'Seal Engine'
  | 'Crypto (General)'
  | 'Sky Protocol & Ecosystem'
  | 'Sky Tokens'
  | 'Upgrade & Trade'
  | 'Sky Savings Rate'
  | 'Sky Token Rewards'
  | 'SkyLink';

export type FAQItem = {
  question: string;
  answer: string;
  categories: Category[];
};

const seal: FAQItem[] = [
  {
    question: 'What are Seal Rewards?',
    answer: `Seal Rewards are accessed when you supply MKR to the Seal Engine of the decentralised Sky Protocol. Currently, all Seal Rewards take the form of USDS. Eventually, subject to Sky ecosystem governance approval, Seal Rewards may also be available in the form of Sky Star tokens, including SPK, the governance token of the Spark decentralised community. Choose the reward you’d like to receive!

Your supplied MKR tokens, as well as any rewards accumulated, automatically enter a non-custodial smart contract, which allows you to always remain in control of your supplied funds.

Seal reward rates are determined by Sky ecosystem governance.
`,
    categories: ['Seal Engine']
  },
  {
    question: 'How are Seal Rewards rates determined?',
    answer: `Seal reward rates are determined by Sky ecosystem governance through a process of decentralised onchain voting.`,
    categories: ['Seal Engine']
  },
  {
    question: 'How does the Seal Engine enable borrowing?',
    answer: `Sealing MKR into the Seal Engine enables you to access Seal Rewards by creating a position through which you generate and borrow USDS against those tokens. You can seal and unseal your collateral anytime, and draw or pay back additional USDS whenever you’d like. This means you are always able to actively manage your position. 

The debt ceiling and borrow rate are determined by Sky ecosystem governance through a process of decentralised, community-driven onchain voting. Borrow rate fees accumulate automatically per block and get added to the total debt. 

Opening a USDS borrow position is subject to liquidation risk in the following scenario: If at any time the value of your sealed collateral drops below the required threshold and your position becomes undercollateralised, the smart contract automatically liquidates it and auctions your collateral. Any leftover collateral can be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).`,
    categories: ['Seal Engine']
  },
  {
    question: 'How is the borrow rate determined?',
    answer: `The debt ceiling and borrow rate are parameters determined by Sky ecosystem governance through a process of decentralised onchain voting. Borrow rate fees accumulate automatically per block and get added to the total debt.`,
    categories: ['Seal Engine']
  },
  {
    question: 'What happens if my borrow position is liquidated?',
    answer: `Opening a USDS borrow position is subject to liquidation risk in the following scenario: If at any time the value of your sealed collateral drops below the required threshold and your position becomes undercollateralised, the smart contract automatically liquidates it and auctions your collateral. Any leftover collateral can be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).`,
    categories: ['Seal Engine']
  },
  {
    question: 'What’s the difference between Sky Token Rewards and Seal Rewards?',
    answer: `Sky Tokens Rewards are what you access when you supply USDS to the Sky Token Rewards module of the decentralised Sky Protocol. Sky Token Rewards are in the form of SKY governance tokens. 

Seal Rewards are what you access when you supply and seal MKR to the Seal Engine of the Protocol. Seal Rewards are currently in the form of USDS. Eventually, upon approval by Sky ecosystem governance, Seal Rewards will also be available in the form of  Sky Star tokens.`,
    categories: ['Seal Engine']
  },
  {
    question: 'How does unsealing work?',
    answer: `When you supply MKR to the Seal Engine, a position is created and those tokens are sealed behind an exit fee. You can seal and unseal your tokens anytime. 

Unsealing requires payment of an exit fee—a percentage of the total amount of tokens you’ve sealed in that position. The fee is automatically subtracted from that total amount, and then burnt, removing the tokens from circulation. Your accumulated rewards are not affected.  

The exit fee is a risk parameter managed and determined (regardless of position duration) by Sky ecosystem governance. The moment the Seal Engine launched, the exit fee rate was set to 5%, with a 1% increase every 6 months thereafter until it reaches the long-term fee rate of 15%.
`,
    categories: ['Seal Engine']
  },
  {
    question: 'What does it mean to delegate my voting power?',
    answer: `When you hold MKR or SKY tokens, you maintain the right to participate in the process of Sky ecosystem governance voting. That means that you have the ability to contribute to the community-driven, decentralised ecosystem decision-making process, which occurs through onchain voting.
      
The voting power delegation feature of the Seal Engine of the Sky Protocol enables you to entrust your voting power to a delegate of your choosing, who can then vote in the Sky ecosystem governance process on your behalf. You can choose one delegate per sealed MKR or SKY position. If you want to entrust your MKR or SKY to two delegates using the Seal Engine, you will need to create two separate positions.
      
Delegates in receipt of token voting power can never directly access any tokens delegated to them, including sealed tokens. Throughout the delegation process, you always own and are in control of your sealed tokens, and you can change your delegate at any time.Sealing to delegate your voting power may be a useful option for governance token holders who have limited time to allocate to the process, who want to save on the cost of gas involved in voting on their own, and who also want to earn Seal Rewards.`,
    categories: ['Seal Engine']
  },
  {
    question: 'Where can I learn about Sky ecosystem governance?',
    answer: `For a deep dive into the facets and checks and balances of Sky ecosystem governance, please refer to the [Sky Forum](https://forum.sky.money/), the [Sky Voting Portal](https://vote.makerdao.com/) and the [Sky Atlas](https://sky-atlas.powerhouse.io/)—the source of truth behind the Sky project, superseding and overriding all other competing rules or decisions.`,
    categories: ['Seal Engine']
  }
];

const skyLink: FAQItem[] = [
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

export const faqDataset: FAQItem[] = [
  ...cryptoGeneral,
  ...skyEcosystem,
  ...skyTokens,
  ...upgradeTrade,
  ...skySavingsRate,
  ...skyTokenRewards,
  ...seal,
  ...skyLink
];
