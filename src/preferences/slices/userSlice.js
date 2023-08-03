import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        user: null,
        login_signup_result: false,
        pageError: false,
    },
    reducers: {
        setUser: (state, action) => {
            const userData = JSON.parse(localStorage.getItem("userDetail"));
            state.user = action.payload || userData;
        },
        userLoginSignup: (state) => {
            const login_signup = localStorage.getItem("user");
            state.login_signup_result = login_signup ? true : false;
        },
        setPageError: (state, action) => {
            state.pageError = true;
        }
    }
})

export const { setUser, userLoginSignup, setPageError } = userSlice.actions;
export default userSlice.reducer;