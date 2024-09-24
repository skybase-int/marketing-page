import { graphikStdClassName } from '@/app/lib/fonts';
import { tv } from 'tailwind-variants';

export const linkVariants = tv({
  base: `flex my-1 items-center font-medium ${graphikStdClassName} outline outline-1 outline-transparent outline-offset-4 rounded-[5px] hover:underline transition-all`,
  // // Variants can be different things like "size", "intent", "position", and have sub-categories
  variants: {
    variant: {
      dark: 'text-black active:text-grayscale-70 focus:outline-black focus:text-black',
      light: 'text-white active:text-grayscale-30 focus:outline-white focus:text-white'
    },
    size: {
      sm: `text-[14px] leading-[14px] -tracking-1`,
      md: `text-[16px] leading-[20px] -tracking-2`
    },
    icon: {
      chevron: 'gap-1 underline-offset-[5px]',
      arrow: 'gap-2 underline-offset-[9px]',
      arrowNoBg: 'gap-1 underline-offset-[5px]'
    },
    disabled: {
      true: 'pointer-events-none',
      false: ''
    }
  },
  compoundVariants: [
    {
      variant: 'dark',
      disabled: true,
      className: 'text-black/30'
    },
    {
      variant: 'light',
      disabled: true,
      className: 'text-white/30'
    }
  ],
  // // Default variant is applied if no other variant is specified
  defaultVariants: {
    variant: 'dark',
    size: 'sm',
    icon: 'chevron',
    disabled: false
  }
});
