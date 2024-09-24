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

export function LandingContent({ data }: { data: FetchedData }) {
  const childrenRef = useRef<HTMLDivElement>(null);

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
