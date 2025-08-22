import type { FAQItem } from './types';

export const skyTokenRewards: FAQItem[] = [
  {
    question: 'What are Sky Token Rewards, and how do they work?',
    answer:
      'When you supply USDS to the Sky Token Rewards module of the Sky Protocol, you receive Sky Token Rewards over time. The USDS, as well as the rewards received, are supplied to a non-custodial smart contract that represents the USDS pool of assets. That means no intermediary has custody of your supplied assets.',
    categories: ['Sky Token Rewards']
  },
  {
    question: 'What tokens can I use to access Sky Token Rewards?',
    answer: 'Only USDS can be used to access Sky Token Rewards.',
    categories: ['Sky Token Rewards']
  },
  {
    question: 'How much USDS do I have to supply to accumulate Sky Token Rewards?',
    answer:
      'Eligible users can supply any amount of USDS to the Sky Token Rewards module of the decentralized Sky Protocol to begin accessing Sky Token Rewards. There is no minimum amount required. Eligible users can also withdraw their USDS at any time. With the Sky Protocol, you can receive rewards without giving up control of your supplied assets, as the Sky Token Rewards module is non-custodial.',
    categories: ['Sky Token Rewards']
  },
  {
    question: 'How are Sky Token Reward Rates calculated?',
    answer: `The Sky Token Reward Rate is different for each type of token rewarded, and always fluctuates, determined by the following factors:

• The issuance rate of the token rewarded, which is determined by Sky Ecosystem Governance;

• The market price of the token rewarded; and

• The user's proportional supply within the total pool of assets linked to the Sky Token Rewards module.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'How much does it cost to participate in Sky Token Rewards?',
    answer: `There is no fee to participate in the Sky Token Rewards feature of the Sky Protocol; however, with each transaction, you will likely pay a transaction, or gas, fee for using the Ethereum blockchain network. That fee is neither controlled, imposed nor received by Sky.money or the Sky Protocol.

Note that if you have shied away from the Ethereum blockchain due to the high price of gas, the average price of gas on Ethereum has dropped significantly as a result of the 2024 Dencum upgrade.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'How do I claim my Sky Token Rewards in the Sky.money web app?',
    answer:
      'To claim your Sky Token Rewards using the Sky.money web app, click on the Claim button in the Rewards feature of the app. You must claim all your Sky Token Rewards at once. It is not possible to claim partial rewards.',
    categories: ['Sky Token Rewards']
  }
];
