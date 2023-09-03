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
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Loader size="xl" color="pink" />
        </div>
    }

    return <Provider store={store}> {children} </Provider>
}