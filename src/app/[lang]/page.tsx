import { HomeHero } from '@/components/home/HomeHero';
import { TrackDoors } from '@/components/home/TrackDoors';

export async function generateStaticParams() {
  return [{ lang: 'tr' }, { lang: 'en' }];
}

export default function LocalizedHome() {
  return (
    <div className="max-w-7xl mx-auto pb-20 space-y-16 px-2 sm:px-4">
      <HomeHero />
      <TrackDoors />
    </div>
  );
}
