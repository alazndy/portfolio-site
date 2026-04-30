@echo off
set PROJECT_PATH=%1
set CMD=%2
set PORT=%3
cd /d %PROJECT_PATH%
echo Running %CMD% in %PROJECT_PATH% on port %PORT%
if "%CMD%"=="pnpm" (
    pnpm install
    $env:PORT=%PORT%; pnpm run dev
) else (
    npm install
    npm run dev -- -p %PORT%
)
