import { notifyError, notifySuccess } from '@/utils/showNotification';
import axios from 'axios';
import { useState } from 'react';

const setBlankToBeCalled = () => {
    console.log('blanked');
}

const useDeleteReq = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const deleteData = async (id, setBlank = setBlankToBeCalled, refetch = setBlankToBeCalled, message) => {
        setIsLoading(true);
        try {
            const response = await axios.delete(`user/deleteImage/${id}`);
            setData(response.data);
            setBlank();
            notifySuccess(message?.success)
            refetch()
        } catch (err) {
            setError(err);
            notifyError(message?.error)
        } finally {
            setIsLoading(false);
        }
    };

    return {
        data,
        error,
        isLoading,
        deleteData,
    };
}

export default useDeleteReq