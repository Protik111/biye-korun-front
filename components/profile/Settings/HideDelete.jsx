import ConfirmModal from '@/components/global/ConfirmModal';
import useAxiosPost from '@/hooks/axios/useAxiosPost';
import { logout } from '@/redux/features/auth/authSlice';
import { loadUserData } from '@/redux/features/user/userSlice';
import { notifyError, notifySuccess } from '@/utils/showNotification';
import { Badge, Button, PinInput } from '@mantine/core'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Countdown from 'react-countdown'
import { btnBackground } from '@/styles/library/mantine';
import LoaderWithText from '@/components/global/LoaderWithText';


const messageUpdate = {
    success: 'OTP is sent to your email.',
    error: 'Email is not valid!'
}

const HideDelete = () => {
    const { userInfo } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false)
    const router = useRouter();
    const [newCodeTimer, setNewCodeTimer] = useState(Date.now() + 10 * 60 * 1000);
    const [switchSection, setSwithSection] = useState(false);
    const [otp, setOtp] = useState('')
    const [deleteLoading, setDeleteLoading] = useState(false);
    const { email = {} } = userInfo || {};


    const { isHide = {} } = userInfo || {}

    const payload = {};

    if (isHide) {
        payload.status = false
    } else {
        payload.status = true
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

    const { data, loading, error, postData: sendPostRequest } = useAxiosPost('user/delete-otp', null, messageUpdate);

    const { data: data2, loading: loading2, error: error2, postData: sendPostRequest2 } = useAxiosPost('user/verifyotp', null);

    useEffect(() => {
        if (data?.success) {
            setSwithSection(true)
        }
    }, [data])

    const payload2 = {
        // email,
        otpType: "email"
    }

    //send OTP
    const handleSendOTP = () => {
        sendPostRequest(payload2)
    }

    const resendOTP = () => {
        handleSendOTP()
    }

    const handleHideUnhide = () => {
        axios.patch(`user/hide-unhide`, payload)
            .then(res => {
                if (isHide) {
                    notifySuccess('Your profile is visible to everyone!')
                    setShowModal(false)
                } else {
                    notifySuccess('Your profile is hidden to everyone!')
                    setShowModal(false)
                }
                dispatch(loadUserData());

            })
            .catch(err => {
                console.log(err.response.data);
                notifyError(err.response.data.message)
            })
    }

    const handleDelete = () => {
        // console.log('data2', data2);
        setDeleteLoading(true)
        axios.delete(`user/delete/${otp}`)
            .then(res => {
                setDeleteLoading(false)
                dispatch(logout());
                notifySuccess('Your profile is deleted permanently!')
                router.push('/')
                setShowModalDelete(false)

            })
            .catch(err => {
                setDeleteLoading(false)
                console.log(err.response.data);
                notifyError(err.response.data.message)
            })
    }

    return (
        <div>
            <div className='container-box-bg flex align-center justify-between border-1 py-30 px-15'>
                {isHide ? <>
                    <div className='w-75'>
                        <h3>Unhide Profile</h3>
                        <p className='mt-5'>When you unhide your Profile, you will be visible to everyone.</p>
                    </div>
                    <Button onClick={() => setShowModal(true)} variant="light" color="pink" size="xs" radius="xl">Unhide</Button>
                </> :
                    <>
                        <div className='w-75'>
                            <h3>Hide Profile</h3>
                            <p className='mt-5'>When you hide your Profile, you will not be visible to everyone.</p>
                        </div>
                        <Button onClick={() => setShowModal(true)} variant="light" color="pink" size="xs" radius="xl">Hide</Button>
                    </>}
            </div>

            <div className='container-box-bg flex align-center justify-between border-1 py-30 px-15 mt-15'>
                <div className='w-75'>
                    <h3>Delete Profile</h3>
                    <p className='mt-5'>You will permanently lose all profile information, match interactions and paid memberships.</p>
                </div>
                <Button onClick={() => setShowModalDelete(true)} variant="filled" color="pink" size="xs" radius="xl">Delete</Button>
            </div>
            {
                showModal && <ConfirmModal modalOpen={showModal} handleModalClose={() => setShowModal(false)}>
                    <div className=''>
                        <h3>Are you sure to {!isHide ? 'hide' : 'unhide'} your profile?</h3>
                        <div className='flex justify-end flex-gap-10 mt-10'>
                            <Button onClick={() => setShowModal(false)} variant="outline" color="pink" size="xs" radius="xl">Cancel</Button>

                            <Button onClick={() => handleHideUnhide()} variant="filled" color="indigo" size="xs" radius="xl">Confirm</Button>
                        </div>
                    </div>
                </ConfirmModal>
            }

            {
                showModalDelete && <ConfirmModal modalOpen={showModalDelete} handleModalClose={() => setShowModalDelete(false)}>
                    <div className=''>
                        <h3>{switchSection ? "Enter the OTP to delete the account!" : "Are you sure to delete your profile?"}</h3>
                        <div className='mt-10'>
                            {
                                switchSection ?
                                    <div className='delete__top--container'>
                                        <div className='delete__top'>
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
                                            <Button className='mt-5' onClick={() => handleDelete()} disabled={otp?.length !== 6 || deleteLoading} variant="filled" style={btnBackground} radius="xl">{deleteLoading ? <LoaderWithText text='Deleting...'></LoaderWithText> : "Verify & Delete"}</Button>
                                        </div>
                                    </div> :
                                    <div className='flex flex-gap-5 justify-end'>
                                        <Button onClick={() => setShowModalDelete(false)} variant="outline" color="pink" size="xs" radius="xl">Cancel</Button>

                                        <Button onClick={() => handleSendOTP()} variant="filled" color="pink" size="xs" radius="xl">{
                                            loading ? <LoaderWithText text="Sending OTP..." fontSize='12px'></LoaderWithText> : "Delete Permanently"}</Button>

                                    </div>
                            }

                        </div>
                    </div>
                </ConfirmModal>
            }
        </div>
    )
}

export default HideDelete