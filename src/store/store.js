import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../preferences/slices/userSlice"

export default configureStore({
    reducer:{
        user:userSlice,
    }
})