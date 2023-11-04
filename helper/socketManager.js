// socketManager.js
import { io } from "socket.io-client";

let socket;
const parsedToken = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('biyeKorun_token')) : null

export const connectSocket = () => {
    // console.log('socket connected');
    if (!socket) {
        const options = {
            rememberUpgrade: true,
            transports: ['websocket'],
            secure: true,
            rejectUnauthorized: false,
            query: { token: `Bearer ${parsedToken?.accessToken}` }
        };
        socket = io(process.env.NEXT_PUBLIC_API_SOCKET, options);
    }
    return socket;
};

export const disconnectSocket = () => {
    if (socket) {
        socket.disconnect();
        socket = null;
    }
};
