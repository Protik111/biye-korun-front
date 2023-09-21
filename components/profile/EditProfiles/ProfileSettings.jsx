import LoaderWithText from "@/components/global/LoaderWithText";
import useAxios from "@/hooks/axios/useAxios";
import useDeleteReq from "@/hooks/axios/useDeleteReq";
import { loadUserData } from "@/redux/features/user/userSlice";
import { imageUrl } from "@/staticData/image"
import { notifyError, notifySuccess } from "@/utils/showNotification";
import { Button, Divider, Group, Image, Radio } from "@mantine/core"
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";

const message = {
    success: 'Photo deleted successfully!',
    error: 'Error occurred!'
}

const ProfileSettings = ({ profilePicture, setProfilePictureBlank, refetch }) => {
    const { data, error, isLoading, deleteData } = useDeleteReq();
    const { loading: loading2, } = useAxios("user/myphotos");
    const dispatch = useDispatch();


    const [fieldData, setFieldData] = useState({
        isBlur: profilePicture?.isBlur || false,
        isVisible: profilePicture?.isVisible || false,
    });

    // Function to handle radio button changes
    const handleRadioChange = (name, event) => {
        let eventBool = JSON.parse(event)

        setFieldData((prevFieldData) => ({
            ...prevFieldData,
            [name]: eventBool
        }));
    };

    const handleUpdateImage = (id) => {
        axios.patch(`user/update-image/${id}`, fieldData)
            .then(res => {
                notifySuccess('Image updated successfully!')
            })
            .catch(err => {
                console.log(err.response.data);
                notifyError(err.response.data.message)
            })
    }


    const deletePhoto = (id) => {
        // console.log('id', id);
        deleteData(id, setProfilePictureBlank, refetch, message);
        // refetch()
        // setProfilePictureBlank();
    }

    const handleMakeProfile = (id) => {
        // console.log('id', id);
        axios.patch(`user/update-user-profile`, {
            profilePicture: id
        })
            .then(res => {
                notifySuccess('Profile picture successfully!')
                refetch()
                dispatch(loadUserData())
                setProfilePictureBlank()
            })
            .catch(err => {
                console.log(err.response.data);
                notifyError(err.response.data.message)
            })
    }

    return (
        <div className="grid grid-cols-2 grid-cols-2-responsive grid-gap-20">
            <div>
                <h3>Photo settings</h3>
                <Divider my={5}></Divider>
                {/* <Radio.Group name="photoSettings" label="1) Visible to all">
                    <Group mt="xs" className="flex-column align-start">
                        <Radio
                            color="pink"
                            value="visibleToAll"
                            label="Yes"
                        />
                        <Radio
                            color="pink"
                            value="protectedPhoto"
                            label="No"
                        />
                    </Group>
                </Radio.Group>

                <Radio.Group name="photoSettings" label="2) Hide your photo">
                    <Group mt="xs" className="flex-column align-start">
                        <Radio
                            color="pink"
                            value="visibleToAll"
                            label="Yes"
                        />
                        <Radio
                            color="pink"
                            value="protectedPhoto"
                            label="No"
                        />
                    </Group>
                </Radio.Group> */}

                <Radio.Group
                    label="Make photo blur"
                    name="isBlur"
                    onChange={(event) => handleRadioChange('isBlur', event)}
                    value={fieldData.isBlur}
                // error={fieldErrors.basic1gender}
                >
                    <Group mt="xs">
                        <Radio checked={fieldData.isBlur == true} color="pink" value={true} label="Yes" />
                        <Radio checked={fieldData.isBlur == false} color="pink" value={false} label="No" />
                    </Group>
                </Radio.Group>


                <Radio.Group
                    label="Hide your photo"
                    name="isVisible"
                    onChange={(event) => handleRadioChange('isVisible', event)}
                    value={fieldData.isVisible}
                // error={fieldErrors.basic1gender}
                >
                    <Group mt="xs">
                        <Radio checked={fieldData.isVisible == true} color="pink" value={true} label="Yes" />
                        <Radio checked={fieldData.isVisible == false} color="pink" value={false} label="No" />
                    </Group>
                </Radio.Group>

                <div className="flex flex-gap-10">
                    <Button onClick={() => handleUpdateImage(profilePicture?._id)} className="mt-5" size="xs" variant="filled" radius="xl">Update settings</Button>
                </div>

                <Divider my={10}></Divider>

                <div className="flex flex-gap-10">
                    <Button onClick={() => handleMakeProfile(profilePicture?._id)} className="mt-5" size="xs" variant="outline" radius="xl">Make profile photo</Button>

                    <Button onClick={() => deletePhoto(profilePicture?._id)} className="mt-5" size="xs" color="red" variant="outline" radius="xl">
                        {loading2 ? (
                            <>
                                <LoaderWithText text="Deleting photo.." color="white"></LoaderWithText>
                            </>
                        ) : (
                            <>
                                Delete photo
                            </>
                        )}
                    </Button>
                </div>
            </div>
            <div>
                <Image
                    height={250}
                    sx={{ cursor: 'pointer' }}
                    radius="md"
                    src={profilePicture?.url?.medium || imageUrl}
                    alt="Pictures"

                />
            </div>
        </div>
    )
}

export default ProfileSettings