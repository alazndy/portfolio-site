const fs = require('fs');
const path = require('path');

const jsonPath = 'C:\\Users\\turha\\Desktop\\Dev Ops\\Portfolio\\projects_metadata.json';
const devOpsRoot = 'C:\\Users\\turha\\Desktop\\Dev Ops';
const outDir = path.join(__dirname, 'src', 'content', 'projects');

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Preserve our carefully crafted 7 existing projects
const existingSlugs = new Set([
    'AI_Trader', 'Crucix', 'ENV-I', 'GTab', 'NEXUS', 'UniControl', 'tek-ui'
]);

// Also map alternative IDs that might be in the JSON to prevent duplication
const idToSlugMapping = {
    'AI-Trader': 'AI_Trader',
    'envanter-ENV-I': 'ENV-I'
};

let count = 0;
let enrichedCount = 0;

for (const p of data.projects) {
    let rawId = p.id;
    let slug = idToSlugMapping[rawId] || rawId;
    
    // Skip if it's one of the 7 core projects we already manually refined
    if (existingSlugs.has(slug)) {
        console.log(`Skipping existing core project: ${slug}`);
        continue;
    }
    
    let status = p.status ? capitalize(p.status) : 'Draft';
    if (status === 'Fikir') status = 'Concept';
    if (status === 'Donduruldu') status = 'Archived';
    
    let techStackStr = '[]';
    if (p.tech_stack && p.tech_stack.length > 0) {
        techStackStr = '[' + p.tech_stack.map(t => `"${t}"`).join(', ') + ']';
    }
    
    let desc = (p.description || '').replace(/"/g, '\\"');
    
    let extraContent = '';
    
    if (p.path) {
        const fullProjectPath = path.join(devOpsRoot, p.path);
        const readmePath = path.join(fullProjectPath, 'README.md');
        const memoryPath = path.join(fullProjectPath, 'memory.md');
        
        if (fs.existsSync(readmePath)) {
            let readmeContent = fs.readFileSync(readmePath, 'utf8');
            // Remove main H1 header if exists to avoid duplication
            readmeContent = readmeContent.replace(/^#\s+.*$/m, '');
            extraContent = `\n## Proje Detayları (README)\n\n${readmeContent}\n`;
            enrichedCount++;
            console.log(`Enriched ${slug} with README.md`);
        } else if (fs.existsSync(memoryPath)) {
            let memoryContent = fs.readFileSync(memoryPath, 'utf8');
            memoryContent = memoryContent.replace(/^#\s+.*$/m, '');
            extraContent = `\n## Proje Hafızası (Memory)\n\n${memoryContent}\n`;
            enrichedCount++;
            console.log(`Enriched ${slug} with memory.md`);
        }
    }
    
    const mdContent = `---
title: "${p.name.replace(/"/g, '\\"')}"
category: "${p.category}"
status: "${status}"
summary: "${desc}"
techStack: ${techStackStr}
---

## Overview

${p.description}
${extraContent}

*This project was dynamically imported and enriched from the master portfolio database.*
`;

    const filePath = path.join(outDir, `${slug}.md`);
    fs.writeFileSync(filePath, mdContent);
    count++;
}
console.log(`Successfully generated ${count} new project markdown files. Enriched ${enrichedCount} projects with README/Memory.`);
