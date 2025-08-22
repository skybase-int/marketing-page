import type { FAQItem } from './types';

export const stakingEngine: FAQItem[] = [
  {
    question: 'What is the Staking Engine?',
    answer: `The Staking Engine is a feature of the decentralized Sky Protocol. When you stake SKY tokens using the Sky.money web app, you can access Staking Rewards and may also choose to create one or more positions, including positions that enable you to generate and borrow USDS against your supplied SKY and to delegate the voting power the SKY token provides. Here's a brief overview:

• **Access Rewards.** Supply SKY tokens to access Staking Rewards. Staking Reward rates are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.

• **Borrow.** Borrow USDS against your supplied SKY. You can exit your borrow position at any time and withdraw or pay back USDS whenever you would like. The USDS Borrow Rate and Debt Ceiling are determined by Sky Ecosystem Governance through the process of decentralized onchain voting. Your total debt increases each block according to the Borrow Rate.

• **Delegate.** Transfer the voting power of your supplied SKY tokens to a recognized delegate or a contract that you own. Your chosen delegate can then participate in the Sky Ecosystem Governance voting process on your behalf. You can choose one delegate per position, meaning if you want to entrust your SKY to two different delegates using the Staking Engine, you will need to create two separate positions.

You may exit your Staking positions at any time; no exit fee applies. The Staking Reward rate and Borrow Rate are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.

Your SKY, as well as any Staking Rewards that you accumulate, are supplied to a non-custodial smart contract, such that no intermediary ever takes custody of those tokens. With Sky, you always remain in control of your assets.`,
    categories: ['Staking Engine']
  },
  {
    question: 'How do I stake my SKY using the Sky.money web app.',
    answer: `Using the Sky.money web app, you can stake your SKY in four steps:

1. **Supply SKY.** Supply SKY to the Staking Engine to create one or more positions through which you access Staking Rewards and more.

   At this step, you can also choose to Borrow USDS against your SKY (optional). There is a minimum borrow amount set as a risk parameter by Sky Ecosystem Governance. Borrowing carries risk of liquidation.

2. **Choose Reward.** Choose from the Staking Reward options.
3. **Delegate (optional)**. You may choose to transfer the voting power your staked SKY provides to a recognized delegate or a contract you own.
4. **Confirm Staking Position.** Your SKY tokens, as well as any rewards that you accumulate, are supplied to a non-custodial smart contract such that no intermediary takes custody of those tokens.

With Sky, you always remain in control of your assets.`,
    categories: ['Staking Engine']
  },
  {
    question: 'What are Staking Rewards?',
    answer: `When you supply SKY tokens to the Staking Engine using the Sky.money web app, you can access Staking Rewards and may also choose to create one or more positions, including positions that enable you to generate and borrow USDS against your supplied SKY and to delegate the voting power your SKY tokens provide. Staking Reward rates are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.

Your SKY, as well as any Staking Rewards that you accumulate, are supplied to a non-custodial smart contract, such that no intermediary ever takes custody of those tokens.`,
    categories: ['Staking Engine']
  },
  {
    question: 'How are Staking Rewards rates determined?',
    answer:
      'Staking Rewards rates are variable and may fluctuate. They are determined by: (1) the current issuance rate of the rewards set through onchain governance processes and (2) the market price of the staked SKY at the time of each calculation. Rewards are accrued in USDS for the time being, subject to any future adjustment by onchain governance. The SRR shown here is an estimated annual rate, updated using data from a third party provider (i.e., [BlockAnalitica](https://blockanalitica.com/)). Further, the estimate is for informational purposes only and does not guarantee future results.',
    categories: ['Staking Engine']
  },
  {
    question: 'How does the Staking Engine enable borrowing?',
    answer: `The Staking Engine is a feature of the decentralized Sky Protocol. When you stake SKY tokens, you can access Staking Rewards and may also choose to create one or more positions, including a position that enables you to generate and borrow USDS stablecoins against your supplied SKY.

You can exit your borrow position at any time—no exit fee applies—and withdraw or pay back USDS whenever you would like.

The USDS Borrow Rate and Debt Ceiling are determined by Sky Ecosystem Governance through the process of decentralized onchain voting. Your total debt increases each block according to the Borrow Rate.

Please note that opening a USDS borrow position subjects you to liquidation risk if at any time the value of your supplied collateral drops below the required threshold (liquidation price) and your position becomes undercollateralized. If this were to occur, the smart contract would automatically liquidate and auction your collateral, and any leftover collateral may be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).

For more information, see the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Staking Engine']
  },
  {
    question: 'How is the USDS Borrow Rate determined?',
    answer:
      'The USDS Borrow Rate and Debt Ceiling are parameters determined by Sky Ecosystem Governance through a process of decentralized, community-driven onchain voting.',
    categories: ['Staking Engine']
  },
  {
    question: 'Can I borrow USDS using ETH?',
    answer: `Yes, but only via [Spark](http://Spark.fi)'s Borrow feature, not via the Sky.money web app.

[Spark Borrow](https://spark.fi/borrow) enables you to borrow USDS stablecoins using various cryptocurrencies as collateral, including ETH. For more information about the Borrow feature, you can review the [Spark Documentation](https://docs.spark.fi/user-guides/using-sparklend/borrow-dai-and-usds).`,
    categories: ['Staking Engine']
  },
  {
    question: 'What happens if my USDS borrow position is liquidated?',
    answer: `When you borrow USDS stablecoins against SKY tokens using the Staking Engine of the Sky Protocol or some other method, your position is subject to liquidation risk in the following scenario: If at any time the value of your supplied collateral drops below the required threshold (liquidation price), your position is undercollateralized and the smart contract will automatically liquidate it and auction your supplied collateral. Any leftover collateral can be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).

For more information, see the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Staking Engine']
  },
  {
    question: 'How do Sky liquidation auctions work?',
    answer: `The liquidation auctions of the Sky Protocol are automated processes that occur when a USDS or DAI borrow position becomes unsafe due to price fluctuations.

A borrow position is subject to liquidation risk if at any time the value of the supplied collateral drops below the required threshold (liquidation price) and the position becomes undercollateralized. If this were to occur, the system would automatically liquidate and auction the collateral, and any leftover collateral may be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).

### **The Auction**

The auction begins with the "lot" (i.e., the collateral amount being sold). There are two phases to an auction:

• **Price Discovery Phase:** The decreasing price auction where the system offers a fixed amount of collateral for a decreasing amount of USDS or DAI.

• **Price Recovery Phase:** If needed, bidders compete to accept a smaller portion of the fixed lot of collateral to ensure the maximum USDS or DAI is recovered.

### **Keeper Participation**

Multiple "keepers" (individuals or automated bots operated by professional trading firms and market makers) participate in these auctions to help ensure competitive pricing. They monitor for liquidation opportunities and submit bids. Keepers must have USDS or DAI ready to purchase the liquidated collateral.

Keepers might yield a profit by leveraging price differences between the auction price provided by Sky Protocol oracles and the price on exchanges. Similar to a Dutch-style auction system, the auction price starts above the real market price and drops by a defined ratio in defined time intervals.

### **Winning**

The winning bidder receives the collateral, and the recovered USDS or DAI is used to:

• Repay the position's debt.

• Cover the liquidation penalty, which is determined by Sky Ecosystem Governance through a process of decentralized, community-driven onchain voting.

• Return any surplus to the original position holder. Any leftover collateral can be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).

For more information, see the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Staking Engine']
  },
  {
    question: 'What is the difference between Sky Token Rewards and Staking Rewards?',
    answer: `Sky Token Rewards are what you can access when you supply USDS stablecoins to the Sky Token Rewards module of the Sky Protocol.

Staking Rewards are what you can access when you stake SKY to the Staking Engine of the Sky Protocol.`,
    categories: ['Staking Engine']
  },
  {
    question: 'How does exiting a Staking Engine position work?',
    answer:
      'You can exit your Staking Engine position(s) at any time—no exit fee applies—and draw or pay back USDS whenever you would like.',
    categories: ['Staking Engine']
  }
];
