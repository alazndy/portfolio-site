import { getProjectsByCategory } from '@/lib/markdown';
import { Hero } from '@/components/home/Hero';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { HomeWidgets } from '@/components/home/HomeWidgets';

export default function Home() {
  const categories = getProjectsByCategory();

  return (
    <div className="max-w-[1400px] mx-auto pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left: Hero + Projects */}
        <div className="lg:col-span-8 space-y-8">
          <Hero />
          <CategoryGrid categories={categories} />
        </div>

        {/* Right: Widgets — below content on mobile, sticky on desktop */}
        <aside className="lg:col-span-4 lg:sticky lg:top-6">
          <HomeWidgets />
        </aside>

      </div>
    </div>
  );
}
