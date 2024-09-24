import { graphikStdClassName } from '@/app/lib/fonts';
import { tv } from 'tailwind-variants';

export const cardVariants = tv({
  base: 'rounded-[20px] bg-card p-4 text-text text-base font-normal leading-normal',
  // Slot styles will apply to every slot before slot variants are applied
  slots: {
    header: 'flex justify-between space-y-1.5',
    title: '',
    description: '',
    content: '',
    footer: ''
  },
  // Variants can be different things like "size", "intent", "position", and have sub-categories
  variants: {
    // This is called "variant" for consistency, it's arbitrary, it could be called "intent".
    variant: {
      // Each variant can define classes for any slot
      default: {
        title: 'text-xl font-custom-450 leading-normal lg:text-2xl lg:leading-8',
        content: 'p-6 pt-0'
      },
      pool: { base: 'leading-tight lg:px-5 lg:py-4' },
      stats: {
        base: 'p-5 w-full min-w-[220px]',
        header: 'p-0',
        title: 'text-sm font-normal leading-tight text-textSecondary',
        content: 'pt-0'
      },
      statsCompact: { base: 'p-3 lg:pl-4 lg:pb-4 lg:pt-3 lg:pr-3' },
      stepper: {
        base: 'w-full rounded-none border text-sm'
      },
      spotlight: {
        base: 'p-10 bg-[linear-gradient(0deg,_#581BE0_0%,_#2A197D_100%)]'
      },
      glass: {
        base: 'glass-background effects-white-stroke'
      }
    }
  },
  // Default variant is applied if no other variant is specified
  defaultVariants: {
    variant: 'default'
  },
  // This matches the variant name and applies the styles to the specified slots
  compoundSlots: [{ variant: 'stats', slots: ['base', 'header', 'title', 'content'], className: '' }]
});
