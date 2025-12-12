export type Category =
  | 'All FAQs'
  | 'Crypto (General)'
  | 'Sky Tokens'
  | 'Sky Protocol & Ecosystem'
  | 'Sky Stars'
  | 'Sky.money'
  | 'Trade'
  | 'Sky Savings Rate'
  | 'Sky Token Rewards'
  | 'Network Integrations'
  | 'Sky Governance'
  | 'Upgrade'
  | 'Staking Engine'
  | 'stUSDS'
  | 'Expert modules';

export type FAQItem = {
  question: string;
  answer: string;
  categories: Category[];
};

export const ALL_FAQS = 'All FAQs';

export const categories: Category[] = [
  ALL_FAQS,
  'Crypto (General)',
  'Sky Tokens',
  'Sky Protocol & Ecosystem',
  'Sky Stars',
  'Sky.money',
  'Trade',
  'Sky Savings Rate',
  'Sky Token Rewards',
  'Network Integrations',
  'Sky Governance',
  'Upgrade',
  'Staking Engine',
  'stUSDS',
  'Expert modules'
];
