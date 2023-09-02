import axios from 'axios'

const API_URL = 'http://localhost:5000/api/user/'


// Create profile
const createProfile = async (data, step) => {
    console.log('step', step);
    const response = await axios.patch(API_URL + `createprofile/${step}`, data)

    return response.data
}

const userService = {
    createProfile
}

export default userService