'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'tr' | 'en';

interface Dictionary {
  [key: string]: string;
}

const dictionaries: Record<Language, Dictionary> = {
  tr: {
    'nav.home': 'Hub / Ana Sayfa',
    'nav.about': 'Hakkımda',
    'nav.portfolio': 'Portfolio Veritabanı',
    'nav.systems': 'Sistemler Aktif',
    'header.search': 'Sistemde Ara (Ctrl+K)...',
    'header.docs': 'Dökümantasyon',
    'header.github': 'GitHub Bağlantısı',
    'home.title': 'Kişisel Veritabanı ve Proje Arşivi',
    'home.subtitle': 'T-Ecosystem altyapısına hoş geldiniz. Tüm endüstriyel, yazılımsal ve donanımsal projeler buradan yönetilmektedir.',
    'home.recent': 'Son İletimler',
    'home.tech': 'Sistem Altyapısı',
    'home.viewAll': 'Tümünü Gör',
    'project.status': 'Durum',
    'project.category': 'Kategori',
    'project.stack': 'Teknoloji',
    'project.live': 'Canlı Bağlantı',
    'project.github': 'Kaynak Kod',
  },
  en: {
    'nav.home': 'Hub / Home',
    'nav.about': 'About Me',
    'nav.portfolio': 'Portfolio Database',
    'nav.systems': 'Systems Online',
    'header.search': 'Search System (Ctrl+K)...',
    'header.docs': 'Documentation',
    'header.github': 'GitHub Uplink',
    'home.title': 'Personal Database & Project Archive',
    'home.subtitle': 'Welcome to the T-Ecosystem infrastructure. All industrial, software, and hardware projects are managed here.',
    'home.recent': 'Recent Transmissions',
    'home.tech': 'System Infrastructure',
    'home.viewAll': 'View All',
    'project.status': 'Status',
    'project.category': 'Category',
    'project.stack': 'Technology',
    'project.live': 'Live Link',
    'project.github': 'Source Code',
  }
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('tr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Language;
    if (saved === 'tr' || saved === 'en') {
      setLang(saved);
    }
    setMounted(true);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = (key: string) => {
    return dictionaries[lang][key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
