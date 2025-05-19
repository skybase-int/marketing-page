import { Save, Upgrade, Rewards, Trade, Activation, SealedActivation, SkyLink } from '@/app/components/icons';
import { UpgradeCard } from './components/cards/UpgradeCard';
import { TradeCard } from './components/cards/TradeCard';
import { RewardsCard } from './components/cards/RewardsCard';
import { SaveCard } from './components/cards/SaveCard';
import { ActivationCard } from './components/cards/ActivationCard';
import { SkyLinkCard } from './components/cards/SkyLinkCard';
import { StakeCard } from './components/cards/StakeCard';

type Feature = {
  icon: React.ElementType;
  title: string;
  isLong?: boolean;
  card: React.ElementType;
  id: string; //should be the same as the id of the card
  isAlpha?: boolean;
};

export const existingFeatures: Feature[] = [
  {
    icon: Upgrade,
    title: 'Upgrade',
    card: UpgradeCard,
    id: 'upgrade'
  },
  {
    icon: Trade,
    title: 'Trade',
    card: TradeCard,
    id: 'trade'
  },
  {
    icon: Rewards,
    title: 'Rewards',
    card: RewardsCard,
    id: 'rewards'
  },
  {
    icon: Save,
    title: 'Savings',
    card: SaveCard,
    id: 'savings'
  },
  {
    icon: SealedActivation,
    title: 'Seal Engine',
    card: StakeCard,
    id: 'seal',
    isAlpha: true
  },
  {
    icon: SkyLink,
    title: 'SkyLink',
    card: SkyLinkCard,
    id: 'skylink'
  }
];

export const comingSoonFeatures: Feature[] = [
  {
    icon: Activation,
    title: 'Activation',
    card: ActivationCard,
    id: 'activation'
  }
];

export const features: Feature[] = [...existingFeatures, ...comingSoonFeatures];
