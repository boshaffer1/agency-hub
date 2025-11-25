import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join } from 'path';
import { ensureDir } from 'fs-extra';
import { SessionDatabase } from './types';

const DEFAULT_DATA: SessionDatabase = {
  sessions: [],
  currentSession: undefined,
  stats: {
    totalSessions: 0,
    totalTasksCompleted: 0,
    averageSessionLength: 0,
    topTags: []
  }
};

export class Database {
  private db: Low<SessionDatabase>;
  
  constructor(private dataPath: string) {}
  
  async init() {
    await ensureDir(this.dataPath);
    const file = join(this.dataPath, 'sessions.json');
    const adapter = new JSONFile<SessionDatabase>(file);
    this.db = new Low<SessionDatabase>(adapter, DEFAULT_DATA);
    await this.db.read();
    
    if (!this.db.data) {
      this.db.data = DEFAULT_DATA;
      await this.db.write();
    }
  }
  
  async getData(): Promise<SessionDatabase> {
    await this.db.read();
    return this.db.data!;
  }
  
  async updateData(updater: (data: SessionDatabase) => void) {
    await this.db.read();
    updater(this.db.data!);
    await this.db.write();
  }
  
  async updateStats() {
    const data = await this.getData();
    const sessions = data.sessions;
    
    const totalTasks = sessions.reduce((sum, s) => sum + s.tasksCompleted.length, 0);
    const totalTime = sessions
      .filter(s => s.endTime)
      .reduce((sum, s) => {
        const start = new Date(s.startTime).getTime();
        const end = new Date(s.endTime!).getTime();
        return sum + (end - start);
      }, 0);
    
    const tagCounts = new Map<string, number>();
    sessions.forEach(s => {
      s.tasksCompleted.forEach(t => {
        t.tags?.forEach(tag => {
          tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
        });
      });
    });
    
    await this.updateData(data => {
      data.stats = {
        totalSessions: sessions.length,
        totalTasksCompleted: totalTasks,
        averageSessionLength: sessions.length > 0 ? totalTime / sessions.length : 0,
        topTags: Array.from(tagCounts.entries())
          .map(([tag, count]) => ({ tag, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 10)
      };
    });
  }
}