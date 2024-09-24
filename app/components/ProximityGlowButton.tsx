'use client';
import React, { useEffect, useRef } from 'react';
import { SkyLogoSmall } from './SkyLogoSmall';
import { Text } from '@/app/components/Typography';
import { InternalLink } from '@/app/components/InternalLink';
import { motion } from 'framer-motion';
import { secondaryElementsAnimation } from './PageTransition';

interface Props {
  pathname: string;
  isFirstLoad?: boolean;
  isVideoPlaying?: boolean;
  isSlowNetwork?: boolean;
}

export const ProximityGlowButton: React.FC<Props> = ({
  pathname,
  isFirstLoad,
  isVideoPlaying,
  isSlowNetwork
}) => {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = ({ x, y }: MouseEvent) => {
      if (innerRef.current) {
        innerRef.current.style.setProperty('--x', x + 'px');
        innerRef.current.style.setProperty('--y', y + 'px');

        const innerRect = innerRef.current.getBoundingClientRect();
        const padding = 100;

        const adjustedX = Math.min(innerRect.right + padding, Math.max(x, innerRect.left - padding));
        const adjustedY = Math.min(innerRect.bottom + padding, Math.max(y, innerRect.top - padding));

        innerRef.current.style.setProperty('--adjusted-x', adjustedX + 'px');
        innerRef.current.style.setProperty('--adjusted-y', adjustedY + 'px');
      }
    };

    document.addEventListener('pointermove', handlePointerMove);

    // Cleanup event listener
    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <div className="proximity-button-container">
      <InternalLink href={{ pathname, query: { from: 'home' } }} shallow>
        <motion.div
          variants={secondaryElementsAnimation}
          initial={isFirstLoad && !isSlowNetwork && 'initial'}
          animate={isFirstLoad && (isVideoPlaying || isSlowNetwork) && 'animate'}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
          custom={1}
          className="cta-background mouse-cursor-gradient-tracking flex flex-row items-center rounded-[14px] px-6 py-3 text-white md:rounded-2xl md:px-9 md:py-5"
          ref={innerRef}
        >
          <span>
            <div className="flex flex-row items-center">
              <SkyLogoSmall />
              <Text className="mx-2 my-0 text-base md:text-xl lg:text-xl">I want to be first</Text>
            </div>
          </span>
        </motion.div>
      </InternalLink>
    </div>
  );
};
