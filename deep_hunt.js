const fs = require('fs');
const path = require('path');

const devOpsRoot = 'C:\\Users\\turha\\Desktop\\Dev Ops';
const projectPaths = JSON.parse(fs.readFileSync('project_paths.json', 'utf8'));
const targetDir = path.join(__dirname, 'public', 'projects');
const imageMapping = JSON.parse(fs.readFileSync('image_mapping.json', 'utf8'));

const projectsWithoutImages = Object.keys(projectPaths).filter(id => !imageMapping[id]);

console.log(`Hunting images for ${projectsWithoutImages.length} projects...`);

function searchRecursive(dir, terms, found = {}) {
    try {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                if (file === 'node_modules' || file === '.git') continue;
                searchRecursive(fullPath, terms, found);
            } else if (/\.(png|jpe?g|webp)$/i.test(file)) {
                for (const term of terms) {
                    if (file.toLowerCase().includes(term.toLowerCase()) || dir.toLowerCase().includes(term.toLowerCase())) {
                        if (!found[term]) found[term] = [];
                        found[term].push(fullPath);
                    }
                }
            }
        }
    } catch (e) {}
    return found;
}

const terms = projectsWithoutImages;
const globalMatches = searchRecursive(devOpsRoot, terms);

projectsWithoutImages.forEach(id => {
    if (globalMatches[id] && globalMatches[id].length > 0) {
        // Pick best match
        let best = globalMatches[id][0];
        // Prefer files that have the project name in the filename itself
        const inFilename = globalMatches[id].filter(f => path.basename(f).toLowerCase().includes(id.toLowerCase()));
        if (inFilename.length > 0) best = inFilename[0];

        const ext = path.extname(best);
        const targetName = `${id}${ext}`;
        const targetPath = path.join(targetDir, targetName);
        
        fs.copyFileSync(best, targetPath);
        imageMapping[id] = `/projects/${targetName}`;
        console.log(`Found and copied image for ${id}: ${best}`);
    }
});

fs.writeFileSync('image_mapping.json', JSON.stringify(imageMapping, null, 2));
