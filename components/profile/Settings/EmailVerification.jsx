import LoaderWithText from '@/components/global/LoaderWithText'
import useAxiosPost from '@/hooks/axios/useAxiosPost'
import { loadUserData } from '@/redux/features/user/userSlice'
import { notifyError, notifySuccess } from '@/utils/showNotification'
import { Alert, Badge, Button, PinInput, TextInput } from '@mantine/core'
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

const EmailVerification = ({ profileData, setProfileData }) => {
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
                    <Badge disabled className='mt-5' variant="light" color="grape" size="lg">Resend OTP in ({"0" + minutes}:{seconds})</Badge>
                </div>
            );
        }
    };

    const { data, loading, error, postData: sendPostRequest } = useAxiosPost('user/resendotp', null, messageUpdate);

    const messageUpdate2 = {
        success: 'Email verified successfully!',
    }
    const { data: data2, loading: loading2, error: error2, postData: sendPostRequest2 } = useAxiosPost('user/verifyotp', null, messageUpdate2);


    useEffect(() => {
        if (data?.success) {
            setSwithSection(true)
        }
    }, [data])


    const payload = {
        email,
        otpType: "email"
    }

    const handleUpdate = () => {
        sendPostRequest(payload)
    }

    const resendOTP = () => {
        handleUpdate()
    }

    const dispatchUserData = () => {
        dispatch(loadUserData())
        setSwithSection(false)
    }

    const handleVerifyOTP = () => {
        const payload = {
            otp,
            email,
            otpType: "email"
        }
        sendPostRequest2(payload, dispatchUserData)
    }

    return (
        <div>
            <div className='mb-15'>
                {!userInfo?.isEmailVerified?.status ? <Alert variant="light" color="red" title={<h4>Your email is not verified!</h4>}>
                    Your Email is not Verified yet! You can Verify your Email by sending OTP to your email.
                </Alert> :
                    <Alert variant="light" color="red" title={<h4>Your Email is Verified!</h4>}>
                        You've successfully verified your email.
                    </Alert>
                }
            </div>
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
                            <Button className='mt-5' onClick={() => handleVerifyOTP()} disabled={otp?.length !== 6} variant="filled" radius="xl">Verify</Button>
                        </div>
                    </>
                    :
                    <>
                        <TextInput
                            className='w-50-responsive'
                            label="Verify Email"
                            placeholder="Enter email"
                            size="md"
                            withAsterisk
                            name="email"
                            value={email}
                            disabled
                        // onChange={(event) => handleChange('email', event.target.value)}
                        />
                        <br />

                        <div className='flex flex-gap-15'>
                            {/* <Button variant="outline" color="pink" radius="xl">Cancel</Button> */}
                            {!userInfo?.isEmailVerified?.status && <Button onClick={() => handleUpdate()} disabled={loading} variant="filled" radius="xl">{loading ? <LoaderWithText text="Sending OTP..."></LoaderWithText> : "Get OTP"}</Button>}
                        </div>
                    </>
                }
            </div>
        </div>

    )
}

export default EmailVerification