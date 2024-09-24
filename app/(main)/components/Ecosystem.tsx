import { Text } from '@/app/components/Typography';
import { EmphasisHeading } from '@/app/components/EmphasisHeading';
import { EcosystemBackground } from './EcosystemBackground';
import { ButtonArrow } from '@/app/components/ui/button';
import { useScroll, useTransform, motion, MotionValue, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import EcosystemStarsMobile from '@/public/EcosystemStarsMobile.png';
import EcosystemStarsTablet from '@/public/EcosystemStarsTablet.png';
import EcosystemStarsDesktop from '@/public/EcosystemStarsDesktop.png';
import { BP, useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { ExternalLink } from '@/app/components/ExternalLink';
import { useHeaderInView } from '@/app/hooks/useHeaderInView';

const FirstSectionBackgrounds = ({ opacity }: { opacity: MotionValue<number> }) => {
  const [videoHeight, setVideoHeight] = useState<string>('');
  const [videoWidth, setVideoWidth] = useState<string>('');

  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      setVideoWidth((windowHeight < windowWidth * (9 / 16) ? windowWidth : windowHeight * (16 / 9)) + 'px');
      setVideoHeight((windowHeight < windowWidth * (9 / 16) ? windowWidth * (9 / 16) : windowHeight) + 'px');
    };

    // Initial call to set dimensions
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Play video when in view
  useEffect(() => {
    if (isVideoInView) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isVideoInView]);

  return (
    <motion.div className="absolute left-0 top-0 h-full w-full" style={{ opacity }}>
      <video
        loop
        muted
        playsInline
        ref={videoRef}
        className="absolute right-0 top-0 translate-x-[10%] translate-y-[20%] tablet:translate-y-[10%] desktop:translate-x-0 desktop:translate-y-0"
        style={{ minWidth: videoWidth, minHeight: videoHeight }}
      >
        <source src="/EcosystemBackground.mp4" type="video/mp4" />
        {/* Fallback background */}
        <EcosystemBackground className="absolute -left-[140%] top-3/4 w-[400vw] -translate-y-1/2 tablet:-left-[60%] tablet:top-[60%] tablet:w-[250vw] desktop:-left-[10%] desktop:top-1/2 desktop:w-[180vw]" />
      </video>
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-black from-[20.71%] to-black/0 to-[47.32%] desktop:h-1/4" />
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-black from-[-50%] to-black/0 to-[70%]" />
      {/* This overlay layer prevents the video flickering when scrolling */}
      <div className="absolute left-0 top-0 h-full w-full mix-blend-overlay" />
    </motion.div>
  );
};

export function Ecosystem({ childrenRef }: { childrenRef: React.RefObject<HTMLDivElement> }) {
  const { bpi } = useBreakpointIndex();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: targetRef,
    container: childrenRef
  });

  const translateYFirstSection = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const opacityFirstSection = useTransform(scrollYProgress, [0.1, 0.5], [1, 0.5]);
  const translateYSecondSection = useTransform(scrollYProgress, [0.3, 0.75], ['30%', '0%']);
  const opacitySecondSection = useTransform(scrollYProgress, [0.3, 0.75], [0, 1]);

  const EcosystemStars =
    bpi === BP.md ? EcosystemStarsTablet : bpi > BP.md ? EcosystemStarsDesktop : EcosystemStarsMobile;

  useHeaderInView(targetRef, 'dark');

  return (
    <div className="relative h-[200vh] w-full overflow-clip" ref={targetRef}>
      {/* First section */}
      <motion.div
        className="sticky left-0 top-0 h-screen w-full bg-dark p-3 pt-16 tablet:p-5 tablet:pt-20 desktop:p-10 desktop:pt-[120px] desktop-xl:p-[160px] desktop-xl:pt-[160px]"
        style={{ y: translateYFirstSection }}
      >
        <FirstSectionBackgrounds opacity={opacityFirstSection} />
        {/* Content first section */}
        <motion.div
          // Reduce the height in desktop or desktop-xl if overlapping with the second section occurs
          className="relative w-full tablet:max-w-[480px] desktop:flex desktop:h-[75vh] desktop:max-w-none desktop:flex-col desktop:flex-wrap desktop:items-start desktop:gap-y-[60px] desktop-xl:h-[70vh] desktop-xl:gap-y-16"
          style={{ opacity: opacityFirstSection }}
        >
          <div className="desktop:max-w-[min(50%,593px)] desktop-xl:max-w-[min(50%,797px)]">
            <EmphasisHeading
              text="Engines of scalability in the ecosystem."
              emphasisText="Sky stars."
              reverse={true}
              textClassName="text-white desktop:tracking-[-3.28px]"
              emphasisClassName="text-highlightDarkBG"
            />
          </div>
          <div className="mt-8 w-full desktop:mt-0 desktop:max-w-[min(50%,593px)] desktop-xl:max-w-[min(50%,797px)] desktop-xl:pr-[108px]">
            <Text variant="p3-medium" className="text-white/80">
              Sky Stars are independent decentralised projects within the Sky ecosystem. They are designed to
              enable focused, fast-moving innovation and expansion, and serve as gateways to the Sky Protocol.
              <br />
              <br />
              Each Star can opt to have its own governance token, which users of the non-custodial Sky.money
              app may become eligible to receive as Sky Token Rewards; its own treasury; and its own
              governance processes and community.
              <br />
              <br />
              All Stars shall be aligned with the overarching framework and goals of Sky.
              <br />
              Spark, the very first Sky Star, is already a top DeFi lending platform. It will launch
              officially soon.
            </Text>
            {/* <div className="mt-10">
              <ButtonArrow variant="twilight-1">Learn about Stars</ButtonArrow>
            </div> */}
          </div>
        </motion.div>
      </motion.div>
      {/* Second section */}
      <div className="relative left-0 flex h-screen w-full items-center p-3 tablet:p-5 tablet:pr-16 desktop:p-10 desktop-xl:p-[160px]">
        {/* Earth-like horizon background and glow second section */}
        <div className="absolute left-1/2 top-[-6%] h-[1000vh] w-[600vw] -translate-x-1/2 scale-x-150 rounded-full bg-[rgba(122,119,255,0.4)] blur-[100px]" />
        <div className="absolute left-1/2 top-[-6%] h-[1000vh] w-[600vw] -translate-x-1/2 scale-x-150 rounded-full bg-dark" />
        {/* Content second section */}
        <motion.div
          className="relative w-full tablet:max-w-[680px] desktop:max-w-[1090px] desktop-xl:max-w-[1395px]"
          style={{ y: translateYSecondSection, opacity: opacitySecondSection }}
        >
          {/* Stars in background */}
          <Image
            src={EcosystemStars}
            alt="Stars"
            className="absolute left-full top-0 -translate-x-full -translate-y-12 tablet:-translate-x-3/4 desktop:-translate-y-20"
          />
          <div className="relative">
            <EmphasisHeading
              text="Sky ecosystem governance:"
              emphasisText="Participate with confidence"
              textClassName="desktop:tracking-[-3.28px] text-white"
              emphasisClassName="w-1/2 tablet:w-full text-highlightDarkBG"
            />
            <div className="mb-20 mt-8 flex flex-col gap-16 tablet:mb-0 tablet:gap-10 tablet:pr-[120px] desktop:mt-16 desktop:flex-row desktop:gap-14 desktop:pr-[245px]">
              <div>
                <Text variant="p2" className="text-white/80">
                  Governance of the decentralised Sky Protocol and ecosystem is shared among a broad and
                  diversified community comprising individuals and entities from around the world. Sky
                  ecosystem governance token holders support the project by participating in a system of
                  polling and decentralised onchain voting. Voters adhere to the Sky Atlas.
                </Text>
              </div>
              <div>
                <Text variant="p2" className="text-white/80">
                  <span className="text-white">What is the Sky Atlas?</span>
                  <br />
                  <br />
                  The Sky Atlas is the unique and comprehensive set of rules behind Sky ecosystem governance.
                  It is a work in progress that will continue to be refined through an improvement proposal
                  and decentralised voting framework until Sky ecosystem governance determines that
                  modifications are no longer necessary. The Sky Atlas will eventually exist as a nested tree
                  of enduring documents that serve the evolving needs of the ecosystem.
                </Text>
                <div className="mt-8">
                  <ExternalLink href="https://mips.makerdao.com/mips/details/MIP101#ecosystem-intelligence">
                    <ButtonArrow variant="twilight-1">To the Atlas</ButtonArrow>
                  </ExternalLink>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
