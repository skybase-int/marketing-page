'use client';

import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { storageKey } from '../constants';

export type Tone = 'dark' | 'light';

interface ContextProps {
  readonly isJsLoaded: boolean;
  readonly setIsJsLoaded: (val: boolean) => void;
  readonly localStorageLoaded: boolean | undefined;
  readonly landingLoadingTime: number;
  readonly setLandingLoadingTime: (val: number) => void;
  readonly isSlowNetwork: boolean | undefined;
  readonly setIsSlowNetwork: (val: boolean | undefined) => void;
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
  readonly scrollContainerRef: React.RefObject<HTMLDivElement | null> | undefined;
  readonly setScrollContainerRef: (val: React.RefObject<HTMLDivElement | null> | undefined) => void;
}

const AppContext = React.createContext<ContextProps | undefined>(undefined);

type PropTypes = {
  children: ReactNode;
};

export const AppProvider = ({ children }: PropTypes) => {
  const [isJsLoaded, setIsJsLoaded] = useState(false);
  const [landingLoadingTime, setLandingLoadingTime] = useState(0);
  const [isSlowNetwork, setIsSlowNetwork] = useState<boolean | undefined>(undefined);
  const [isFirstPlay, setIsFirstPlay] = useState<boolean | undefined>(undefined);
  const [modalOpened, setModalOpened] = useState(false);
  const [externalLinkModalOpened, setExternalLinkModalOpened] = useState(false);
  const [externalLinkModalUrl, setExternalLinkModalUrl] = useState('');
  const [visibleAreaTone, setVisibleAreaTone] = useState<'dark' | 'light'>('dark');
  const [scrollContainerRef, setScrollContainerRef] = useState<
    React.RefObject<HTMLDivElement | null> | undefined
  >(undefined);
  const [localStorageLoaded, setLocalStorageLoaded] = useState(false);

  //check session storage to see if video has already been played
  useEffect(() => {
    // Once JS loads, mark as loaded
    document.documentElement.classList.add('js-loaded');
    setIsJsLoaded(true);

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
        landingLoadingTime,
        setLandingLoadingTime,
        isSlowNetwork,
        setIsSlowNetwork,
        modalOpened,
        setModalOpened,
        externalLinkModalOpened,
        setExternalLinkModalOpened,
        externalLinkModalUrl,
        setExternalLinkModalUrl,
        visibleAreaTone,
        setVisibleAreaTone,
        scrollContainerRef,
        setScrollContainerRef,
        isJsLoaded,
        setIsJsLoaded
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
