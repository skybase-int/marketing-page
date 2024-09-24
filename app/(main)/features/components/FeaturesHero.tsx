import { Heading, Text } from '@/app/components/Typography';
import { existingFeatures, comingSoonFeatures } from '../featuresData';
import Image from 'next/image';
import FeaturesBackround from '@/public/FeaturesHero.png';
import { AnchorButton } from '@/app/components/ui/anchor';
import { IconVariantEnum } from '@/app/components/icons/VariantIcon';
import { InternalLink } from '@/app/components/InternalLink';
import { useRef } from 'react';
import { useHeaderInView } from '@/app/hooks/useHeaderInView';

export function FeaturesHero({ heroHeight }: { heroHeight: number }) {
  const divRef = useRef(null);
  const topDivRef = useRef(null);
  useHeaderInView(divRef, 'dark');
  useHeaderInView(topDivRef, 'dark');

  return (
    <div className="relative z-10">
      <div ref={topDivRef} className="fixed h-[0.5px] w-full bg-transparent" />
      <div
        style={{ height: `${heroHeight}px` }}
        className="flex w-full flex-col items-center px-3 text-center tablet:px-5 desktop:px-10 desktop-xl:px-[60px]"
      >
        {/* video */}
        <video
          loop
          muted
          autoPlay
          playsInline
          style={{ height: `${heroHeight}px` }}
          className="absolute w-screen object-cover object-center"
        >
          <source src="/FeaturesVideoBackground.mp4" type="video/mp4" />
          <Image
            src={FeaturesBackround}
            alt="Purple cloudy sky"
            placeholder="blur"
            fill
            className="object-cover object-center"
          />
        </video>
        <div className="relative mt-36 flex flex-col items-center desktop:mt-[30vh]">
          <Heading
            tag="h1"
            className="mb-10 w-full text-white tablet:mb-16 tablet:max-w-[605px] desktop:max-w-full"
          >
            Do more with your crypto
          </Heading>
          <div className="flex flex-wrap justify-center gap-3">
            {existingFeatures.map(feature => (
              <InternalLink href={`#${feature.id}`} key={feature.id}>
                <AnchorButton
                  icon={<feature.icon boxSize={32} className="text-white" variant={IconVariantEnum.mono} />}
                  isLong={feature.isLong}
                >
                  {feature.title}
                </AnchorButton>
              </InternalLink>
            ))}
          </div>
          <Text variant="caption" className="mb-2 mt-8 text-white">
            Coming Soon
          </Text>
          <div className="flex flex-wrap justify-center gap-3">
            {comingSoonFeatures.map(feature => (
              <InternalLink href={`#${feature.id}`} key={feature.id}>
                <AnchorButton
                  icon={<feature.icon boxSize={32} className="text-white" variant={IconVariantEnum.mono} />}
                  isLong={feature.isLong}
                >
                  {feature.title}
                </AnchorButton>
              </InternalLink>
            ))}
          </div>
        </div>
        <div ref={divRef} className="absolute bottom-10 h-10 w-full" />
      </div>
    </div>
  );
}
