'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Close as IconClose } from '../icons';

import { cn } from '@/app/lib/utils';

const Dialog = DialogPrimitive.Root;

const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'dialog-overlay fixed inset-0 z-50 bg-black/10 backdrop-blur-[30px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    hideCloseArrow?: boolean;
    overlayClassName?: string;
  }
>(({ className, children, hideCloseArrow, overlayClassName, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay
      className={cn(
        'fixed inset-0 grid place-items-center overflow-y-auto py-10 tablet:px-5 tablet:py-10 desktop:p-5 desktop-xl:p-10',
        overlayClassName
      )}
    >
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'data-[state=open]:duation-500 data-[state=closed]:duration-350 dark relative z-50 grid w-11/12 gap-4 rounded-[32px] bg-white px-3 py-20 shadow-lg ease-out-expo data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:slide-out-to-bottom-1/2 data-[state=open]:slide-in-from-bottom-1/2 tablet:px-12 tablet:py-[100px] desktop:px-20 desktop-xl:p-[120px]',
          className
        )}
        {...props}
      >
        {children}
        {!hideCloseArrow && (
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-[16px] border border-black/30 p-4 opacity-100 ring-offset-background transition-opacity hover:opacity-75 focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <IconClose className="text-black" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogOverlay>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export { Dialog, DialogContent };
