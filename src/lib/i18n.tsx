'use client';

import React, { createContext, useContext, useMemo, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export type Language = 'tr' | 'en';

export interface Dictionary {
  [key: string]: string;
}

export const dictionaries: Record<Language, Dictionary> = {
  tr: {
    // Nav
    'nav.home': 'Ana Sayfa',
    'nav.about': 'AlazLab hakkında',
    'nav.muhendislik': 'Mühendislik araçları',
    'nav.lab': 'Yazılım ürünleri',
    'nav.portfolio': 'Ürün kataloğu',
    'nav.systemsActive': 'proje aktif',
    'nav.footer': 'Bağımsız dijital ürünler',
    'nav.allProjects': 'Tüm Projeler',
    'nav.close': 'Kapat',
    'nav.openMenu': 'Menüyü aç',

    // Header
    'header.search': 'Ürün kataloğunda ara (Ctrl+K)...',
    'header.searchBtn': 'Ara',
    'header.docs': 'Dokümantasyon',
    'header.github': 'GitHub',
    'header.theme': 'Tema Değiştir',
    'header.lang': 'Dili Değiştir',
    'header.available': 'İstanbul, TR',

    // Hero & Bio
    'hero.role': 'Yazılım ürünleri ve mühendislik araçları',
    'hero.bio': 'AlazLab; mobil, masaüstü ve web için dijital ürünler ile teknik iş akışlarını destekleyen mühendislik araçları geliştirir.',
    'hero.explore': 'Ürünleri keşfet',
    'hero.viewAll': 'Tümünü Gör',

    // Stats
    'stats.projects': 'Toplam Proje',
    'stats.active': 'Canlı / Aktif',
    'stats.areas': 'Uzmanlık Alanı',
    'stats.years': 'Yıllık Deneyim',

    // Categories & Areas
    'cat.engineering': 'Mühendislik araçları',
    'cat.lab': 'Yazılım ürünleri',
    'cat.other': 'Diğer ürünler',
    'cat.all': 'Tüm ürünler',
    'cat.total': 'toplam',
    'cat.engineeringDesc': 'Teknik çizimler, proje akışları ve bağlantılı sistemler için bağımsız araçlar.',
    'cat.labDesc': 'Android, tarayıcı ve geliştirici iş akışları için yazılım ürünleri.',
    'cat.otherDesc': 'Bağımsız dijital ürünler ve açık kaynaklı yazılımlar.',

    // Project Details
    'project.status': 'Durum',
    'project.category': 'Kategori',
    'project.area': 'Alan',
    'project.stack': 'Teknolojiler',
    'project.year': 'Yıl',
    'project.systemInfo': 'Teknik Özellikler',
    'project.related': 'Benzer Projeler',
    'project.downloads': 'İndirmeler',
    'project.manuals': 'Teknik Kılavuzlar',
    'project.gallery': 'Görseller ve Şemalar',
    'project.videos': 'Video Kayıtları',
    'project.openVideo': 'Videoyu Aç',
    'project.liveDemo': 'Canlı Önizleme',
    'project.sourceCode': 'Kaynak Kod',
    'project.downloadApk': 'APK İndir',
    'project.detailsComingSoon': 'Teknik detaylar hazırlanıyor.',
    'project.all': 'Tüm Projeler',
    'project.back': 'Geri Dön',

    // Command Palette
    'cmd.placeholder': 'Proje adı veya teknoloji arayın...',
    'cmd.availableModules': 'Kayıtlı Projeler',
    'cmd.noResults': 'Eşleşen proje bulunamadı.',

    // About Page
    'about.dayTag': 'Ürün yaklaşımı',
    'about.dayCompany': 'AlazLab',
    'about.name': 'AlazLab',
    'about.heroTitle1': 'Dijital ürünler',
    'about.heroTitle2': 've mühendislik araçları.',
    'about.typewriter': 'Mobil, masaüstü ve web için bağımsız ürünler; teknik iş akışlarını sadeleştiren araçlar geliştiriyoruz.',
    'about.dayTitle': 'Mühendislik araçları',
    'about.dayBody': 'Teknik çizim, dokümantasyon ve proje akışlarını düzenlemeye yardımcı bağımsız mühendislik araçları geliştiriyoruz.',
    'about.nightTitle': 'Yazılım ürünleri',
    'about.nightBody': 'Ürünlerimiz arasında Android için GT-Launcher ve InfAssist, Chrome için GTab ve yerel geliştirici iş akışları için R-AI-OS bulunuyor.',
    'about.principleTitle': 'Çalışma Prensibi',
    'about.principleBody': 'Her üründe net bir kullanım amacı, ölçülü kapsam ve sürdürülebilir bir teknik temel gözetiyoruz.',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About AlazLab',
    'nav.muhendislik': 'Engineering tools',
    'nav.lab': 'Software products',
    'nav.portfolio': 'Product catalog',
    'nav.systemsActive': 'projects active',
    'nav.footer': 'Independent digital products',
    'nav.allProjects': 'All Projects',
    'nav.close': 'Close',
    'nav.openMenu': 'Open menu',

    // Header
    'header.search': 'Search product catalog (Ctrl+K)...',
    'header.searchBtn': 'Search',
    'header.docs': 'Documentation',
    'header.github': 'GitHub',
    'header.theme': 'Toggle Theme',
    'header.lang': 'Switch Language',
    'header.available': 'Istanbul, TR',

    // Hero & Bio
    'hero.role': 'Software products & engineering tools',
    'hero.bio': 'AlazLab builds digital products for mobile, desktop, and web, alongside tools that support technical workflows.',
    'hero.explore': 'Explore products',
    'hero.viewAll': 'View All',

    // Stats
    'stats.projects': 'Total Projects',
    'stats.active': 'Live / Active',
    'stats.areas': 'Core Disciplines',
    'stats.years': 'Years Experience',

    // Categories & Areas
    'cat.engineering': 'Engineering tools',
    'cat.lab': 'Software products',
    'cat.other': 'Other products',
    'cat.all': 'All products',
    'cat.total': 'total',
    'cat.engineeringDesc': 'Independent tools for technical diagrams, project workflows, and connected systems.',
    'cat.labDesc': 'Software products for Android, browsers, and developer workflows.',
    'cat.otherDesc': 'Independent digital products and open-source software.',

    // Project Details
    'project.status': 'Status',
    'project.category': 'Category',
    'project.area': 'Area',
    'project.stack': 'Technologies',
    'project.year': 'Year',
    'project.systemInfo': 'Technical Specs',
    'project.related': 'Related Projects',
    'project.downloads': 'Downloads',
    'project.manuals': 'Technical Guides',
    'project.gallery': 'Gallery & Schematics',
    'project.videos': 'Video Recordings',
    'project.openVideo': 'Open Video',
    'project.liveDemo': 'Live Preview',
    'project.sourceCode': 'Source Code',
    'project.downloadApk': 'Download APK',
    'project.detailsComingSoon': 'Technical details coming soon.',
    'project.all': 'All Projects',
    'project.back': 'Back',

    // Command Palette
    'cmd.placeholder': 'Search by project name or technology...',
    'cmd.availableModules': 'Catalogued Projects',
    'cmd.noResults': 'No matching projects found.',

    // About Page
    'about.dayTag': 'Our approach',
    'about.dayCompany': 'AlazLab',
    'about.name': 'AlazLab',
    'about.heroTitle1': 'Digital products',
    'about.heroTitle2': 'and engineering tools.',
    'about.typewriter': 'We build independent products for mobile, desktop, and web, and tools that make technical workflows easier.',
    'about.dayTitle': 'Engineering tools',
    'about.dayBody': 'We develop independent engineering tools that help organize technical drawings, documentation, and project workflows.',
    'about.nightTitle': 'Software products',
    'about.nightBody': 'Our products include GT-Launcher and InfAssist for Android, GTab for Chrome, and R-AI-OS for local developer workflows.',
    'about.principleTitle': 'Core Principle',
    'about.principleBody': 'Each product is shaped around a clear use case, deliberate scope, and a maintainable technical foundation.',
  },
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  localizePath: (path: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Extract initial language from pathname (/tr/... or /en/...)
  const initialLang: Language = useMemo(() => {
    if (!pathname) return 'tr';
    const segment = pathname.split('/')[1];
    return (segment === 'en' || segment === 'tr') ? segment : 'tr';
  }, [pathname]);

  const lang = initialLang;

  const setLang = useCallback((newLang: Language) => {
    if (!pathname) return;

    const segments = pathname.split('/');
    if (segments[1] === 'tr' || segments[1] === 'en') {
      segments[1] = newLang;
      router.push(segments.join('/') || `/${newLang}`);
    } else {
      router.push(`/${newLang}${pathname.startsWith('/') ? pathname : `/${pathname}`}`);
    }
  }, [pathname, router]);

  const t = useCallback((key: string): string => {
    return dictionaries[lang]?.[key] ?? dictionaries['tr']?.[key] ?? key;
  }, [lang]);

  const localizePath = useCallback((path: string): string => {
    if (!path) return `/${lang}`;
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('#')) return path;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (cleanPath.startsWith('/tr/') || cleanPath.startsWith('/en/') || cleanPath === '/tr' || cleanPath === '/en') {
      return cleanPath;
    }
    return `/${lang}${cleanPath === '/' ? '' : cleanPath}`;
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    setLang,
    t,
    localizePath,
  }), [lang, setLang, t, localizePath]);

  return (
    <I18nContext.Provider value={value}>
      {children}
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
