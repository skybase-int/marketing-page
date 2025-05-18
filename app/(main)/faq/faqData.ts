import { cryptoGeneral } from './faqCryptoGeneral';
import { skyEcosystem } from './faqSkyEcosystem';
import { skyTokens } from './faqSkyTokens';

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

const upgradeTrade: FAQItem[] = [
  {
    question: 'How much does it cost to upgrade?',
    answer: `Upgrading is free and instant; however, you will likely pay gas fees for using the Ethereum blockchain network. That fee is not controlled, imposed or received by Sky.money or the Sky Protocol. It is calculated based on current Ethereum network demand and the amount of gas required to process the upgrade transaction. So, be sure to have ETH in your wallet anytime you transact using the Sky Protocol.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'Do I have to upgrade my DAI to USDS, and my MKR to SKY?',
    answer: `No. DAI and MKR will remain unaltered in their original forms for the foreseeable future. You can continue to hold and use both tokens exactly as you have in the past. While each has an upgraded Sky version, upgrading is optional. But only by holding USDS and SKY can you utilize the Sky Protocol functionalities available in your region.

Note that decisions regarding the Sky Protocol, its tokens and features are made by Sky ecosystem governance token holders through a system of decentralized on-chain voting.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'Why did the governance community choose to upgrade MKR to create SKY?',
    answer: `By upgrading MKR to SKY at a rate of 1:24,000, far more people are provided with access to the Sky ecosystem. The larger supply of SKY improves the experience for those who want to purchase more than just a fraction of the token, as well as for those who want to trade USDS for SKY and get whole amounts of SKY as token rewards, instead of fractional amounts. 

Additionally, the SKY token will eventually be used to get Activation Token Rewards and to vote on changes and additions to the Sky Protocol.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'What is the Atlas Risk Dashboard?',
    answer: `The Atlas Risk Dashboard allows you to examine the health of the decentralized Sky Protocol in real time. You can view the total value locked (“TVL”) in the Sky Protocol, TVL in the Sky Token Rewards module, TVL in the Sky Savings Rate module, the total amount of collateral backing the system, an estimation of annual rewards, and much more.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'What is a trade?',
    answer: `A trade is the direct exchange of one cryptocurrency token for another at current market prices. Sky Protocol users can trade tokens via an API integration with the third-party decentralized exchange. These trades occur through smart contracts on the blockchain without relying on centralized entities. The exact trade route is determined by the third party decentralized exchange and is not influenced by Sky.money or the Sky Protocol. 

Note that price slippage—a change in price between the time of the trade order and its execution on the blockchain—can occur due to market volatility. When you trade via the Sky Protocol, you can set your slippage tolerance level.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'Why would I trade tokens?',
    answer: `The following statements are provided for informational purposes only and are not intended to be construed as financial advice or recommendations on trading strategies. Your use of the Sky Protocol is at your own risk. Please see our User Risk Documentation and Terms of Use for further information. 

When you trade USDC, USDT, ETH or SKY for USDS via the Sky Protocol, you can use your USDS to access the Sky Savings Rate to get additional USDS over time, and to access Sky Token Rewards in the form of SKY governance tokens.

When you trade USDC, USDT, ETH and USDS for SKY, you'll soon be able to use SKY to accumulate Activation Token Rewards and to participate in Sky ecosystem governance through a system of decentralized onchain voting.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'Is trading using Sky.money free?',
    answer: `Trading generally involves a fee imposed by the third-party decentralized exchange integrated with the Sky Protocol that is used to make the trade. In addition, you will likely pay a blockchain network transaction fee called a gas fee. This fee is calculated based on current Ethereum network demand and the amount of gas required to process your transaction. Neither fee is controlled, imposed or received by Sky.money or the Sky Protocol.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'Can I trade USDS on the open market?',
    answer: `Yes. you can trade USDS, as well as USDC, USDT and ETH, for SKY via the Sky Protocol. USDS is freely transferable and can be used in connection with any software protocol or platform that supports it.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'What is an exchange rate?',
    answer: `Exchange rate refers to the price of one cryptocurrency relative to another cryptocurrency or fiat currency at any given moment. Cryptocurrency exchange rates may be subject to price volatility and may fluctuate based on various factors.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'Is trading risky?',
    answer: `Your use of the Sky Protocol is at your own risk. Please see our User Risk Documentation and Terms of Use for further information.`,
    categories: ['Upgrade & Trade']
  }
];

const skySavingsRate: FAQItem[] = [
  {
    question: 'What is the Sky Savings Rate, and how does it work?',
    answer: `The Sky Savings Rate (SSR) is an automated token-accumulation mechanism of the decentralized Sky Protocol that takes into account the effect of accumulated USDS compounded in real time. In other words, the USDS you supply to the Sky Savings Rate module enables you to receive sUSDS. The SSR is variable, determined not by market factors but by Sky ecosystem governance through a process of decentralized onchain voting. 

When you supply USDS to the Sky Savings Rate module, you access the SSR and may receive sUSDS tokens. These sUSDS tokens serve as a digital record of your USDS interaction with the SSR module and any value accrued to your position. 

The decentralized Sky Protocol dynamically adds USDS tokens to the pool every few seconds, in accordance with the Sky Savings Rate. As those tokens auto-accumulate in the pool over time, the value of the sUSDS you hold may gradually increase. 

So, when you choose to redeem your sUSDS for USDS—which you can do anytime—the total USDS you will receive will equal the amount you originally supplied, plus any additional USDS accumulated.   
With the Sky Protocol, you're always in full control of your supplied funds, as this feature is non-custodial.`,
    categories: ['Sky Savings Rate']
  },
  {
    question: 'Does it cost anything to access the Sky Savings Rate?',
    answer: `Accessing the Sky Savings Rate via the Sky Protocol is free. However, any time you supply or withdraw funds to/from the Sky Savings Rate module, you will incur a transaction fee— called a gas fee—for using the Ethereum blockchain network. That fee is not controlled, imposed or received by Sky.money or the Sky Protocol.`,
    categories: ['Sky Savings Rate']
  },
  {
    question: 'Can I withdraw my USDS from the Sky Savings Rate module anytime?',
    answer: `You can withdraw your original supply of USDS and any accumulated sUSDS from the Sky Savings Rate module anytime. While no withdrawal fee is imposed, you will pay a blockchain transaction fee— called a gas fee—for using the network. That fee is not controlled, imposed or received by Sky.money or the Sky Protocol.`,
    categories: ['Sky Savings Rate']
  }
];

