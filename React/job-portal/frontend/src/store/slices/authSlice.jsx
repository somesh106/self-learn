import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    rememberMe: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.rememberMe = action.payload.rememberMe;
        },
        logoutUser: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.rememberMe = false;
        }
    }
})
export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;