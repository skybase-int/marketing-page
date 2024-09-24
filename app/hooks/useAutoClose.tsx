import { useCallback, useEffect, useState } from 'react';

interface AutoCloseOptions {
  initialState?: 'open' | 'close' | undefined;
  delay?: number;
}

export const useAutoClose = ({ initialState, delay = 5000 }: AutoCloseOptions = {}) => {
  const [state, setState] = useState<'open' | 'close' | undefined>(initialState);
  const [isHover, setIsHover] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (state === 'open' && !isHover) {
        setState('close');
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [state, isHover, delay]);

  const setIsHoverSafe = useCallback(
    (value: boolean) => {
      if (!isTouchDevice) {
        setIsHover(value);
      }
    },
    [isTouchDevice]
  );

  return { state, setState, isHover, setIsHover: setIsHoverSafe };
};
