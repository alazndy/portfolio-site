import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

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
          <p className="text-white/40 font-mono text-sm tracking-widest uppercase">Last updated: April 30, 2026</p>
        </header>

        <div className="glass p-8 md:p-12 rounded-[32px] border-white/10 space-y-10 text-white/80 leading-relaxed">

          <section className="space-y-4">
            <p className="text-lg text-white">GTab (&quot;the Extension&quot;) is a Chrome browser extension that provides a customizable new tab page. This policy explains in detail what Google user data is accessed, how it is used, and how it is protected, in compliance with the{' '}
              <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noreferrer" className="text-lcars-cyan hover:underline">Google API Services User Data Policy</a>.
            </p>
            <div className="bg-lcars-orange/10 border border-lcars-orange/30 rounded-2xl p-5 text-white/70 text-sm">
              <strong className="text-white">Summary:</strong> GTab does not operate any servers. All Google user data stays on your device and is used exclusively to display information in your new tab page. We do not share, sell, or transmit your data to any third party.
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              1. Google User Data Accessed
            </h2>
            <p>GTab accesses the following Google user data only when you explicitly enable the corresponding widget. All access is opt-in and disabled by default.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-4 text-white/90 font-bold">Widget</th>
                    <th className="text-left py-3 pr-4 text-white/90 font-bold">OAuth Scope</th>
                    <th className="text-left py-3 pr-4 text-white/90 font-bold">Data Accessed</th>
                    <th className="text-left py-3 text-white/90 font-bold">Data NOT Accessed</th>
                  </tr>
                </thead>
                <tbody className="text-white/60">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-semibold text-white/80">Gmail Widget</td>
                    <td className="py-3 pr-4"><code className="text-lcars-cyan text-xs">gmail.metadata</code></td>
                    <td className="py-3 pr-4">Sender name, sender email address, subject line, received date</td>
                    <td className="py-3">Email body, attachments, content, labels, drafts</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 font-semibold text-white/80">Calendar Widget</td>
                    <td className="py-3 pr-4"><code className="text-lcars-cyan text-xs">calendar.readonly</code></td>
                    <td className="py-3 pr-4">Event title, start/end time, location</td>
                    <td className="py-3">Attendee lists, meeting links, private calendar descriptions</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-white/80">Tasks Widget</td>
                    <td className="py-3 pr-4"><code className="text-lcars-cyan text-xs">tasks</code></td>
                    <td className="py-3 pr-4">Task titles, due dates, completion status</td>
                    <td className="py-3">Notes fields, deleted tasks, task history</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-white/60 text-sm">User identity data (<code>openid</code>, <code>email</code>, <code>profile</code>) is accessed solely to display your name and profile picture in the extension header.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              2. How We Use Google User Data
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/60">
              <li><strong className="text-white/90">Gmail metadata</strong> (sender, subject, date): Displayed in the Gmail widget so you can see recent emails at a glance. Rendered locally, never processed beyond display.</li>
              <li><strong className="text-white/90">Calendar events</strong>: Displayed in the Calendar widget to show your upcoming schedule.</li>
              <li><strong className="text-white/90">Tasks</strong>: Displayed and managed in the Tasks widget. Completions are written back to Google Tasks via the Tasks API.</li>
              <li><strong className="text-white/90">Identity</strong>: Shown in the extension UI for personalization only.</li>
            </ul>
            <p className="text-white/60"><strong className="text-white">GTab does not use any Google user data for advertising, analytics, profiling, or training AI/ML models.</strong>{' '}
              GTab&apos;s use of information received from Google APIs adheres to the{' '}
              <a href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes" target="_blank" rel="noreferrer" className="text-lcars-cyan hover:underline">Google API Services User Data Policy</a>, including the Limited Use requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              3. Data Sharing
            </h2>
            <p>GTab does not share Google user data with any third party. Specifically:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/60">
              <li>No Google user data is sent to GTab&apos;s developer or any server controlled by GTab.</li>
              <li>No Google user data is sold, rented, or licensed to any party.</li>
              <li>No Google user data is used for advertising, remarketing, or audience building.</li>
              <li>No analytics or crash-reporting services receive Google user data.</li>
            </ul>
            <p className="text-white/60">The only parties that receive your Google data are Google&apos;s own APIs (googleapis.com), when the Extension makes API calls on your behalf.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              4. Data Storage and Protection
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/60">
              <li><strong className="text-white/90">Local storage only:</strong> All data is stored on your device using Chrome&apos;s sandboxed <code>chrome.storage.local</code> API, isolated to the GTab extension.</li>
              <li><strong className="text-white/90">OAuth tokens:</strong> Stored in <code>chrome.storage.local</code> and used exclusively to make authenticated API requests. Never transmitted to any server other than Google&apos;s OAuth endpoints.</li>
              <li><strong className="text-white/90">No remote servers:</strong> GTab has no backend infrastructure — no databases, cloud functions, or servers that store or process your data.</li>
              <li><strong className="text-white/90">Cache:</strong> API responses may be cached locally (e.g., weather data for 30 minutes) to reduce API calls. Cached data expires automatically.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              5. Data Retention and Deletion
            </h2>
            <p className="text-white/80 font-semibold">Retention</p>
            <p className="text-white/60">Google user data is held in local browser storage only for as long as you use the Extension. Cached data expires automatically (typically within 30 minutes to 1 hour).</p>
            <p className="text-white/80 font-semibold">Deletion</p>
            <p className="text-white/60">You can delete all locally stored GTab data at any time:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/60">
              <li><strong className="text-white/90">Within the Extension:</strong> Settings → Account → Sign Out. Clears the OAuth token and all cached Google data.</li>
              <li><strong className="text-white/90">Uninstall:</strong> Uninstalling GTab from Chrome automatically deletes all associated <code>chrome.storage.local</code> data.</li>
              <li><strong className="text-white/90">Browser settings:</strong> Chrome → Settings → Privacy and security → Clear browsing data → Site data.</li>
            </ul>
            <p className="text-white/80 font-semibold">Revoking Google Access</p>
            <p className="text-white/60">Visit{' '}
              <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer" className="text-lcars-cyan hover:underline">Google Account Permissions</a>{' '}
              and remove GTab to revoke access at any time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              6. Third-Party Services (Non-Google)
            </h2>
            <p>GTab communicates with the following additional services. None receive Google user data:</p>
            <ul className="list-disc pl-6 space-y-2 text-white/60">
              <li><strong className="text-white/90">Open-Meteo</strong> (api.open-meteo.com) – Weather data. Only approximate GPS coordinates sent. No personal identifiers.</li>
              <li><strong className="text-white/90">Nominatim / OpenStreetMap</strong> (nominatim.openstreetmap.org) – Reverse geocoding. No personal identifiers.</li>
              <li><strong className="text-white/90">Yahoo Finance / Alpha Vantage</strong> – Stock price data. Only ticker symbols sent.</li>
              <li><strong className="text-white/90">Spotify API</strong> – If you configure the Spotify widget with your own Developer App credentials, the Extension communicates directly with Spotify&apos;s API. Your Spotify token is stored locally and only sent to Spotify&apos;s official endpoints.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              7. Chrome Permissions Justification
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-white/60">
              <li><code>storage</code> – Saves widget layout, shortcuts, and preferences locally.</li>
              <li><code>identity</code> – Authenticates with Google for Calendar, Gmail, and Tasks widgets.</li>
              <li><code>activeTab</code>, <code>tabs</code> – Opens shortcuts and manages tab navigation. No tab content is read or transmitted.</li>
              <li><code>contextMenus</code> – Adds a right-click option to save shortcuts from any page.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              8. Children&apos;s Privacy
            </h2>
            <p>GTab is not directed at children under 13 and does not knowingly collect data from children.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              9. Changes to This Policy
            </h2>
            <p>We may update this policy to reflect changes in the Extension&apos;s functionality or updated requirements. The &quot;Last updated&quot; date at the top will reflect any changes.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-lcars-orange uppercase tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-lcars-orange rounded-full" />
              10. Contact
            </h2>
            <p>For questions or to request data deletion assistance, contact:{' '}
              <a href="mailto:goktugturhan74@gmail.com" className="text-lcars-cyan hover:underline">goktugturhan74@gmail.com</a>
            </p>
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
