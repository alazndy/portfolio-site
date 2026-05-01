import { getAllProjects } from '@/lib/markdown';
import { HomeHero } from '@/components/home/HomeHero';
import { ProjectGrid } from '@/components/home/ProjectGrid';

export default function Home() {
  const projects = getAllProjects();

  const liveCount = projects.filter(p => p.status === 'Live' || p.status === 'Active').length;
  const categoryCount = new Set(projects.map(p => p.category)).size;

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <HomeHero
        projectCount={projects.length}
        liveCount={liveCount}
        categoryCount={categoryCount}
      />
      <ProjectGrid projects={projects} />
    </div>
  );
}
