'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface MobileNavCtx { isOpen: boolean; toggle: () => void; close: () => void }
const MobileNavContext = createContext<MobileNavCtx>({ isOpen: false, toggle: () => {}, close: () => {} });

export function MobileNavProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen(p => !p), []);
  const close = useCallback(() => setIsOpen(false), []);
  return (
    <MobileNavContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </MobileNavContext.Provider>
  );
}

export const useMobileNav = () => useContext(MobileNavContext);
