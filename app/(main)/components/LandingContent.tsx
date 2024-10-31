'use client';

import { useEffect, useRef } from 'react';
import { Hero } from './Hero';
import { Tokens } from './Tokens';
import { Ecosystem } from './Ecosystem';
import { WhyAndSocials } from './WhyAndSocials';
import { HomepageFeatures } from './Features';
import { FAQ } from './FAQ';
import { Footer } from '@/app/components/Footer';
import { FetchedData } from '../fetchData';
import { TrianglesSeparator } from '@/app/components/TrianglesSeparator';
import { useAppContext } from '@/app/context/AppContext';

export function LandingContent({ data }: { data: FetchedData }) {
  const childrenRef = useRef<HTMLDivElement>(null);
  const { landingLoadingTime, setLandingLoadingTime, setIsSlowNetwork, isSlowNetwork } = useAppContext();

  useEffect(() => {
    if (!landingLoadingTime) {
      // Measure the time from the initial page load to when this effect runs
      const duration = performance.now() / 1000; // Convert milliseconds to seconds
      setLandingLoadingTime(duration);

      // Consider network slow if it takes more than 6 seconds for landing page to load
      setIsSlowNetwork(duration > 3.5);
    }
  }, []);

  return (
    <div>
      <Hero data={data} />
      <div className="h-48 w-full bg-[url(/HeroTokensSeparator.png)]" />
      <Tokens childrenRef={childrenRef} data={data} />
      <div className="relative">
        <HomepageFeatures data={data} />
        <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden ">
          <TrianglesSeparator colorBottom="dark" colorTop="nocturnal-1" />
        </div>
      </div>
      <Ecosystem childrenRef={childrenRef} />
      <div className="relative">
        <div className="bg-white">
          <WhyAndSocials />
          <FAQ />
        </div>
        <div className="pointer-events-none absolute left-0 top-0 w-full overflow-hidden">
          <TrianglesSeparator colorTop="nocturnal-1" colorBottom="dark" position="topRight" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
