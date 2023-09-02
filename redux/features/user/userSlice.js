import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
    userInfo: null,
    userPreferences: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}


//createProfile
export const createProfile = createAsyncThunk('user/createProfile', async (data, thunkAPI) => {
    const { step, ...otherData } = data;
    try {
        return await userService.createProfile(otherData, step)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUser: (state) => {
            state.userInfo = null
            state.userPreferences = null
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createProfile.fulfilled, (state, action) => {
                state.userInfo = action.payload,
                    state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createProfile.rejected, (state, action) => {
                state.userInfo = null
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    },
})

export const { reset } = userSlice.actions
export default userSlice.reducer