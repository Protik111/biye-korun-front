import axios from 'axios'

const API_URL = 'http://localhost:5000/api/user/'

const loadUser = async () => {
    const response = await axios.get(API_URL + 'verify')

    return response.data;
}

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL + 'register', userData)

    if (response.data) {
        localStorage.setItem('biyeKorun_token', JSON.stringify(response.data?.token))
    }

    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('biyeKorun_token', JSON.stringify(response.data?.token))
    }

    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('biyeKorun_token')
}

const authService = {
    loadUser,
    register,
    logout,
    login,
}

export default authService