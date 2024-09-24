import * as React from 'react';
import { MoreHorizontal } from 'lucide-react';

import { cn } from '@/app/lib/utils';
import { ButtonProps, TabButton } from './button';
import { ChevronLeft, ChevronRight } from '../icons';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full items-center justify-between tablet:justify-normal', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
  )
);
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn('list-none', className)} {...props} />
);
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
  disabled?: boolean;
  isNavButton?: boolean;
} & ButtonProps;

const PaginationLink = ({
  className,
  isActive,
  disabled,
  size = 'md',
  isNavButton,
  ...props
}: PaginationLinkProps) => {
  const Comp = isNavButton ? TabButton : 'button';
  return (
    <Comp
      disabled={disabled}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'h-8 w-8',
        isActive ? 'underline underline-offset-4' : 'border-transparent bg-transparent hover:bg-muted',
        className
      )}
      {...props}
    />
  );
};

PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    isNavButton
    disabled={disabled}
    aria-label="Go to previous page"
    size="md"
    className={cn(
      'mr-6 flex h-14 w-14 items-center justify-center rounded-[16px] border border-current',
      disabled ? 'opacity-50' : '',
      className
    )}
    {...props}
  >
    <ChevronLeft className="h-3 w-3" />
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({ className, disabled, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    isNavButton
    disabled={disabled}
    aria-label="Go to next page"
    size="md"
    className={cn(
      'ml-6 flex h-14 w-14 items-center justify-center rounded-[16px] border border-current',
      disabled ? 'opacity-50' : '',
      className
    )}
    {...props}
  >
    <ChevronRight className="h-3 w-3" />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span aria-hidden className={cn('flex h-9 w-9 items-center justify-center', className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export { Pagination, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious };
