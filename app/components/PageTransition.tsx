'use client';
import { motion, type HTMLMotionProps, type Variants, cubicBezier, easeIn } from 'framer-motion';
import { getSunriseDelay } from '@/app/constants';

const incomingTransition: HTMLMotionProps<'div'>['transition'] = {
  ease: 'easeOut',
  duration: 0.7
};
const leavingTransition: HTMLMotionProps<'div'>['transition'] = {
  ease: 'easeOut',
  duration: 0.7
};

const translateContent: Variants = {
  initial: {
    y: 50,
    pointerEvents: 'none'
  },
  animate: {
    y: 0,
    pointerEvents: 'all',
    transition: { ...incomingTransition, duration: 1.5 }
  },
  exit: {
    y: -50,
    pointerEvents: 'none',
    transition: leavingTransition
  }
};

const fadeOut: Variants = {
  initial: {
    opacity: 0,
    pointerEvents: 'none'
  },
  animate: {
    opacity: 1,
    pointerEvents: 'all',
    transition: incomingTransition
  },
  exit: {
    opacity: 0,
    pointerEvents: 'none',
    transition: leavingTransition
  }
};

const initialTransition: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    pointerEvents: 'none'
  },
  animate: {
    opacity: 1,
    y: 0,
    pointerEvents: 'all',
    transition: incomingTransition
  },
  exit: {
    opacity: 0,
    y: -50,
    pointerEvents: 'none',
    transition: leavingTransition
  }
};

const PageTransition: React.FC<React.PropsWithChildren<HTMLMotionProps<'div'>>> = ({
  variants,
  ...props
}) => <motion.div initial="initial" animate="animate" exit="exit" variants={variants} {...props} />;

export const HomePageTransition: React.FC<
  React.PropsWithChildren<HTMLMotionProps<'div'> & { isFirstLoad: boolean }>
> = ({ isFirstLoad, ...props }) => (
  <PageTransition variants={initialTransition} initial={!isFirstLoad && 'initial'} {...props} />
);

const RegisterPageTransition: React.FC<React.PropsWithChildren<HTMLMotionProps<'div'>>> = props => (
  <PageTransition variants={translateContent} {...props} />
);

export const FAQPageTransition: React.FC<React.PropsWithChildren<HTMLMotionProps<'div'>>> = props => (
  <PageTransition variants={initialTransition} {...props} />
);

const FloatingDivsPageOutTransition: React.FC<React.PropsWithChildren<HTMLMotionProps<'div'>>> = props => (
  <PageTransition variants={fadeOut} {...props} />
);

export const headingAnimation: Variants = {
  initial: { opacity: 0, y: 25 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      y: { delay: getSunriseDelay(), duration: 1.3, ease: cubicBezier(0.4, 0, 0.2, 1) },
      opacity: { delay: getSunriseDelay(), duration: 1 }
    }
  }
};

export const headingAnimationTwo: Variants = {
  initial: { opacity: 0, y: 25 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      y: { delay: getSunriseDelay(), duration: 1.3, ease: cubicBezier(0.4, 0, 0.2, 1) },
      opacity: { delay: getSunriseDelay() + 0.2, duration: 1.1 }
    }
  }
};

export const headingAnimationThree: Variants = {
  initial: { opacity: 0, y: 35 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      y: { delay: getSunriseDelay() + 0.2, duration: 1.3, ease: cubicBezier(0.4, 0, 0.2, 1) },
      opacity: { delay: getSunriseDelay() + 0.6, duration: 1.1 }
    }
  }
};

export const heroPillOne: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      scale: { delay: getSunriseDelay() + 0.5, duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) },
      opacity: { delay: getSunriseDelay() + 0.75, duration: 0.8 }
    }
  },
  hoverOne: {
    opacity: 1,
    scale: 1.1,
    x: -30,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) }
  },
  hoverTwo: {
    opacity: 1,
    scale: 0.75,
    x: -30,
    y: -50,
    transition: { duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) }
  },
  hoverThree: {
    opacity: 1,
    scale: 0.85,
    x: -30,
    y: -10,
    transition: { duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) }
  }
};

