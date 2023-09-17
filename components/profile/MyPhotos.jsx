import React from 'react'
import UploadImage from '../global/UploadImage'
import { Alert, Box, Image, Loader } from '@mantine/core'
import { IconAlertCircle, IconCircleCheck } from '@tabler/icons-react'
import { imageUrl } from '@/staticData/image'
import UploadPhotoGuidelines from '../registration/photo/UploadPhotoGuidelines'
import { useSelector } from 'react-redux'
import useAxios from '@/hooks/axios/useAxios'
import ThemeIconComp from '../global/ThemeIconComp'

const MyPhotos = () => {
    const { userInfo } = useSelector(state => state.user) || {};
    const { data, error, loading, refetch } = useAxios("user/myphotos");

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
        phone, profilePicture: { url } = {},
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

    return (
        <div className='myPhotos container container-box-bg mt-15'>
            <div className='flex justify-center align-center'>
                <UploadImage isMultiple={true} multipleRefetch={refetch}></UploadImage>
            </div>

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
                    data?.data?.length > 0 ? data?.data?.map(item => <Box maw={220}>
                        <Image
                            radius="md"
                            src={item?.url?.medium || imageUrl}
                            alt="Pictures"

                        />
                    </Box>) : (
                        <div>
                            <Loader size="xl" color="pink" />
                        </div>
                    )
                }
            </div>

            <UploadPhotoGuidelines></UploadPhotoGuidelines>
        </div>
    )
}

export default MyPhotos