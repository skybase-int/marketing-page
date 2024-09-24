'use client';

import React, { ReactNode, useContext, useState } from 'react';

export type Tone = 'dark' | 'light';

interface ContextProps {
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
  const [modalOpened, setModalOpened] = useState(false);
  const [externalLinkModalOpened, setExternalLinkModalOpened] = useState(false);
  const [externalLinkModalUrl, setExternalLinkModalUrl] = useState('');
  const [visibleAreaTone, setVisibleAreaTone] = useState<'dark' | 'light'>('dark');
  const [scrollContainerRef, setScrollContainerRef] = useState<React.RefObject<HTMLDivElement> | undefined>(
    undefined
  );

  return (
    <AppContext.Provider
      value={{
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
