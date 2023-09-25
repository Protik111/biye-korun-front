import { useState, useEffect } from 'react';
import axios from 'axios';
import { configureAxiosHeader } from '@/utils/setAxiosHeader';
import { notifyError, notifySuccess } from '@/utils/showNotification';

const toBeCalled = () => {
    console.log('toBeCalled func');
}

function useAxiosPost(url, initialData = null, message = {}, postDataFunction = toBeCalled) {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // console.log('message', message);

    const postData = async (postData, toBeCalled = postDataFunction) => {
        configureAxiosHeader()
        try {
            setLoading(true);
            const response = await axios.post(url, postData);
            setData(response.data);
            setError(null);
            if (message?.success) {
                notifySuccess(message.success)
            }
            toBeCalled()
        } catch (error) {
            setError(error);
            notifyError(error?.response?.data?.message)
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, postData };
}

export default useAxiosPost;
