#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import ora from 'ora';
import { homedir } from 'os';
import { join } from 'path';
import { Database } from './database';
import { SessionManager } from './session';
import { LessonLearned, Task } from './types';

const DATA_PATH = join(homedir(), '.agency-hub', 'sessions');

const program = new Command();

program
  .name('agency-session')
  .description('Digital Marketing Agency Session Manager')
  .version('1.0.0');

program
  .command('start')
  .description('Start a new work session')
  .action(async () => {
    const spinner = ora('Initializing session manager...').start();
    
    try {
      const db = new Database(DATA_PATH);
      await db.init();
      const sessionManager = new SessionManager(db);
      
      // Check for existing session
      const current = await sessionManager.getCurrentSession();
      if (current) {
        spinner.warn('An active session already exists');
        const { continueSession } = await inquirer.prompt([{
          type: 'confirm',
          name: 'continueSession',
          message: 'Continue with the existing session?',
          default: true
        }]);
        
        if (continueSession) {
          console.log(chalk.green('✓ Continuing existing session'));
          return;
        }
      }
      
      spinner.stop();
      
      // Get session goals
      const { goals, mood } = await inquirer.prompt([
        {
          type: 'input',
          name: 'goals',
          message: 'What are your main goals for this session? (comma-separated)',
          filter: (input: string) => input.split(',').map(g => g.trim()).filter(g => g)
        },
        {
          type: 'list',
          name: 'mood',
          message: 'How are you feeling today?',
          choices: [
            { name: '🚀 Productive - Ready to crush it!', value: 'productive' },
            { name: '🎯 Challenging - Tackling tough problems', value: 'challenging' },
            { name: '📚 Learning - Exploring new things', value: 'learning' },
            { name: '🎨 Creative - Building something new', value: 'creative' }
          ]
        }
      ]);
      
      const session = await sessionManager.startSession(goals);
      
      console.log(chalk.green('\n✓ Session started successfully!'));
      console.log(chalk.gray(`Session ID: ${session.id}`));
      console.log(chalk.cyan('\nTips for a productive session:'));
      console.log('  • Use /task to log completed tasks');
      console.log('  • Use /note to capture insights');
      console.log('  • Use /end to finish and summarize your session');
      console.log('\nHappy vibing! 🚀\n'));
      
    } catch (error) {
      spinner.fail('Failed to start session');
      console.error(error);
      process.exit(1);
    }
  });

program
  .command('end')
  .description('End the current session and generate summary')
  .action(async () => {
    const spinner = ora('Loading session data...').start();
    
    try {
      const db = new Database(DATA_PATH);
      await db.init();
      const sessionManager = new SessionManager(db);
      
      const current = await sessionManager.getCurrentSession();
      if (!current) {
        spinner.fail('No active session found');
        console.log(chalk.yellow('Use "agency-session start" to begin a new session'));
        return;
      }
      
      spinner.stop();
      
      // Collect session summary
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'summary',
          message: 'Brief summary of what you accomplished:'
        },
        {
          type: 'confirm',
          name: 'hasLessons',
          message: 'Did you learn anything new this session?',
          default: true
        }
      ]);
      
      const lessons: LessonLearned[] = [];
      if (answers.hasLessons) {
        let addingLessons = true;
        while (addingLessons) {
          const lesson = await inquirer.prompt([
            {
              type: 'list',
              name: 'category',
              message: 'What type of lesson?',
              choices: ['technical', 'process', 'client', 'strategy']
            },
            {
              type: 'input',
              name: 'insight',
              message: 'What did you learn?'
            },
            {
              type: 'confirm',
              name: 'actionable',
              message: 'Is this actionable for future sessions?',
              default: true
            },
            {
              type: 'confirm',
              name: 'addAnother',
              message: 'Add another lesson?',
              default: false
            }
          ]);
          
          lessons.push({
            category: lesson.category,
            insight: lesson.insight,
            actionable: lesson.actionable
          });
          
          addingLessons = lesson.addAnother;
        }
      }
      
      // Get next steps
      const { nextSteps } = await inquirer.prompt([{
        type: 'input',
        name: 'nextSteps',
        message: 'What should be done next? (comma-separated)',
        filter: (input: string) => input.split(',').map(s => s.trim()).filter(s => s)
      }]);
      
      // End session
      const endedSession = await sessionManager.endSession(
        answers.summary,
        lessons,
        nextSteps,
        current.mood as any
      );
      
      // Display summary
      console.log(sessionManager.formatSessionSummary(endedSession));
      
      // Save to file
      const { saveToFile } = await inquirer.prompt([{
        type: 'confirm',
        name: 'saveToFile',
        message: 'Save session summary to file?',
        default: true
      }]);
      
      if (saveToFile) {
        const fs = await import('fs-extra');
        const summaryPath = join(process.cwd(), `session-${endedSession.id}.md`);
        await fs.writeFile(summaryPath, sessionManager.formatSessionSummary(endedSession));
        console.log(chalk.green(`✓ Summary saved to ${summaryPath}`));
      }
      
    } catch (error) {
      spinner.fail('Failed to end session');
      console.error(error);
      process.exit(1);
    }
  });

