import Image from 'next/image';
import { FeaturesPageCard, TextFeatureCard, LiFeatureCard } from '../FeaturesPageCard';
import ProductsTrade from '@/public/products_trade.png';
import { FetchedData } from '@/app/(main)/fetchData';
import { ExternalLink } from '@/app/components/ExternalLink';
export const TradeCard = ({ data }: { data: FetchedData }) => (
  <FeaturesPageCard
    id="trade"
    tabs={[
      {
        title: 'Trade crypto for USDS',
        content: (
          <>
            <TextFeatureCard>
              Directly trade popular tokens for Sky ecosystem tokens using permissionless and non-custodial
              pools.
            </TextFeatureCard>
            <TextFeatureCard>
              Trade USDC, USDT, ETH and SKY for USDS, and vice versa. Use USDS to:
            </TextFeatureCard>
            <ul className="list-disc pl-7">
              <LiFeatureCard>Access Sky Token Rewards</LiFeatureCard>
              <LiFeatureCard>Access the Sky Savings Rate to accumulate additional USDS</LiFeatureCard>
            </ul>
            <TextFeatureCard>
              Trade USDC, USDT, ETH and USDS for SKY, and vice versa. You&apos;ll soon be able to use SKY to:
            </TextFeatureCard>
            <ul className="list-disc pl-7">
              <LiFeatureCard>Accumulate Activation Token Rewards</LiFeatureCard>
              <LiFeatureCard>Participate in decentralized onchain voting</LiFeatureCard>
            </ul>
            <TextFeatureCard>
              With Sky.money, it&apos;s easy to quickly trade, utilizing smart contracts on the blockchain
              instead of relying on centralized entities.
            </TextFeatureCard>
            <TextFeatureCard>
              Trades are powered by{' '}
              <ExternalLink href="https://swap.cow.fi/" className="text-black/80 underline">
                CoW Swap
              </ExternalLink>
              .
            </TextFeatureCard>
          </>
        ),
        stats: [
          { id: 'price', label: 'ETH/USDS', value: data.ethPrice },
          { id: 'price', label: 'USDC/USDS', value: data.usdcPrice },
          { id: 'price', label: 'USDT/USDS', value: data.usdtPrice }
        ],
        buttonCta: 'Start Trading',
        url: `?widget=trade`,
        buttonVariant: 'sunset-1',
        illustration: (
          <div className="h-full w-full px-3">
            <div className="relative h-full w-full">
              <Image
                alt="Products trade"
                placeholder="blur"
                src={ProductsTrade}
                className="absolute top-1/2 w-full -translate-y-1/2 rounded-[20px] desktop:rounded-[40px]"
                quality={100}
              />
            </div>
          </div>
        )
      }
    ]}
  />
);
