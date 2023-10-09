import useAxiosPost from '@/hooks/axios/useAxiosPost'
import { loadUserData } from '@/redux/features/user/userSlice'
import { notifyError, notifySuccess } from '@/utils/showNotification'
import { Badge, Button, PinInput, TextInput } from '@mantine/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import { useDispatch, useSelector } from 'react-redux'

const messageUpdate = {
    success: 'OTP is sent to your email.',
    error: 'Email is not valid!'
}

const messageOTP = {
    success: 'Email updated successfully!',
}

const AccountSettings = ({ profileData, setProfileData }) => {
    const { userInfo } = useSelector(state => state.user)
    const [otp, setOtp] = useState('')
    const [switchSection, setSwithSection] = useState(false);
    const [newCodeTimer, setNewCodeTimer] = useState(Date.now() + 10 * 60 * 1000);
    const { email = {} } = userInfo || {};
    const dispatch = useDispatch();

    const handleChange = (name, value) => {
        setProfileData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return (
                <div className='flex flex-gap-5 flex-wrap align-center'>
                    <Button className='mt-5' size='xs' onClick={() => resendOTP()} variant="light" color="pink" radius="xl">Resend OTP</Button>
                </div>
            );
        } else {
            // Render a countdown
            return (
                <div className='flex flex-gap-5 flex-wrap align-center'>
                    <Badge disabled className='mt-5' variant="light" color="grape" size="lg">Resend OTP in ({hours}:{minutes}:{seconds})</Badge>
                </div>
            );
        }
    };

    const { data, loading, error, postData: sendPostRequest } = useAxiosPost('user/otp-send', null, messageUpdate);

    useEffect(() => {
        if (data?.success) {
            setSwithSection(true)
        }
    }, [data])


    const payload = {
        email: profileData?.email,
        otpType: "email"
    }

    const handleUpdate = () => {
        sendPostRequest(payload)
    }

    const resendOTP = () => {
        handleUpdate()
    }

    const handleVerifyOTP = () => {
        axios.patch(`user/update-email`, {
            email: profileData?.email,
            otp: otp
        })
            .then(res => {
                // console.log('res', res);
                notifySuccess('Email updated successfully!')
                dispatch(loadUserData());
                setOtp('')
                setSwithSection(false)
            })
            .catch(err => {
                console.log(err.response.data);
                notifyError(err.response.data.message)
            })
    }

    return (
        <div className='border-1 rounded-10 p-15 accountSettings'>
            {switchSection ?
                <>
                    <div className='accountSettings__top'>
                        <div>
                            <label className="label label-required">Enter The OTP
                                <span className="required-field">*</span>
                            </label>
                            <PinInput type={/^[0-9]+/} inputMode="numeric" inputType="tel" className="mt-5" value={otp} onChange={(e) => setOtp(e)} size="md" length={6} placeholder="" />
                        </div>

                        <div className='flex justify-end countdown'>
                            <Countdown date={newCodeTimer} renderer={renderer} />
                        </div>
                    </div>

                    <div className=''>
                        <Button className='mt-5' onClick={() => handleVerifyOTP()} disabled={otp?.length !== 6} variant="filled" radius="xl">Verify & Update</Button>
                    </div>
                </>
                :
                <>
                    <TextInput
                        className='w-50'
                        label="Update Your Email"
                        placeholder="Enter your email"
                        size="md"
                        withAsterisk
                        name="email"
                        value={profileData?.email}
                        onChange={(event) => handleChange('email', event.target.value)}
                    />
                    <br />

                    <div className='flex flex-gap-15'>
                        <Button variant="outline" color="pink" radius="xl">Cancel</Button>
                        <Button onClick={() => handleUpdate()} disabled={profileData?.email === email || loading} variant="filled" radius="xl">Update</Button>
                    </div>
                </>
            }
        </div>
    )
}

export default AccountSettings