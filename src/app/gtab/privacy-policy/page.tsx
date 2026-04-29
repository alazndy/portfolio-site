import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, ShieldCheck, Download } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20 px-6 max-w-4xl mx-auto animate-in fade-in duration-1000">
      
      <Link href="/gtab" className="inline-flex items-center gap-2 text-white/50 hover:text-lcars-cyan transition-colors mb-12 text-sm font-mono tracking-widest uppercase">
        <ArrowLeft className="w-4 h-4" />
        Back to GTab
      </Link>

      <div className="space-y-12">
        <header className="space-y-4">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-lcars-cyan" />
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">GTab Privacy Policy</h1>
          </div>
          <p className="text-white/40 font-mono text-sm tracking-widest uppercase">Last updated: April 29, 2026</p>
        </header>

        <div className="glass p-8 md:p-12 rounded-[32px] border-white/10 space-y-10 text-white/80 leading-relaxed">
          
          <section className="space-y-4">
            <p className="text-lg text-white">GTab ("the Extension") is a Chrome browser extension that provides a customizable new tab page. This policy explains what data is accessed and how it is handled.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              1. Data We Access
            </h2>
            <p>GTab may access the following data when you explicitly enable specific widgets:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/60">
              <li><strong className="text-white/90">Google Calendar</strong> – Read-only access to your upcoming events, displayed directly in the new tab page.</li>
              <li><strong className="text-white/90">Google Tasks</strong> – Read and write access to your task lists, allowing you to view and complete tasks from the new tab page.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              2. Data Storage
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/60">
              <li>All data is stored <strong className="text-white/90">locally on your device</strong> using the browser's built-in <code>localStorage</code> and <code>chrome.storage</code> APIs.</li>
              <li>No data is transmitted to any external server operated by GTab.</li>
              <li>Google API tokens are stored locally and used solely to communicate with Google's official APIs on your behalf.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              3. Data We Do NOT Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/60">
              <li>We do not collect, store, or transmit any personal information to our own servers.</li>
              <li>We do not use analytics, tracking, or advertising services.</li>
              <li>We do not share any data with third parties.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              4. Third-Party Services
            </h2>
            <p>GTab communicates directly with the following services on your behalf:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/60">
              <li><strong className="text-white/90">Google APIs</strong> (calendar.googleapis.com, tasks.googleapis.com) – for Calendar and Tasks widgets.</li>
              <li><strong className="text-white/90">Open-Meteo</strong> (api.open-meteo.com) – for weather data. No personal data is sent; only your approximate location coordinates.</li>
              <li><strong className="text-white/90">Nominatim / OpenStreetMap</strong> (nominatim.openstreetmap.org) – for reverse geocoding your location to a city name.</li>
              <li><strong className="text-white/90">Financial data providers</strong> (Yahoo Finance, Alpha Vantage) – for stock price widgets. No personal data is sent.</li>
            </ul>
            <p>These services are governed by their own privacy policies.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              5. Permissions
            </h2>
            <p>GTab requests the following Chrome permissions:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/60">
              <li><code>storage</code> – to save your preferences locally.</li>
              <li><code>identity</code> – to authenticate with Google for Calendar and Tasks widgets.</li>
              <li><code>activeTab</code>, <code>tabs</code> – to manage shortcuts and tab navigation.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              6. Your Control
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/60">
              <li>You can revoke Google access at any time via <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer" className="text-lcars-cyan hover:underline">Google Account Permissions</a>.</li>
              <li>You can clear all locally stored data by uninstalling the extension or clearing browser storage.</li>
              <li>All Google-connected widgets are opt-in and disabled by default.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              7. Children's Privacy
            </h2>
            <p>GTab is not directed at children under 13 and does not knowingly collect data from children.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              8. Changes to This Policy
            </h2>
            <p>We may update this policy occasionally. The updated date at the top of this page will reflect any changes.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              9. Contact
            </h2>
            <p>For questions about this privacy policy, contact: <a href="mailto:goktugturhan74@gmail.com" className="text-lcars-cyan hover:underline">goktugturhan74@gmail.com</a></p>
          </section>

        </div>
        
        <footer className="text-center text-sm font-mono text-white/30 uppercase tracking-widest pt-8 border-t border-white/5">
          <p>GTab is an open-source Chrome extension. Source code is available on <a href="https://github.com/alazndy/GTab" target="_blank" rel="noreferrer" className="hover:text-lcars-cyan transition-colors">GitHub</a>.</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} <Link href="/" className="hover:text-lcars-cyan transition-colors">alazlab.com</Link></p>
        </footer>

      </div>
    </div>
  );
}
