import { v4 as uuidv4 } from 'uuid';
import chalk from 'chalk';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Database } from './database';
import { Session, Task, FileChange, LessonLearned } from './types';

dayjs.extend(duration);
dayjs.extend(relativeTime);

export class SessionManager {
  constructor(private db: Database) {}
  
  async startSession(goals?: string[]): Promise<Session> {
    const session: Session = {
      id: uuidv4(),
      startTime: new Date().toISOString(),
      goals: goals || [],
      tasksCompleted: [],
      tasksIncomplete: [],
      lessonsLearned: [],
      fileChanges: []
    };
    
    await this.db.updateData(data => {
      data.sessions.push(session);
      data.currentSession = session.id;
    });
    
    return session;
  }
  
  async getCurrentSession(): Promise<Session | null> {
    const data = await this.db.getData();
    if (!data.currentSession) return null;
    
    return data.sessions.find(s => s.id === data.currentSession) || null;
  }
  
  async endSession(
    summary: string,
    lessonsLearned: LessonLearned[],
    nextSteps: string[],
    mood?: Session['mood']
  ): Promise<Session> {
    const current = await this.getCurrentSession();
    if (!current) throw new Error('No active session');
    
    const endTime = new Date().toISOString();
    const duration = dayjs(endTime).diff(dayjs(current.startTime));
    
    const metrics = {
      tasksCompleted: current.tasksCompleted.length,
      timeSpent: duration,
      focusScore: this.calculateFocusScore(current),
      productivityIndex: this.calculateProductivityIndex(current, duration)
    };
    
    const tips = this.generateTips(current, metrics);
    
    await this.db.updateData(data => {
      const session = data.sessions.find(s => s.id === current.id);
      if (session) {
        session.endTime = endTime;
        session.summary = summary;
        session.lessonsLearned = lessonsLearned;
        session.nextSteps = nextSteps;
        session.metrics = metrics;
        session.tips = tips;
        session.mood = mood;
      }
      data.currentSession = undefined;
    });
    
    await this.db.updateStats();
    
    return { ...current, endTime, summary, lessonsLearned, nextSteps, metrics, tips, mood };
  }
  
  async addTask(task: Omit<Task, 'id'>): Promise<Task> {
    const current = await this.getCurrentSession();
    if (!current) throw new Error('No active session');
    
    const newTask: Task = {
      ...task,
      id: uuidv4()
    };
    
    await this.db.updateData(data => {
      const session = data.sessions.find(s => s.id === current.id);
      if (session) {
        if (task.completed) {
          session.tasksCompleted.push(newTask);
        } else {
          session.tasksIncomplete.push(newTask);
        }
      }
    });
    
    return newTask;
  }
  
  async addFileChange(change: FileChange) {
    const current = await this.getCurrentSession();
    if (!current) throw new Error('No active session');
    
    await this.db.updateData(data => {
      const session = data.sessions.find(s => s.id === current.id);
      if (session) {
        session.fileChanges.push(change);
      }
    });
  }
  
  private calculateFocusScore(session: Session): number {
    const taskSwitches = this.countTaskSwitches(session.tasksCompleted);
    const avgTaskDuration = session.tasksCompleted.reduce((sum, t) => sum + (t.duration || 0), 0) / 
                           (session.tasksCompleted.length || 1);
    
    const switchPenalty = Math.max(0, 100 - taskSwitches * 5);
    const durationBonus = Math.min(30, avgTaskDuration / 60000); // bonus for longer focus periods
    
    return Math.round(Math.min(100, switchPenalty + durationBonus));
  }
  
  private calculateProductivityIndex(session: Session, totalTime: number): number {
    const tasksPerHour = (session.tasksCompleted.length / (totalTime / 3600000)) || 0;
    const completionRate = session.tasksCompleted.length / 
                          (session.tasksCompleted.length + session.tasksIncomplete.length) || 0;
    
    return Math.round((tasksPerHour * 20 + completionRate * 80));
  }
  
