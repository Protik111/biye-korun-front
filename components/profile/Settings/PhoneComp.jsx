import { Group, Radio, TextInput } from "@mantine/core"

const PhoneComp = ({ profileData, setProfileData }) => {

    const handleChange = (name, value) => {
        setProfileData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>
            <Radio.Group onChange={(e) => handleChange('phone', e)} name="phone">
                <Group mt="xs" className="flex-column align-start">
                    <Radio color="pink" value="Only Premium Members" label="Only Premium Members" />
                    <Radio color="pink" value="Only Premium Members you like" label="Only Premium Members you like" />
                    <Radio color="pink" value="No one (Matches won't be able to call you)" label="No one (Matches won't be able to call you)" />
                    <Radio color="pink" value="Only visible to all your Matches (Expires with Membership)" label="Only visible to all your Matches (Expires with Membership)" />
                </Group>
            </Radio.Group>
        </div>
    )
}

export default PhoneComp