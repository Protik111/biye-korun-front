// socketHandler.js
import axios from "axios";
import { useState } from "react";
// import { loadChats } from "../action/initialActions";

// import store from "../store";
import store from "@/redux/store";

// import { addOnlineUser, pushMessage, removeOnlineUser, setTyping, updateChats, updateLatestMessage, updateMessage } from "../store/reducer/chatReducer";

// import { newNotification } from "../store/reducer/notificationReducer";

// import { handleMessageNoti } from "./utilitis";

// import { socket } from "./withAuth";
import { socket } from "@/redux/provider";
import { addOnlineUser, newNotification, removeOnlineUser } from "@/redux/features/notification/notificationSlice";


const updateStatus = (messageId, status) => {
    axios.patch(`/chat/update-status/${messageId}`, { status })
        .then(res => {

        })
        .catch(err => {
            console.log(err);
        })
}

const setupSocketListeners = () => {
    const audio = new Audio("/notification.wav");
    let user = store.getState()?.auth?.user
    let isAuthenticated = store.getState()?.auth?.isAuthenticated
    if (!socket || !isAuthenticated) return;

    socket.emit("online", { id: user?._id });

    socket.on("join_online", (data) => {
        console.log('data from join online', data);
        // socket.emit("online", { id: user?._id });
    });


    // socket.on("newmessage", (data) => {

    //     console.log(data);
    //     if (data.message?.sender?._id != user._id) {

    //         updateStatus(data?.message?._id, "delivered")
    //         // let result = handleMessageNoti(data, user._id);

    //         //console.log(result);
    //         if (result?.isSent) {
    //             audio.play();
    //         }
    //     }
    //     if (!data?.message?.parentMessage) {

    //         console.log(data?.message);
    //         store.dispatch(updateLatestMessage({ chatId: data.chat?._id, latestMessage: data.message, counter: 1 }));
    //     }


    //     store.dispatch(pushMessage({ chat: data.chat?._id, message: data.message }));



    //     // store.dispatch({
    //     //     type: "UPDATE_MYDATA",
    //     //     payload: {
    //     //         _id: data.chat?._id,
    //     //         field: "isRead",
    //     //         value: data.mesage?.sender?._id == user._id,
    //     //     },
    //     // });
    // });

    // socket.on("updatemessage", (data) => {
    //     // console.log(data);
    //     store.dispatch(updateMessage({ chat: data?.chat, message: data.message }));
    // });

    // socket.on("updatechat", (data) => {
    //     // console.log(data);
    //     if (data?.chat) {
    //         store.dispatch(updateChats(data?.chat));
    //     }

    // });

    // socket.on("pushmessage", (data) => {
    //     store.dispatch(pushMessage({ chat: data.chat, message: data.message }));
    // });

    socket.on("newnotification", (data) => {

        // if (data?.notification?.categories?.includes("student") || data?.notification?.categories?.includes("global")) {
        //     // store.dispatch(newNotification(data.notification));
        // }
        if (data?.notification) {
            store.dispatch(newNotification(data))
            audio.play();
        }

        // if (data?.notification?.notificationType === "thread") {
        //     audio.play();

        //     notification.success({
        //         message: `${data?.notification?.userFrom?.fullName} replied in a thread`,
        //         description: data?.message,
        //         duration: 10,
        //         onClick: () => {
        //             window.location.href = `/chat/${data?.notification?.entityId}?message=${data?.notification?.text}`
        //         },
        //     });
        // }
    });

    socket.on("addOnlineUser", (data) => {
        store.dispatch(addOnlineUser(data.user));
    });

    socket.on("removeOnlineUser", (data) => {
        store.dispatch(removeOnlineUser(data.user));
    });

    // socket.on("updateConsultant", (data) => {
    //     // store.dispatch({
    //     //     type: "SET_ACTIVE_CONSULTANT",
    //     //     payload: data.session,
    //     // });
    // });



    // socket.on("istyping", (data) => {
    //     //    console.log(data);
    //     store.dispatch(setTyping({ chatId: data?.chatId, typingData: data.typingData }));
    // });
    // socket.on("newchatevent", (data) => {
    //     //    console.log(data);
    //     store.dispatch(loadChats());
    // });

    return () => {
        socket.off("join_online");
        // socket.off("newmessage");
        // socket.off("updatemessage");
        // socket.off("updatechat");
        // socket.off("pushmessage");
        socket.off("newnotification");
        socket.off("addOnlineUser");
        socket.off("removeOnlineUser");
        // socket.off("updateConsultant");
        // socket.off("istyping");
        // socket.off("newchatevent");
    };

};

export default setupSocketListeners;
