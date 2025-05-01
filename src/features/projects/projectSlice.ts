import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project } from "../../types/Projects";

const initialState: Project[] = JSON.parse(localStorage.getItem("projects") || "[]");

const ProjectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        addProject: (state, action: PayloadAction<Project>): void => {
            state.push(action.payload);
            localStorage.setItem("projects", JSON.stringify(state));
        },
        removeProject: (state, action: PayloadAction<number>) => {
            const projectIdToRemove = action.payload;
            const updatedProjects = state.filter(project => project.id !== projectIdToRemove);
            localStorage.setItem("projects", JSON.stringify(updatedProjects));
            return updatedProjects; // Return the updated state
        }
    }
});

export const { addProject, removeProject } = ProjectSlice.actions;
export default ProjectSlice.reducer;
