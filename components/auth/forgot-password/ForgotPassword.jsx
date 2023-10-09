"use client"
import CenteredModal from "@/components/global/CenteredModal"
import LoaderWithText from "@/components/global/LoaderWithText"
import Form from "@/components/multiStepRegistration/Form"
import { FormProvider } from "@/context/FormContext"
import { loadUser, login } from "@/redux/features/auth/authSlice"
import { loadUserData } from "@/redux/features/user/userSlice"
import { btnBackground, logininput } from "@/styles/library/mantine"
import setAuthToken from "@/utils/setAuthToken"
import { configureAxiosHeader } from "@/utils/setAxiosHeader"
import { notifyError, notifySuccess } from "@/utils/showNotification"
import { Badge, Button, Loader, PasswordInput, PinInput, TextInput } from "@mantine/core"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"
import useAxiosPost from "@/hooks/axios/useAxiosPost"
import axios from "axios";
import Countdown from 'react-countdown'


const messageUpdate = {
    success: 'OTP is sent to your email.',
    error: 'Email is not valid!'
}


const ForgotPassword = () => {
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const router = useRouter();
    const [otp, setOtp] = useState('');
    const [isOTPSend, setIsOTPSend] = useState(false);
    const [switchSection, setSwithSection] = useState(false);
    const [newCodeTimer, setNewCodeTimer] = useState(Date.now() + 10 * 60 * 1000);

    const [formData, setFormData] = useState({
        email: '',
    })

    const [formValues, setFormValues] = useState({
        newPassword: '',
        confirmPassword: ''
    })

    const [formValuesError, setFormValuesError] = useState({
        newPassword: '',
        confirmPassword: ''
    })

    const [loading, setLoading] = useState(false);
    const [passLoading, setPassLoading] = useState(false);


    const [formDataError, setFormDataError] = useState({
        email: '',
    })
    const handleChange = (name, value) => {
        setFormData((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    }

    const handleChangeFormValues = (name, value) => {
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    }

    const valiDateFormPass = () => {
        const errors = {}

        if (!formValues.newPassword) {
            errors.newPassword = "Enter your new password!"
        }

        if (!formValues.confirmPassword) {
            errors.confirmPassword = "Enter your confirm password!"
        }

        if (formValues.newPassword && formValues.confirmPassword) {
            if (formValues.newPassword !== formValues.confirmPassword) {
                errors.newPassword = "Passwords do not match!"
                errors.confirmPassword = "Passwords do not match!"
            }
        }

        setFormValuesError(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    }

    const payloadForReset = {
        email: formData?.email,
        otp: otp,
        password: formValues.newPassword,
        confirmPassword: formValues.confirmPassword
    }

    const handleUpdatePassword = () => {
        if (valiDateFormPass()) {
            configureAxiosHeader()
            setPassLoading(true)
            axios.patch('user/resetpassword', payloadForReset)
                .then(res => {
                    setPassLoading(false);
                    notifySuccess("Your password has been changed successfully!")
                    router.push("/")
                })
                .catch(err => {
                    setPassLoading(false);
                    console.log(err.response.data);
                    notifyError(err.response.data.message)
                })
        }

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

    const { data, loading: loading2, error, postData: sendPostRequest } = useAxiosPost('user/otp-send', null, messageUpdate);

    const payload = {
        email: formData?.email,
        // otpType: "email"
    }

    const handleSendOTP = () => {
        // sendPostRequest(payload)
        if (validateForm()) {
            configureAxiosHeader()
            setLoading(true)
            axios.patch('user/forgotpassword', payload)
                .then(res => {
                    setLoading(false);
                    if (res.data?.success) {
                        setIsOTPSend(true)
                        notifySuccess("A verification code has been sent to your email.")
                    }
                })
                .catch(err => {
                    setLoading(false);

                    console.log(err.response.data);
                    notifyError(err.response.data.message)
                })
        }
    }

    useEffect(() => {
        if (isOTPSend) {
            setSwithSection(true)
        }
    }, [isOTPSend])


    const resendOTP = () => {
        handleUpdate()
    }


    const validateForm = () => {
        const errors = {};

        if (!formData.email) {
            errors.email = 'Email is required'
        }

        setFormDataError(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    }

    return (
        <div className="loginComp flex justify-center align-center min-vh-75 container">
            <div className="loginComp__wrapper container-box-vh-50 grid grid-cols-2 grid-cols-2-responsive place-center px-15">
                <div className="loginComp__wrapper--left box-shadow px-25 py-30 rounded-10">

                    <h4 className="text-center">Forget Password</h4>
                    <br />

                    {
                        switchSection ?

                            <>
                                <div className='accountSettings__top'>
                                    <div>
                                        <label className="label label-required">Enter The OTP
                                            <span className="required-field">*</span>
                                        </label>
                                        <PinInput type={/^[0-9]+/} inputMode="numeric" inputType="tel" className="mt-5" value={otp} onChange={(e) => setOtp(e)} size="lg" length={6} placeholder="" />
                                    </div>

                                    <PasswordInput
                                        className="mt-5"
                                        label="New Password"
                                        placeholder="Enter new password"
                                        size="md"
                                        withAsterisk
                                        name="newPassword"
                                        fullWidth
                                        sx={logininput}
                                        value={formValues.password}
                                        onChange={(event) => handleChangeFormValues('newPassword', event.target.value)}
                                        error={formValuesError.password}

                                    />
                                    <PasswordInput
                                        className="mt-5"
                                        label="Confirm Password"
                                        placeholder="Enter confirm password"
                                        size="md"
                                        withAsterisk
                                        name="password"
                                        fullWidth
                                        sx={logininput}
                                        value={formData.confirmPassword}
                                        onChange={(event) => handleChangeFormValues('confirmPassword', event.target.value)}
                                        error={formValuesError.confirmPassword}

                                    />
                                </div>

                                <div className=''>
                                    <Button className='mt-15' onClick={() => handleUpdatePassword()} style={btnBackground} fullWidth disabled={otp?.length !== 6 || passLoading} variant="filled" radius="xl">Reset Password</Button>
                                </div>
                            </>
                            :
                            <>
                                <TextInput
                                    label="Email"
                                    placeholder="Enter Email"
                                    size="md"
                                    withAsterisk
                                    name="email"
                                    fullWidth
                                    sx={logininput}
                                    value={formData.email}
                                    onChange={(event) => handleChange('email', event.target.value)}
                                    error={formDataError.email}

                                />
                                <br />

                                <Button
                                    size="md"
                                    fullWidth
                                    // leftIcon={<IconArrowNarrowLeft />}
                                    style={btnBackground} type="button"
                                    className={`button`}
                                    onClick={handleSendOTP}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <LoaderWithText text="Sending OTP.." color="white"></LoaderWithText>
                                        </>
                                    ) : (
                                        <>
                                            Get OTP
                                        </>
                                    )}
                                </Button>
                            </>
                    }
                </div>
                <div className="loginComp__wrapper--right">
                    <img className="forgot-img" src="/auth/forgot-password.svg" alt="forgot" />
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword