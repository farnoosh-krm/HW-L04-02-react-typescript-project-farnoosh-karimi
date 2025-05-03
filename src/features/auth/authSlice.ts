import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    currentUser: { name: string; password: string } | null;
  }
  

const initialState: AuthState = {
    currentUser:JSON.parse(localStorage.getItem("currentUser") || 'null')
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<{ name: string; password: string }>) => {
            state.currentUser = action.payload;
            localStorage.setItem("currentUser", JSON.stringify(action.payload));
          },
          
        logOut: (state) => {
            state.currentUser = null;
            localStorage.removeItem("currentUser");
        }
    },
})

export const { signIn, logOut } = authSlice.actions;
export default authSlice.reducer;
