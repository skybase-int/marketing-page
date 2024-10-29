import Image from 'next/image';
import { FeaturesPageCard, TextFeatureCard, LiFeatureCard } from '../FeaturesPageCard';
import FeaturesRewards from '@/public/features_rewards.png';
import FeaturesRewardsMobile from '@/public/features_rewards_mobile.png';
import { useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { FetchedData } from '@/app/(main)/fetchData';
import HowItWorks from '@/public/rewards-how-it-works.png';
import UseRewards from '@/public/rewards-use.png';

export const RewardsCard = ({ data }: { data: FetchedData }) => {
  const { bpi, isLoading: bpiLoading } = useBreakpointIndex();
  return (
    <FeaturesPageCard
      id="rewards"
      tabs={[
        {
          label: 'Access Sky Token Rewards',
          title: 'Access Sky Token Rewards with USDS',
          content: (
            <>
              <TextFeatureCard>
                Use USDS to access Sky Token Rewards (STRs) and support the Sky ecosystem projects you believe
                in. No minimum USDS supply amount is required. This feature is non-custodial.
              </TextFeatureCard>
              <TextFeatureCard>
                When you supply USDS to the Sky Token Rewards module of the decentralised Sky Protocol, you
                access Sky Token Rewards over time in the form of SKY governance tokens. Subject to governance
                approval, you&apos;ll soon be able to receive rewards in the form of Sky Star tokens, too.
              </TextFeatureCard>
              <TextFeatureCard>With Sky.money, you always remain in control of your assets.</TextFeatureCard>
            </>
          ),
          stats: [
            { id: 'rate', label: 'With: USDS Get: SKY — Sky Token Rewards Rate', value: data.rewardsApy },
            { id: 'tvl', label: 'Sky Token Rewards TVL', value: data.rewardsTvl }
          ],
          buttonCta: 'Access Sky Token Rewards',
          url: `?widget=rewards`,
          buttonVariant: 'sunset-2',
          illustration: !bpiLoading ? (
            <div className="h-full w-full py-1.5 tablet:py-0">
              <div className="relative flex h-full w-full flex-col">
                <div className="grow" />
                <Image
                  alt="Products earn rewards"
                  placeholder="blur"
                  src={bpi === 0 ? FeaturesRewardsMobile : FeaturesRewards}
                  className="absolute left-1/2 h-full w-auto -translate-x-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:h-auto tablet:w-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+32px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-12 desktop:rounded-tl-[30px]"
                  quality={100}
                />
              </div>
            </div>
          ) : null
        },
        {
          label: 'Use Sky Token Rewards',
          title: 'Use Sky Token Rewards to govern',
          content: (
            <>
              <TextFeatureCard>Sky Token Rewards are powerful yet designed for ease of use.</TextFeatureCard>
              <TextFeatureCard>
                Soon, subject to governance approval, you&apos;ll be able to use your SKY tokens to:
              </TextFeatureCard>
              <ul className="list-disc pl-7">
                <LiFeatureCard>
                  Participate in Sky ecosystem governance through a system of decentralised onchain voting.
                </LiFeatureCard>
                <LiFeatureCard>
                  Access the upcoming Activation and Sealed Activation features of the Sky Protocol to
                  accumulate Activation Token Rewards
                </LiFeatureCard>
              </ul>
              <TextFeatureCard>
                In the near future, you&apos;ll be able to opt for Sky Token Rewards in the form of various
                Sky Star tokens. Sky Stars are independent, smaller decentralized projects within the larger
                Sky ecosystem.
              </TextFeatureCard>
            </>
          ),
          buttonCta: 'Access Sky Token Rewards',
          url: `?widget=rewards`,
          buttonVariant: 'sunset-2',
          illustration: !bpiLoading ? (
            <div className="flex h-full w-full items-center justify-center py-6">
              <div className="relative h-full w-full">
                <Image
                  alt="Use Sky Token Rewards"
                  src={UseRewards}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>
          ) : null
        },
        {
          label: 'How Sky Token Rewards work',
          title: 'How Sky Token Rewards work',
          content: (
            <>
              <TextFeatureCard>
                Eligible users can supply any amount of USDS to the Sky Token Rewards module to begin getting
                Sky Token Rewards automatically generated by the protocol.
              </TextFeatureCard>
              <TextFeatureCard>
                The Sky Token Rewards rate is different for each type of token rewarded, and always
                fluctuates, determined by the following factors:
              </TextFeatureCard>
              <ul className="list-disc pl-7">
                <LiFeatureCard>
                  The issuance rate of the token rewarded, which is determined by Sky ecosystem governance
                </LiFeatureCard>
                <LiFeatureCard>The market price of the token rewarded</LiFeatureCard>
                <LiFeatureCard>
                  The user&apos;s proportional supply within the total pool of assets linked to the Sky Token
                  Rewards module
                </LiFeatureCard>
              </ul>
              <TextFeatureCard>
                Sky.money does not control the issuance, determination, or distribution of these rewards.
              </TextFeatureCard>
            </>
          ),
          buttonCta: 'Access Sky Token Rewards',
          url: `?widget=rewards`,
          buttonVariant: 'sunset-2',
          illustration: !bpiLoading ? (
            <div className="flex h-full w-full items-center justify-center py-6">
              <div className="relative h-full w-full">
                <Image
                  alt="How Sky Token Rewards work"
                  src={HowItWorks}
                  fill
                  className="object-contain"
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
