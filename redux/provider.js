"use client"

import { Provider } from "react-redux"
import store from "./store"
import setAuthToken from "@/utils/setAuthToken";
import { useEffect, useState } from "react";
import { loadUser } from "./features/auth/authSlice";
import { Loader } from "@mantine/core";
import { configureAxiosHeader } from "@/utils/setAxiosHeader";
import { loadUserData } from "./features/user/userSlice";

export function ReduxProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(async () => {
        const parsedToken = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('biyeKorun_token')) : null
        if (parsedToken?.accessToken) {
            setAuthToken(parsedToken.accessToken);

            try {
                await store.dispatch(loadUser());
                await store.dispatch(loadUserData());
                await configureAxiosHeader();
                setIsLoading(true)
            } catch (error) {
                console.error("An error occurred:", error);
                setIsLoading(true);
            }
        }
    }, [])

    if (!isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Loader size="xl" color="pink" />
        </div>
    }

    return <Provider store={store}> {children} </Provider>
}