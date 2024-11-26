import Image from 'next/image';
import { FeaturesPageCard, TextFeatureCard } from '../FeaturesPageCard';
import ProductsSkyBridge from '@/public/features-skylink.png';
import ProductsSkyBridgeMobile from '@/public/features-skylink-mobile.png';
import { useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';

export const SkyLinkCard = () => {
  const { bpi } = useBreakpointIndex();
  return (
    <FeaturesPageCard
      isComingSoon
      id="skylink"
      tabs={[
        {
          title: 'Get ready for SkyLink',
          content: (
            <>
              <TextFeatureCard>
                SkyLink will enhance your ability to manage and leverage your digital funds efficiently by
                seamlessly connecting all of your Ethereum-based Sky Protocol tokens and features to supported
                L2 networks.
              </TextFeatureCard>
              <TextFeatureCard>
                If you&apos;ve shied away from the Ethereum blockchain due to the high price of gas, SkyLink
                will open the door to lower-cost platforms that not only offer access to USDS, SKY, DAI, MKR,
                Sky Star tokens, and the Sky Savings Rate, but also enable access to Sky Token Rewards.
              </TextFeatureCard>
              <TextFeatureCard>
                The implementation of Skylink is subject to governance approval.
              </TextFeatureCard>
            </>
          ),
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
