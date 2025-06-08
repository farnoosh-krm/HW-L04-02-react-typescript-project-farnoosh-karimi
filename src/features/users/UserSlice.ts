import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/User";

const initialState: User[] = JSON.parse(localStorage.getItem("users") || "[]");

const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>): void => {
            state.push(action.payload);
            localStorage.setItem("users", JSON.stringify(state));
        },
        removeUser: (state, action: PayloadAction<number>) => {
            const userIdToRemove = action.payload;
            const updatedUsers = state.filter(user => user.id !== userIdToRemove);
            localStorage.setItem("users", JSON.stringify(updatedUsers));
            return updatedUsers; // Return the updated state
        }
    }
});

export const { addUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
