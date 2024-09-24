import { StarVariantOne } from '@/app/components/icons/Stars';
import { Pill } from '@/app/components/ui/pill';
import Image from 'next/image';
import { cubicBezier, motion, type Variants } from 'framer-motion';
import { getSunriseDelay } from '@/app/constants';
import { heroPillOne, heroPillTwo, heroPillThree } from '@/app/components/PageTransition';
import { useEffect, useRef, useState } from 'react';
import { BP, useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';

export function HeroPills() {
  const { bpi } = useBreakpointIndex();
  const containerRef = useRef<HTMLDivElement>(null);
  const pillOneRef = useRef<HTMLDivElement>(null);
  const pillTwoRef = useRef<HTMLDivElement>(null);
  const pillThreeRef = useRef<HTMLDivElement>(null);

  const [pathVariants, setPathVariants] = useState<Variants>({});
  const [variant, setVariant] = useState<'animate' | 'hoverOne' | 'hoverTwo' | 'hoverThree'>('animate');

  const [openedPill, setOpenedPill] = useState<'one' | 'two' | 'three' | undefined>(undefined);

  useEffect(() => {
    const regenerateSvgPath = () => {
      if (containerRef.current && pillOneRef.current && pillTwoRef.current && pillThreeRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const pillOneRect = pillOneRef.current.getBoundingClientRect();
        const pillTwoRect = pillTwoRef.current.getBoundingClientRect();
        const pillThreeRect = pillThreeRef.current.getBoundingClientRect();

        const x1 = pillOneRect.x + pillOneRect.width / 2 + 2 - containerRect.x;
        const y1 = pillOneRect.y - containerRect.y;

        const x2 = pillTwoRect.x + pillTwoRect.width / 2 + 2 - containerRect.x;
        const y2 = pillTwoRect.y - containerRect.y;

        const x3 = pillThreeRect.x + pillThreeRect.width / 2 + 2 - containerRect.x;
        const y3 = pillThreeRect.y - containerRect.y;

        setPathVariants({
          animate: {
            d: `M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} Z`,
            transition: { duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) }
          },
          hoverOne: {
            d: `M ${x1 - 30} ${y1} L ${x2 + 50} ${y2 - 30} L ${x3 - 60} ${y3 + 20} Z`,
            transition: { duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) }
          },
          hoverTwo: {
            d: `M ${x1 - 30} ${y1 - 50} L ${x2 + 25} ${y2 + 70} L ${x3 + 70} ${y3} Z`,
            transition: { duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) }
          },
          hoverThree: {
            d: `M ${x1 - 30} ${y1 - 10} L ${x2} ${y2 + 40} L ${x3 - 30} ${y3 - 10} Z`,
            transition: { duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) }
          }
        });
        setVariant('animate');
      }
    };

    // Initial call to set path
    regenerateSvgPath();

    window.addEventListener('resize', regenerateSvgPath);
    return () => window.removeEventListener('resize', regenerateSvgPath);
  }, []);

  const isPillOpen = openedPill !== undefined;

  return (
    <div className="absolute left-0 top-0 z-0 h-full w-full" ref={containerRef}>
      {/* Prefetch pill images before they are shown to avoid flickering */}
      <div style={{ opacity: 0 }}>
        <Image
          src="/IllustrationEarnRewards.png"
          width={bpi === BP.sm ? 295 : bpi === BP.md ? 384 : 192}
          height={300}
          alt="Earn rewards"
        />
        <Image
          src="/IllustrationGetUsds.png"
          width={bpi === BP.sm ? 400 : bpi === BP.md ? 522 : 288}
          height={160}
          alt="Get USDS"
        />
        <Image
          src="/IllustrationSaveUsds.svg"
          width={bpi === BP.sm ? 267 : bpi === BP.md ? 348 : 192}
          height={136}
          alt="Save USDS"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, delay: getSunriseDelay() + 0.75 }}
      >
        <svg
          width="100vw"
          height="100vh"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-0 h-full w-full overflow-visible"
          fill="none"
        >
          <motion.path variants={pathVariants} animate={variant} stroke="#110C2D" strokeOpacity="0.05" />
          <motion.path
            variants={pathVariants}
            animate={variant}
            stroke="url(#paint0_radial_2042_27254)"
            strokeOpacity="0.5"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2042_27254"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1 305.406) rotate(-2.65837) scale(880.969 279.24)"
            >
              <stop stopColor="#110C2D" stopOpacity="0.2" />
              <stop offset="1" stopColor="#110C2D" stopOpacity="0.1" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
      <motion.div
        className="absolute -top-32 right-[5%] tablet:-top-32 desktop:-top-16 desktop:left-[75%] desktop:right-auto"
        variants={heroPillOne}
        initial={'initial'}
        animate={variant}
        ref={pillOneRef}
        onMouseEnter={() => !isPillOpen && setVariant('hoverOne')}
      >
        <StarVariantOne className="pointer-events-none absolute left-[112px] top-0 z-30 -translate-x-1/2 -translate-y-1/2" />
        <Pill
          title="Access Sky Token Rewards"
          href="features#rewards"
          content="Use USDS to access Sky Token Rewards that are easy to access and always in your control."
          illustration={
            <Image
              src="/IllustrationEarnRewards.png"
              width={bpi === BP.sm ? 295 : bpi === BP.md ? 384 : 192}
              height={300}
              alt="Earn rewards"
              className="translate-x-5 translate-y-4"
            />
          }
          value={'one'}
          openedPill={openedPill}
          setOpenedPill={setOpenedPill}
          expandedHeight={225}
          setVariant={setVariant}
        />
      </motion.div>
      <motion.div
        className="absolute left-0 top-[130%] tablet:left-3 tablet:top-2/3 desktop:left-6 desktop:top-[85%]"
        variants={heroPillTwo}
        initial={'initial'}
        animate={variant}
        ref={pillTwoRef}
        onMouseEnter={() => !isPillOpen && setVariant('hoverTwo')}
      >
        <StarVariantOne className="pointer-events-none absolute left-[61px] top-0 z-30 -translate-x-1/2 -translate-y-1/2" />
        <Pill
          title="Get USDS"
          href="features#upgrade"
          content="Upgrade your DAI to USDS, the new stablecoin of the decentralized Sky Protocol, offering the freedom to explore a universe of possibilities within the Sky ecosystem."
          illustration={
            <Image
              src="/IllustrationGetUsds.png"
              width={bpi === BP.sm ? 400 : bpi === BP.md ? 522 : 288}
              height={160}
              alt="Get USDS"
              className="translate-x-5 translate-y-4"
            />
          }
          value={'two'}
          openedPill={openedPill}
          setOpenedPill={setOpenedPill}
          expandedHeight={295}
          setVariant={setVariant}
        />
      </motion.div>
      <motion.div
        className="absolute right-0 top-[170%] tablet:left-[55%] tablet:right-auto tablet:top-[150%] desktop:left-[70%] desktop:top-[130%]"
        variants={heroPillThree}
        initial={'initial'}
        animate={variant}
        ref={pillThreeRef}
        onMouseEnter={() => !isPillOpen && setVariant('hoverThree')}
      >
        <StarVariantOne className="pointer-events-none absolute left-[66px] top-0 z-30 -translate-x-1/2 -translate-y-1/2" />
        <Pill
          title="Save USDS"
          href="features#savings"
          content="Use USDS to access the Sky Savings Rate and accumulate additional USDS. No minimum supply amount is required, and you always have control."
          illustration={
            <Image
              src="/IllustrationSaveUsds.svg"
              width={bpi === BP.sm ? 267 : bpi === BP.md ? 348 : 192}
              height={136}
              alt="Save USDS"
              className="translate-x-5 translate-y-4"
            />
          }
          value={'three'}
          openedPill={openedPill}
          setOpenedPill={setOpenedPill}
          expandedHeight={265}
          setVariant={setVariant}
        />
      </motion.div>
    </div>
  );
}
