import Image from 'next/image';
import { FeaturesPageCard, LiFeatureCard, TextFeatureCard } from '../FeaturesPageCard';
import ProductsSkyBridge from '@/public/products_skybridge.png';
import ProductsSkyBridgeMobile from '@/public/features-skylink-mobile.png';
import { useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';

export const SkyLinkCard = () => {
  const { bpi } = useBreakpointIndex();
  return (
    <FeaturesPageCard
      id="skylink"
      tabs={[
        {
          title: 'Do more with SkyLink',
          content: (
            <>
              <TextFeatureCard>
                SkyLink enhances your ability to manage your digital assets efficiently by seamlessly
                connecting your Ethereum L1-based Sky Protocol tokens and features to the Base network.
              </TextFeatureCard>
              <TextFeatureCard>
                SkyLink offers Base users liquid trading between USDS, sUSDS and USDC powered by Spark, and
                efficient access to the Sky Savings Rate on Base—all with reduced transaction costs.
              </TextFeatureCard>
              <TextFeatureCard>
                Subject to governance approval, Base and other L2 users may be able to use SkyLink to access:
              </TextFeatureCard>
              <ul className="list-disc pl-7">
                <LiFeatureCard>Other Sky ecosystem tokens, including SKY</LiFeatureCard>
                <LiFeatureCard>Sky Token Rewards over time in the form of SKY tokens</LiFeatureCard>
                <LiFeatureCard>Rewards in the form of Sky Star tokens</LiFeatureCard>
              </ul>
              <TextFeatureCard>
                If you have shied away from the Ethereum blockchain due to the high price of gas, SkyLink
                seamlessly connects your Ethereum-based Sky Protocol tokens and features to supported L2
                networks to introduce reduced cost transactions and faster transaction speeds.
              </TextFeatureCard>
            </>
          ),
          buttonCta: 'Access SkyLink',
          url: `?network=base`,
          buttonVariant: 'azure-2',
          illustration: (
            <Image
              alt="SkyBridge illustration"
              src={bpi === 0 ? ProductsSkyBridgeMobile : ProductsSkyBridge}
              className="absolute top-1/2 w-full -translate-y-1/2 px-3 tablet:bottom-0 tablet:right-0 tablet:top-auto tablet:w-[160%] tablet:max-w-[160%] tablet:translate-x-8 tablet:translate-y-8 tablet:rounded-tl-[20px] tablet:px-0 desktop:translate-x-10 desktop:translate-y-10"
              quality={100}
            />
          )
        }
      ]}
    />
  );
};
