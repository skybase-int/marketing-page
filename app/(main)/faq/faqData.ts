import { cryptoGeneral } from './faqCryptoGeneral';
import { skyEcosystem } from './faqSkyEcosystem';
import { skyTokens } from './faqSkyTokens';
import { upgradeTrade } from './faqUpgradeAndTrade';
import { skySavingsRate } from './faqSkySavingsRate';
import { skyTokenRewards } from './faqSkyTokenRewards';
import { stakingEngine } from './faqStakingEngine';
import { skyLink } from './faqSkyLink';
import { networkIntegrations } from './faqNetworkIntegrations';

type Category =
  | 'All FAQs'
  | 'Crypto (General)'
  | 'Sky Protocol & Ecosystem'
  | 'Sky Tokens'
  | 'Upgrade & Trade'
  | 'Sky Savings Rate'
  | 'Sky Token Rewards'
  | 'Seal Engine'
  | 'Staking Engine'
  | 'SkyLink'
  | 'Network Integrations';

export type FAQItem = {
  question: string;
  answer: string;
  categories: Category[];
};

export const faqDataset: FAQItem[] = [
  ...cryptoGeneral,
  ...skyEcosystem,
  ...skyTokens,
  ...upgradeTrade,
  ...skySavingsRate,
  ...skyTokenRewards,
  ...stakingEngine,
  ...skyLink,
  ...networkIntegrations
];
