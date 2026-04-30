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

const pkgJson = JSON.parse(fs.readFileSync(path.join(projectPath, 'package.json'), 'utf8'));
const devScript = pkgJson.scripts && pkgJson.scripts.dev ? pkgJson.scripts.dev : '';

if (devScript.includes('vite')) {
    devArgs = ['run', 'dev', '--port', port, '--host'];
} else if (devScript.includes('next')) {
    devArgs = ['run', 'dev', '--', '-p', port];
} else {
    devArgs = ['run', 'dev'];
}

const env = { ...process.env, PORT: port, CI: 'true' };

console.log(`Running: ${pkgManager} install`);
const install = spawn(pkgManager, ['install'], { cwd: projectPath, shell: true, stdio: 'inherit' });

install.on('close', (code) => {
    if (code !== 0) {
        console.error(`Install failed with code ${code}`);
        process.exit(code);
    }
    
    console.log(`Install successful. Running: ${pkgManager} ${devArgs.join(' ')}`);
    const dev = spawn(pkgManager, devArgs, { cwd: projectPath, shell: true, stdio: 'inherit', env });
    
    dev.on('error', (err) => {
        console.error('Failed to start dev server:', err);
    });
});
