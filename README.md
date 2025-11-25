# Agency Hub - Digital Marketing Command Center

A vibe marketing approach to agency management. Speed over perfection, AI execution with human strategy.

## Quick Start

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Add to your shell profile for global access
echo 'alias /start="node /Users/boshaffer/bo/agency-hub/cli.js /start"' >> ~/.zshrc
echo 'alias /end="node /Users/boshaffer/bo/agency-hub/cli.js /end"' >> ~/.zshrc
echo 'alias /task="node /Users/boshaffer/bo/agency-hub/cli.js /task"' >> ~/.zshrc
echo 'alias /status="node /Users/boshaffer/bo/agency-hub/cli.js /status"' >> ~/.zshrc

# Reload shell
source ~/.zshrc

# Start your first session
/start
```

## Core Commands

- `/start` - Begin a new work session with goals
- `/end` - End session with summary, lessons learned, and next steps
- `/task "Task name"` - Log completed work
- `/status` - Check current session progress
- `/stats` - View overall statistics

## Session Features

Each session tracks:
- ✅ Tasks completed with time tracking
- 📁 File changes during the session
- 💡 Lessons learned (technical, process, client, strategy)
- 📊 Productivity metrics and focus score
- ➡️ Next steps for continuity
- 💭 AI-generated tips for improvement

## Philosophy

Inspired by @theboringmarketer and @gregisenberg's vibe marketing:
- **Speed > Perfection**: Ship 20 experiments while others plan 1
- **AI Execution**: Let automation handle the boring stuff
- **Zero Meetings**: Async everything, rapid decisions
- **Learning Velocity**: Track what works, kill what doesn't

## Coming Soon

- 🏢 Client management with automated updates
- 🤖 AI content generation (multi-format)
- 📈 Custom analytics dashboards
- 🔍 Market research and competitor tracking
- 🚀 Workflow automation (n8n/Make integration)
- 📱 Multi-channel campaign deployment

## Architecture

Built with:
- Node.js + TypeScript
- Monorepo structure (Turborepo)
- Session data stored locally
- Extensible plugin system
- AI-ready architecture

## Development

```bash
# Run in development mode
npm run dev

# Build all packages
npm run build

# Run tests
npm run test
```

---

*Built for marketers who ship, not sit in meetings* 🚀