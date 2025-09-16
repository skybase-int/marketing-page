'use client';

import * as React from 'react';
import { InternalLink } from './InternalLink';
import { SkyLogoColor } from './SkyLogoColor';
import { BP, useBreakpointIndex } from '../hooks/useBreakpointIndex';
import { DesktopMenu } from './menu/DesktopMenu';
import { TabletMenu } from './menu/TabletMenu';
import { TabletTriggers } from './menu/TabletTriggers';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { getSunriseDelay } from '@/app/constants';
import { useAppContext } from '@/app/context/AppContext';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { bpi } = useBreakpointIndex();
  const { modalOpened, visibleAreaTone: tone, scrollContainerRef } = useAppContext();
  const [showHeader, setShowHeader] = useState(true);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const { scrollY } = useScroll({
    container: scrollContainerRef
  });

  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = scrollY.getPrevious();
    const isTop = latest <= 150;
    setIsTopOfPage(isTop);
    setShowHeader(isTop || previous === undefined || latest < previous);
  });

  if (modalOpened) return null;

  const motionDivProps = {
    animate: { y: showHeader ? 0 : -100 },
    transition: { type: 'tween' }
  };

  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[1000]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: getSunriseDelay(), duration: showHeader ? 0.2 : 1.3 }}
    >
      <motion.div {...motionDivProps}>
        <header className="mt-3 flex items-center justify-between px-4">
          <div className="pointer-events-auto z-10 flex h-[56px] items-center self-start lg:mt-2 desktop:h-[68px]">
            <InternalLink href="/">
              <SkyLogoColor
                width={90}
                height={32}
                color={tone === 'dark' || (bpi <= BP.md && isOpen) ? 'white' : 'black'}
                expanded={isTopOfPage || isOpen}
              />
            </InternalLink>
          </div>
          {bpi <= BP.md && <TabletTriggers isOpen={isOpen} setIsOpen={setIsOpen} tone={tone} />}
          {bpi <= BP.md ? (
            <TabletMenu isOpen={isOpen} setIsOpen={setIsOpen} tone={tone} />
          ) : (
            <DesktopMenu tone={tone} />
          )}
        </header>
      </motion.div>
    </motion.div>
  );
}
