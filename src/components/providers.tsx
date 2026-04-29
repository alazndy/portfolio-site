'use client';

import { ThemeProvider } from 'next-themes';
import { I18nProvider } from '@/lib/i18n';
import { ReactNode, useEffect, useState } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Hidrasyon hatasını önlemek için bileşen monte edilene kadar render'ı bekletiyoruz
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <I18nProvider>
      {mounted ? (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      ) : (
        <div style={{ visibility: 'hidden' }}>{children}</div>
      )}
    </I18nProvider>
  );
}
