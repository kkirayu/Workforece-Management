export interface Employee {
  id: string;
  name: string;
  email: string;
  avatar: string;
  division: string;
  department: string;
  team: string;
  position: string;
  level: string;
  status: 'Active' | 'On Leave' | 'Inactive';
  joinDate: string;
  location: string;
  skills: string[];
  skillLevels: Record<string, number>;
  capacityHours: number;
  allocatedHours: number;
  actualHours: number;
  utilization: number;
  performanceScore: number;
  managerId?: string;
  reportsCount: number;
}

export interface Task {
  id: string;
  title: string;
  project: string;
  hours: number;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Backlog' | 'Ready' | 'In Progress' | 'Blocked' | 'Review' | 'Done';
  dueDate: string;
  reassignedTo?: string;
  keep?: boolean;
  isNew?: boolean;
}

export interface OKR {
  id: string;
  goal: string;
  keyResult: string;
  progress: number;
  owner: string;
  quarter: string;
  status: 'On Track' | 'At Risk' | 'Behind' | 'Completed';
}

export interface PerformanceCycle {
  month: string;
  completion: number;
  quality: number;
  deadline: number;
  productivity: number;
  collaboration: number;
  overall: number;
}

export interface RebalanceScenario {
  employee: Employee;
  currentTasks: Task[];
  proposedTasks: Task[];
  impact: {
    currentUtilization: number;
    proposedUtilization: number;
    affectedProjects: number;
    riskLevel: 'Low' | 'Medium' | 'High';
    skillMatch: number;
  };
}
