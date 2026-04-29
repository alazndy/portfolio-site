const fs = require('fs');
const path = require('path');

const jsonPath = 'C:\\Users\\turha\\Desktop\\Dev Ops\\Portfolio\\projects_metadata.json';
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
    
    const mdContent = `---
title: "${p.name.replace(/"/g, '\\"')}"
category: "${p.category}"
status: "${status}"
summary: "${desc}"
techStack: ${techStackStr}
---

## Overview

${p.description}

*This project was imported from the master portfolio database.*
`;

    const filePath = path.join(outDir, `${slug}.md`);
    fs.writeFileSync(filePath, mdContent);
    count++;
}
console.log(`Successfully generated ${count} new project markdown files.`);
