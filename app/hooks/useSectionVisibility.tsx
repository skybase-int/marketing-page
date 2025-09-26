import { useEffect, useState, useCallback } from 'react';

interface ToggleSectionTransitionOptions {
  bottomDivRef: React.RefObject<HTMLDivElement | null>;
  topDivRef: React.RefObject<HTMLDivElement | null>;
}

const SECTION_TRANSITION_DELAY = 1000;

export const useSectionVisibility = ({ bottomDivRef, topDivRef }: ToggleSectionTransitionOptions) => {
  const [sectionVisibility, setSectionVisibility] = useState<'open' | 'close' | undefined>(undefined);
  const [lastUpdated, setLastUpdated] = useState<number>(0);

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const currentTime = Date.now();
        if (entry.isIntersecting && currentTime - lastUpdated > SECTION_TRANSITION_DELAY) {
          if (entry.target === bottomDivRef.current) {
            setSectionVisibility('open');
            setLastUpdated(Date.now());
          } else if (entry.target === topDivRef.current) {
            setSectionVisibility('close');
            setLastUpdated(Date.now());
          }
        }
      });
    },
    [bottomDivRef, topDivRef, lastUpdated]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });

    const observeRef = (ref: React.RefObject<HTMLDivElement | null>) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    };

    observeRef(bottomDivRef);
    observeRef(topDivRef);

    return () => observer.disconnect();
  }, [bottomDivRef, topDivRef, observerCallback]);

  return { sectionVisibility, setSectionVisibility };
};
