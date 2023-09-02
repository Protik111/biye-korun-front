"use client"

import { Provider } from "react-redux"
import store from "./store"
import setAuthToken from "@/utils/setAuthToken";
import { useEffect } from "react";
import { loadUser } from "./features/auth/authSlice";

export function ReduxProvider({ children }) {

    useEffect(() => {
        const token = localStorage.getItem('biyeKorun_token');
        const parsedToken = JSON.parse(token);
        if (parsedToken?.accessToken) {
            setAuthToken(parsedToken.accessToken);
            store.dispatch(loadUser());
        }
    }, [])

    return <Provider store={store}> {children} </Provider>
}