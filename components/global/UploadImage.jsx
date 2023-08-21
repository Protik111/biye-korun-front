"use client"

import { useState } from 'react';
import { Image, SimpleGrid } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';

function UploadImage() {
    const [files, setFiles] = useState([]);

    const previews = files.map((file, index) => {
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
                {files.length === 0 ? (
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