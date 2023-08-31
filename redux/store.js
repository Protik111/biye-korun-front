import configureStore from "@reduxjs/toolkit";
import authReducer from './features/authSlice/authSlice';
import { apiSlice } from "./features/apiSlice.js/apiSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
})

export default store;