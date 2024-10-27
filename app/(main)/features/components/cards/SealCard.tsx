import Image from 'next/image';
import { FeaturesPageCard, TextFeatureCard } from '../FeaturesPageCard';
import ProductsSeals1 from '@/public/products_seal_1.png';
import ProductsSeals2 from '@/public/products_seal_2.png';
import ProductsSeals3 from '@/public/products_seal_3.png';
import ProductsSeals4 from '@/public/products_seal_4.png';
import ProductsSeals5 from '@/public/products_seal_5.png';
import ProductsSeals1Mobile from '@/public/products_seal_1_mobile.png';
import ProductsSeals2Mobile from '@/public/products_seal_2_mobile.png';
import ProductsSeals3Mobile from '@/public/products_seal_3_mobile.png';
import ProductsSeals4Mobile from '@/public/products_seal_4_mobile.png';
import ProductsSeals5Mobile from '@/public/products_seal_5_mobile.png';
import { useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { FetchedData } from '@/app/(main)/fetchData';
import { ExternalLink } from '@/app/components/ExternalLink';
import { PopoverSealInfo } from '@/app/components/PopoverSealInfo';

export const SealCard = ({ data }: { data: FetchedData }) => {
  const { bpi } = useBreakpointIndex();

  return (
    <FeaturesPageCard
      id="seal"
      isAlpha
      tabs={[
        {
          label: 'Create a position, get rewards',
          title: 'Seal MKR to access rewards and more',
          content: (
            <>
              <TextFeatureCard>
                Supply MKR tokens to the Seal Engine of the Sky Protocol to create one or more positions and
                access Seal Rewards.
              </TextFeatureCard>
              <TextFeatureCard>
                You can use your sealed MKR to delegate your Sky governance voting rights, as collateral to
                borrow USDS, or to just further support the Sky project. All positions access Seal Rewards.
              </TextFeatureCard>
              <TextFeatureCard>
                No minimum supply is required, and you can seal or unseal your tokens—and claim your
                rewards—anytime. Unsealing requires payment of an exit fee <PopoverSealInfo type="exitFee" />.
                <br />
                With Sky, you always remain in control of your funds.
              </TextFeatureCard>
            </>
          ),
          buttonCta: 'Get Seal Rewards',
          url: `?widget=seal`,
          buttonVariant: 'twilight-1',
          illustration: (
            <div className="h-full w-full px-3 tablet:px-0">
              <div className="relative flex h-full w-full flex-col">
                <div className="grow" />
                <Image
                  alt="Products seal"
                  placeholder="blur"
                  src={bpi === 0 ? ProductsSeals1Mobile : ProductsSeals1}
                  className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
                  quality={100}
                />
              </div>
            </div>
          )
        },
        {
          label: 'About Seal rewards',
          title: 'About Seal rewards',
          content: (
            <>
              <TextFeatureCard>
                Seal Rewards are accessed when you supply MKR to the Seal Engine of the decentralised Sky
                Protocol.
              </TextFeatureCard>
              <TextFeatureCard>
                Currently, all Seal Rewards take the form of USDS. Eventually, subject to approval by Sky
                ecosystem governance, Seal Rewards may also be available in the form of Sky Star tokens,
                including SPK, the governance token of the Spark decentralised community. Choose the reward
                you’d like to receive!
              </TextFeatureCard>
              <TextFeatureCard>
                Your supplied MKR tokens, as well as any Seal Rewards accumulated, automatically enter a
                non-custodial smart contract, which allows you to always remain in control of your supplied
                assets.
              </TextFeatureCard>
              <TextFeatureCard>Seal Reward rates are determined by Sky ecosystem governance.</TextFeatureCard>
            </>
          ),
          buttonCta: 'Access Seal Rewards',
          url: `?widget=seal`,
          buttonVariant: 'twilight-1',
          illustration: (
            <div className="h-full w-full px-3 tablet:px-0">
              <div className="relative flex h-full w-full flex-col">
                <div className="grow" />
                <Image
                  alt="Products seal"
                  placeholder="blur"
                  src={bpi === 0 ? ProductsSeals2Mobile : ProductsSeals2}
                  className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
                  quality={100}
                />
              </div>
            </div>
          )
        },
        {
          label: 'Seal to delegate',
          title: 'Seal to delegate your voting power',
          content: (
            <>
              <TextFeatureCard>
                When you hold MKR—sealed or not, you also hold the right to participate in Sky ecosystem
                governance voting. That means you have the ability to contribute to the decentralised
                ecosystem decision-making process through onchain voting.
              </TextFeatureCard>
              <TextFeatureCard>
                The delegation of voting power through the Seal Engine of the Sky Protocol enables you to
                entrust your voting power to a delegate, who can then vote in the Sky ecosystem governance
                process on your behalf. Delegates in receipt of voting power can never directly access any
                tokens delegated to them, including sealed tokens. You always own and are in control of your
                sealed tokens, and you can change your delegate anytime.
              </TextFeatureCard>
              <TextFeatureCard>
                Sealing to delegate your voting power is an option for governance token holders who don’t have
                much time to allocate to the process, who want to save on the cost of gas involved in voting
                on their own, and who want to earn Seal rewards.
              </TextFeatureCard>
            </>
          ),
          buttonCta: 'Seal to delegate',
          url: `?widget=seal`,
          buttonVariant: 'twilight-1',
          illustration: (
            <div className="h-full w-full px-3 tablet:px-0">
              <div className="relative flex h-full w-full flex-col">
                <div className="grow" />
                <Image
                  alt="Products seal"
                  placeholder="blur"
                  src={bpi === 0 ? ProductsSeals3Mobile : ProductsSeals3}
                  className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
                  quality={100}
                />
              </div>
            </div>
          )
        },
        {
          label: 'Seal to borrow USDS',
          title: 'Generate and borrow USDS',
          content: (
            <>
              <TextFeatureCard>
                Sealing MKR enables you to access Seal Rewards by creating a position through which you
                generate and borrow USDS against those tokens. You can seal and unseal your collateral
                anytime, and draw or pay back additional USDS whenever you’d like. This means you are always
                able to actively manage your position.
              </TextFeatureCard>
              <TextFeatureCard>
                The debt ceiling and borrow rate <PopoverSealInfo type="borrowRate" /> are determined by Sky
                ecosystem governance through a process of decentralised, community-driven onchain voting.
                Borrow rate fees accumulate automatically per block and get added to the total debt.
              </TextFeatureCard>
              <TextFeatureCard>
                Opening a USDS borrow position is subject to liquidation risk in the following scenario: If at
                any time the value of your sealed collateral drops below the required threshold and your
                position becomes undercollateralised, the smart contract automatically liquidates it and
                auctions your collateral. Any leftover collateral can be claimed through the{' '}
                <ExternalLink className="text-text underline" href="https://unified-auctions.makerdao.com/">
                  Unified Auctions portal.
                </ExternalLink>
              </TextFeatureCard>{' '}
            </>
          ),
          buttonCta: 'Borrow USDS',
          url: `?widget=savings`,
          buttonVariant: 'twilight-1',
          illustration: (
            <div className="h-full w-full px-3 tablet:px-0">
              <div className="relative flex h-full w-full flex-col">
                <div className="grow" />
                <Image
                  alt="Products seal"
                  placeholder="blur"
                  src={bpi === 0 ? ProductsSeals4Mobile : ProductsSeals4}
                  className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
                  quality={100}
                />
              </div>
            </div>
          )
        },
        {
          label: 'How unsealing works',
          title: 'How unsealing works',
          content: (
            <>
              <TextFeatureCard>
                When you supply MKR to the Seal Engine, a position is created and those tokens are sealed
                behind an exit fee. You can seal and unseal your tokens anytime.
              </TextFeatureCard>
              {/* TODO: Do we need an exit fee tooltip here? It's the same content as that of the tooltip */}
              <TextFeatureCard>
                Unsealing requires payment of an exit fee—a percentage of the total amount of tokens you’ve
                sealed in that position. The fee is automatically subtracted from that total amount, and then
                burnt, removing the tokens from circulation. Your accumulated rewards are not affected.{' '}
              </TextFeatureCard>
              <TextFeatureCard>
                The exit fee is a risk parameter managed and determined (regardless of position duration) by
                Sky ecosystem governance. The moment the Seal Engine launched, the exit fee rate was set to
                5%, with a 1% increase every 6 months thereafter until it reaches the long-term fee rate of
                15%.
              </TextFeatureCard>
            </>
          ),
          buttonCta: 'Create a position',
          url: `?widget=seal`,
          buttonVariant: 'twilight-1',
          illustration: (
            <div className="h-full w-full px-3 tablet:px-0">
              <div className="relative flex h-full w-full flex-col">
                <div className="grow" />
                <Image
                  alt="Products seal"
                  placeholder="blur"
                  src={bpi === 0 ? ProductsSeals5Mobile : ProductsSeals5}
                  className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
                  quality={100}
                />
              </div>
            </div>
          )
        }
      ]}
    />
  );
};
