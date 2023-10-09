import { Group, Radio, TextInput } from "@mantine/core"
import { useSelector } from "react-redux"

const PhotoComp = ({ profileData, setProfileData }) => {
    const { userInfo, message } = useSelector(state => state.user)


    const handleChange = (name, value) => {
        setProfileData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>
            <Radio.Group onChange={(e) => handleChange('photo', e)} name="photo">
                <Group mt="xs" className="flex-column align-start">
                    <Radio color="pink" value="Visible to all Members" label="Visible to all Members" />
                    <Radio color="pink" value="Visible to Members I like and to all Premium Members" label="Visible to Members I like and to all Premium Members" />
                </Group>
            </Radio.Group>

            <div className="profile-img mt-20">
                <img src={userInfo?.profilePicture?.url?.medium} alt="profile" />
            </div>
        </div>
    )
}

export default PhotoComp