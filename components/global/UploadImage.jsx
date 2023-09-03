"use client"

import { useEffect, useState } from 'react';
import { Image, SimpleGrid } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import axios from 'axios';
import { resizeFile } from '@/utils/resizeFile';
import { useRouter } from 'next/navigation';
import { notifyError, notifySuccess } from '@/utils/showNotification';


function UploadImage() {
    const [files, setFiles] = useState([]);
    const [imageLoading, setImageLoading] = useState(false);
    const router = useRouter();

    // console.log('images', files);

    useEffect(() => {
        async function updateProfileImage() {
            if (files?.length > 0) {
                setImageLoading(true);
                let newFile = await resizeFile(files[0])
                let formData = new FormData();
                formData.append("image", newFile);
                axios
                    .patch("user/profile-image-upload", { image: newFile, isVisible: true, isBlur: false }, {
                        headers: {
                            "Content-Type": "multipart/form-data", // Set the content type for FormData
                        }
                    })
                    .then((res) => {
                        setImageLoading(false);
                        notifySuccess('Image uploaded successfully!')
                        setTimeout(() => {
                            router.push('/registration/hobbies')
                        }, 1000)
                    })
                    .catch((err) => {
                        setImageLoading(false);
                        // console.log(err.response.data);
                        notifyError('Error occured uploading image')
                    });
            }
        }
        updateProfileImage();
    }, [files])

    const previews = files?.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return (
            <Image
                radius="md"
                mx="auto"
                width={120} height={120}
                key={index}
                src={imageUrl}
                imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
            />
        );
    });

    return (
        <div>
            <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
                {files?.length === 0 ? (
                    <Image
                        maw={100}
                        mx="auto"
                        radius="md"
                        src="/registration/upload-profile.svg"
                        alt="Random image"
                    />
                ) : null}
                <SimpleGrid
                    className="flex justify-center align-center"
                    cols={4}
                    breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                    mt={previews.length > 0 ? 'xl' : 0}
                >
                    {previews}
                </SimpleGrid>
            </Dropzone>

        </div>
    )
}

export default UploadImage