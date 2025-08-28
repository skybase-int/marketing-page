import type { FAQItem } from './types';
import { cryptoGeneral } from './faqCryptoGeneral';
import { skyProtocolEcosystem } from './faqSkyProtocolEcosystem';
import { skyStars } from './faqSkyStars';
import { skymoney } from './faqSkymoney';
import { skyTokens } from './faqSkyTokens';
import { upgrade } from './faqUpgrade';
import { trade } from './faqTrade';
import { skySavingsRate } from './faqSkySavingsRate';
import { skyTokenRewards } from './faqSkyTokenRewards';
import { stakingEngine } from './faqStakingEngine';
import { networkIntegrations } from './faqNetworkIntegrations';
import { skyGovernance } from './faqSkyGovernance';

export const faqDataset: FAQItem[] = [
  ...cryptoGeneral,
  ...skyProtocolEcosystem,
  ...skyStars,
  ...skymoney,
  ...skyTokens,
  ...upgrade,
  ...trade,
  ...skySavingsRate,
  ...skyTokenRewards,
  ...stakingEngine,
  ...networkIntegrations,
  ...skyGovernance
];
