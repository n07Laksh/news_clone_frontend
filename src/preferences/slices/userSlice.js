import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        user: null,
        login_signup_result: false,
    },
    reducers: {
        setUser: (state) => {
            const userData = localStorage.getItem("userDetail");
            state.user = userData ? userData : null ;
        },
        userLoginSignup: (state) => {
            const login_signup = localStorage.getItem("user");
            state.login_signup_result = login_signup ? true : false;
        },
    }
})

export const { setUser, userLoginSignup } = userSlice.actions;
export default userSlice.reducer;