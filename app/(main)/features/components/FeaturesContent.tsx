'use client';

import { Footer } from '@/app/components/Footer';
import { FeaturesHero } from './FeaturesHero';
import { FeaturesMain } from './FeaturesMain';
import FarmCTA from '../../features/components/FarmCTA';
import { useRef } from 'react';
import { useSectionVisibility } from '@/app/hooks/useSectionVisibility';
import { useState, useEffect, useCallback } from 'react';
import { useAppContext } from '@/app/context/AppContext';
import { FetchedData } from '../../fetchData';
import { TrianglesSeparator } from '@/app/components/TrianglesSeparator';
import { PrefetchFeaturesAssets } from './PrefetchFeaturesAssets';

const minHeroHeight = 878;

export function FeaturesContent({ data }: { data: FetchedData }) {
  const transitionChildrenRef = useRef<HTMLDivElement>(null);
  const postTransitionChildrenRef = useRef<HTMLDivElement>(null);
  const topDivRef = useRef<HTMLDivElement>(null);
  const bottomDivRef = useRef<HTMLDivElement>(null);
  const { sectionVisibility, setSectionVisibility } = useSectionVisibility({
    bottomDivRef,
    topDivRef
  });
  const [heroHeight, setHeroHeight] = useState<number | undefined>(undefined);
  const {
    setVisibleAreaTone,
    setScrollContainerRef,
    landingLoadingTime,
    setLandingLoadingTime,
    setIsSlowNetwork
  } = useAppContext();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        const newHeight = window.innerHeight;
        //hero height is the max of the min hero height and the viewport height
        setHeroHeight(Math.max(minHeroHeight, newHeight));
      };

      handleResize(); // Set initial dimensions
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (!landingLoadingTime) {
      // Measure the time from the initial page load to when this effect runs
      const duration = performance.now() / 1000; // Convert milliseconds to seconds
      setLandingLoadingTime(duration);

      // Consider network slow if it takes more than 6 seconds for landing page to load
      setIsSlowNetwork(duration > 3.5);
    }
  }, []);

  //close the transition if we click on an anchor link that's on the current page
  const handleAnchorClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorElement = target.closest('a');
      if (anchorElement) {
        const href = anchorElement.getAttribute('href');
        if (href) {
          const [targetPath, targetHash] = href.split('#');
          const currentPath = window.location.pathname;
          if (setSectionVisibility && targetPath === currentPath && targetHash) {
            setSectionVisibility('close');
          }
        }
      }
    },
    [setSectionVisibility]
  );

  useEffect(() => {
    if (sectionVisibility === 'open') {
      document.addEventListener('click', handleAnchorClick);
      return () => {
        document.removeEventListener('click', handleAnchorClick);
      };
    }
  }, [sectionVisibility, handleAnchorClick]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sectionVisibility === 'open') {
        setVisibleAreaTone('dark');
      } else if (sectionVisibility === 'close') {
        setVisibleAreaTone('light');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [sectionVisibility]);

  useEffect(() => {
    setScrollContainerRef(sectionVisibility === 'open' ? postTransitionChildrenRef : transitionChildrenRef);
  }, [setScrollContainerRef, sectionVisibility]);

  return (
    <div>
      <FeaturesHero heroHeight={heroHeight} />
      <PrefetchFeaturesAssets />
      <FeaturesMain childrenRef={transitionChildrenRef} data={data} />
      <div className="relative z-30">
        <div className="pointer-events-none absolute left-0 top-0 w-full overflow-hidden">
          <TrianglesSeparator
            colorTop="[rgba(19,20,44,1)]"
            colorBottom="sunset-2"
            position="topRight"
            colorMiddle="celestial-1"
          />
        </div>
      </div>
      <div className="relative z-20 w-screen">
        <FarmCTA />
        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden ">
            <TrianglesSeparator colorBottom="dark" colorTop="[rgba(19,20,44,1)]" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );

  // return (
  //   <Transition
  //     width="100%"
  //     height="100vh"
  //     state={sectionVisibility}
  //     isSectionTransition
  //     childrenRefOverride={transitionChildrenRef}
  //     postChildrenRefOverride={postTransitionChildrenRef}
  //     colorVariant="sunset-2"
  //     middleColorVariant="celestial-1"
  //     postTransitionView={
  //       <div className="w-screen">
  //         <div id="features-close-trigger" className="h-2 w-full bg-transparent" ref={topDivRef} />
  //         <FarmCTA />
  //         <Footer />
  //       </div>
  //     }
  //   >
  //     <div>
  //       <FeaturesHero heroHeight={heroHeight} />
  //       <FeaturesMain childrenRef={transitionChildrenRef} data={data} />
  //       <div id="faq-open-trigger" className="h-8 w-full bg-transparent" ref={bottomDivRef} />
  //     </div>
  //   </Transition>
  // );
}
