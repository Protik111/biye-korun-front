"use client"

import UploadImage from '@/components/global/UploadImage'
import { btnBackground } from '@/styles/library/mantine'
import { Button, Divider } from '@mantine/core'
import { IconSend } from '@tabler/icons-react'
import React from 'react'
import UploadPhotoGuidelines from './UploadPhotoGuidelines'

function UploadPhoto() {
    return (
        <div className='uploadPhoto container rounded-10 mt-15'>
            <h2 className='text-center py-15'>Congrats! You Profile has been Created!</h2>

            {/* <h3 className='mb-5'>Upload your profile photo</h3> */}
            <div className='flex align-center justify-center'>


                <UploadImage></UploadImage>

                {/* <div className='grid place-center'>
                    <Button component="a"
                        href="mailto:rafiurprotik111@gmail.com" leftIcon={<IconSend />} style={btnBackground} size="md">
                        Email your Photos
                    </Button>
                </div> */}

            </div>

            <Divider mt={50} size="md" variant='dashed' />

            <UploadPhotoGuidelines></UploadPhotoGuidelines>
        </div>
    )
}

export default UploadPhoto