const skyTokenRewards: FAQItem[] = [
  {
    question: 'What are Sky Token Rewards, and how do they work?',
    answer: `When you supply USDS to the Sky Token Rewards module through the Sky Protocol, you receive Sky Token Rewards over time in the form of SKY governance tokens. 

The USDS, as well as the rewards received, are supplied to a non-custodial smart contract that represents the USDS pool of funds. That means no intermediary has custody of your supplied funds.

Soon, you'll be able to use SKY to access Activation Token Rewards, and to participate in Sky ecosystem governance through a system of decentralized onchain voting.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'How much USDS do I have to supply to accumulate Sky Token Rewards?',
    answer: `Eligible users can supply any amount of USDS to the Sky Token Rewards module to begin getting Sky Token Rewards. There is no minimum amount required. Eligible users can also withdraw their USDS anytime. With the Sky Protocol, you can receive rewards without giving up control of your supplied funds, as this feature is non-custodial.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'How is the Sky Token Rewards Rate calculated?',
    answer: `The Sky Token Rewards rate is different for each type of token rewarded, and always fluctuates, determined by the following factors:

* The issuance rate of the token rewarded, which is determined by Sky ecosystem governance  
* The market price of the token rewarded  
* The user's share of the total pool of funds earning the token rewarded

Sky.money does not control the issuance, determination, or distribution of these rewards.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'How much does it cost to participate in Sky Token Rewards?',
    answer: `There is no fee to participate in Sky Token Rewards; however, with each transaction, you may pay a gas fee for using the Ethereum blockchain network. That fee is not controlled, imposed or received by Sky.money or the Sky Protocol.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'What is Chronicle?',
    answer: `Chronicle is the original oracle on Ethereum built within MakerDAO for the creation of DAI. Today, [Chronicle’s decentralised oracle network](https://docs.chroniclelabs.org/Intro/network) secures Sky, Spark, and many other DeFi and RWA protocols.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'What are Chronicle Points, and how do they work?',
    answer: `Use the Sky.money app to access [Chronicle Points](https://www.youtube.com/watch?v=CYsC7Nrm2Vs), which might later be claimable for Chronicle tokens at a rate of 10 points = 1 CLE token. The total supply of CLE tokens will be 10 billion. Chronicle Points are being emitted at a rate of 3.75 billion per year. Any future opportunities to convert Chronicle Points into CLE tokens, if offered, would be managed independently by Chronicle’s own applications.`,
    categories: ['Sky Token Rewards']
  },
  {
    question:
      'Is there a minimum requirement of USDS I need to supply to the Sky Protocol to start collecting Chronicle Points?',
    answer: `No minimum supply of USDS is required.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'Where can I see the current total distribution of Chronicle Points?',
    answer: `Users can see the current distribution of Chronicle Points on the [Sky Ecosystem dashboard](https://info.sky.money/rewards/0x10ab606b067c9c461d8893c47c7512472e19e2ce).`,
    categories: ['Sky Token Rewards']
  }
];

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
