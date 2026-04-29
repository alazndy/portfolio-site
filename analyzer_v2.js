const fs = require('fs');
const path = require('path');

const projectPaths = JSON.parse(fs.readFileSync('project_paths.json', 'utf8'));

const inventory = {
    web: [],
    withImages: [],
    other: []
};

function findImages(dir) {
    if (!fs.existsSync(dir)) return [];
    const results = [];
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        try {
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                if (file === 'node_modules' || file === '.git') continue;
                results.push(...findImages(fullPath));
            } else if (/\.(png|jpe?g|webp)$/i.test(file)) {
                // Avoid node_modules or dist images
                if (!fullPath.includes('node_modules') && !fullPath.includes('dist')) {
                    results.push(fullPath);
                }
            }
        } catch(e) {}
    }
    return results;
}

for (const [id, fullPath] of Object.entries(projectPaths)) {
    if (!fullPath) {
        inventory.other.push({ id, status: 'Path not found' });
        continue;
    }

    const packageJsonPath = path.join(fullPath, 'package.json');
    let isWeb = false;
    let devScript = null;

    if (fs.existsSync(packageJsonPath)) {
        const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        if (pkg.scripts && (pkg.scripts.dev || pkg.scripts.start)) {
            isWeb = true;
            devScript = pkg.scripts.dev ? 'dev' : 'start';
        }
    }

    const images = findImages(fullPath);
    
    const info = { id, fullPath, images: images.slice(0, 10), devScript };

    if (isWeb) {
        inventory.web.push(info);
    } else if (images.length > 0) {
        inventory.withImages.push(info);
    } else {
        inventory.other.push(info);
    }
}

fs.writeFileSync('project_inventory_refined.json', JSON.stringify(inventory, null, 2));

console.log('--- Refined Inventory ---');
console.log(`Web (Auto-runnable): ${inventory.web.length}`);
console.log(`Has existing images: ${inventory.withImages.length}`);
console.log(`Others: ${inventory.other.length}`);
