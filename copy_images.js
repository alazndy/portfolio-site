const fs = require('fs');
const path = require('path');

const inventory = JSON.parse(fs.readFileSync('project_inventory_refined.json', 'utf8'));
const targetDir = path.join(__dirname, 'public', 'projects');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Map IDs to final image paths for markdown update
const imageMapping = {};

inventory.withImages.forEach(p => {
    if (p.images.length > 0) {
        // Pick the best image (heuristic: largest size or has 'screenshot' in name)
        let best = p.images[0];
        p.images.forEach(img => {
            if (img.toLowerCase().includes('screenshot') || img.toLowerCase().includes('hero') || img.toLowerCase().includes('main')) {
                best = img;
            }
        });
        
        const ext = path.extname(best);
        const targetName = `${p.id}${ext}`;
        const targetPath = path.join(targetDir, targetName);
        
        fs.copyFileSync(best, targetPath);
        console.log(`Copied image for ${p.id}: ${targetName}`);
        imageMapping[p.id] = `/projects/${targetName}`;
    }
});

fs.writeFileSync('image_mapping.json', JSON.stringify(imageMapping, null, 2));
