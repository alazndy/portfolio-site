const fs = require('fs');
const path = require('path');

const jsonPath = 'C:\\Users\\turha\\Desktop\\Dev Ops\\Portfolio\\projects_metadata.json';
const devOpsRoot = 'C:\\Users\\turha\\Desktop\\Dev Ops';

const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const inventory = {
    web: [],
    withImages: [],
    other: []
};

function findImages(dir, results = []) {
    if (!fs.existsSync(dir)) return results;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                findImages(fullPath, results);
            }
        } else if (/\.(png|jpe?g|webp)$/i.test(file)) {
            results.push(fullPath);
        }
    }
    return results;
}

for (const p of data.projects) {
    if (!p.path) continue;
    const fullPath = path.join(devOpsRoot, p.path);
    if (!fs.existsSync(fullPath)) {
        console.log(`Path not found: ${fullPath}`);
        continue;
    }

    const packageJsonPath = path.join(fullPath, 'package.json');
    const hasPackageJson = fs.existsSync(packageJsonPath);
    
    const images = findImages(fullPath);
    
    const projectInfo = {
        id: p.id,
        name: p.name,
        path: p.path,
        fullPath: fullPath,
        images: images.slice(0, 5) // Just keep a few
    };

    if (hasPackageJson) {
        inventory.web.push(projectInfo);
    } else if (images.length > 0) {
        inventory.withImages.push(projectInfo);
    } else {
        inventory.other.push(projectInfo);
    }
}

fs.writeFileSync('project_inventory.json', JSON.stringify(inventory, null, 2));

console.log('--- Inventory Results ---');
console.log(`Web Projects: ${inventory.web.length}`);
console.log(`Projects with existing images: ${inventory.withImages.length}`);
console.log(`Other (Firmware/Ideas/etc): ${inventory.other.length}`);
console.log('Saved inventory to project_inventory.json');