export const heroPillTwo: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      scale: { delay: getSunriseDelay() + 0.6, duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) },
      opacity: { delay: getSunriseDelay() + 0.85, duration: 0.8 }
    }
  },
  hoverOne: {
    opacity: 1,
    scale: 0.75,
    x: 50,
    y: -30,
    transition: { duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) }
  },
  hoverTwo: {
    opacity: 1,
    scale: 1.1,
    x: 25,
    y: 70,
    transition: { duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) }
  },
  hoverThree: {
    opacity: 1,
    scale: 0.85,
    x: 0,
    y: 40,
    transition: { duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) }
  }
};

export const heroPillThree: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      scale: { delay: getSunriseDelay() + 0.7, duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) },
      opacity: { delay: getSunriseDelay() + 0.95, duration: 0.8 }
    }
  },
  hoverOne: {
    opacity: 1,
    scale: 0.85,
    x: -60,
    y: 20,
    transition: { duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) }
  },
  hoverTwo: {
    opacity: 1,
    scale: 0.85,
    x: 70,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) }
  },
  hoverThree: {
    opacity: 1,
    scale: 1.1,
    x: -30,
    y: -10,
    transition: { duration: 0.8, ease: cubicBezier(0.4, 0, 0.2, 1) }
  }
};

export const secondaryElementsAnimation: Variants = {
  initial: { y: 10, opacity: 0 },
  animate: customDelayIndex => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 3.25 + 0.15 * customDelayIndex,
      ease: easeOutExpo
    }
  })
};

const registerElementsAnimation: Variants = {
  initial: { opacity: 0 },
  animate: customDelay => ({
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: customDelay + 0.4
    }
  }),
  exit: {
    opacity: 0,
    transition: leavingTransition
  }
};

// Wrapper component so we can use the motion.div component on Server Components
const ClientMotionDiv: React.FC<React.PropsWithChildren<HTMLMotionProps<'div'>>> = props => (
  <motion.div {...props} />
);

