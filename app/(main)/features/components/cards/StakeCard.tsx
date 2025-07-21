import Image from 'next/image';
import { FeaturesPageCard, TextFeatureCard } from '../FeaturesPageCard';
import ProductsStakes1 from '@/public/products_stake_1.png';
import ProductsStakes2 from '@/public/products_stake_2.png';
import ProductsStakes3 from '@/public/products_stake_3.png';
import ProductsStakes4 from '@/public/products_stake_4.png';
import ProductsStakes5 from '@/public/products_stake_5.png';
import ProductsStakes1Mobile from '@/public/products_stake_1_mobile.png';
import ProductsStakes2Mobile from '@/public/products_stake_2_mobile.png';
import ProductsStakes3Mobile from '@/public/products_stake_3_mobile.png';
import ProductsStakes4Mobile from '@/public/products_stake_4_mobile.png';
import ProductsStakes5Mobile from '@/public/products_stake_5_mobile.png';
import { useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { FetchedData } from '@/app/(main)/fetchData';
import { ExternalLink } from '@/app/components/ExternalLink';
import { PopoverSealInfo } from '@/app/components/PopoverSealInfo';

export const StakeCard = ({ data }: { data: FetchedData }) => {
  const { bpi, isLoading: bpiLoading } = useBreakpointIndex();

  return (
    <FeaturesPageCard
      id="stake"
      tabs={[
        {
          label: 'Create a position, access rewards',
          title: 'Stake SKY to access rewards and more',
          content: (
            <>
              <TextFeatureCard>
                Supply SKY tokens to the Staking Engine of the Sky Protocol to create one or more positions
                and access Staking Rewards. The Staking Rewards rate <PopoverSealInfo type="srr" /> is
                determined by Sky Ecosystem Governance through the process of decentralized onchain voting.
              </TextFeatureCard>
              <TextFeatureCard>
                You can use your staked SKY to delegate <PopoverSealInfo type="delegate" /> your Sky Ecosystem
                Governance voting rights and as collateral to borrow <PopoverSealInfo type="borrow" /> USDS.
                All positions are eligible to access Staking Rewards.
              </TextFeatureCard>
              <TextFeatureCard>
                No minimum supply is required, and you can stake or un-stake your SKY—and claim your
                rewards—at any time. No exit fee applies. Your SKY, as well as any Staking Rewards that you
                accumulate, are supplied to a non-custodial smart contract, such that no intermediary ever
                takes custody of those tokens.
              </TextFeatureCard>
              <TextFeatureCard>With Sky, you always remain in control of your assets.</TextFeatureCard>
            </>
          ),
          buttonCta: 'Access Staking Rewards',
          url: `?widget=stake`,
          buttonVariant: 'twilight-1',
          illustration: !bpiLoading ? (
            <div className="h-full w-full px-3 tablet:px-0">
              <div className="relative flex h-full w-full flex-col">
                <div className="grow" />
                <Image
                  alt="Products seal"
                  placeholder="blur"
                  src={bpi === 0 ? ProductsStakes1Mobile : ProductsStakes1}
                  className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
                  quality={100}
                />
              </div>
            </div>
          ) : null
        },
        {
          label: 'About Staking Rewards',
          title: 'About Staking Rewards',
          content: (
            <>
              <TextFeatureCard>
                Staking Rewards are accessed when you supply SKY tokens to the Staking Engine of the
                decentralized Sky Protocol.
              </TextFeatureCard>
              <TextFeatureCard>
                Your supplied SKY tokens, as well as any accumulated Staking Rewards, automatically enter a
                non-custodial smart contract, which allows you to always remain in control of your supplied
                assets.
              </TextFeatureCard>
              <TextFeatureCard>
                Staking Rewards rates are determined by Sky Ecosystem Governance.
              </TextFeatureCard>
            </>
          ),
          buttonCta: 'Access Staking Rewards',
          url: `?widget=stake`,
          buttonVariant: 'twilight-1',
          illustration: !bpiLoading ? (
            <div className="h-full w-full px-3 tablet:px-0">
              <div className="relative flex h-full w-full flex-col">
                <div className="grow" />
                <Image
                  alt="Products seal"
                  placeholder="blur"
                  src={bpi === 0 ? ProductsStakes2Mobile : ProductsStakes2}
                  className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
                  quality={100}
                />
              </div>
            </div>
          ) : null
        },
        {
          label: 'Stake to delegate',
          title: 'Stake to delegate your voting power',
          content: (
            <>
              <TextFeatureCard>
                When you hold SKY tokens, you may choose to participate in the decision-making process of Sky
                Ecosystem Governance.
              </TextFeatureCard>
              <TextFeatureCard>
                You can use your SKY to participate directly in governance through a system of decentralized
                onchain voting and/or to entrust your voting power to one or more delegates{' '}
                <PopoverSealInfo type="delegate" /> or a contract that you own via the{' '}
                <ExternalLink href="https://vote.sky.money/" className="text-black/80 underline">
                  Sky Governance Voting portal
                </ExternalLink>{' '}
                or the Staking Engine of the Sky Protocol.
              </TextFeatureCard>
              <TextFeatureCard>
                While delegates in receipt of voting power vote on your behalf, they can never directly access
                any tokens delegated to them, including staked tokens. You always own and are in control of
                your staked tokens, and you can change your delegate at any time (subject to the Sky
                Protocol’s rules that prevent double voting or misuse of delegated voting power).
              </TextFeatureCard>
              <TextFeatureCard>
                Staking to delegate voting power may be a useful option for SKY token holders who have limited
                time to allocate to the governance process, who want to save on the cost of gas involved in
                voting on their own, and who want to access Staking Rewards.
              </TextFeatureCard>
            </>
          ),
          buttonCta: 'Stake to delegate',
          url: `?widget=stake`,
          buttonVariant: 'twilight-1',
          illustration: !bpiLoading ? (
            <div className="h-full w-full px-3 tablet:px-0">
              <div className="relative flex h-full w-full flex-col">
                <div className="grow" />
                <Image
                  alt="Products seal"
                  placeholder="blur"
                  src={bpi === 0 ? ProductsStakes3Mobile : ProductsStakes3}
                  className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
                  quality={100}
                />
              </div>
            </div>
          ) : null
        },
        {
          label: 'Stake to borrow USDS',
          title: 'Generate and borrow USDS',
          content: (
            <>
              <TextFeatureCard>
                Staking SKY tokens enables you to access Staking Rewards by creating one or more positions,
                including positions through which you generate and borrow USDS against your SKY. You can stake
                or un-stake your SKY collateral anytime, and withdraw or pay back USDS whenever you’d like.
                This means that you are always able to actively manage your positions.
              </TextFeatureCard>
              <TextFeatureCard>
                The Debt Ceiling and Borrow Rate <PopoverSealInfo type="borrowRate" /> are parameters
                determined by Sky Ecosystem Governance through a process of decentralized, community-driven
                onchain voting. Your total debt increases each block according to the Borrow Rate.
              </TextFeatureCard>
              <TextFeatureCard>
                Opening a USDS borrow position subjects you to liquidation risk if at any time the value of
                your supplied collateral drops below the required threshold (liquidation price) and your
                position becomes undercollateralized. If this were to occur, the smart contract would
                automatically liquidate and auction your collateral, and any leftover collateral may be
                claimed through the{' '}
                <ExternalLink className="text-text underline" href="https://unified-auctions.makerdao.com/">
                  Unified Auctions portal.
                </ExternalLink>
              </TextFeatureCard>{' '}
            </>
          ),
          buttonCta: 'Borrow USDS',
          url: `?widget=stake`,
          buttonVariant: 'twilight-1',
          illustration: !bpiLoading ? (
            <div className="h-full w-full px-3 tablet:px-0">
              <div className="relative flex h-full w-full flex-col">
                <div className="grow" />
                <Image
                  alt="Products seal"
                  placeholder="blur"
                  src={bpi === 0 ? ProductsStakes4Mobile : ProductsStakes4}
                  className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
                  quality={100}
                />
              </div>
            </div>
          ) : null
        },
        {
          label: 'How un-staking works',
          title: 'How un-staking works',
          content: (
            <>
              <TextFeatureCard>
                You can exit your Staking position(s) at any time—no exit fee applies—and draw or pay back
                USDS whenever you would like.
              </TextFeatureCard>
            </>
          ),
          buttonCta: 'Create a position',
          url: `?widget=stake`,
          buttonVariant: 'twilight-1',
          illustration: !bpiLoading ? (
            <div className="h-full w-full px-3 tablet:px-0">
              <div className="relative flex h-full w-full flex-col">
                <div className="grow" />
                <Image
                  alt="Products seal"
                  placeholder="blur"
                  src={bpi === 0 ? ProductsStakes5Mobile : ProductsStakes5}
                  className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
                  quality={100}
                />
              </div>
            </div>
          ) : null
        }
      ]}
    />
  );
};
