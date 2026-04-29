'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Hidrasyon hatasını önlemek için bileşen monte edilene kadar render'ı bekletiyoruz
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
