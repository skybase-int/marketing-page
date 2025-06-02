import { FAQItem } from './faqData';

export const skySavingsRate: FAQItem[] = [
  {
    question: 'What is the Sky Savings Rate, and how does it work?',
    answer: `The Sky Savings Rate (SSR) is an automated token-accumulation mechanism for eligible users of the Sky Protocol. It takes into account the effect of accumulated USDS compounded in real time.

When you supply USDS to the Sky Savings Rate module, you access the Sky Savings Rate and receive sUSDS tokens. Those sUSDS tokens serve as a digital record of your USDS interaction with the module and any value accrued to your position.

The Sky Protocol dynamically adds USDS tokens to the pool every few seconds, in accordance with the Sky Savings Rate percentage. As those tokens auto-accumulate in the pool over time, the value of the sUSDS you hold may gradually increase. Therefore, when you choose to redeem your sUSDS for USDS—which you can do anytime—the total USDS you will receive will equal the amount you originally supplied, plus any additional USDS accumulated.

The Sky Savings Rate percentage is variable, determined by Sky Ecosystem Governance through a process of decentralized onchain voting.

The conversion rate between USDS and sUSDS is determined programmatically by smart contracts, but the dollar value should match given that there are no fees involved. When redeeming sUSDS for USDS, one would expect an increase in net USDS tokens in accordance with the Sky Savings Rate multiplied by the duration.`,
    categories: ['Sky Savings Rate']
  },
  {
    question: 'Is the Sky Savings Rate always the same?',
    answer: `The Sky Savings Rate percentage is variable, determined by Sky Ecosystem Governance through a process of decentralized onchain voting. It is calculated based on various risk parameters evaluated and monitored by the Sky Risk Management Team. Through the voting process, Sky Ecosystem Governance is able, at any time, at its sole discretion, and without notice, to adapt the Sky Savings Rate and other relevant Sky Protocol parameters based on market conditions, the Surplus Buffer of the Sky Protocol, and other factors.`,
    categories: ['Sky Savings Rate']
  },
  {
    question: 'How is the Sky Savings Rate determined?',
    answer: `The Sky Savings Rate takes into account the effect of accumulated USDS compounded in real time. In other words, the USDS you supply to the Sky Savings Rate module of the decentralized Sky Protocol enables you to get more USDS.

The Sky Savings Rate percentage is variable, determined by Sky Ecosystem Governance through a process of decentralized onchain voting. It is calculated based on various risk parameters evaluated and monitored by the Sky Risk Management Team. Through the voting process, Sky Ecosystem Governance is able, at any time, at its sole discretion, and without notice, to adapt the Sky Savings Rate and other relevant Sky Protocol parameters based on market conditions, the Surplus Buffer of the Sky Protocol, and other factors.

The Sky Savings Rate is one of the most impactful Sky Ecosystem Governance-controlled parameters related to USDS demand. The Risk Management Team analyzes systemic decentralized finance (DeFi) risks, uses risk models and other tools to evaluate and monitor the Sky project's effectiveness, and performs regular market research. Based on its findings, the team might propose a change to the Sky Savings Rate percentage. Any such proposal is first debated in the [Sky Forum](https://forum.sky.money/), and later voted on by Sky Ecosystem Governance.`,
    categories: ['Sky Savings Rate']
  },
  {
    question: 'What is sUSDS?',
    answer: `sUSDS is a savings token for eligible Sky Protocol users. When you supply USDS to the Sky Savings Rate module of the Protocol, you access the Sky Savings Rate and receive sUSDS tokens. These sUSDS tokens serve as a digital record of your USDS interaction with the Sky Savings Rate module and any value accrued to your position.

The Sky Protocol dynamically adds USDS tokens to the pool every few seconds, in accordance with the Sky Savings Rate percentage. As those tokens auto-accumulate in the pool over time, the value of the sUSDS you hold may gradually increase. The Sky Savings Rate percentage is variable, determined by Sky Ecosystem Governance through a process of decentralized onchain voting. Therefore, when you choose to redeem your sUSDS for USDS—which you can do anytime—the total USDS you will receive will equal the amount you originally supplied, plus any additional USDS accumulated.

The conversion rate between USDS and sUSDS is determined programmatically by smart contracts, but the dollar value should match given that there are no fees involved. When redeeming sUSDS for USDS, one would expect an increase in net USDS tokens in accordance with the Sky Savings Rate multiplied by the duration.`,
    categories: ['Sky Savings Rate']
  },
  {
    question: 'What is the difference between USDS and sUSDS?',
    answer: `USDS is a native stablecoin of the decentralized Sky Protocol. It can be used in several ways, including to participate in the Sky Savings Rate and to access Sky Token Rewards without giving up control of your assets.

sUSDS is the native savings token of the Sky Savings Rate module of the Sky Protocol. When you supply USDS to the Sky Savings Rate module of the Sky Protocol, you access the Sky Savings Rate and receive sUSDS tokens. These sUSDS tokens serve as a digital record of your USDS interaction with the Sky Savings Rate module and any value accrued to your position. Therefore, when you choose to redeem your sUSDS for USDS—which you can do anytime—the total USDS you will receive will equal the amount you originally supplied, plus any additional USDS accumulated.`,
    categories: ['Sky Savings Rate']
  },
  {
    question: 'Does it cost anything to access the Sky Savings Rate?',
    answer: `Accessing the Sky Savings Rate via the [Sky.money web app](https://app.sky.money) is free. However, any time you supply or withdraw assets to/from the Sky Savings Rate module of the Sky Protocol, you will incur a transaction fee, called a gas fee, for using the Ethereum blockchain network. That fee is neither controlled, imposed nor received by Sky.money or the Sky Protocol.

If you have shied away from the Ethereum blockchain due to the high price of gas, note that the average price of gas on Ethereum has dropped significantly as a result of the 2024 Dencun upgrade. Note, too, that you can use the [Sky.money web app](https://app.sky.money) to access the Sky Savings Rate on the Base network with reduced transaction costs.`,
    categories: ['Sky Savings Rate']
  },
  {
    question: 'Can I supply/withdraw USDS to/from the Sky Savings Rate module at any time?',
    answer: `Yes, you can supply USDS tokens to the Sky Savings Rate module of the Sky Protocol at any time. You can also withdraw your original supply of USDS, as well as any accumulated sUSDS, from the module at any time. sUSDS is the savings token of the Sky Savings Rate module of the Protocol.`,
    categories: ['Sky Savings Rate']
  }
];
