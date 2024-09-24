'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'tailwind-variants';
import { cn } from '@/app/lib/utils';
import { buttonVariants } from './buttonVariants';
import { Plus, OpenCloseMenu } from '../icons';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const IconButtonOpenClose = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { isOpen: boolean; stroke?: string }
>(({ className, variant, size, disabled, isOpen, asChild = false, stroke = 'white', ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, disabled, className, buttonType: 'iconOnly' }).base())}
      ref={ref}
      disabled={disabled}
      {...props}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
        <OpenCloseMenu className="z-20" isOpen={isOpen} stroke={stroke} strokeWidth="2" />
      </div>
    </Comp>
  );
});
IconButtonOpenClose.displayName = 'IconButtonOpenClose';

const IconButtonPlus = React.forwardRef<HTMLButtonElement, ButtonProps & { isOpen: boolean }>(
  ({ className, variant, size, disabled, asChild = false, isOpen, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, disabled, className, buttonType: 'iconOnly' }).base())}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        <Plus isOpen={isOpen} className="z-20" />
      </Comp>
    );
  }
);
IconButtonPlus.displayName = 'IconButtonPlus';

export { IconButtonOpenClose, IconButtonPlus };
