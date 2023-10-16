"use client";

import { useEffect, useState } from "react";
import { Image, SimpleGrid, Text } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from "@mantine/dropzone";
import axios from "axios";
import { resizeFile } from "@/utils/resizeFile";
import { useRouter } from "next/navigation";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import { useDispatch } from "react-redux";
import { loadUserData } from "@/redux/features/user/userSlice";

function UploadImage({ isMultiple = false, multipleRefetch, fullWidth }) {
  const [files, setFiles] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  // console.log('isMultiple', isMultiple);

  // console.log('images', files);

  useEffect(() => {
    async function updateProfileImage() {
      if (files?.length > 0) {
        setImageLoading(true);
        let newFile = await resizeFile(files[0]);
        let formData = new FormData();
        formData.append("image", newFile);
        axios
          .patch(
            "user/profile-image-upload",
            { image: newFile, isVisible: true, isBlur: false },
            {
              headers: {
                "Content-Type": "multipart/form-data", // Set the content type for FormData
              },
            }
          )
          .then((res) => {
            setImageLoading(false);
            notifySuccess("Image uploaded successfully!");
            dispatch(loadUserData());
            setTimeout(() => {
              router.push("/registration/hobbies");
            }, 500);
          })
          .catch((err) => {
            setImageLoading(false);
            // console.log(err.response.data);
            notifyError("Error occured uploading image");
          });
      }
    }

    async function uploadMultpileImages() {
      if (files?.length > 0) {
        setImageLoading(true);
        let newFile = await resizeFile(files[0]);
        let formData = new FormData();
        formData.append("image", newFile);
        axios
          .post(
            "user/uploadimage",
            { image: newFile, isVisible: true, isBlur: false },
            {
              headers: {
                "Content-Type": "multipart/form-data", // Set the content type for FormData
              },
            }
          )
          .then((res) => {
            setImageLoading(false);
            notifySuccess("Image uploaded successfully!");
            dispatch(loadUserData());
            multipleRefetch();
            setFiles([]);
          })
          .catch((err) => {
            setImageLoading(false);
            // console.log(err.response.data);
            notifyError("Error occured uploading image");
          });
      }
    }

    if (isMultiple) {
      uploadMultpileImages();
    }

    if (!isMultiple) {
      updateProfileImage();
    }
  }, [files]);

  const previews = files?.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        radius="md"
        mx="auto"
        width={120}
        height={120}
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    );
  });

  return (
    <div
      className={`${
        fullWidth ? "w-100 w-md-100-responsive" : "w-50 w-md-100-responsive"
      }`}
    >
      {isMultiple ? (
        <h3 className="mb-5">Upload Photos</h3>
      ) : (
        <h3 className="mb-5">Upload Profile Photo</h3>
      )}
      <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
        {files?.length === 0 ? (
          <div>
            <Image
              maw={100}
              mx="auto"
              radius="md"
              src="/registration/upload-profile.svg"
              alt="Random image"
            />

            <div className="flex flex-column justify-center align-center mt-15">
              <Text size="md" inline>
                Choose a file or drag it here
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                Support JPEG, JPG, PNG
              </Text>
            </div>
          </div>
        ) : null}
        <SimpleGrid
          className="flex justify-center align-center"
          cols={4}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          mt={previews.length > 0 ? "xl" : 0}
        >
          {previews}
        </SimpleGrid>
      </Dropzone>
    </div>
  );
}

export default UploadImage;
