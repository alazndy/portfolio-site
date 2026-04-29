const fs = require('fs');
const path = require('path');

const inventory = JSON.parse(fs.readFileSync('project_inventory_refined.json', 'utf8'));

const runnable = [];

inventory.web.forEach(p => {
    const nmPath = path.join(p.fullPath, 'node_modules');
    if (fs.existsSync(nmPath)) {
        runnable.push(p);
    }
});

console.log(`Runnable projects (with node_modules): ${runnable.length}`);
console.log(runnable.map(p => p.id));
