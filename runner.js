const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const projectId = process.argv[2];
const projectPaths = JSON.parse(fs.readFileSync('project_paths.json', 'utf8'));
const projectPath = projectPaths[projectId];

if (!projectPath) {
    console.error(`Project ${projectId} not found.`);
    process.exit(1);
}

console.log(`Starting project ${projectId} at ${projectPath}...`);

const hasPnpm = fs.existsSync(path.join(projectPath, 'pnpm-lock.yaml'));
const pkgManager = hasPnpm ? 'pnpm' : 'npm';

const port = process.argv[3] || '3001';
let devArgs;

const env = { ...process.env, PORT: port, CI: 'true' };

console.log(`Running: ${pkgManager} install`);
const install = spawn(pkgManager, ['install'], { cwd: projectPath, shell: true, stdio: 'inherit' });

install.on('close', (code) => {
    if (code !== 0) {
        console.error(`Install failed with code ${code}`);
        process.exit(code);
    }
    
    console.log(`Install successful. Running: ${pkgManager} run dev`);
    const dev = spawn(pkgManager, ['run', 'dev'], { cwd: projectPath, shell: true, stdio: 'inherit', env });
    
    dev.on('error', (err) => {
        console.error('Failed to start dev server:', err);
    });
});
