import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// The source of truth for our portfolio projects
const PROJECTS_PATH = path.join(process.cwd(), '..', '..', 'Portfolio');

export interface ProjectMetadata {
  title: string;
  category: string;
  status: string;
  summary: string;
  techStack?: string[];
  date?: string;
  slug: string;
  fullPath: string;
}

export function getAllProjectFiles(dirPath: string = PROJECTS_PATH): string[] {
  if (!fs.existsSync(dirPath)) return [];
  
  const files: string[] = [];
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Exclude internal folders
      if (item !== '.git' && item !== 'node_modules') {
        files.push(...getAllProjectFiles(fullPath));
      }
    } else if (item.endsWith('.md') && item !== 'README.md') {
      files.push(fullPath);
    }
  }

  return files;
}

export function getProjectBySlug(slug: string) {
  const allFiles = getAllProjectFiles();
  const filePath = allFiles.find(f => path.basename(f, '.md') === slug);

  if (!filePath) return null;

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    metadata: {
      ...data,
      title: data.title || slug.replace(/_/g, ' '), // Fallback to slug if title missing
      slug,
      fullPath: filePath,
      category: data.category || path.basename(path.dirname(filePath)).replace(/_/g, ' '),
    } as ProjectMetadata,
    content,
  };
}

export function getAllProjects(): ProjectMetadata[] {
  const files = getAllProjectFiles();

  return files.map(filePath => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    const slug = path.basename(filePath, '.md');

    return {
      ...data,
      title: data.title || slug.replace(/_/g, ' '), // Fallback to slug if title missing
      slug,
      fullPath: filePath,
      category: data.category || path.basename(path.dirname(filePath)).replace(/_/g, ' '),
    } as ProjectMetadata;
  }).sort((a, b) => {
    // Sort by date if available
    if (a.date && b.date) {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      if (!isNaN(dateA) && !isNaN(dateB)) {
        return dateB - dateA;
      }
    }
    // Safely sort by title
    const titleA = a.title || '';
    const titleB = b.title || '';
    return titleA.localeCompare(titleB);
  });
}

export function getProjectsByCategory() {
  const projects = getAllProjects();
  const categories: Record<string, ProjectMetadata[]> = {};

  projects.forEach(project => {
    if (!categories[project.category]) {
      categories[project.category] = [];
    }
    categories[project.category].push(project);
  });

  return categories;
}
