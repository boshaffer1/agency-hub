export interface Task {
  id: string;
  title: string;
  completed: boolean;
  clientId?: string;
  duration?: number;
  tags?: string[];
}

export interface FileChange {
  path: string;
  action: 'created' | 'modified' | 'deleted';
  linesAdded?: number;
  linesRemoved?: number;
}

export interface LessonLearned {
  category: 'technical' | 'process' | 'client' | 'strategy';
  insight: string;
  actionable: boolean;
}

export interface SessionMetrics {
  tasksCompleted: number;
  timeSpent: number;
  focusScore: number;
  productivityIndex: number;
}

export interface Session {
  id: string;
  startTime: string;
  endTime?: string;
  goals?: string[];
  summary?: string;
  tasksCompleted: Task[];
  tasksIncomplete: Task[];
  lessonsLearned: LessonLearned[];
  fileChanges: FileChange[];
  metrics?: SessionMetrics;
  nextSteps?: string[];
  tips?: string[];
  mood?: 'productive' | 'challenging' | 'learning' | 'creative';
}

export interface SessionDatabase {
  sessions: Session[];
  currentSession?: string;
  stats: {
    totalSessions: number;
    totalTasksCompleted: number;
    averageSessionLength: number;
    topTags: { tag: string; count: number }[];
  };
}