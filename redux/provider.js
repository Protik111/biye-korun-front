"use client";

import { Provider } from "react-redux"
import store from "./store"
import setAuthToken from "@/utils/setAuthToken";
import { useEffect, useState } from "react";
import { loadUser } from "./features/auth/authSlice";
import { Loader } from "@mantine/core";
import { configureAxiosHeader } from "@/utils/setAxiosHeader";
import { loadUserData } from "./features/user/userSlice";
import { io } from "socket.io-client";
import { connectSocket, disconnectSocket } from "@/helper/socketManager";
import setupSocketListeners from "@/helper/socketHandler";
import { getNotifications } from "./features/notification/notificationSlice";

export let socket;

export function ReduxProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const parsedToken = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('biyeKorun_token')) : null
        if (parsedToken?.accessToken) {
            setAuthToken(parsedToken.accessToken);

            try {
                store.dispatch(loadUser());
                store.dispatch(loadUserData());
                store.dispatch(getNotifications())
                configureAxiosHeader();

                /**
                @TODO will add more reducers
                */
                socket = connectSocket();
                // store.dispatch(loadChats())

                //invoking socket event listerner
                const cleanUpListeners = setupSocketListeners()



                setTimeout(() => {
                    setIsLoading(true)
                }, 2000)

                return () => {
                    disconnectSocket()
                    return cleanUpListeners;
                    // Clean up listeners or any other resources here if needed
                };
            } catch (error) {
                console.error("An error occurred:", error);
                setIsLoading(true);
            }
        }

        setTimeout(() => {
            setIsLoading(true)
        }, 2000)


    }, [socket])

    if (!isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Loader size="xl" color="pink" />
        </div>
    }

    return <Provider store={store}> {children} </Provider>
}