import Image from 'next/image';
import { FeaturesPageCard, LiFeatureCard, TextFeatureCard } from '../FeaturesPageCard';
import ProductsSkyBridge from '@/public/products_skybridge.png';
import ProductsSkyBridgeMobile from '@/public/features-skylink-mobile.png';
import { useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { useRandomL2Name } from '@/app/hooks/useRandomL2Name';
import { ExternalLink } from '@/app/components/ExternalLink';
import { FetchedData } from '@/app/(main)/fetchData';
import { PopoverRateInfo } from '@/app/components/PopoverRateInfo';

export const ExpertCard = ({ data }: { data: FetchedData }) => {
  const { bpi, isLoading: isLoadingBreakpointIndex } = useBreakpointIndex();
  const randomL2Name = useRandomL2Name();

  return (
    <FeaturesPageCard
      id="expert"
      tabs={[
        {
          title: 'Access stUSDS tokens with USDS',
          content: (
            <>
              <TextFeatureCard>
                stUSDS is a token designed for eligible Sky Protocol expert users. It funds and supports
                liquidity for SKY stakers, encouraging more participation in SKY governance by active token
                holders, delegators and voters, leading to a more secure Ecosystem.
              </TextFeatureCard>
              <TextFeatureCard>
                When you supply USDS to the stUSDS module of the protocol, you fund SKY-back borrowing to
                access the stUSDS Rate <PopoverRateInfo type="stusds" /> and receive stUSDS tokens. The stUSDS
                tokens serve as a digital record of your USDS interaction with the stUSDS module and any value
                accrued to your position.
              </TextFeatureCard>
            </>
          ),
          stats: [
            { id: 'rate', label: 'StUSDS Rate', value: data.stusdsApy },
            { id: 'tvl', label: 'StUSDS TVL', value: data.stusdsTvl }
          ],
          buttonCta: 'Access Expert',
          url: `?widget=expert`,
          buttonVariant: 'azure-2',
          illustration: isLoadingBreakpointIndex ? null : (
            <Image
              alt="SkyBridge illustration"
              src={bpi === 0 ? ProductsSkyBridgeMobile : ProductsSkyBridge}
              className="pointer-events-none absolute top-1/2 w-full -translate-y-1/2 px-3 tablet:bottom-0 tablet:right-0 tablet:top-auto tablet:w-[160%] tablet:max-w-[160%] tablet:translate-x-8 tablet:translate-y-8 tablet:rounded-tl-[20px] tablet:px-0 desktop:translate-x-10 desktop:translate-y-10"
              quality={100}
            />
          )
        }
      ]}
    />
  );
};
