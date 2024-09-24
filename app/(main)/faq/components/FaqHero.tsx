import { RefObject, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Heading } from '@/app/components/Typography';
import { Card } from '@/app/components/ui/card';
import { faqBackgroundBlurDataURL100 } from '../constants';
import FaqList from './FaqList';
import { FAQPageTransition } from '@/app/components/PageTransition';
import { Banner } from '@/app/components/Banner';
import { getTermsLink } from '@/app/lib/utils';

export default function FaqHero({ trigger }: { trigger: RefObject<HTMLDivElement> }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const TERMS_LINK = getTermsLink();

  useEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement || !trigger.current || !cardRef.current) return;

    const checkCardPosition = () => {
      if (cardRef.current && trigger.current && containerRef.current) {
        const cardBottom = cardRef.current.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
        const isTriggerAtBottom = cardBottom <= viewportHeight;

        if (isTriggerAtBottom) {
          trigger.current.style.position = 'fixed';
          trigger.current.style.bottom = '-40px'; // Move trigger slightly below viewport
          trigger.current.style.left = '0';
          trigger.current.style.zIndex = '1000';
          containerRef.current.style.paddingBottom = '80px'; // Add margin to container
          setTimeout(() => {
            if (trigger.current) {
              trigger.current.style.position = 'static';
              trigger.current.style.zIndex = 'auto';
            }
          }, 500);
        } else {
          trigger.current.style.position = 'static';
          trigger.current.style.zIndex = 'auto';
          containerRef.current.style.marginBottom = '0';
        }
        trigger.current.style.transition = 'all 0.3s ease-in-out';
      }
    };

    checkCardPosition();

    const cardObserver = new ResizeObserver(checkCardPosition);
    cardObserver.observe(cardRef.current);

    return () => {
      cardObserver.disconnect();
    };
  }, [trigger]);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full">
      <Image
        src="/FaqBackground.png"
        alt="Faq Background"
        fill
        priority
        className="object-cover object-top"
        placeholder="blur"
        blurDataURL={faqBackgroundBlurDataURL100}
      />
      <FAQPageTransition>
        <div className="relative z-10 flex w-full flex-col items-center justify-center overflow-visible px-3 text-center tablet:px-5 desktop:px-10 desktop-xl:px-[60px]">
          <Heading tag="h4" className="mt-28 text-white tablet:mt-[144px] desktop:mt-[190px]">
            Got questions?
          </Heading>
          <Heading tag="h1" className="text-white">
            Find answers here.
          </Heading>
          <Card
            ref={cardRef}
            className={`mb-20 mt-20 w-full bg-white p-5 tablet:mb-24 tablet:mt-16 tablet:p-10 desktop:mb-44 desktop:mt-[120px] desktop:max-w-[1246px] desktop:p-20 2xl:max-w-[1400px]`}
          >
            <Banner title={TERMS_LINK[0].name} url={TERMS_LINK[0].url} />
            <FaqList />
          </Card>
        </div>
      </FAQPageTransition>
    </div>
  );
}
