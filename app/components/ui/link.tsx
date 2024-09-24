import * as React from 'react';
import { type VariantProps } from 'tailwind-variants';
import { cn } from '@/app/lib/utils';
import { linkVariants } from './linkVariants';
import { ChevronRight, SquareArrowRight } from '../icons';
import { ArrowRight } from '../icons/ArrowRight';

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, disabled, children, icon = 'chevron', ...props }, ref) => {
    return (
      <a className={cn(linkVariants({ variant, size, icon, disabled, className }))} ref={ref} {...props}>
        {children}
        {icon === 'chevron' ? (
          <ChevronRight />
        ) : icon === 'arrowNoBg' ? (
          <ArrowRight />
        ) : (
          <SquareArrowRight className="h-5 w-5" />
        )}
      </a>
    );
  }
);
Link.displayName = 'Link';
