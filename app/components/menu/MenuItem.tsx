import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/app/lib/utils';
import { ExternalLink } from '../ExternalLink';
import { InternalLink } from '../InternalLink';
import { ArrowLink, ArrowUpRight, SquareArrowRight, SquareArrowUpRight } from '../icons';
import { Text, Heading } from '../Typography';
import { BP, useBreakpointIndex } from '@/app/hooks/useBreakpointIndex';

export const MenuItem = ({
  title,
  children,
  href,
  className,
  isExternal = false,
  onClick
}: {
  title: string;
  href: string;
  isExternal?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const { bpi } = useBreakpointIndex();
  const [isHovered, setIsHovered] = useState(false);
  const Link = isExternal ? ExternalLink : InternalLink;
  const arrowTypes = {
    external: {
      hovered: SquareArrowUpRight,
      default: ArrowUpRight
    },
    internal: {
      hovered: SquareArrowRight,
      default: ArrowLink
    }
  };

  const handleMouseEnter = () => {
    if (bpi > BP.md) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (bpi > BP.md) {
      setIsHovered(false);
    }
  };

  const Arrow = arrowTypes[isExternal ? 'external' : 'internal'][isHovered ? 'hovered' : 'default'];

  return (
    <li
      className="group m-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="mb-4 h-px w-full bg-gray-200"
      />
      <Link href={href}>
        <div
          className={cn(
            'hover:text-accent-foreground focus:text-accent-foreground grid select-none grid-cols-[1fr,auto] items-center gap-4 rounded-md leading-none no-underline outline-none transition-colors',
            className
          )}
        >
          <div className="space-y-2 pr-4">
            <Heading tag="h5" className="text-white">
              {title}
            </Heading>
            <Text
              variant="p3"
              className="text-white/70 opacity-0 transition-all duration-200 group-hover:h-auto group-hover:opacity-100"
            >
              {children}
            </Text>
          </div>
          <motion.div
            className="inline-flex h-8 w-8 items-center justify-center"
            animate={{
              scale: isHovered ? 1 : 0.375, // 3/8 = 0.375
              color: isHovered ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.7)'
            }}
            transition={{ duration: bpi > BP.md ? 0.2 : 0 }}
          >
            <Arrow className="h-8 w-8" />
          </motion.div>
        </div>
      </Link>
    </li>
  );
};
