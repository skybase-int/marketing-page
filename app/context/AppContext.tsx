'use client';

import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { storageKey } from '../constants';

export type Tone = 'dark' | 'light';

interface ContextProps {
  readonly localStorageLoaded: boolean | undefined;
  readonly isFirstPlay: boolean | undefined;
  readonly setIsFirstPlay: (val: boolean | undefined) => void;
  readonly modalOpened: boolean;
  readonly setModalOpened: (val: boolean) => void;
  readonly externalLinkModalOpened: boolean;
  readonly setExternalLinkModalOpened: (val: boolean) => void;
  readonly externalLinkModalUrl: string;
  readonly setExternalLinkModalUrl: (val: string) => void;
  readonly visibleAreaTone: Tone;
  readonly setVisibleAreaTone: (val: Tone) => void;
  readonly scrollContainerRef: React.RefObject<HTMLDivElement> | undefined;
  readonly setScrollContainerRef: (val: React.RefObject<HTMLDivElement> | undefined) => void;
}

const AppContext = React.createContext<ContextProps | undefined>(undefined);

type PropTypes = {
  children: ReactNode;
};

export const AppProvider = ({ children }: PropTypes) => {
  const [isFirstPlay, setIsFirstPlay] = useState<boolean | undefined>(undefined);
  const [modalOpened, setModalOpened] = useState(false);
  const [externalLinkModalOpened, setExternalLinkModalOpened] = useState(false);
  const [externalLinkModalUrl, setExternalLinkModalUrl] = useState('');
  const [visibleAreaTone, setVisibleAreaTone] = useState<'dark' | 'light'>('dark');
  const [scrollContainerRef, setScrollContainerRef] = useState<React.RefObject<HTMLDivElement> | undefined>(
    undefined
  );
  const [localStorageLoaded, setLocalStorageLoaded] = useState(false);

  //check session storage to see if video has already been played
  useEffect(() => {
    const storedValue = window.sessionStorage.getItem(storageKey);
    setIsFirstPlay(storedValue !== 'true');
    setLocalStorageLoaded(true);
  }, []);

  return (
    <AppContext.Provider
      value={{
        localStorageLoaded,
        isFirstPlay,
        setIsFirstPlay,
        modalOpened,
        setModalOpened,
        externalLinkModalOpened,
        setExternalLinkModalOpened,
        externalLinkModalUrl,
        setExternalLinkModalUrl,
        visibleAreaTone,
        setVisibleAreaTone,
        scrollContainerRef,
        setScrollContainerRef
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a ModalProvider');
  }
  return context;
};
