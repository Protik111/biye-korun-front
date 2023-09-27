import { Group, Radio, TextInput } from "@mantine/core"

const EmailComp = ({ profileData, setProfileData }) => {

    const handleChange = (name, value) => {
        setProfileData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>
            <Radio.Group onChange={(e) => handleChange('email', e)} name="email">
                <Group mt="xs" className="flex-column align-start">
                    <Radio color="pink" value="Visible to all Premium Members" label="Visible to all Premium Members" />
                    <Radio color="pink" value="Visible to Premium Members you wish to connect to" label="Visible to Premium Members you wish to connect to" />
                    <Radio color="pink" value="Hide my Email Address" label="Hide my Email Address" />
                    <Radio color="pink" value="Visible to all your Matches (Expires with Membership)" label="Visible to all your Matches (Expires with Membership)" />
                </Group>
            </Radio.Group>
        </div>
    )
}

export default EmailComp