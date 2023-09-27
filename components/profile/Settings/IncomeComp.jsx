import { Group, Radio, TextInput } from "@mantine/core"

const IncomeComp = ({ profileData, setProfileData }) => {

    const handleChange = (name, value) => {
        setProfileData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div>
            <Radio.Group onChange={(e) => handleChange('income', e)} name="income">
                <Group mt="xs" className="flex-column align-start">
                    <Radio color="pink" value="Visible to all Members" label="Visible to all Members" />
                    <Radio color="pink" value="Keep this private" label="Keep this private" />
                </Group>
            </Radio.Group>
        </div>
    )
}

export default IncomeComp