import React from 'react'
import UploadImage from '../global/UploadImage'
import { Alert } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'
import { imageUrl } from '@/staticData/image'
import UploadPhotoGuidelines from '../registration/photo/UploadPhotoGuidelines'
import { useSelector } from 'react-redux'

const MyPhotos = () => {
    const { userInfo } = useSelector(state => state.user) || {};

    const {
        location: { city, residencyStatus } = {},
        doctrine: { caste } = {},
        appearance: { height } = {},
        education: { college, education } = {},
        family: { children, livingWith } = {},
        lifestyle: { diet, maritalStatus } = {},
        profession: { employer, income, occupation, workingWith } = {},
        trait: { aboutMe } = {},
        phone, profilePicture: { url } = {},
        fullName,
        userId,
        dateOfBirth,
        postedBy,
        religion,
        community,
        country
    } = userInfo || {};

    return (
        <div className='myPhotos container container-box-bg mt-15'>
            <div className='flex justify-center align-center'>
                <UploadImage></UploadImage>
            </div>

            <div className='text-center w-75 m-auto mt-15 w-md-100-responsive'>
                <Alert icon={<IconAlertCircle size="1rem" />} color="pink">
                    Note: You can upload 20 photos to your profile. Each photos must be less than 15 MB and in jpg, jpeg, png or webp format.
                </Alert>
            </div>

            <h3 className='mt-20'>Your photos</h3>
            <div className='profile-img--container'>
                <div className="profile-img">
                    <img src={url?.large || imageUrl} alt="Profile" />
                </div>
            </div>

            <UploadPhotoGuidelines></UploadPhotoGuidelines>
        </div>
    )
}

export default MyPhotos