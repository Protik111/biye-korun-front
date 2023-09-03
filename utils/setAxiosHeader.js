import axios from 'axios';

export const configureAxiosHeader = () => {
    axios.defaults.baseURL = 'http://localhost:5000/api/'
    const token = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('biyeKorun_token')) : null;
    if (token?.accessToken) {
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token?.accessToken;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }
};