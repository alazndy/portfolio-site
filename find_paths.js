const fs = require('fs');
const path = require('path');

const devOpsRoot = 'C:\\Users\\turha\\Desktop\\Dev Ops';
const jsonPath = 'C:\\Users\\turha\\Desktop\\Dev Ops\\Portfolio\\projects_metadata.json';

const projectsData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Build a map of all folder names in Dev Ops
const folderMap = {};

function crawl(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        try {
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                if (file === 'node_modules' || file === '.git' || file === '.next' || file === 'dist') continue;
                
                if (!folderMap[file]) folderMap[file] = [];
                folderMap[file].push(fullPath);
                
                crawl(fullPath);
            }
        } catch (e) {
            // Skip broken links etc
        }
    }
}

console.log('Crawling Dev Ops root...');
crawl(devOpsRoot);
console.log(`Crawled ${Object.keys(folderMap).length} folders.`);

const projectPaths = {};

for (const p of projectsData.projects) {
    // Try to match by ID or Name
    const candidates = [
        p.id,
        p.name,
        p.name.replace(/\//g, ' ').trim(),
        p.name.split(' / ')[0],
        p.id.split('-').pop()
    ];
    
    let foundPath = null;
    for (const cand of candidates) {
        if (folderMap[cand]) {
            // If multiple, pick the one that matches category if possible or just the first
            foundPath = folderMap[cand][0];
            break;
        }
    }
    
    projectPaths[p.id] = foundPath;
}

fs.writeFileSync('project_paths.json', JSON.stringify(projectPaths, null, 2));

const foundCount = Object.values(projectPaths).filter(x => x !== null).length;
console.log(`Matched ${foundCount} / ${projectsData.projects.length} projects.`);
