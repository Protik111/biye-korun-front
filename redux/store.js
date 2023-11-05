import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice';
import userSlice from "./features/user/userSlice";
import notificationSlice from "./features/notification/notificationSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userSlice,
        notification: notificationSlice
    },
    devTools: true
})

export default store;