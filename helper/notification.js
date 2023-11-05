import { updateNotification } from "@/redux/features/notification/notificationSlice";
import axios from "axios";

// import { Avatar, Empty, List } from "antd";
// import { updateNotification } from "../store/reducer/notificationReducer";

// export const notificationMarkRead = (noti) => {
//     axios
//         .patch(`/notification/mark-read/${noti._id}`)
//         .then((res) => {
//             store.dispatch(updateNotification(res.data.notification));
//             //console.log(res.data.notification);
//             router.push(
//                 generateNotificationUrl(
//                     noti.notificationType,
//                     noti.entityId,
//                     noti?.text
//                 )
//             );
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };



export const generateNotificationUrl = (type, entityId, text) => {
    console.log('type, entityId, text', type, entityId, text);
    let url = "";
    switch (type) {

        case "friend-request":
            url = `/recieved`;
            break;
        case "accepted-request":
            url = `/accepted`;
            break;
        case "declined-request":
            url = `/my-matches`;
            break;
        case "cancel-request":
            url = `/my-matches`;
            break;
        case "unfriend-request":
            url = `/my-matches`;
            break;
        case "profile-view":
            url = `/view-profile/${entityId}`;
            break;
        default:
            break;
    }
    return url;
};




// export const generateNotificationText = (type, user, entityId) => {
//     let text = "";
//     switch (type) {
//         case "enrollmentApprove":
//             text = `Congratulations! You are now approved for this program`;
//             break;
//         default:
//             text = "This notification is not defined";
//             break;
//     }
//     return text;
// };

export const generateNotificationText = (type, user, entityId) => {
    let text = "";
    switch (type) {
        case "friend-request":
            text = `${user?.firstName} sent you a connection request!`;
            break;
        // case "pending-request":
        //     text = `${user?.firstName} Connection request is peding!`;
        //     break;
        case "accepted-request":
            text = `${user?.firstName} accepted your connection request!`;
            break;
        case "declined-request":
            text = `${user?.firstName} declined your connection request!`;
            break;
        case "cancel-request":
            text = `${user?.firstName} cancelled your connection request!`;
            break;
        case "unfriend-request":
            text = `${user?.firstName} unfriended you!`;
            break;
        case "profile-view":
            text = `${user?.firstName} viewed your profile!`;
            break;
        default:
            text = "This notification is not defined";
            break;
    }
    return text;
};

export const notificationsList = (notifications) => (
    <List
        className="list_items_antd"
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={(noti) => (
            <List.Item
                key={noti._id}
                onClick={() => notificationMarkRead(noti)}
                className={!noti?.opened ? "unread noti_item" : "noti_item"}
                style={{ cursor: "pointer" }}
            >
                <List.Item.Meta
                    avatar={
                        <Avatar
                            src={noti?.userFrom?.profilePicture || "/placeholder2.jpg"}
                        />
                    }
                    title={
                        <span>
                            {generateNotificationText(
                                noti.notificationType,
                                noti.userFrom,
                                noti.entityId
                            )}
                        </span>
                    }
                    description={moment(noti.createdAt).fromNow()}
                />
            </List.Item>
        )}
    />
);