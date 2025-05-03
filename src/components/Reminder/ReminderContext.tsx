// ReminderContext.tsx
import React, { createContext, useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { Task } from "../../types/Task";
import { Project } from "../../types/Projects";

interface ReminderContextType {
  reminders: string[];
  clearReminders: () => void;
}

export const ReminderContext = createContext<ReminderContextType | undefined>(undefined);

export const ReminderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reminders, setReminders] = useState<string[]>([]);
  const tasks: Task[] = useSelector((state: RootState) => state.tasks);
  const projects: Project[] = useSelector((state: RootState) => state.projects);

  useEffect(() => {
    const today = new Date();
    const reminderMessages: string[] = [];

    tasks.forEach((task) => {
      const due = new Date(task.dueDate);
      const diff = (due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
      if (diff <= 2 && diff >= 0) {
        reminderMessages.push(`Task "${task.title}" is due in ${Math.ceil(diff)} day(s)!`);
      }
    });

    projects.forEach((project) => {
      const due = new Date(project.endDate);
      const diff = (due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
      if (diff <= 2 && diff >= 0) {
        reminderMessages.push(`Project "${project.title}" ends in ${Math.ceil(diff)} day(s)!`);
      }
    });

    setReminders(reminderMessages);
  }, [tasks, projects]);

  const clearReminders = () => {
    setReminders([]);
  };

  return (
    <ReminderContext.Provider value={{ reminders, clearReminders }}>
      {children}
    </ReminderContext.Provider>
  );
};

export const useReminder = () => {
  const context = useContext(ReminderContext);
  if (!context) throw new Error("useReminder must be used within ReminderProvider");
  return context;
};
