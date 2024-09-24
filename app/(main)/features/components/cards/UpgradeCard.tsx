import Image from 'next/image';
import { FeaturesPageCard, LiFeatureCard, TextFeatureCard } from '../FeaturesPageCard';
import ProductsUpgrade from '@/public/features-upgrade.png';
import { FetchedData } from '@/app/(main)/fetchData';

export const UpgradeCard = ({ data }: { data: FetchedData }) => (
  <FeaturesPageCard
    id="upgrade"
    tabs={[
      {
        title: 'Upgrade to USDS and SKY',
        content: (
          <>
            <TextFeatureCard>
              Unlock all the decentralised Sky Protocol has to offer by easily and instantly upgrading your
              DAI to USDS at a rate of 1:1, and your MKR to SKY at a rate of 1: 24,000.
            </TextFeatureCard>
            <TextFeatureCard>
              USDS powers the open Sky ecosystem, providing new ways for you to have more rewarding crypto
              experiences. Use USDS to:
            </TextFeatureCard>
            <ul className="list-disc pl-7">
              <LiFeatureCard>Access Sky Token Rewards</LiFeatureCard>
              <LiFeatureCard>Access the Sky Savings Rate to accumulate additional USDS</LiFeatureCard>
            </ul>
            <TextFeatureCard>
              As a Sky ecosystem governance token, SKY represents an evolution in ease of use. You&apos;ll
              soon be able to use SKY to:
            </TextFeatureCard>
            <ul className="list-disc pl-7">
              <LiFeatureCard>Accumulate Activation Token Rewards</LiFeatureCard>
              <LiFeatureCard>Participate in decentralized onchain voting</LiFeatureCard>
            </ul>
            <TextFeatureCard>
              Upgrade is an automatic and non-custodial feature. With Sky.money, you always remain in control
              of your assets.
            </TextFeatureCard>
          </>
        ),
        stats: [
          { id: 'price', label: 'USDS Price', value: data.usdsPrice },
          { id: 'price', label: 'SKY Price', value: data.skyPrice }
        ],
        buttonCta: 'Upgrade',
        url: `?widget=upgrade`,
        buttonVariant: 'twilight-1',
        illustration: (
          <div className="h-full w-full p-4 tablet:py-0 tablet:pl-[25px] tablet:pr-0 desktop:pl-[49px] desktop:pr-[9px]">
            <div className="relative h-full w-full">
              <Image
                alt="Products upgrade"
                src={ProductsUpgrade}
                className="absolute w-full rounded-[40px] tablet:top-1/2 tablet:-translate-y-1/2"
                quality={100}
              />
            </div>
          </div>
        )
      }
    ]}
  />
);
