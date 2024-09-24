import { useInView } from 'framer-motion';
import { useAppContext } from '@/app/context/AppContext';
import { useEffect } from 'react';

export const useHeaderInView = (divRef: React.RefObject<HTMLDivElement>, tone: 'light' | 'dark') => {
  const { setVisibleAreaTone } = useAppContext();
  // TODO: Define header height based on the current breakpoint
  const isInView = useInView(divRef, {
    margin: '0px 0px -85% 0px',
    amount: 'some'
  });

  useEffect(() => {
    if (isInView) {
      setVisibleAreaTone(tone);
    }
  }, [isInView, tone, setVisibleAreaTone]);

  return isInView;
};
