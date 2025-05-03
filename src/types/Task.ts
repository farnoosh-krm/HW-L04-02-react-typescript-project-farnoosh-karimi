export type Task = {
    id: number;
    projectId: number;
    title: string;
    description: string;
    dueDate: string;
    status: "not started" | "to do" | "done";
    priority: "low" | "medium" | "high";
    assignedTo?: number;
  };