const gradientLoopVariants: Variants = {
  // For the first part of the video, the 'sunrise', use the same gradient but with 0 opacity
  // while the sky is dark, then transition to the first gradient
  sunrise: {
    background: [
      'linear-gradient(0deg, #fcdfd000 0%, #fcdfd000 10%, #c78df200 30%, #1265c700 100%)',
      'linear-gradient(0deg, #fcdfd000 0%, #fcdfd000 10%, #c78df200 30%, #1265c700 100%)',
      'linear-gradient(0deg, #fcdfd000 0%, #fcdfd000 10%, #c78df200 30%, #1265c700 100%)',
      'linear-gradient(0deg, #fcdfd090 0%, #fcdfd090 10%, #c78df2 30%, #1265c7 100%)'
    ],
    transition: { duration: 4 }
  },
  // Loop variant consists of 29 frames, (28 for the whole loop + 1 for the reset to look smooth), each of them is 1 second long
  loop: {
    background: [
      // Default background
      'linear-gradient(0deg, #fcdfd090 0%, #fcdfd090 10%, #c78df2 30%, #1265c7 100%)',
      'linear-gradient(0deg, #fcdfd090 0%, #fcdfd090 10%, #c78df2 30%, #1265c7 100%)',
      'linear-gradient(0deg, #fcdfd090 0%, #fcdfd090 10%, #c78df2 30%, #1265c7 100%)',
      'linear-gradient(0deg, #fcdfd090 0%, #fcdfd090 10%, #c78df2 30%, #1265c7 100%)',
      'linear-gradient(0deg, #fcdfd090 0%, #fcdfd090 10%, #c78df2 30%, #1265c7 100%)',
      'linear-gradient(0deg, #fcdfd090 0%, #fcdfd090 10%, #c78df2 30%, #1265c7 100%)',
      'linear-gradient(0deg, #fcdfd090 0%, #fcdfd090 10%, #c78df2 30%, #1265c7 100%)',
      // purple
      'linear-gradient(0deg, #FFD0A7 0%, #f7c9b0 10%, #e7bac2 30%, #B185FF 100%)',
      'linear-gradient(0deg, #FFD0A7 0%, #f7c9b0 10%, #e7bac2 30%, #B185FF 100%)',
      'linear-gradient(0deg, #FFD0A7 0%, #f7c9b0 10%, #e7bac2 30%, #B185FF 100%)',
      'linear-gradient(0deg, #FFD0A7 0%, #f7c9b0 10%, #e7bac2 30%, #B185FF 100%)',
      'linear-gradient(0deg, #FFD0A7 0%, #f7c9b0 10%, #e7bac2 30%, #B185FF 100%)',
      'linear-gradient(0deg, #FFD0A7 0%, #f7c9b0 10%, #e7bac2 30%, #B185FF 100%)',
      'linear-gradient(0deg, #FFD0A7 0%, #f7c9b0 10%, #e7bac2 30%, #B185FF 100%)',
      // orange
      'linear-gradient(0deg, rgba(255,208,167,1) 0%, rgba(253,196,171,1) 10%, rgba(249,174,180,1) 30%, rgba(234,93,211,1) 100%)',
      'linear-gradient(0deg, rgba(255,208,167,1) 0%, rgba(253,196,171,1) 10%, rgba(249,174,180,1) 30%, rgba(234,93,211,1) 100%)',
      'linear-gradient(0deg, rgba(255,208,167,1) 0%, rgba(253,196,171,1) 10%, rgba(249,174,180,1) 30%, rgba(234,93,211,1) 100%)',
      'linear-gradient(0deg, rgba(255,208,167,1) 0%, rgba(253,196,171,1) 10%, rgba(249,174,180,1) 30%, rgba(234,93,211,1) 100%)',
      'linear-gradient(0deg, rgba(255,208,167,1) 0%, rgba(253,196,171,1) 10%, rgba(249,174,180,1) 30%, rgba(234,93,211,1) 100%)',
      'linear-gradient(0deg, rgba(255,208,167,1) 0%, rgba(253,196,171,1) 10%, rgba(249,174,180,1) 30%, rgba(234,93,211,1) 100%)',
      'linear-gradient(0deg, rgba(255,208,167,1) 0%, rgba(253,196,171,1) 10%, rgba(249,174,180,1) 30%, rgba(234,93,211,1) 100%)',
      // blue
      'linear-gradient(0deg, #dff9fd 0%, #c9f6fd 10%, #9cf0fd 30%, #00ddfb 100%)',
      'linear-gradient(0deg, #dff9fd 0%, #c9f6fd 10%, #9cf0fd 30%, #00ddfb 100%)',
      'linear-gradient(0deg, #dff9fd 0%, #c9f6fd 10%, #9cf0fd 30%, #00ddfb 100%)',
      'linear-gradient(0deg, #dff9fd 0%, #c9f6fd 10%, #9cf0fd 30%, #00ddfb 100%)',
      'linear-gradient(0deg, #dff9fd 0%, #c9f6fd 10%, #9cf0fd 30%, #00ddfb 100%)',
      'linear-gradient(0deg, #dff9fd 0%, #c9f6fd 10%, #9cf0fd 30%, #00ddfb 100%)',
      'linear-gradient(0deg, #dff9fd 0%, #c9f6fd 10%, #9cf0fd 30%, #00ddfb 100%)',
      // Default background again
      'linear-gradient(0deg, #fcdfd090 0%, #fcdfd090 10%, #c78df2 30%, #1265c7 100%)'
    ],
    transition: { repeat: Infinity, duration: 29 }
  },
  // Reset variant is used to reset the background to the default one, it consists of only one frame, after this one is applied,
  // the loop variant is applied again
  reset: {
    // Default background
    background: 'linear-gradient(0deg, #fcdfd090 0%, #fcdfd090 10%, #c78df2 30%, #1265c7 100%)',
    transition: { duration: 1 }
  }
};

const easeOutExpo = cubicBezier(0.16, 1, 0.03, 1);
const easeHeading = cubicBezier(0.3, 0, 0.3, 1);
