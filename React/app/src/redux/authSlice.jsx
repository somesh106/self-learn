import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: JSON.parse(localStorage.getItem("userInfo")) || {
        firstName: "",
        lastName: "",
        image: ""
    },
    token: localStorage.getItem("token"),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.userInfo = {
                firstName: "",
                lastName: "",
                image: ""
            };
            state.token = null;

            localStorage.removeItem("userInfo");
            localStorage.removeItem("token");
        },
    },
});

export const { setUserInfo, setToken, logout } = authSlice.actions;
export default authSlice.reducer;