'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/app/lib/utils';
import { tv, type VariantProps } from 'tailwind-variants';
import { graphikStdClassName } from '@/app/lib/fonts';

const tabsTriggerVariants = tv({
  variants: {
    variant: {
      primary:
        'bg-blur-[75px] inline-flex items-center justify-center whitespace-nowrap rounded-[20px] border border-white/10 bg-white/30 px-5 py-4 text-sm font-medium ring-offset-background transition-all hover:bg-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-foreground',
      secondary: `flex px-4 pt-[22px] pb-5 justify-center items-center gap-2.5 rounded-2xl border border-black/30 text-black font-normal ${graphikStdClassName} text-[14px] leading-[14px] -tracking-1 transition-all hover:border-black active:border-grayscale-70 active:text-grayscale-70 disabled:border-black/20 disabled:text-black/20 disabled:pointer-events-none data-[state=active]:border-black`
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
});

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List ref={ref} className={cn('flex justify-center', className)} {...props} />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, TabsTriggerProps>(
  ({ className, variant, ...props }, ref) => (
    <TabsPrimitive.Trigger ref={ref} className={cn(tabsTriggerVariants({ variant, className }))} {...props} />
  )
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn('', className)} {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
