import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { getAllProjects } from "@/lib/markdown";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GOKTUG | System Architect Portfolio",
  description: "Advanced Engineering & Operations Ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const projects = getAllProjects();

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-[#030305] text-white overflow-hidden`} suppressHydrationWarning>
        <Providers>
          <div className="flex h-screen w-screen overflow-hidden">
            <Sidebar />
            
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
              <Header />
              <CommandPalette projects={projects} />
              
              <main className="flex-1 overflow-y-auto p-6 md:p-12 relative scroll-smooth custom-scrollbar">
                {/* Subtle Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#030305]/80 to-transparent pointer-events-none -z-10" />
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
