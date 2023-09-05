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

    useEffect(() => {
        const parsedToken = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('biyeKorun_token')) : null
        if (parsedToken?.accessToken) {
            setAuthToken(parsedToken.accessToken);

            try {
                store.dispatch(loadUser());
                store.dispatch(loadUserData());
                configureAxiosHeader();
                setTimeout(() => {
                    setIsLoading(true)
                }, 2000)
            } catch (error) {
                console.error("An error occurred:", error);
                setIsLoading(true);
            }
        }

        setTimeout(() => {
            setIsLoading(true)
        }, 2000)


    }, [])

    if (!isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Loader size="xl" color="pink" />
        </div>
    }

    return <Provider store={store}> {children} </Provider>
}