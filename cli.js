#!/usr/bin/env node

// Global CLI wrapper for agency-hub commands
const { spawn } = require('child_process');
const path = require('path');

const command = process.argv[2];
const args = process.argv.slice(3);

const commandMap = {
  '/start': ['session', 'start'],
  '/end': ['session', 'end'],
  '/task': ['session', 'task', ...args],
  '/status': ['session', 'status'],
  '/stats': ['session', 'stats'],
  '/client': ['client', ...args],
  '/content': ['content', ...args],
  '/research': ['research', ...args],
  '/dashboard': ['dashboard', ...args],
  '/pdf': ['pdf-reader', ...args]
};

if (commandMap[command]) {
  const [module, ...moduleArgs] = commandMap[command];
  const scriptPath = path.join(__dirname, 'services', `${module}-manager`, 'dist', 'cli.js');
  
  const child = spawn('node', [scriptPath, ...moduleArgs], {
    stdio: 'inherit',
    cwd: process.cwd()
  });
  
  child.on('error', (err) => {
    console.error(`Failed to execute command: ${err.message}`);
    console.log(`Try running: npm run build`);
    process.exit(1);
  });
  
  child.on('exit', (code) => {
    process.exit(code);
  });
} else {
  console.log(`
Agency Hub - Digital Marketing Command Center

Available commands:
  /start          Start a new work session
  /end            End current session with summary
  /task <title>   Log a completed task
  /status         Show current session status
  /stats          Show overall statistics
  /pdf <file>     Read PDF files in terminal
  /client         Manage clients (coming soon)
  /content        Generate content (coming soon)
  /research       Market research (coming soon)
  /dashboard      Open analytics dashboard (coming soon)

Examples:
  /start
  /task "Created Facebook ad campaign" -c "Acme Corp" -t "social,ads"
  /pdf report.pdf
  /pdf contract.pdf "payment terms" "deliverables"  # highlight keywords
  /end
`);
}