const fs = require('fs');
const path = require('path');

const mapping = JSON.parse(fs.readFileSync('image_mapping.json', 'utf8'));
const contentDir = path.join(__dirname, 'src', 'content', 'projects');

Object.entries(mapping).forEach(([id, imagePath]) => {
    const mdPath = path.join(contentDir, `${id}.md`);
    if (fs.existsSync(mdPath)) {
        let content = fs.readFileSync(mdPath, 'utf8');
        if (!content.includes('image:')) {
            content = content.replace('---', `---\nimage: "${imagePath}"`);
            fs.writeFileSync(mdPath, content);
            console.log(`Updated ${id}.md with image: ${imagePath}`);
        }
    }
});
