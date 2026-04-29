const fs = require('fs');
const path = require('path');

const jsonPath = 'C:\\Users\\turha\\Desktop\\Dev Ops\\Portfolio\\projects_metadata.json';
const devOpsRoot = 'C:\\Users\\turha\\Desktop\\Dev Ops';
const outDir = path.join(__dirname, 'src', 'content', 'projects');

const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const coreSlugs = ['AI_Trader', 'Crucix', 'ENV-I', 'GTab', 'NEXUS', 'UniControl', 'tek-ui'];

const idToSlugMapping = {
    'AI-Trader': 'AI_Trader',
    'envanter-ENV-I': 'ENV-I'
};

for (const p of data.projects) {
    let rawId = p.id;
    let slug = idToSlugMapping[rawId] || rawId;
    
    if (coreSlugs.includes(slug)) {
        if (p.path) {
            const fullProjectPath = path.join(devOpsRoot, p.path);
            const readmePath = path.join(fullProjectPath, 'README.md');
            const memoryPath = path.join(fullProjectPath, 'memory.md');
            
            let extraContent = '';
            if (fs.existsSync(readmePath)) {
                let content = fs.readFileSync(readmePath, 'utf8');
                content = content.replace(/^#\s+.*$/m, '');
                extraContent = `\n## Proje Detayları\n\n${content}\n`;
            } else if (fs.existsSync(memoryPath)) {
                let content = fs.readFileSync(memoryPath, 'utf8');
                content = content.replace(/^#\s+.*$/m, '');
                extraContent = `\n## Geliştirici Hafızası (Memory)\n\n${content}\n`;
            }
            
            if (extraContent) {
                const mdPath = path.join(outDir, slug + '.md');
                if (fs.existsSync(mdPath)) {
                    let mdContent = fs.readFileSync(mdPath, 'utf8');
                    if (!mdContent.includes('Proje Detayları') && !mdContent.includes('Geliştirici Hafızası')) {
                        fs.appendFileSync(mdPath, extraContent);
                        console.log('Appended to', slug);
                    }
                }
            }
        }
    }
}
