import { useState, useEffect } from 'react';
import axios from 'axios';
import { configureAxiosHeader } from '@/utils/setAxiosHeader';
import { notifyError, notifySuccess } from '@/utils/showNotification';

function useAxiosPost(url, initialData = null, message) {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    console.log('message', message);

    const postData = async (postData) => {
        configureAxiosHeader()
        try {
            setLoading(true);
            const response = await axios.post(url, postData);
            setData(response.data);
            setError(null);
            notifySuccess(message.success)
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
