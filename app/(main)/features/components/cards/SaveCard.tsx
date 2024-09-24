import Image from 'next/image';
import { FeaturesPageCard, TextFeatureCard } from '../FeaturesPageCard';
import ProductsSavings from '@/public/products_savings.png';
import ProductsSavingsMobile from '@/public/products_savings_mobile.png';
import { useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { FetchedData } from '@/app/(main)/fetchData';
import WhatIsSave from '@/public/savings-what-is-it.png';
import HowItWorks from '@/public/savings-how-it-works.png';

export const SaveCard = ({ data }: { data: FetchedData }) => {
  const { bpi } = useBreakpointIndex();

  return (
    <FeaturesPageCard
      id="savings"
      tabs={[
        {
          label: 'Save USDS',
          title: 'Save USDS',
          content: (
            <>
              <TextFeatureCard>
                Use USDS to access the Sky Savings Rate module of the decentralised Sky Protocol and
                accumulate additional USDS over time. No minimum supply amount is required; withdraw anytime.
              </TextFeatureCard>
              <TextFeatureCard>
                With Sky, you always remain in control of your savings, as this feature is non-custodial.
              </TextFeatureCard>
            </>
          ),
          stats: [
            { id: 'rate', label: 'Sky Savings Rate', value: data.saveApy },
            { id: 'tvl', label: 'Savings TVL', value: data.saveTvl }
          ],
          buttonCta: 'Start Saving',
          url: `?widget=savings`,
          buttonVariant: 'twilight-1',
          illustration: (
            <div className="h-full w-full px-3 tablet:px-0">
              <div className="relative flex h-full w-full flex-col">
                <div className="grow" />
                <Image
                  alt="Products save"
                  placeholder="blur"
                  src={bpi === 0 ? ProductsSavingsMobile : ProductsSavings}
                  className="absolute top-1/2 h-auto w-full -translate-y-1/2 rounded-[20px] tablet:left-0 tablet:top-full tablet:translate-x-8 tablet:translate-y-[calc(-100%+92px)] tablet:rounded-r-none tablet:rounded-bl-none desktop:static desktop:top-auto desktop:translate-x-10 desktop:translate-y-10 desktop:rounded-tl-[40px]"
                  quality={100}
                />
              </div>
            </div>
          )
        },
        {
          label: 'What is the Sky Savings Rate?',
          title: 'What is the Sky Savings Rate?',
          content: (
            <>
              <TextFeatureCard>
                The Sky Savings Rate is an automated token-accumulation mechanism of the decentralised Sky
                protocol that takes into account the effect of accumulated USDS compounded in real time.
              </TextFeatureCard>
              <TextFeatureCard>
                The Sky Savings Rate is variable, determined not by market factors but by Sky ecosystem
                governance through a process of decentralised onchain voting.
              </TextFeatureCard>
            </>
          ),
          buttonCta: 'Start Saving',
          url: `?widget=savings`,
          buttonVariant: 'twilight-1',
          illustration: (
            <div className="flex h-full w-full items-center justify-center py-6">
              <div className="relative h-full w-full">
                <Image
                  alt="What is Sky Savings Rate"
                  src={WhatIsSave}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </div>
          )
        },
        {
          label: 'How it works: sUSDS',
          title: 'How it works: sUSDS – your savings token',
          content: (
            <>
              <TextFeatureCard>
                When you supply USDS to the Sky Savings Rate module of the decentralised Sky Protocol, you
                receive sUSDS. These sUSDS tokens serve as a digital record of your USDS interaction with the
                module and any value accrued to your position.
              </TextFeatureCard>
              <TextFeatureCard>
                The Sky Protocol dynamically and automatically adds USDS tokens to the entire pool of USDS
                supplied to the module every few seconds, in accordance with the Sky Savings Rate. As a result
                of the tokens auto-accumulating in the pool over time, the value tends to accrue within the
                sUSDS you hold.
              </TextFeatureCard>
              <TextFeatureCard>
                When you choose to redeem your sUSDS for USDS—which you can do anytime—the total USDS you will
                receive will equal the amount you originally supplied, plus any additional USDS accumulated.
              </TextFeatureCard>
            </>
          ),
          buttonCta: 'Start Saving',
          url: `?widget=savings`,
          buttonVariant: 'twilight-1',
          illustration: (
            <div className="flex h-full w-full items-center justify-center py-6">
              <div className="relative h-full w-full">
                <Image
                  alt="How it works: sUSDS"
                  src={HowItWorks}
                  fill
                  className="object-contain"
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
