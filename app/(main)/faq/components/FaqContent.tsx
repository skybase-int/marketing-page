'use client';

import { useEffect, useRef } from 'react';
import { Footer } from '@/app/components/Footer';
import { useSectionVisibility } from '@/app/hooks/useSectionVisibility';
import FaqHero from './FaqHero';
import FarmCTA from './FarmCTA';
import { useAppContext } from '@/app/context/AppContext';
import { TrianglesSeparator } from '@/app/components/TrianglesSeparator';

export default function FaqContent() {
  const topDivRef = useRef<HTMLDivElement>(null);
  const bottomDivRef = useRef<HTMLDivElement>(null);
  const transitionChildrenRef = useRef<HTMLDivElement>(null);
  const postTransitionChildrenRef = useRef<HTMLDivElement>(null);

  const { sectionVisibility } = useSectionVisibility({
    bottomDivRef,
    topDivRef
  });

  const { setVisibleAreaTone, setScrollContainerRef } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleAreaTone('light');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
      <div className="min-h-screen">
        <FaqHero trigger={bottomDivRef} />
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 w-full overflow-hidden">
          <TrianglesSeparator
            colorTop="[rgba(19,20,44,1)]"
            // colorBottom="sunset-2"
            colorBottom="celestial-1"
            position="topRight"
            // colorMiddle="celestial-1"
            colorMiddle="aurora-1"
          />
        </div>
      </div>
      <div className="w-screen">
        <FarmCTA />
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
  //     colorVariant="sunset-2"
  //     middleColorVariant="celestial-1"
  //     childrenRefOverride={transitionChildrenRef}
  //     postChildrenRefOverride={postTransitionChildrenRef}
  //     postTransitionView={
  //       <div className="w-screen">
  //         <div id="faq-close-trigger" className="h-2 w-full bg-transparent" ref={topDivRef} />
  //         <FarmCTA />
  //         <Footer />
  //       </div>
  //     }
  //   >
  //     <div className="min-h-screen">
  //       <FaqHero trigger={bottomDivRef} />
  //       <div id="faq-open-trigger" className="h-8 w-full bg-transparent" ref={bottomDivRef} />
  //     </div>
  //   </Transition>
  // );
}
