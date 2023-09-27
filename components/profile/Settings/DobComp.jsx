import { Group, Radio, TextInput } from "@mantine/core"

const DobComp = ({ profileData, setProfileData }) => {

    const handleChange = (name, value) => {
        setProfileData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>
            <Radio.Group onChange={(e) => handleChange('dob', e)} name="email">
                <Group mt="xs" className="flex-column align-start">
                    <Radio color="pink" value="Show my full Date of Birth (dd/mm/yyyy)" label="Show my full Date of Birth (dd/mm/yyyy)" />
                    <Radio color="pink" value="Show only the Month & Year (mm/yyyy)" label="Show only the Month & Year (mm/yyyy)" />
                </Group>
            </Radio.Group>
        </div>
    )
}

export default DobComp