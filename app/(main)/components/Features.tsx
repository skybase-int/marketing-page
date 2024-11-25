import Image from 'next/image';
import { EmphasisHeading } from '@/app/components/EmphasisHeading';
import { Heading, List, Text } from '@/app/components/Typography';
import { ButtonArrow } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { cn, getTermsLink } from '@/app/lib/utils';
import { FeatureCard } from '../../components/FeatureCard';
import { Transition } from '@/app/components/Transition';
import { useAutoClose } from '@/app/hooks/useAutoClose';
import { IconButtonPlus } from '@/app/components/ui/button-client';
import FeaturesSkyBackground from '@/public/FeaturesBackground.png';
import { BP, useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { InternalLink } from '@/app/components/InternalLink';
import { ArrowRight } from '@/app/components/icons/ArrowRight';
import { useState, useEffect, useRef } from 'react';
import { Banner } from '@/app/components/Banner';
import { FetchedData } from '../fetchData';
import { ExternalLink } from '@/app/components/ExternalLink';
import { PopoverRateInfo } from '@/app/components/PopoverRateInfo';
import { PopoverSealInfo } from '@/app/components/PopoverSealInfo';
import { useSkyUrl } from '@/app/hooks/useSkyUrl';
import { useHeaderInView } from '@/app/hooks/useHeaderInView';

const FeatureCardStats = ({
  APY,
  TVL,
  APYDescription,
  TVLDescription,
  className,
  type,
  cardWidth,
  isMobile
}: {
  APY: string;
  TVL: string;
  APYDescription: string;
  shortenedAPYDescription?: string;
  TVLDescription: string;
  className?: string;
  type?: 'ssr' | 'str';
  cardWidth: number;
  isMobile?: boolean;
}) => {
  return (
    <div className={className}>
      <div className="flex flex-col justify-center space-y-2 desktop-xl:space-y-3">
        {APY && (
          <div className="flex w-full" style={isMobile ? {} : { maxWidth: `${cardWidth * 0.42}px` }}>
            <Heading tag="h6">
              <span>{APY}</span> <span className="text-black/40">{APYDescription}</span>
            </Heading>
            <div className="flex pl-1">{type && <PopoverRateInfo type={type} />}</div>
          </div>
        )}
        {TVL && (
          <Heading tag="h6">
            <span>{TVL}</span>{' '}
            <span className="text-black/40">{cardWidth < 596 ? 'TVL' : TVLDescription}</span>
          </Heading>
        )}
      </div>
    </div>
  );
};

const FeatureCardLg = ({
  descriptionElement,
  title,
  emphasis,
  postTextElement,
  postTitle,
  className,
  buttonText,
  buttonVariant,
  imgSrc,
  mobileImgSrc,
  featurePageId,
  APY,
  TVL,
  type,
  APYDescription,
  TVLDescription,
  href,
  isAlpha = false
}: {
  descriptionElement: React.ReactNode;
  title: string;
  emphasis: string;
  postTitle: string;
  postTextElement: React.ReactNode;
  className: string;
  buttonText: string;
  buttonVariant: any;
  imgSrc: any;
  mobileImgSrc: any;
  featurePageId: string;
  APY: string;
  TVL: string;
  type?: 'ssr' | 'str';
  APYDescription: string;
  TVLDescription: string;
  href: string;
  isAlpha?: boolean;
}) => {
  const { state, setState, setIsHover } = useAutoClose({ delay: 60000 });
  const { bpi, isLoading: bpiLoading } = useBreakpointIndex();
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerElement = cardRef.current;
    if (!containerElement) return;
    const updateSize = () => {
      setCardWidth(containerElement.offsetWidth);
    };
    updateSize();

    // Create observer to watch for changes in card size
    const observer = new ResizeObserver(updateSize);
    observer.observe(containerElement);

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      className={cn(
        'relative flex h-[740px] overflow-hidden border border-0 p-0 tablet:h-[560px] desktop:h-[600px] desktop-xl:h-[820px]',
        className
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Transition
        state={state}
        postTransitionView={
          <div
            className={cn(
              className,
              'flex h-full max-w-[520px] flex-col justify-between p-5 text-white tablet:pt-6 desktop:p-7 desktop:pt-11 desktop-xl:max-w-[600px] desktop-xl:p-10'
            )}
          >
            <div className="space-y-3">
              <Heading tag="h5">{postTitle}</Heading>
              <div className="text-white/80">{postTextElement}</div>
              <div>
                <InternalLink href={`/features#${featurePageId}`}>
                  <div className="flex items-center gap-1">
                    <Text variant="ui-medium">Learn more</Text>
                    <ArrowRight className="h-[12px] w-[12px] pt-0.5" />
                  </div>
                </InternalLink>
              </div>
            </div>
          </div>
        }
      >
        <div className="p-5 tablet:pb-0 tablet:pr-0 tablet:pt-6 desktop:pl-7 desktop:pt-11 desktop-xl:pl-10 desktop-xl:pt-10">
          <div className="mb-3 mr-8 flex flex-row flex-wrap-reverse justify-between">
            <EmphasisHeading reverse text={title} emphasisText={emphasis} tag="h5" />
            {isAlpha && (
              <div style={{ width: 'fit-content' }}>
                <Text
                  variant="ui-small"
                  className="mb-3 rounded-full bg-aurora-3 px-5 py-3.5 text-white/80 desktop:-mt-3"
                >
                  Alpha launch
                </Text>
              </div>
            )}
          </div>
          <div className="flex flex-col tablet:flex-row tablet:space-x-8">
            <div className="flex h-full w-full flex-col justify-between pb-7 tablet:w-1/2 desktop:w-[60%] desktop-xl:w-[50%]">
              <div className="space-y-3 tablet:mr-7">{descriptionElement}</div>
            </div>
            <div className="flex w-full justify-center tablet:absolute tablet:bottom-0 tablet:right-0 tablet:block tablet:w-fit desktop:w-[35%] 2xl:w-fit">
              <Image
                src={bpi === BP.sm ? mobileImgSrc : imgSrc}
                width={bpiLoading ? 0 : bpi > BP.xl ? 457 : 295}
                height={bpiLoading ? 0 : bpi > BP.xl ? 849 : 621}
                alt=""
              />
            </div>
            <FeatureCardStats
              APY={APY}
              TVL={TVL}
              cardWidth={cardWidth}
              APYDescription={APYDescription}
              TVLDescription={TVLDescription}
              isMobile={true}
              className="mt-7 block tablet:hidden"
              type={type}
            />
          </div>
        </div>
        <FeatureCardStats
          APY={APY}
          TVL={TVL}
          APYDescription={APYDescription}
          TVLDescription={TVLDescription}
          cardWidth={cardWidth}
          className="absolute left-5 hidden tablet:bottom-28 tablet:block desktop:bottom-28 desktop:left-7 desktop-xl:bottom-36 desktop-xl:left-10"
          type={type}
        />
      </Transition>
      <div className="absolute bottom-5 left-5 z-[999] flex gap-2 desktop:bottom-7 desktop:left-7 desktop-xl:bottom-10 desktop-xl:left-10">
        <IconButtonPlus
          variant={buttonVariant}
          onClick={() => setState(state === 'open' ? 'close' : 'open')}
          isOpen={state === 'open'}
        />
        <ExternalLink href={href} noStyle>
          <ButtonArrow variant={buttonVariant}>{buttonText}</ButtonArrow>
        </ExternalLink>
      </div>
    </Card>
  );
};

const LeadCard = ({ className }: { className: string }) => {
  const TERMS_LINK = getTermsLink();

  return (
    <Card className={cn(className, 'flex h-full flex-col gap-4 border-none bg-transparent p-3')}>
      <div className="flex-grow">
        <Heading tag="h3" className="mt-9 desktop:mt-14">
          Explore the Sky.money&nbsp;app
        </Heading>
        <Text variant="p3" className="mt-3 tablet:mt-4 desktop:mt-5 desktop-xl:mt-6">
          Sky.money is a non-custodial gateway to the decentralised Sky Protocol. <br />
          It is accessible to eligible users 24/7.
        </Text>
      </div>
      <Banner title={TERMS_LINK[0].name} url={TERMS_LINK[0].url} />
    </Card>
  );
};

const FeaturesBackground = () => (
  <div className="absolute inset-0 -z-20">
    <Image src={FeaturesSkyBackground} alt="Grayscale sky background" sizes="100vw" fill className="-z-20" />
    <div
      className="absolute -inset-1 -z-10 mix-blend-hard-light"
      // Gradient background
      style={{
        background:
          'linear-gradient(178deg, #FFF1FE -10.1%, #FFEBC4 6.08%, #FDB4FF 27.26%, #7F42FF 48.43%, #5AEBFF 64.61%, #FFF 90.79%)'
      }}
    />
    {/* Diffused white shapes */}
    <div className="absolute left-0 top-0 -z-10 h-[100px] w-full bg-gradient-to-b from-white to-white/0" />
    <div className="absolute left-0 top-0 -z-10 hidden h-[400px] w-full -translate-y-1/2 blur-[100px] desktop:block">
      <div className="h-full w-1/4 rounded-full bg-white" />
      <div className="absolute left-1/3 top-1/2 h-1/3 w-1/2 -translate-x-1/3 -translate-y-1/3 bg-white" />
      <div className="absolute -right-52 top-0 h-full w-1/3 bg-white" />
    </div>
  </div>
);

export function HomepageFeatures({ data }: { data: FetchedData }) {
  const targetRef = useRef(null);
  useHeaderInView(targetRef, 'light');
  const { baseUrl } = useSkyUrl();
  const soonSectionClassName = 'h-[600px] tablet:h-[520px] desktop:h-[740px] desktop-xl:h-[780px]';

  return (
    <div ref={targetRef} className="relative h-full w-full overflow-hidden pt-5 desktop:pt-20">
      <FeaturesBackground />
      <div className="mb-5 flex w-full flex-col px-3 tablet:mb-8 tablet:w-full tablet:px-5 desktop:mb-20 desktop:px-9 desktop-xl:px-12">
        <EmphasisHeading
          text="Your new"
          emphasisText="favorite app"
          afterText="is here"
          tag="h1"
          textClassName="text-balance"
        />
        <div className="my-3 flex flex-col tablet:mb-4 tablet:mt-5 desktop:mt-6 desktop:flex-row desktop:items-center desktop:space-x-4 desktop-xl:mt-8">
          <Text variant="p3" className="mb-4 desktop:mb-0">
            Do more with your funds. Use Sky.money to experience the powerful features of the decentralized
            Sky Protocol, without giving up control.
          </Text>
          <InternalLink href="/features">
            <ButtonArrow variant="aurora-3" size="sm">
              View features
            </ButtonArrow>
          </InternalLink>
        </div>
      </div>
      {/* Container */}
      <div className="tablet:grid-rows-auto grid-rows-auto desktop:grid-rows-auto mb-24 grid auto-rows-min grid-cols-1 gap-5  p-1.5 tablet:grid-cols-2 tablet:p-2.5 desktop:gap-y-10 desktop:p-5 desktop-xl:p-10">
        {/* Section 1 */}
        <Card
          variant="glass"
          className="col-span-1 grid grid-cols-1 gap-5 rounded-3xl p-4 tablet:col-span-2 tablet:grid-cols-2"
        >
          <LeadCard className="col-span-1 tablet:col-span-1" />
          <FeatureCard
            href={`${baseUrl}/?widget=upgrade`}
            descriptionElement={
              <Text variant="p3">
                Unlock all the Sky Protocol has to offer by easily and instantly upgrading your DAI and MKR.
              </Text>
            }
            postTextElement={
              <Text variant="p2">
                Upgrade your DAI to USDS to access the many features of the decentralised Sky Protocol,
                including Sky Token Rewards and the Sky Savings Rate.
                <br />
                <br />
                Upgrade MKR to SKY to use it in the future to accumulate Activation Token Rewards in the form
                of USDS and various Sky Star tokens, and to participate in Sky ecosystem decentralised onchain
                governance.
                <br />
                <br />
                Upgrading is optional.
              </Text>
            }
            imgSrc="/products_upgrade.png"
            buttonVariant="sunset-3"
            buttonText="Upgrade"
            emphasis="Upgrade"
            title="to USDS and SKY"
            className="col-span-1 h-[500px] overflow-y-auto"
            cardClassName="col-span-2 tablet:col-span-1"
            featurePageId="upgrade"
          />
        </Card>

        {/* Section 2 */}
        <FeatureCardLg
          href={`${baseUrl}/?widget=rewards`}
          descriptionElement={
            <Text variant="p3">
              Use USDS to access Sky Token Rewards and support Sky ecosystem projects.
              <br />
              <br />
              No minimum USDS supply amount required; withdraw anytime.
              <br />
              <br />
              The Sky Token Rewards rate is variable, dependent upon several factors, including the issuance
              rate of each Sky Token Reward.
              <br />
              <br />
              With Sky, you always remain in full control of your funds.
            </Text>
          }
          postTitle="Rewards"
          postTextElement={
            <Text variant="p2">
              Today, you can supply USDS to the Sky Token Rewards (STRs) module of the Sky Protocol to get Sky
              Token Rewards in the form of SKY governance tokens.
              <br />
              <br />
              Subject to governance approval, you&apos;ll soon be able to use USDS to access Sky Token Rewards
              in the form of Sky Star tokens.
              <br />
              <br />
              The Sky Token Rewards rate is variable, dependent upon several factors, including the issuance
              rate of each Sky Token Reward, which is determined by Sky ecosystem governance.
              <br />
              <br />
              With Sky.money, it&apos;s easy to build a diversified Sky Token Rewards portfolio while always
              remaining in control of your funds.
            </Text>
          }
          imgSrc="/products_rewards.png"
          mobileImgSrc="/products_rewards_mobile.png"
          buttonVariant="aurora-3"
          buttonText="Get STRs"
          emphasis="Access Sky Token Rewards"
          title="with USDS"
          className="col-span-1 tablet:col-span-2 desktop:col-span-1"
          featurePageId="rewards"
          APY={data.rewardsApy}
          TVL={data.rewardsTvl}
          type="str"
          APYDescription="With: USDS Get: SKY — Sky Token Rewards Rate"
          TVLDescription="Sky Token Rewards TVL"
        />
        <FeatureCardLg
          href={`${baseUrl}/?widget=savings`}
          descriptionElement={
            <Text variant="p3">
              Use USDS to access the Sky Savings Rate (SSR) and accumulate additional USDS over time.
              <br />
              <br />
              No minimum USDS supply amount is required; withdraw anytime.
              <br />
              <br />
              The Sky Savings Rate is variable, determined by ecosystem governance through a process of
              decentralised onchain voting.
              <br />
              <br />
              With Sky, you always remain in full control of your savings.
            </Text>
          }
          postTitle="Savings"
          postTextElement={
            <Text variant="p2">
              Supply USDS to the Sky Savings Rate module of the Sky Protocol to access the Sky Savings Rate
              and accumulate additional USDS over time. Start in seconds; no minimum supply amount is
              required.
              <br />
              <br />
              Tap into Sky and the unique power of the blockchain to always remain in full control of your
              money.
            </Text>
          }
          imgSrc="/products_savings.png"
          mobileImgSrc="/products_savings_mobile.png"
          buttonVariant="aurora-2"
          buttonText="Start Saving"
          emphasis="Save"
          title="USDS"
          className="col-span-1 tablet:col-span-2 desktop:col-span-1"
          featurePageId="savings"
          APY={data.saveApy}
          TVL={data.saveTvl}
          type="ssr"
          APYDescription="SSR Rate"
          TVLDescription="Sky Savings Rate TVL"
        />
        <FeatureCardLg
          href={`${baseUrl}/?widget=trade`}
          descriptionElement={
            <Text variant="p3">
              Trade popular tokens for USDS and SKY, quickly and simply, utilising smart contracts on the
              blockchain instead of relying on centralised entities. Trades are powered by{' '}
              <ExternalLink href="https://swap.cow.fi/" className="text-black">
                CoW Swap
              </ExternalLink>
              .
            </Text>
          }
          postTextElement={
            <>
              <Text variant="p2" className="mb-4 desktop:mb-[18px] desktop-xl:mb-[20px]">
                Directly trade popular tokens for Sky ecosystem tokens at current market prices.
                <br />
              </Text>
              <ul className="list-disc pl-7">
                <li>
                  <Text variant="p2">
                    Trade USDC, USDT, ETH and SKY for USDS, and vice versa. Once you have USDS, you can use it
                    to access Sky Token Rewards and to access the Sky Savings Rate to accumulate more USDS.
                  </Text>
                </li>
                <li>
                  <Text variant="p2">
                    Trade USDC, USDT, ETH and USDS for SKY, and vice versa. Subject to governance approval,
                    you’ll soon be able to use SKY to get Activation Token Rewards and vote on proposed
                    changes and additions to the Sky Protocol.
                  </Text>
                </li>
              </ul>
            </>
          }
          imgSrc="/products_trade.png"
          mobileImgSrc="/products_trade_mobile.png"
          buttonVariant="twilight-3"
          buttonText="Start Trading"
          emphasis="Trade"
          title="crypto for USDS"
          postTitle="Trade crypto for USDS"
          className="col-span-1 h-[500px] overflow-y-auto tablet:col-span-2 tablet:h-[600px] desktop:col-span-1"
          featurePageId="trade"
          APY=""
          TVL=""
          APYDescription=""
          TVLDescription=""
        />
        <FeatureCardLg
          href={`${baseUrl}/?widget=seal`}
          descriptionElement={
            <Text variant="p3">
              Supply MKR or SKY tokens to the Seal Engine of the Sky Protocol to create a position and access
              Seal Rewards.
              <br />
              <br />
              Use your sealed MKR or SKY to delegate <PopoverSealInfo type="delegate" /> your Sky governance
              voting rights, as collateral to borrow USDS, or to further support the Sky project’s
              decentralisation and security. All positions automatically access rewards, as per the protocol’s
              design, when certain parameters determined by Sky ecosystem governance are met.
              <br />
              <br />
              You can seal or unseal your tokens—and claim your rewards—at any time. Unsealing requires
              payment of an exit fee <PopoverSealInfo type="exitFee" />.
            </Text>
          }
          postTitle="Seal Engine"
          postTextElement={
            <>
              <Text variant="p2">
                The MKR or SKY tokens that you supply to the Seal Engine are sealed behind an exit fee{' '}
                <PopoverSealInfo type="exitFee" className="z-[1000]" /> in order to provide access to Seal
                Rewards and encourage a deeper commitment to Sky ecosystem governance.
                <br />
                <br />
                Your sealed MKR or SKY enables you to create one or more positions through which you access
                the rewards. You can:
                <br />
                <br />
                <List tag="ol" variant="ordered">
                  <li>
                    <Text variant="p2">
                      Borrow USDS against your supplied MKR or SKY{' '}
                      <PopoverSealInfo type="borrow" className="z-[1000]" />
                    </Text>
                  </li>
                  <li>
                    <Text variant="p2">
                      Transfer the voting power of your supplied MKR or SKY tokens to a delegate{' '}
                      <PopoverSealInfo type="delegate" className="z-[1000]" /> of your choosing or a contract
                      that you own.
                    </Text>
                  </li>
                  <li>
                    <Text variant="p2">Seal your tokens and continue to collect rewards</Text>
                  </li>
                </List>
                <br />
                Your MKR or SKY tokens, as well as any rewards that you accumulate, are supplied to a
                non-custodial smart contract, which means that no intermediary takes custody of those tokens.
                With Sky, you always remain in control of your funds.
              </Text>
            </>
          }
          imgSrc="/products_seal_1.png"
          mobileImgSrc="/products_seal_1_mobile.png"
          buttonVariant="twilight-2"
          buttonText="Seal your MKR"
          emphasis="Access Seal rewards"
          title="via the Seal Engine"
          className="col-span-1 tablet:col-span-2 desktop:col-span-1 desktop:mb-32 desktop-xl:mb-0"
          featurePageId="seal" // TODO: Check it works
          APY=""
          TVL="" // TODO:
          type="ssr" // TODO:
          APYDescription=""
          TVLDescription=""
          // TVLDescription="Seal Engine TVL"
          isAlpha
        />

        {/* Section 4 */}
        <Card
          variant="glass"
          className="col-span-1 grid grid-cols-1 gap-5 rounded-3xl border p-4 tablet:col-span-2 desktop:grid-cols-2"
        >
          <FeatureCard
            href=""
            cardClassName={soonSectionClassName}
            descriptionElement={
              <Text variant="p3">
                Activation is on the way.
                <br />
                <br />
                Subject to governance approval, you&apos;ll be able to supply SKY tokens to the Activation
                module of the decentralised Sky Protocol to begin accumulating Activation Token Rewards in the
                form of USDS or various Sky Star tokens—you choose.
                <br />
                <br />
                Activate or Deactivate your SKY anytime, with no restrictions or fees. With Sky.money, you
                always remain in control of funds.
              </Text>
            }
            postTextElement={
              <Text variant="p2">
                When you supply SKY tokens to the Activation module, you begin to accumulate Activation Token
                Rewards over time in the form of USDS or Sky Star tokens—you choose.
                <br />
                <br />
                SKY supplied to Activation Rewards does not support delegation or voting.
                <br />
                <br />
                You can Activate or Deactivate your SKY anytime, with no restrictions or fees. With Sky.money,
                you always remain in control of funds.
              </Text>
            }
            imgSrc="/features-activation.png"
            imgClassname="-translate-y-[20%]"
            buttonVariant="azure-2"
            emphasis="Activation"
            title="Get rewards with"
            reverse={false}
            isNotLaunched={true}
            isMediumSize={true}
            className="col-span-1 tablet:col-span-2 desktop:col-span-1"
            featurePageId="activation"
          />
          <FeatureCard
            href=""
            cardClassName={soonSectionClassName}
            descriptionElement={
              <Text variant="p3">
                Seamlessly connect all of your Ethereum-based Sky Protocol tokens and features to supported L2
                networks.
                <br />
                <br />
                The implementation of Skylink is subject to governance approval.
              </Text>
            }
            postTextElement={
              <Text variant="p2">
                SkyLink will enhance your ability to manage and leverage your digital funds efficiently by
                seamlessly connecting all of your Ethereum-based Sky Protocol tokens and features to supported
                L2 networks.
                <br />
                <br />
                If you&apos;ve shied away from the Ethereum blockchain due to the high price of gas, SkyLink
                will open the door to lower-cost platforms that not only offer access to USDS, SKY, DAI, MKR,
                Sky Star tokens, and the Sky Savings Rate, but also enable access to Sky Token Rewards.
              </Text>
            }
            imgSrc="/products_skybridge.png"
            buttonVariant="azure-2"
            title="Connect with"
            emphasis="SkyLink"
            isNotLaunched={true}
            isMediumSize={true}
            reverse={false}
            className="col-span-1"
            featurePageId="skylink"
          />
        </Card>
      </div>
    </div>
  );
}
