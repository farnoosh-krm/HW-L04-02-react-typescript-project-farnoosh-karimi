import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/UserSlice.ts"
import projectReducer from "../features/projects/projectSlice.ts"
import taskReducer from "../features/Tasks/taskSlice.ts";
import authReducer from "../features/auth/authSlice.ts";

export const store = configureStore({
  reducer: {
    users: userReducer,
    projects: projectReducer,
    tasks: taskReducer,
    auth: authReducer,
  } 
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;