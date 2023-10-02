import ConfirmModal from '@/components/global/ConfirmModal';
import { loadUserData } from '@/redux/features/user/userSlice';
import { notifyError, notifySuccess } from '@/utils/showNotification';
import { Button } from '@mantine/core'
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const HideDelete = () => {
    const { userInfo } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const { isHide = {} } = userInfo || {}

    const payload = {};

    if (isHide) {
        payload.status = false
    } else {
        payload.status = true
    }

    const handleHideUnhide = () => {
        axios.patch(`user/hide-unhide`, payload)
            .then(res => {
                if (isHide) {
                    notifySuccess('Your profile is visible on Biyekorun.us!')
                    setShowModal(false)
                } else {
                    notifySuccess('Your profile is hidden on Biyekorun.us!')
                    setShowModal(false)
                }
                dispatch(loadUserData());

            })
            .catch(err => {
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
                        <p className='mt-5'>When you unhide your Profile, you will be visible on Biyekorun.us.</p>
                    </div>
                    <Button onClick={() => setShowModal(true)} variant="light" color="pink" size="xs" radius="xl">Unhide</Button>
                </> :
                    <>
                        <div className='w-75'>
                            <h3>Hide Profile</h3>
                            <p className='mt-5'>When you hide your Profile, you will not be visible on Biyekorun.us.</p>
                        </div>
                        <Button onClick={() => setShowModal(true)} variant="light" color="pink" size="xs" radius="xl">Hide</Button>
                    </>}
            </div>

            <div className='container-box-bg flex align-center justify-between border-1 py-30 px-15 mt-15'>
                <div className='w-75'>
                    <h3>Delete Profile</h3>
                    <p className='mt-5'>You will permanently lose all profile information, Match interactions and paid memberships.</p>
                </div>
                <Button variant="filled" color="pink" size="xs" radius="xl">Delete</Button>
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
        </div>
    )
}

export default HideDelete