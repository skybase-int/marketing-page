import { motion, MotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { Heading, Text } from '@/app/components/Typography';
import { EmphasisHeading } from '@/app/components/EmphasisHeading';
import { useMemo, useRef, useState } from 'react';
import { UsdsCard } from '@/app/components/UsdsCard';
import { SkyCard } from '@/app/components/SkyCard';
import {
  TokensSequenceFrameDesktop,
  TokensSequenceFrameMobile,
  TokensSequenceFrameTablet
} from './TokensSequenceFrame';
import {
  tokensSectionProgress,
  opacityInOut,
  translateIn,
  translateOut,
  translateInOut,
  opacityIn
} from '@/app/components/tokens/constants';
import { useWindowDimensions } from '@/app/components/tokens/helpers';
import Image from 'next/image';
import CoinUsds from '@/public/coin_usds.png';
import CoinSky from '@/public/coin_sky.png';
import { BP, useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { useHeaderInView } from '@/app/hooks/useHeaderInView';
import { FetchedData } from '../fetchData';
import { usePathname } from 'next/navigation';
import { useAppContext } from '@/app/context/AppContext';

const useTokensSectionSpring = (mv: MotionValue) => useSpring(mv, { bounce: 0, damping: 20 });

const frameCount = 426;
const frames = Array.from({ length: frameCount }, (_, i) => `Frame ${i}`);
const framesIndexFormatted = frames.map((_, index) => index.toString().padStart(5, '0'));

export function Tokens({
  childrenRef,
  data
}: {
  childrenRef: React.RefObject<HTMLDivElement | null>;
  data: FetchedData;
}) {
  const [frameIndex, setFrameIndex] = useState(0);
  const { viewportHeight } = useWindowDimensions();
  const { bpi } = useBreakpointIndex();
  const { isSlowNetwork, isJsLoaded } = useAppContext();
  const isMobile = bpi <= BP.md;

  const targetRef = useRef(null);
  useHeaderInView(targetRef, 'light');
  const sectionFiveRef = useRef<HTMLDivElement>(null);
  const sectionFiveHeight = sectionFiveRef.current?.clientHeight;

  const { scrollYProgress: scrollYProgressRaw } = useScroll({
    layoutEffect: false,
    target: targetRef,
    offset: ['start start', 'end end'],
    container: childrenRef
  });

  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Use section five's variable height to calculate the effective range in which the transitions should happen so that
  // the last section always animates in at the top of the screen and has enough range to scroll if necessary
  const scrollYProgress = useTransform(
    scrollYProgressRaw,
    [
      0,
      viewportHeight && sectionFiveHeight
        ? (5 * viewportHeight - sectionFiveHeight) / (5 * viewportHeight)
        : 0.81
    ],
    [0, 0.81]
  );
  const springScrollYProgressTokens = useTokensSectionSpring(
    useTransform(scrollYProgress, [0, 0.79], [0, 1])
  );

  const { oneIn, oneOut, twoInOut, threeInOut, fourInOut, fiveIn } = tokensSectionProgress;

  const opacityOne = useTokensSectionSpring(
    useTransform(scrollYProgress, [...oneIn, ...oneOut], opacityInOut)
  );
  const yOne = useTokensSectionSpring(useTransform(scrollYProgress, oneIn, translateIn));
  const xOne = useTokensSectionSpring(useTransform(scrollYProgress, oneOut, translateOut));

  const opacityTwo = useTokensSectionSpring(useTransform(scrollYProgress, twoInOut, opacityInOut));
  const xTwo = useTokensSectionSpring(useTransform(scrollYProgress, twoInOut, translateInOut));

  const opacityThree = useTokensSectionSpring(useTransform(scrollYProgress, threeInOut, opacityInOut));
  const xThree = useTokensSectionSpring(useTransform(scrollYProgress, threeInOut, translateInOut));

  const opacityFour = useTokensSectionSpring(useTransform(scrollYProgress, fourInOut, opacityInOut));
  const xFour = useTokensSectionSpring(useTransform(scrollYProgress, fourInOut, translateInOut));

  const opacityFive = useTokensSectionSpring(useTransform(scrollYProgress, fiveIn, opacityIn));
  const xFive = useTokensSectionSpring(useTransform(scrollYProgress, fiveIn, translateIn));
  const opacityTokens = useTokensSectionSpring(
    useTransform(scrollYProgress, fiveIn, !isMobile ? [1, 1] : [1, 0])
  );

  useMotionValueEvent(springScrollYProgressTokens, 'change', latestValue => {
    const newFrameIndex = Math.round(latestValue * (frameCount - 2)) + 1;
    if (newFrameIndex !== frameIndex) {
      setFrameIndex(newFrameIndex);
    }
  });

  const yTokens = useTokensSectionSpring(
    useTransform(scrollYProgress, [0.7, 0.81], [0, bpi === BP['2xl'] ? -100 : bpi === BP.xl ? -60 : 270])
  );
  const xTokens = useTokensSectionSpring(
    useTransform(scrollYProgress, [0.7, 0.81], [0, bpi >= BP.xl ? -20 : -65])
  );

  const TokensSequenceFrame = useMemo(() => {
    if (bpi >= BP.xl) return TokensSequenceFrameDesktop;
    if (bpi === BP.md) return TokensSequenceFrameTablet;
    return TokensSequenceFrameMobile;
  }, [bpi]);

  const styleObj = !isMobile
    ? {
        // y: frameIndex === frameCount - 1 ? yTokens.get() - 10 : yTokens,
        y: yTokens.get() - (bpi === BP['2xl'] ? 0 : 48),
        x: xTokens
      }
    : { opacity: opacityTokens, x: 0, y: yTokens.get() - 48 };

  const Div = isJsLoaded ? motion.div : 'div';

  return (
    <div
      className={`relative ${
        isJsLoaded ? 'min-h-[500vh]' : 'min-h-[100vh]'
      } w-full overflow-clip px-3 tablet:px-5 desktop:px-10 desktop-xl:px-[60px]`}
      ref={targetRef}
    >
      {isJsLoaded && (
        <>
          <div className="hidden">
            {(isSlowNetwork === false ? frames : frames.slice(-1)).map((frame, index) => {
              const indexFrame = isSlowNetwork === false ? index : frameCount - 1;
              return (
                <TokensSequenceFrame
                  key={`${frame}-${bpi}`}
                  id={`${frame}-${bpi}`}
                  frameIndex={indexFrame}
                  formattedFrameIndex={framesIndexFormatted[indexFrame]}
                  className="coin-sequence-image"
                />
              );
            })}
          </div>
          <motion.div
            className="pointer-events-none sticky left-full top-12 z-20 ml-6 h-[400px] w-full tablet:ml-0 tablet:h-[589px] tablet:w-[589px] desktop:h-[810px] desktop:w-[810px] desktop-xl:top-0 desktop-xl:h-[1080px] desktop-xl:w-[1080px]"
            style={styleObj}
          >
            <motion.div
              className={`absolute left-0 top-0 flex h-full w-full justify-between tablet:py-[141px] tablet:pl-[15px] tablet:pr-[45px] desktop:py-[234px] desktop:pl-[25px] desktop:pr-[73px] desktop-xl:py-[312px] desktop-xl:pl-[33px] desktop-xl:pr-[100px] ${
                isMobile ? 'opacity-0' : frameIndex === frameCount - 1 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image src={CoinUsds} alt={'usds-token-logo'} className="max-w-fit" />
              <Image src={CoinSky} alt={'usds-token-logo'} className="max-w-fit" />
            </motion.div>

            {isHomePage && (
              <TokensSequenceFrame
                key="tokens"
                frameIndex={isSlowNetwork === false ? frameIndex : frameCount - 1}
                formattedFrameIndex={
                  framesIndexFormatted[isSlowNetwork === false ? frameIndex : frameCount - 1]
                }
                className={`h-full w-full ${
                  frameIndex === frameCount - 1 ? 'opacity-0' : 'opacity-100'
                } absolute left-0 top-[100px] tablet:top-[200px] desktop:top-0`}
              />
            )}
          </motion.div>
          <motion.div
            className="sticky left-0 top-full w-fit py-32 desktop:py-16"
            style={{ opacity: opacityOne, y: '-100%', x: xOne }}
          >
            <motion.div style={{ y: yOne }}>
              <EmphasisHeading
                text="Introducing"
                emphasisText="Sky tokens"
                textClassName="block"
                emphasisClassName="block"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="sticky left-0 top-full w-fit py-32 desktop:py-16"
            style={{ opacity: opacityTwo, y: '-100%', x: xTwo }}
          >
            <Heading>Accessible</Heading>
          </motion.div>
          <motion.div
            className="sticky left-0 top-full w-fit py-32 desktop:py-16"
            style={{ opacity: opacityThree, y: '-100%', x: xThree }}
          >
            <Heading>Powerful</Heading>
          </motion.div>
          <motion.div
            className="sticky left-0 top-full w-fit py-32 desktop:py-16"
            style={{ opacity: opacityFour, y: '-100%', x: xFour }}
          >
            <Heading>
              Ready <span className="block">when you are</span>
            </Heading>
          </motion.div>
        </>
      )}
      <Div
        ref={sectionFiveRef}
        className="sticky left-0 top-0 w-full py-28 desktop:flex desktop:justify-between desktop:py-20 desktop-xl:py-[60px]"
        style={{ opacity: opacityFive, x: xFive } as any}
      >
        <div className="mb-16 tablet:w-3/4 desktop:mb-0 desktop:mt-7 desktop:w-[363px] desktop-xl:mt-10 desktop-xl:w-[483]">
          <Text variant="p2" className="text-black/80">
            {/* TODO add etherscan links for USDS and SKY */}
            USDS and SKY are native currencies of the decentralized Sky Protocol. A dynamic duo, these tokens
            are the supercharged upgrades of DAI and MKR.
            <br />
            <br />
            Explore them to make the most of the Sky Protocol&apos;s next-level DeFi opportunities, including
            the Sky Savings Rate, Sky Token Rewards, and the Staking Engine.
            <br />
            <br />
            With Sky tokens, you remain in full control of your funds.
          </Text>
        </div>
        <div className="flex w-full flex-col gap-3.5 tablet:flex-row tablet:gap-5 desktop:w-[900px] desktop-xl:w-[1192px] desktop-xl:gap-6">
          <UsdsCard data={data} />
          <SkyCard data={data} />
        </div>
      </Div>
    </div>
  );
}
