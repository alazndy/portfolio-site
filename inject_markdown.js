const fs = require('fs');
const path = require('path');

const coreSlugs = ['AI_Trader', 'Crucix', 'ENV-I', 'GTab', 'NEXUS', 'UniControl', 'tek-ui'];

for (const slug of coreSlugs) {
    const pagePath = path.join(__dirname, 'src', 'app', 'projects', slug, 'page.tsx');
    if (fs.existsSync(pagePath)) {
        let content = fs.readFileSync(pagePath, 'utf8');
        
        if (!content.includes('marked.parse')) {
            // Import marked
            content = content.replace(
                "import { getProjectBySlug } from '@/lib/markdown';",
                "import { getProjectBySlug } from '@/lib/markdown';\nimport { marked } from 'marked';"
            );
            
            // Add async and contentHtml parsing
            content = content.replace(
                `export default function ${slug}Page() {`,
                `export default async function ${slug}Page() {`
            );
            // In case the component name is different
            content = content.replace(
                /export default function (\w+)Page\(\) \{/,
                "export default async function $1Page() {"
            );
            
            // Inject contentHtml parsing after getProjectBySlug
            content = content.replace(
                `const project = getProjectBySlug('${slug}');`,
                `const project = getProjectBySlug('${slug}');\n  const contentHtml = await marked.parse(project?.content || '');`
            );
            
            // Inject the render block before the last closing </div>
            const renderBlock = `
        {/* ── DYNAMIC PROJECT DETAILS ── */}
        <div className="glass p-8 md:p-12 rounded-[32px] border-border mt-16 max-w-5xl mx-auto px-6 relative z-10 mb-16">
          <div
            className="prose prose-invert max-w-none prose-headings:font-black prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-foreground/60 prose-li:text-foreground/60 prose-strong:text-foreground/90 prose-a:text-lcars-red"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </div>
    </div>`;

            // Replace the last </div>
            content = content.replace(/<\/div>\s*<\/div>\s*\);\s*\}\s*$/, renderBlock + "\n  );\n}\n");

            fs.writeFileSync(pagePath, content);
            console.log(`Injected dynamic markdown rendering into ${slug}/page.tsx`);
        }
    }
}
