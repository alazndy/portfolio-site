import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { MobileNavProvider } from "@/components/layout/mobile-nav-context";
import { getAllProjects } from "@/lib/markdown";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'AlazLab | Software Products & Engineering Tools',
    template: '%s | AlazLab',
  },
  description: 'AlazLab builds independent software products for mobile, desktop, and web, along with tools for technical workflows.',
  keywords: ['AlazLab', 'software products', 'engineering tools', 'Android', 'Chrome', 'Kotlin', 'Rust', 'Next.js'],
  authors: [{ name: 'AlazLab', url: 'https://alazlab.com' }],
  creator: 'AlazLab',
  metadataBase: new URL('https://alazlab.com'),
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: ['en_US'],
    url: 'https://alazlab.com',
    siteName: 'AlazLab',
    title: 'AlazLab | Software Products & Engineering Tools',
    description: 'Independent software products for mobile, desktop, and web, with tools for technical workflows.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlazLab | Software Products & Engineering Tools',
    description: 'Independent software products for mobile, desktop, and web, with tools for technical workflows.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://alazlab.com' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://alazlab.com/#organization',
      name: 'AlazLab',
      url: 'https://alazlab.com',
      sameAs: [
        'https://github.com/alazndy',
        'https://play.google.com/store/apps/details?id=com.alazndy.gtlauncher',
        'https://chromewebstore.google.com/detail/gtab-ki%C5%9Fiselle%C5%9Ftirilebili/ablekgbicginadinndchdojklkojgbdb',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://alazlab.com/#website',
      url: 'https://alazlab.com',
      name: 'alazlab.com',
      publisher: { '@id': 'https://alazlab.com/#organization' },
      inLanguage: ['tr-TR', 'en-US'],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const projects = getAllProjects();

  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          <MobileNavProvider>
            {/* Full-height flex container — overflow-hidden only on lg+ */}
            <div className="flex h-svh lg:h-screen w-full overflow-hidden">
              <Sidebar projects={projects} />

              <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10 scroll-smooth custom-scrollbar">
                  {children}
                </main>
              </div>
            </div>
          </MobileNavProvider>
        </Providers>
      </body>
    </html>
  );
}
