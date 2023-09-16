import axios from 'axios'

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/user/`


// Create profile
const createProfile = async (data, step) => {
    const response = await axios.patch(API_URL + `createprofile/${step}`, data)

    return response.data
}

//load user data
const loadUserData = async () => {
    const response = await axios.get(API_URL)
    return response.data
}

//update profile
const updateProfile = async (data) => {
    const response = await axios.patch(API_URL + `update-user-profile`, data)
    console.log(response.data);
}

const userService = {
    createProfile,
    loadUserData,
    updateProfile
}

export default userService