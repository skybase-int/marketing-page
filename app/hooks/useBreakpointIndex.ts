import { useState, useEffect } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

export enum BP {
  sm = 0, // mobile
  md = 1, // tablet
  xl = 2, // desktop-xl
  '2xl' = 3 // desktop-2xl
}

type ScreenSizes = 'tablet' | 'desktop' | 'desktop-xl';

export const useBreakpointIndex = () => {
  const [breakpointIndex, setBreakpointIndex] = useState(0);
  const { theme } = resolveConfig(tailwindConfig);
  // @ts-expect-error
  const themeScreens = theme?.screens as Record<ScreenSizes, string>;

  // Convert screen sizes to numeric values
  const screens = Object.fromEntries(
    Object.entries(themeScreens).map(([key, value]) => [key, parseInt(value.replace('px', ''), 10)])
  ) as Record<string, number>;

  useEffect(() => {
    const updateBreakpointIndex = () => {
      const width = window.innerWidth;

      // sm
      if (width < screens.tablet) setBreakpointIndex(BP.sm);
      // md
      else if (width < screens.desktop) setBreakpointIndex(BP.md);
      // lg
      else if (width < screens['desktop-xl']) setBreakpointIndex(BP.xl);
      // 2xl
      else setBreakpointIndex(BP['2xl']);
    };

    updateBreakpointIndex();
    window.addEventListener('resize', updateBreakpointIndex);

    return () => {
      window.removeEventListener('resize', updateBreakpointIndex);
    };
  }, []);

  return { bpi: breakpointIndex };
};
