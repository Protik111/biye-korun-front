"use client"

import { Provider } from "react-redux"
import store from "./store"
import setAuthToken from "@/utils/setAuthToken";
import { useEffect, useState } from "react";
import { loadUser } from "./features/auth/authSlice";
import { Loader } from "@mantine/core";

export function ReduxProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('biyeKorun_token');
        const parsedToken = JSON.parse(token);
        if (parsedToken?.accessToken) {
            setAuthToken(parsedToken.accessToken);
            store.dispatch(loadUser());
        }
        setIsLoading(true)
    }, [])

    if (!isLoading) {
        return <div className="flex justify-center align-center min-vh-100">
            <Loader size="xl" color="pink" />
        </div>
    }

    return <Provider store={store}> {children} </Provider>
}