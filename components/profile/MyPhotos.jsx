import React, { useState } from 'react'
import UploadImage from '../global/UploadImage'
import { Alert, Box, Image, Loader, Skeleton } from '@mantine/core'
import { IconAlertCircle, IconCircleCheck } from '@tabler/icons-react'
import { imageUrl } from '@/staticData/image'
import UploadPhotoGuidelines from '../registration/photo/UploadPhotoGuidelines'
import { useSelector } from 'react-redux'
import useAxios from '@/hooks/axios/useAxios'
import ThemeIconComp from '../global/ThemeIconComp'
import ProfileSettings from './EditProfiles/ProfileSettings'

const MyPhotos = () => {
    const { userInfo } = useSelector(state => state.user) || {};
    const { data, error, loading, refetch } = useAxios("user/myphotos");
    const [profilePicture, setProfilePicture] = useState({});

    console.log('data', data);

    const {
        location: { city, residencyStatus } = {},
        doctrine: { caste } = {},
        appearance: { height } = {},
        education: { college, education } = {},
        family: { children, livingWith } = {},
        lifestyle: { diet, maritalStatus } = {},
        profession: { employer, income: { min, max } = {}, occupation, workingWith } = {},
        trait: { aboutMe } = {},
        phone,
        profilePicture: { url } = { url: null }, // provide a default value
        fullName,
        firstName,
        lastName,
        userId,
        dateOfBirth,
        postedBy,
        religion,
        community,
        country
    } = userInfo || {};

    const handleProfileImage = (item) => {
        setProfilePicture(item)
    }

    console.log(profilePicture, 'profilePicture');

    return (
        <div className='myPhotos container container-box-bg mt-15'>
            {!profilePicture?.url && <div className='flex justify-center align-center'>
                <UploadImage isMultiple={true} multipleRefetch={refetch}></UploadImage>
            </div>}

            {profilePicture?.url && <div className='grid grid-cols-2 grid-cols-2-responsive grid-gap-20 border-1 rounded-10 p-15'>
                <UploadImage fullWidth={true} isMultiple={true} multipleRefetch={refetch}></UploadImage>
                <ProfileSettings profilePicture={profilePicture} setProfilePictureBlank={() => setProfilePicture({})} refetch={refetch}></ProfileSettings>
            </div>}

            <div className='text-center w-75 m-auto mt-15 w-md-100-responsive'>
                <Alert icon={<IconAlertCircle size="1rem" />} color="pink">
                    Note: You can upload 20 photos to your profile. Each photos must be less than 15 MB and in jpg, jpeg, png or webp format.
                </Alert>
            </div>

            <h3 className='mt-20'>Your photos</h3>
            <div className='profile-img--container flex flex-gap-15 flex-wrap justify-center'>
                <div className="profile-img">
                    <Box maw={220}>
                        <Image
                            height={250}
                            radius="md"
                            src={url?.large || imageUrl}
                            alt="Profile Picture"
                            caption={
                                <div className='flex flex-gap-5 align-center'>
                                    <ThemeIconComp iconComp={<IconCircleCheck size="14" />} size={18}></ThemeIconComp>
                                    <h3>Profile Picture</h3>
                                </div>
                            }
                        />
                    </Box>
                </div>

                {
                    data?.data?.length > 0 ? data?.data?.map(item => <Box onClick={() => handleProfileImage(item)} key={item?._id} maw={220}>
                        <Image
                            height={250}
                            sx={{ cursor: 'pointer' }}
                            radius="md"
                            src={item?.url?.medium || imageUrl}
                            alt="Pictures"

                        />
                    </Box>) : (
                        <div className="requestBox-container container-box-bg p-30 flex flex-wrap flex-gap-15">
                            <Skeleton height={200} circle mb="xl" />
                            <Skeleton height={200} circle mb="xl" />
                        </div>
                    )
                }
            </div>

            <UploadPhotoGuidelines></UploadPhotoGuidelines>
        </div>
    )
}

export default MyPhotos