import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/app/lib/utils';
import { graphikStdClassName } from '@/app/lib/fonts';

const anchorVariants = tv({
  base: `flex w-[144px] mobile:w-[164px] px-5 justify-between shrink-0 items-center rounded-2xl border-2 backdrop-blur-[20px] bg-white-fill shadow-anchor font-medium ${graphikStdClassName} text-[16px] leading-[20px] -tracking-2 text-left tablet:px-6 desktop:gap-7 transition-gradient-and-colors tablet:w-[212px] desktop:w-[230px]`,
  slots: {
    icon: 'h-8 w-8 desktop:h-10 desktop:w-10 shrink-0 flex items-center justify-center'
  },
  variants: {
    size: {
      wide: 'py-7',
      narrow: 'py-5',
      long: 'w-[178px] mobile:w-[188px] py-5'
    },
    active: {
      true: 'border-white/10 [--initial-opacity:100%] [--final-opacity:100%] text-black',
      false:
        'border-white/10 [--initial-opacity:2%] [--final-opacity:5%] text-white hover:border-white hover:[--initial-opacity:15%] hover:[--final-opacity:30%] focus:[--initial-opacity:2%] focus:[--final-opacity:5%] active:border-white/10 active:[--initial-opacity:100%] active:[--final-opacity:100%] active:text-black'
    }
  },
  defaultVariants: {
    size: 'narrow',
    active: false
  }
});

interface AnchorProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof anchorVariants> {
  asChild?: boolean;
  icon: React.ReactNode;
  isLong?: boolean;
}

const AnchorButton = React.forwardRef<HTMLButtonElement, AnchorProps>(
  ({ className, size, active, isLong, children, icon, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const sizeVariant = isLong ? 'long' : size;
    return (
      <Comp
        className={cn(anchorVariants({ size: sizeVariant, active, className }).base())}
        ref={ref}
        {...props}
      >
        <span>{children}</span>
        <span className={cn(anchorVariants().icon())}>{icon}</span>
      </Comp>
    );
  }
);
AnchorButton.displayName = 'AnchorButton';

export { AnchorButton };