  private countTaskSwitches(tasks: Task[]): number {
    if (tasks.length < 2) return 0;
    
    let switches = 0;
    for (let i = 1; i < tasks.length; i++) {
      if (tasks[i].clientId !== tasks[i-1].clientId) {
        switches++;
      }
    }
    return switches;
  }
  
  private generateTips(session: Session, metrics: SessionMetrics): string[] {
    const tips: string[] = [];
    
    if (metrics.focusScore < 70) {
      tips.push('Try batching similar tasks together to reduce context switching');
    }
    
    if (session.tasksIncomplete.length > session.tasksCompleted.length) {
      tips.push('Consider breaking large tasks into smaller, manageable chunks');
    }
    
    if (metrics.timeSpent > 14400000) { // 4 hours
      tips.push('Remember to take regular breaks to maintain productivity');
    }
    
    const clientTasks = new Map<string, number>();
    session.tasksCompleted.forEach(t => {
      if (t.clientId) {
        clientTasks.set(t.clientId, (clientTasks.get(t.clientId) || 0) + 1);
      }
    });
    
    if (clientTasks.size > 3) {
      tips.push('Focus on fewer clients per session for deeper work');
    }
    
    return tips;
  }
  
  formatSessionSummary(session: Session): string {
    const duration = session.endTime 
      ? dayjs.duration(dayjs(session.endTime).diff(dayjs(session.startTime)))
      : null;
    
    const output = [
      chalk.bold.cyan('\n📊 Session Summary\n'),
      chalk.gray('─'.repeat(50)),
      `${chalk.bold('Session ID:')} ${session.id}`,
      `${chalk.bold('Duration:')} ${duration ? duration.format('H[h] m[m]') : 'In progress'}`,
      session.mood ? `${chalk.bold('Mood:')} ${this.getMoodEmoji(session.mood)} ${session.mood}` : '',
      '',
      chalk.bold.green('✅ Completed Tasks:'),
      ...session.tasksCompleted.map(t => `  • ${t.title}`),
      '',
      session.tasksIncomplete.length > 0 ? chalk.bold.yellow('⏳ Incomplete Tasks:') : '',
      ...session.tasksIncomplete.map(t => `  • ${t.title}`),
      '',
      session.lessonsLearned.length > 0 ? chalk.bold.blue('💡 Lessons Learned:') : '',
      ...session.lessonsLearned.map(l => `  • [${l.category}] ${l.insight}`),
      '',
      session.fileChanges.length > 0 ? chalk.bold.magenta('📁 File Changes:') : '',
      ...session.fileChanges.slice(0, 5).map(f => `  • ${f.action}: ${f.path}`),
      session.fileChanges.length > 5 ? `  ... and ${session.fileChanges.length - 5} more` : '',
      '',
      session.metrics ? chalk.bold.cyan('📈 Metrics:') : '',
      session.metrics ? `  • Focus Score: ${this.getScoreBar(session.metrics.focusScore)}` : '',
      session.metrics ? `  • Productivity: ${this.getScoreBar(session.metrics.productivityIndex)}` : '',
      '',
      session.nextSteps?.length ? chalk.bold.green('➡️  Next Steps:') : '',
      ...(session.nextSteps || []).map(s => `  • ${s}`),
      '',
      session.tips?.length ? chalk.bold.yellow('💭 Tips for Next Time:') : '',
      ...(session.tips || []).map(t => `  • ${t}`),
      chalk.gray('─'.repeat(50))
    ].filter(line => line !== '');
    
    return output.join('\n');
  }
  
  private getMoodEmoji(mood: Session['mood']): string {
    const emojis = {
      productive: '🚀',
      challenging: '🎯',
      learning: '📚',
      creative: '🎨'
    };
    return emojis[mood || 'productive'];
  }
  
  private getScoreBar(score: number): string {
    const filled = Math.round(score / 10);
    const empty = 10 - filled;
    const bar = '█'.repeat(filled) + '░'.repeat(empty);
    const color = score >= 80 ? chalk.green : score >= 60 ? chalk.yellow : chalk.red;
    return `${color(bar)} ${score}%`;
  }
}