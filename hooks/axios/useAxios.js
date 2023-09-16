import { useState, useEffect } from "react";
import axios from "axios";
import { configureAxiosHeader } from "@/utils/setAxiosHeader";

const useAxios = (url, method = "GET", initialData = null, config = {}, requestData = null) => {
    const [data, setData] = useState(initialData);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log('url', url);

    const fetchData = async () => {
        try {
            const response = await axios.request({
                url,
                method,
                data: requestData, // Include the request data (e.g., POST or PUT body)
                ...config,
            });
            // console.log('response.data', response.data);
            setData(response.data);
        } catch (err) {
            setError(err);
            // console.log('err', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        configureAxiosHeader()
    }, []);

    return { data, error, loading, refetch: fetchData };
};

export default useAxios;
