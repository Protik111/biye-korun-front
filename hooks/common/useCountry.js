import { useEffect, useState } from "react";

const config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries',
    ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
}

const useCountry = (selectedCountryCode, selectedStateCode) => {
    const [data, setData] = useState({
        country: [],
        state: [],
        city: []
    });
    const [error, setError] = useState({
        country: '',
        state: '',
        city: ''
    });
    const [loading, setLoading] = useState({
        country: true,
        state: false,
        city: false
    });

    //fetch country data
    const fetchCountry = async () => {
        setLoading({ ...loading, country: true }); // Set loading to true while fetching data

        try {
            const response = await fetch(config.cUrl, { headers: { "X-CSCAPI-KEY": config.ckey } });
            const res = await response.json();
            setData({ ...data, country: res });
        } catch (error) {
            setError({ ...error, country: error });
        } finally {
            setLoading({ ...loading, country: false }); // Set loading back to false when done
        }
    };

    // fetch state data
    const fetchState = async (selectedCountryCode) => {
        setLoading({ ...loading, state: true });

        try {
            const response = await fetch(`${config.cUrl}/${selectedCountryCode}/states`, { headers: { "X-CSCAPI-KEY": config.ckey } });
            const res = await response.json();
            setData({ ...data, state: res });
        } catch (error) {
            setError({ ...error, state: error });
        } finally {
            setLoading({ ...loading, state: false });
        }

    };

    // fetch city data
    const fetchCities = async (selectedCountryCode, selectedStateCode) => {
        setLoading({ ...loading, city: true });

        try {
            const response = await fetch(`${config.cUrl}/${selectedCountryCode}/states/${selectedStateCode}/cities`, { headers: { "X-CSCAPI-KEY": config.ckey } });
            const res = await response.json();
            setData({ ...data, city: res });
        } catch (error) {
            setError({ ...error, city: error });
        } finally {
            setLoading({ ...loading, city: false });
        }
    };

    useEffect(() => {
        fetchCountry();

        if (selectedCountryCode) {
            fetchState(selectedCountryCode);
        }

        if (selectedCountryCode && selectedStateCode) {
            fetchCities(selectedCountryCode, selectedStateCode);
        }
    }, [selectedCountryCode, selectedStateCode]); // Include dependencies in the useEffect dependencies array

    return { data, error, loading, refetch: fetchCountry };
}

export default useCountry;
