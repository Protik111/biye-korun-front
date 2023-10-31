import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/notification/`;

// get notifications
const getNotifications = async () => {
    const response = await axios.get(API_URL + `my-notifications`);

    return response.data;
};


const notificationService = {
    getNotifications,
};

export default notificationService;