program
  .command('task <title>')
  .description('Add a completed task to the current session')
  .option('-c, --client <client>', 'Client name')
  .option('-t, --tags <tags>', 'Comma-separated tags')
  .option('-d, --duration <minutes>', 'Task duration in minutes', parseInt)
  .action(async (title, options) => {
    try {
      const db = new Database(DATA_PATH);
      await db.init();
      const sessionManager = new SessionManager(db);
      
      const current = await sessionManager.getCurrentSession();
      if (!current) {
        console.log(chalk.yellow('No active session. Use "agency-session start" first'));
        return;
      }
      
      const task: Omit<Task, 'id'> = {
        title,
        completed: true,
        clientId: options.client,
        duration: options.duration ? options.duration * 60000 : undefined,
        tags: options.tags ? options.tags.split(',').map((t: string) => t.trim()) : []
      };
      
      await sessionManager.addTask(task);
      console.log(chalk.green(`✓ Task added: ${title}`));
      
    } catch (error) {
      console.error(chalk.red('Failed to add task:'), error);
      process.exit(1);
    }
  });

program
  .command('status')
  .description('Show current session status')
  .action(async () => {
    try {
      const db = new Database(DATA_PATH);
      await db.init();
      const sessionManager = new SessionManager(db);
      
      const current = await sessionManager.getCurrentSession();
      if (!current) {
        console.log(chalk.yellow('No active session'));
        return;
      }
      
      console.log(sessionManager.formatSessionSummary(current));
      
    } catch (error) {
      console.error(chalk.red('Failed to get status:'), error);
      process.exit(1);
    }
  });

program
  .command('stats')
  .description('Show overall statistics')
  .action(async () => {
    try {
      const db = new Database(DATA_PATH);
      await db.init();
      const data = await db.getData();
      
      console.log(chalk.bold.cyan('\n📊 Agency Hub Statistics\n'));
      console.log(chalk.gray('─'.repeat(50)));
      console.log(`${chalk.bold('Total Sessions:')} ${data.stats.totalSessions}`);
      console.log(`${chalk.bold('Tasks Completed:')} ${data.stats.totalTasksCompleted}`);
      console.log(`${chalk.bold('Avg Session Length:')} ${Math.round(data.stats.averageSessionLength / 60000)} minutes`);
      
      if (data.stats.topTags.length > 0) {
        console.log(chalk.bold('\nTop Tags:'));
        data.stats.topTags.forEach(({ tag, count }) => {
          console.log(`  • ${tag}: ${count}`);
        });
      }
      
      console.log(chalk.gray('─'.repeat(50)));
      
    } catch (error) {
      console.error(chalk.red('Failed to get stats:'), error);
      process.exit(1);
    }
  });

// Custom command handler for shortcuts
if (process.argv[2] === '/start') {
  process.argv[2] = 'start';
} else if (process.argv[2] === '/end') {
  process.argv[2] = 'end';
} else if (process.argv[2] === '/task') {
  process.argv[2] = 'task';
} else if (process.argv[2] === '/status') {
  process.argv[2] = 'status';
}

program.parse();