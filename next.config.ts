import type { NextConfig } from "next";

const infassistLocales = ['tr', 'de', 'fr', 'it', 'es', 'ar', 'hi', 'id', 'ko'];

const nextConfig: NextConfig = {
  async rewrites() {
    const localizedPageRewrites = infassistLocales.flatMap((lang) => [
      { source: `/infassist/${lang}`, destination: `/infassist/${lang}/index.html` },
      { source: `/infassist/${lang}/privacy`, destination: `/infassist/${lang}/privacy.html` },
      { source: `/infassist/${lang}/support`, destination: `/infassist/${lang}/support.html` },
    ]);

    return {
      beforeFiles: [
        { source: '/infassist', destination: '/infassist/index.html' },
        { source: '/infassist/privacy', destination: '/infassist/privacy.html' },
        { source: '/infassist/support', destination: '/infassist/support.html' },
        ...localizedPageRewrites,
      ],
    };
  },
  async redirects() {
    return [
      { source: '/about', destination: '/hakkimda', permanent: true },
      { source: '/projects/:slug([^./]+)', destination: '/proje/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
