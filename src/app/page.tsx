import { getProjectsByCategory } from '@/lib/markdown';
import { Hero } from '@/components/home/Hero';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { HomeWidgets } from '@/components/home/HomeWidgets';
import { Activity, Globe, ChevronRight, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  const categories = getProjectsByCategory();

  return (
    <div className="max-w-[1400px] mx-auto space-y-12 pb-20">

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">

        {/* ── LEFT: HERO & PROJECTS ── */}
        <div className="xl:col-span-8 space-y-10">
          <Hero />
          <CategoryGrid categories={categories} />
        </div>

        {/* ── RIGHT: SIDEBAR WIDGETS ── */}
        <HomeWidgets />
      </div>
    </div>
  );
}
