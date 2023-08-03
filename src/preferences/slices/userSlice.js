import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {
        user: null,
        login_signup_result: false,
        pageError: false,
        bg_mode:null,
        text_mode:null,
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
        },
        setBgTxtColor: (state) => {
            const modes = JSON.parse(localStorage.getItem("pageMode"))
            state.bg_mode = modes?.bg || null;
            state.text_mode = modes?.txt || null;
          },
    }
})

export const { setUser, userLoginSignup, setPageError, setBgTxtColor } = userSlice.actions;
export default userSlice.reducer;