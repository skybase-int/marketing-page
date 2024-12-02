'use client';

import { features } from '../featuresData';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FeaturesMainBackground } from './FeaturesMainBackground';
import { AnchorButton } from '@/app/components/ui/anchor';
import { IconVariantEnum } from '@/app/components/icons/VariantIcon';
import { useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';
import { InternalLink } from '@/app/components/InternalLink';
import { useHeaderInView } from '@/app/hooks/useHeaderInView';
import { Banner } from '@/app/components/Banner';
import { FetchedData } from '../../fetchData';
import { getTermsLink } from '@/app/lib/utils';

export function FeaturesMain({
  childrenRef,
  data,
  marginTopPx
}: {
  childrenRef: React.RefObject<HTMLDivElement>;
  data: FetchedData;
  marginTopPx?: number;
}) {
  const { bpi } = useBreakpointIndex();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, container: childrenRef, layoutEffect: false });
  // const smoothScrollYProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [activeIndex, setActiveIndex] = useState(0);

  const divRef = useRef(null);
  useHeaderInView(divRef, 'light');

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    setActiveIndex(Math.min(Math.floor(latest * features.length), features.length - 1));
  });

  const TERMS_LINK = getTermsLink();

  //Scroll to anchor tag on page load
  //Without this, clicking on a desktop anchor tag from another page doesn't work
  useEffect(() => {
    setTimeout(() => {
      const hash = window.location.hash.substring(1); // remove #
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 0);
  }, []);

  //update url hash to match active index
  useEffect(() => {
    if (features[activeIndex]) {
      setTimeout(() => {
        window.history.replaceState(null, '', `#${features[activeIndex].id}`);
      }, 1);
    }
  }, [activeIndex]);

  const gradientParts = [
    'linear-gradient(180deg, #A273FF -1.21%, #4331E9 100%)',
    'linear-gradient(180deg, #4331E9 0%, #6D28FF 100%)',
    'linear-gradient(180deg, #6D28FF 0%, #E763FC 100%)',
    'linear-gradient(180deg, #E763FC 0%, #FDA998 100%)',
    'linear-gradient(180deg, #FDA998 0%, #F77BFA 100%)',
    'linear-gradient(180deg, #F77BFA 0%, #4331E9 100%)',
    'linear-gradient(180deg, #4331E9 0%, #00DDFB 100%)'
  ];

  return (
    <>
      <div
        ref={divRef}
        className="relative w-full overflow-clip"
        style={{ marginTop: marginTopPx ? `${marginTopPx}px` : undefined }}
      >
        <div
          className="fixed left-0 top-0 hidden h-screen w-screen desktop:block"
          style={{ background: gradientParts[activeIndex] }}
        />
        {/* desktop anchors with absolute positions for each feature, one screen height apart */}
        {bpi >= 2 &&
          features.map((feature, index) => (
            <div
              key={'anchor-' + feature.id}
              id={feature.id}
              style={{ position: 'absolute', top: `${index * 100}vh` }}
            />
          ))}
        <FeaturesMainBackground />
        {/* Full page container */}
        <div className="relative flex gap-5 px-3 tablet:px-5 desktop:pr-10 desktop-xl:gap-20 desktop-xl:pl-[143px] desktop-xl:pr-[247px]">
          {/* Nav buttons column */}
          <div className="sticky left-0 top-0 hidden h-screen flex-col justify-center gap-3 py-10 desktop:flex">
            {features.map((feature, index) => {
              const isButtonActive = index === activeIndex;
              const anchorButton = (
                <AnchorButton
                  key={`${feature.id}-${isButtonActive}`}
                  active={isButtonActive}
                  icon={
                    <feature.icon
                      boxSize={32}
                      className="text-white"
                      variant={isButtonActive ? IconVariantEnum.color : IconVariantEnum.mono}
                    />
                  }
                >
                  {feature.title}
                </AnchorButton>
              );

              return isButtonActive ? (
                anchorButton
              ) : (
                <InternalLink href={`#${feature.id}`} key={feature.id}>
                  {anchorButton}
                </InternalLink>
              );
            })}
          </div>
          {/* Content column */}
          <div
            ref={targetRef}
            className="relative w-full pt-[14px] desktop:py-0"
            style={{ height: bpi >= 2 ? `calc(100vh*${features.length})` : 'auto' }}
          >
            {/* Sticky container for Banner and feature cards */}
            <div className="flex h-full w-full flex-col desktop:sticky desktop:top-0 desktop:h-screen">
              <div className="z-10 desktop:sticky desktop:top-0 desktop:pt-4 desktop-xl:pt-9">
                <Banner title={TERMS_LINK[0].name} url={TERMS_LINK[0].url} />
              </div>
              <div className="flex-grow overflow-hidden desktop:py-0">
                {features.map(
                  (feature, index) =>
                    (bpi <= 1 || activeIndex === index) && (
                      <div
                        key={'card-' + index}
                        className="static w-full overflow-hidden py-[14px] tablet:py-5 desktop:h-full desktop:py-4 desktop-xl:py-10"
                      >
                        <feature.card data={data} />
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
