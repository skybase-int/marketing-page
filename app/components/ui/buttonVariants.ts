import { graphikStdClassName } from '@/app/lib/fonts';
import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  base: `relative rounded-2xl flex items-center gap-8 font-medium ${graphikStdClassName} overflow-hidden outline outline-2 outline-transparent hover:bg-none before:w-8 before:h-8 before:rounded-xl before:absolute before:z-10 after:w-8 after:h-8 after:rounded-xl after:absolute after:z-10 hover:before:scale-[1600%] hover:after:scale-[1600%] transition-all before:transition-all after:transition-all disabled:pointer-events-none`,
  // Slot styles will apply to every slot before slot variants are applied
  slots: {
    icon: 'flex h-8 w-8 items-center justify-center rounded-xl z-20'
  },
  // Variants can be different things like "size", "intent", "position", and have sub-categories
  variants: {
    // This is called "variant" for consistency, it's arbitrary, it could be called "intent".
    variant: {
      // Each variant can define classes for any slot
      // Dark backgrounds with light text and icon
      'midnight-1': {
        base: 'bg-midnight-1 hover:text-midnight-1 after:bg-midnight-1',
        icon: 'text-midnight-1'
      },
      'midnight-2': {
        base: 'bg-midnight-2 hover:text-midnight-2 after:bg-midnight-2',
        icon: 'text-midnight-2'
      },
      'midnight-3': {
        base: 'bg-midnight-3 hover:text-midnight-3 after:bg-midnight-3',
        icon: 'text-midnight-3'
      },
      'dusk-1': { base: 'bg-dusk-1 hover:text-dusk-1 after:bg-dusk-1', icon: 'text-dusk-1' },
      'dusk-2': { base: 'bg-dusk-2 hover:text-dusk-2 after:bg-dusk-2', icon: 'text-dusk-2' },
      'dusk-3': { base: 'bg-dusk-3 hover:text-dusk-3 after:bg-dusk-3', icon: 'text-dusk-3' },
      'twilight-1': {
        base: 'bg-twilight-1 hover:text-twilight-1 after:bg-twilight-1',
        icon: 'text-twilight-1'
      },
      'twilight-2': {
        base: 'bg-twilight-2 hover:text-twilight-2 after:bg-twilight-2',
        icon: 'text-twilight-2'
      },
      'twilight-3': {
        base: 'bg-twilight-3 hover:text-twilight-3 after:bg-twilight-3',
        icon: 'text-twilight-3'
      },
      'nocturnal-1': {
        base: 'bg-nocturnal-1 hover:text-nocturnal-1 after:bg-nocturnal-1',
        icon: 'text-nocturnal-1'
      },
      'nocturnal-2': {
        base: 'bg-nocturnal-2 hover:text-nocturnal-2 after:bg-nocturnal-2',
        icon: 'text-nocturnal-2'
      },
      'nocturnal-3': {
        base: 'bg-nocturnal-3 hover:text-nocturnal-3 after:bg-nocturnal-3',
        icon: 'text-nocturnal-3'
      },
      'vesper-1': { base: 'bg-vesper-1 hover:text-vesper-1 after:bg-vesper-1', icon: 'text-vesper-1' },
      'vesper-2': { base: 'bg-vesper-2 hover:text-vesper-2 after:bg-vesper-2', icon: 'text-vesper-2' },
      'vesper-3': { base: 'bg-vesper-3 hover:text-vesper-3 after:bg-vesper-3', icon: 'text-vesper-3' },
      'nightfall-1': {
        base: 'bg-nightfall-1 hover:text-nightfall-1 after:bg-nightfall-1',
        icon: 'text-nightfall-1'
      },
      'nightfall-2': {
        base: 'bg-nightfall-2 hover:text-nightfall-2 after:bg-nightfall-2',
        icon: 'text-nightfall-2'
      },
      'nightfall-3': {
        base: 'bg-nightfall-3 hover:text-nightfall-3 after:bg-nightfall-3',
        icon: 'text-nightfall-3'
      },
      'radiant-1': { base: 'bg-radiant-1 hover:text-radiant-1 after:bg-radiant-1', icon: 'text-radiant-1' },
      'radiant-2': { base: 'bg-radiant-2 hover:text-radiant-2 after:bg-radiant-2', icon: 'text-radiant-2' },
      'radiant-3': { base: 'bg-radiant-3 hover:text-radiant-3 after:bg-radiant-3', icon: 'text-radiant-3' },
      // Light backgrounds with dark text and icon
      'azure-1': { base: 'bg-azure-1 hover:text-azure-1', icon: 'text-azure-1' },
      'azure-2': { base: 'bg-azure-2 hover:text-azure-2', icon: 'text-azure-2' },
      'azure-3': { base: 'bg-azure-3 hover:text-azure-3', icon: 'text-azure-3' },
      'sunset-1': { base: 'bg-sunset-1 hover:text-sunset-1', icon: 'text-sunset-1' },
      'sunset-2': { base: 'bg-sunset-2 hover:text-sunset-2', icon: 'text-sunset-2' },
      'sunset-3': { base: 'bg-sunset-3 hover:text-sunset-3', icon: 'text-sunset-3' },
      'aurora-1': { base: 'bg-aurora-1 hover:text-aurora-1', icon: 'text-aurora-1' },
      'aurora-2': { base: 'bg-aurora-2 hover:text-aurora-2', icon: 'text-aurora-2' },
      'aurora-3': { base: 'bg-aurora-3 hover:text-aurora-3', icon: 'text-aurora-3' },
      'serenity-1': { base: 'bg-serenity-1 hover:text-serenity-1', icon: 'text-serenity-1' },
      'serenity-2': { base: 'bg-serenity-2 hover:text-serenity-2', icon: 'text-serenity-2' },
      'serenity-3': { base: 'bg-serenity-3 hover:text-serenity-3', icon: 'text-serenity-3' },
      'flare-1': { base: 'bg-flare-1 hover:text-flare-1', icon: 'text-flare-1' },
      'flare-2': { base: 'bg-flare-2 hover:text-flare-2', icon: 'text-flare-2' },
      'flare-3': { base: 'bg-flare-3 hover:text-flare-3', icon: 'text-flare-3' },
      'celestial-1': { base: 'bg-celestial-1 hover:text-celestial-1', icon: 'text-celestial-1' },
      'celestial-2': { base: 'bg-celestial-2 hover:text-celestial-2', icon: 'text-celestial-2' },
      'celestial-3': { base: 'bg-celestial-3 hover:text-celestial-3', icon: 'text-celestial-3' },
      outline: {
        base: 'bg-transparent border border-gray-400 hover:border-black',
        icon: 'text-black'
      },
      // Glass variants
      'glass-light': {
        base: 'text-black effects-dark-fill !backdrop-blur-[20px] before:bg-black hover:text-white active:before:bg-black/80 shadow-glass-light focus:outline-black disabled:bg-grayscale-20 disabled:outline-grayscale-30 disabled:before:bg-black/40 disabled:text-black/40',
        icon: 'text-white'
      },
      'glass-dark': {
        base: 'text-white effects-white-fill !backdrop-blur-[20px] before:bg-white outline-white/10 hover:text-black active:before:bg-white/80 shadow-glass-dark focus:outline-white disabled:bg-grayscale-80 disabled:outline-grayscale-70 disabled:before:bg-white/40 disabled:text-white/40',
        icon: 'text-black'
      },
      'glass-dark-nobg': {
        base: 'text-white effects-white-fill focus:effects-white-fill !backdrop-blur-[20px] outline-white/10 hover:text-white shadow-glass-dark disabled:bg-grayscale-80 disabled:outline-grayscale-70 disabled:before:bg-white/40 disabled:text-white/40',
        icon: 'text-black'
      },
      'glass-light-nobg': {
        base: 'text-white effects-white-fill focus:effects-white-fill !backdrop-blur-[20px] outline-slate-200/40 hover:text-white shadow-glass-dark disabled:bg-grayscale-80 disabled:outline-grayscale-70 disabled:before:bg-white/40 disabled:text-white/40',
        icon: 'text-black'
      },
      'glass-light-contrast-nobg': {
        base: 'text-black effects-white-fill focus:effects-white-fill !backdrop-blur-[20px] outline-slate-200/40 hover:text-white shadow-glass-dark disabled:bg-grayscale-80 disabled:outline-grayscale-70 disabled:before:bg-white/40 disabled:text-white/40',
        icon: 'text-white bg-black'
      }
    },
    size: {
      sm: `p-3 pl-6 text-[14px] leading-[14px] -tracking-1 before:right-3 after:right-3`,
      md: 'p-4 pl-6 text-[16px] leading-[20px] -tracking-2 before:right-4 after:right-4'
    },
    disabled: {
      true: '',
      false: ''
    },
    buttonType: {
      iconOnly: {
        base: 'before:w-px before:h-px after:w-px after:h-px hover:before:!scale-[9000%] hover:after:!scale-[9000%]',
        icon: 'hover:text-inherit'
      }
    }
  },
  compoundVariants: [
    // Dark backgrounds with light text and icon
    {
      variant: [
        'midnight-1',
        'midnight-2',
        'midnight-3',
        'dusk-1',
        'dusk-2',
        'dusk-3',
        'twilight-1',
        'twilight-2',
        'twilight-3',
        'nocturnal-1',
        'nocturnal-2',
        'nocturnal-3',
        'vesper-1',
        'vesper-2',
        'vesper-3',
        'nightfall-1',
        'nightfall-2',
        'nightfall-3',
        'radiant-1',
        'radiant-2',
        'radiant-3'
      ],
      className: {
        base: 'text-white after:opacity-0 before:bg-white hover:after:opacity-20 active:after:opacity-[0.15] focus:outline-white disabled:bg-grayscale-80 disabled:bg-none disabled:before:opacity-40 disabled:text-white/40'
      }
    },
    {
      variant: [
        'midnight-1',
        'midnight-2',
        'midnight-3',
        'dusk-1',
        'dusk-2',
        'dusk-3',
        'twilight-1',
        'twilight-2',
        'twilight-3',
        'nocturnal-1',
        'nocturnal-2',
        'nocturnal-3',
        'vesper-1',
        'vesper-2',
        'vesper-3',
        'nightfall-1',
        'nightfall-2',
        'nightfall-3',
        'radiant-1',
        'radiant-2',
        'radiant-3',
        'glass-dark',
        'glass-dark-nobg'
      ],
      disabled: true,
      className: {
        icon: 'text-grayscale-80'
      }
    },
    // Light backgrounds with dark text and icon
    {
      variant: [
        'azure-1',
        'azure-2',
        'azure-3',
        'sunset-1',
        'sunset-2',
        'sunset-3',
        'aurora-1',
        'aurora-2',
        'aurora-3',
        'serenity-1',
        'serenity-2',
        'serenity-3',
        'flare-1',
        'flare-2',
        'flare-3',
        'celestial-1',
        'celestial-2',
        'celestial-3'
      ],
      className: {
        base: 'text-black after:opacity-0 before:bg-black active:before:bg-black/80 focus:outline-black disabled:bg-grayscale-20 disabled:bg-none disabled:before:opacity-40 disabled:text-black/40'
      }
    },
    {
      variant: [
        'azure-1',
        'azure-2',
        'azure-3',
        'sunset-1',
        'sunset-2',
        'sunset-3',
        'aurora-1',
        'aurora-2',
        'aurora-3',
        'serenity-1',
        'serenity-2',
        'serenity-3',
        'flare-1',
        'flare-2',
        'flare-3',
        'celestial-1',
        'celestial-2',
        'celestial-3',
        'glass-light'
      ],
      disabled: true,
      className: {
        icon: 'text-grayscale-20'
      }
    },
    {
      buttonType: 'iconOnly',
      size: 'sm',
      className: 'p-[22px] before:right-7 after:right-7 before:top-7 after:top-7'
    },
    {
      buttonType: 'iconOnly',
      size: 'md',
      className: 'p-[26px] before:right-8 after:right-8 before:top-8 after:top-8'
    }
  ],
  // Default variant is applied if no other variant is specified
  defaultVariants: {
    variant: 'midnight-1',
    size: 'sm',
    disabled: false
  }
});

export const accentButtonVariant = tv({
  base: `font-medium ${graphikStdClassName} text-[16px] leading-[20px] -tracking-2 bg-accent rounded-[20px] py-[26px] px-10 text-white border-x border-t-2 border-white/50 shadow-glass-dark hover:bg-accent-hover active:bg-none focus:border-white disabled:text-white/60 disabled:pointer-events-none transition-all`
});

export const tabButtonVariant = tv({
  base: `flex px-4 pt-[22px] pb-5 justify-center items-center gap-2.5 rounded-2xl border border-black/30 text-black font-normal ${graphikStdClassName} text-[14px] leading-[14px] -tracking-1 transition-all hover:border-black active:border-grayscale-70 active:text-grayscale-70 disabled:border-black/20 disabled:text-black/20 disabled:pointer-events-none data-[state=active]:border-black`
});
