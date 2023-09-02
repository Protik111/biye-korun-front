import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice';
import userSlice from "./features/user/userSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userSlice
    },
})

export default store;