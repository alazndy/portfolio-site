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

// Determine which package manager to use
const hasPnpm = fs.existsSync(path.join(projectPath, 'pnpm-lock.yaml'));
const pkgManager = hasPnpm ? 'pnpm' : 'npm';
const installArgs = ['install'];
const port = process.argv[3] || '3001';
const devArgs = pkgManager === 'pnpm' ? ['run', 'dev', '--', '-p', port] : ['run', 'dev', '--', '-p', port];

// Force port for all
const env = { ...process.env, PORT: port };

const install = spawn(pkgManager, installArgs, { cwd: projectPath, shell: true, stdio: 'inherit' });

install.on('close', (code) => {
    if (code !== 0) {
        console.error(`Install failed with code ${code}`);
        process.exit(code);
    }
    
    console.log('Install successful. Starting dev server...');
    const dev = spawn(pkgManager, devArgs, { cwd: projectPath, shell: true, stdio: 'inherit', env });
    
    dev.on('error', (err) => {
        console.error('Failed to start dev server:', err);
    });
});
