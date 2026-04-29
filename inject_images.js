const fs = require('fs');
const path = require('path');

const coreSlugs = ['AI_Trader', 'ENV-I', 'GTab', 'NEXUS', 'UniControl', 'tek-ui'];

for (const slug of coreSlugs) {
    const pagePath = path.join(__dirname, 'src', 'app', 'projects', slug, 'page.tsx');
    if (fs.existsSync(pagePath)) {
        let content = fs.readFileSync(pagePath, 'utf8');
        
        if (!content.includes('project?.metadata?.image')) {
            const imageBlock = `
          {/* Project Cover Image */}
          {project?.metadata?.image && (
            <div className="relative w-full aspect-[21/9] rounded-[32px] overflow-hidden border border-border mb-12 group">
              <img 
                src={project.metadata.image} 
                alt={project.metadata.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
          )}`;

            // Inject after the Back link block and before the title block
            // Looking for the div containing the title
            const titleMatch = content.match(/<h1 className="[^"]*">[^<]*<\/h1>/);
            if (titleMatch) {
                const titleIndex = titleMatch.index;
                const beforeTitle = content.substring(0, titleIndex);
                const afterTitle = content.substring(titleIndex);
                
                content = beforeTitle + imageBlock + "\n\n          " + afterTitle;
                
                fs.writeFileSync(pagePath, content);
                console.log(`Injected image rendering into ${slug}/page.tsx`);
            }
        }
    }
}
