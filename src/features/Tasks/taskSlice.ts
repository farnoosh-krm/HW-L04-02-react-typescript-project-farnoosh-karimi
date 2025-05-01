import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../types/Task";

const initialState: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    removeTask: (state, action: PayloadAction<number>) => {
      const newState = state.filter(task => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        localStorage.setItem("tasks", JSON.stringify(state));
      }
    },
    removeTasksByProjectId: (state, action: PayloadAction<number>) => {
      const newState = state.filter(task => task.projectId !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    }
  }
});

export const { addTask, removeTask, updateTask, removeTasksByProjectId } = taskSlice.actions;
export default taskSlice.reducer;
