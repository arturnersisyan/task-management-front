export interface ITaskData {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    priority: 'Low' | 'Medium' | 'High';
    status: 'Pending' | 'Completed';
    assignedMember: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface ReportData {
    completedTasks: number;
    avgTimeToCompleteTasksInMin: number;
  }

export type statusType = "Pending" | "In Progress" | "Completed"