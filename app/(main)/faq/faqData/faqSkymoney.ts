import type { FAQItem } from './types';

export const skymoney: FAQItem[] = [
  {
    question: 'What is the Sky.money web app, and what can I do with it?',
    answer: `The non-custodial Sky.money web app is one of many free-to-access frontend gateways to the Sky Protocol, which is designed around the USDS stablecoin. It provides eligible users with access to all Sky Protocol tokens (sUSDS, USDS, DAI, SKY and MKR) and features, including the Sky Savings Rate (SSR), Sky Token Rewards (STRs), the Staking Engine, SkyLink, more.

Eligible Sky.money web app users can:

• **Trade.** Sky Protocol tokens are available to trade on crypto exchanges that list them. Eligible users of the Sky.money web app can access the non-custodial Sky Protocol to trade SKY on Ethereum Mainnet and select L2s via an API integration with the third-party decentralized exchange (DEX) [CoW Swap](https://swap.cow.fi/#/1/swap/WETH). Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.

• **Upgrade.** Upgrading enables you to take advantage of the many Sky Ecosystem features.

  • Upgrade DAI to USDS 1:1, and revert USDS back to DAI 1:1.

  • Upgrade MKR to the SKY token at a rate of 1:24,000 (1 MKR = 24,000 SKY). While MKR will continue to exist, reverting from SKY to MKR via the Sky Protocol is not possible. SKY is the technical and functional evolution of MKR and the sole governance token of the Sky Protocol. SKY inherited the governance functionalities previously held by MKR. For upgrade details and step-by-step upgrade instructions, please visit the [MKR to SKY Upgrade Hub](https://upgrademkrtosky.sky.money).

• **Save.** Supply USDS to the Sky Savings Rate module of the Sky Protocol to access the Sky Savings Rate and accumulate additional USDS over time. No minimum supply amount is required; withdraw at any time.
• **Access Sky Token Rewards.** Supply USDS to the Sky Token Rewards module of the Sky Protocol to access rewards over time. No minimum USDS supply amount is required; withdraw at any time.

• **Access Staking Rewards.** Supply SKY tokens to the Staking Engine of the Sky Protocol to create a position, enabling you to access Staking Rewards, borrow USDS, and transfer the voting power of supplied SKY tokens to a recognized delegate or a contract that you own.

You may exit your position(s) at any time; no exit fee applies.

• **Connect with SkyLink.** SkyLink is the Sky system that provides the rails for Sky Ecosystem projects, such as [Spark](https://spark.fi/), to link assets between the Sky Protocol on Ethereum Mainnet and supported L2 networks. This enables end users on L2s, such as Base and Arbitrum for example, to tap into Sky Protocol features via the Sky Ecosystem projects' rails.

With Sky.money, you always remain in control of your supplied assets.`,
    categories: ['Sky.money']
  },
  {
    question: 'What is an eligible user?',
    answer:
      'Some Sky Protocol features are unavailable to users in certain countries for regulatory compliance purposes. For more information, please refer to the [Terms of Use](https://docs.sky.money/legal-terms).',
    categories: ['Sky.money']
  },
  {
    question: 'Can I borrow assets using the Sky.money web app?',
    answer: `Eligible users of the Sky.money web app can supply SKY tokens to the Staking Engine of the Sky Protocol to access Staking Rewards and may also choose to create one or more positions, including a position that enables them to generate and borrow USDS against supplied SKY.

If you create a borrow position, you can stake or un-stake your SKY collateral anytime, and withdraw or pay back USDS whenever you'd like. This means you are always able to actively manage your positions.

The debt ceiling and Borrow Rate are parameters determined by Sky Ecosystem Governance through a process of decentralized, community-driven onchain voting. The total debt increases each block according to the Borrow Rate.

USDS borrow positions are subject to liquidation risk if at any time the value of supplied collateral drops below the required threshold ([liquidation price](#tooltip-liquidation-price-staking)) and the position becomes undercollateralized. If this were to occur, the smart contract would automatically liquidate and auction the collateral, and any leftover collateral may be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).`,
    categories: ['Sky.money']
  },
  {
    question: 'Is the Sky.money web app affiliated with an exchange?',
    answer:
      'The Sky.money web app integrates via an API with the third-party decentralized exchange (DEX) [CoW Swap](https://swap.cow.fi/#/1/swap/WETH) to facilitate trading. Eligible users of the Sky.money web app can trade USDC, USDT, ETH or SKY tokens for USDS, and USDC, USDT, ETH and USDS for SKY. These trades occur through autonomous, non-custodial smart contracts on the blockchain without relying on centralized entities. The exact trade route is determined by CoW Swap. and is not influenced by Sky.money or the Sky Protocol. Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.',
    categories: ['Sky.money']
  },
  {
    question: 'How can I minimize gas fees when using multiple features of the Sky.money web app?',
    answer:
      'If you plan on using the Sky.money web app to access one or more Sky Protocol features regularly, consider switching to a supported network that offers reduced cost transaction fees, such as Base.',
    categories: ['Sky.money']
  },
  {
    question: 'Is there a way to access Sky Protocol features without using the Sky.money web app?',
    answer:
      'The Sky.money web app is only one of the many gateways to the permissionless Sky Protocol. Some features may be restricted by the Sky.money frontend in certain jurisdictions based on regulatory considerations. Please refer to the [Terms of Use](https://docs.sky.money/legal-terms).',
    categories: ['Sky.money']
  },
  {
    question: 'Are there risks involved with using the Sky Protocol and Sky.money web app?',
    answer:
      'For details regarding potential risks using Sky.money web app, please see the [User Risk Documentation](https://docs.sky.money/user-risks).',
    categories: ['Sky.money']
  },
  {
    question: 'Does the Sky.money web app track my positions across multiple chains?',
    answer:
      'The Balances feature of the Sky.money web app displays all of your Sky-related assets on the network you are connected to at the moment. When you connect your crypto wallet to the Sky.money web app to access the decentralized Sky Protocol, only the tokens in the wallet that are relevant to the app are listed. With all of your Sky assets visible in one place, you can better self-manage your assets in line with your goals. Sky.money is non-custodial and permissionless.',
    categories: ['Sky.money']
  },
  {
    question: "Why can't I access Sky.money web app with a VPN?",
    answer:
      'The Sky.money web app restricts user access from certain jurisdictions in compliance with the Terms of Use. As a result, VPNs are blocked to ensure adherence to these restrictions. For more information, please refer to the [Terms of Use](https://docs.sky.money/legal-terms).',
    categories: ['Sky.money']
  },
  {
    question:
      "I supplied assets on the Sky Protocol, but now I can't access the Sky.money web app. Is my money gone?",
    answer:
      'Not necessarily. You can use a block explorer to verify your assets are still on the blockchain. For details on the risks associated with cryptocurrencies, please review the [User Risk Documentation](https://docs.sky.money/user-risks).',
    categories: ['Sky.money']
  },
  {
    question:
      "I accidentally rejected the Terms of Use when attempting to access the Sky.money web app. Now it's completely inaccessible. What can I do?",
    answer: 'Try deleting your cookies and reloading the page.',
    categories: ['Sky.money']
  },
  {
    question:
      "I'm not in a banned country, but I see an access restricted message when trying to use Sky.money. Why?",
    answer:
      'Due to the modular design of the Sky.money web app for regulatory compliance purposes, you may not be able to access certain functionalities of the Sky Protocol in your jurisdiction. For more information, please refer to the [Terms of Use](https://docs.sky.money/legal-terms).',
    categories: ['Sky.money']
  }
];
