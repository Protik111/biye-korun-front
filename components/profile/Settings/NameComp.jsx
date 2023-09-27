import { TextInput } from "@mantine/core"

const NameComp = ({ profileData, setProfileData }) => {

    const handleChange = (name, value) => {
        setProfileData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="flex justify-center flex-gap-15">
            <TextInput
                className="w-50"
                size="sm"
                label="First Name"
                placeholder="First name"
                withAsterisk
                name="firstName"
                value={profileData.firstName}
                onChange={(event) => handleChange('firstName', event.target.value)}
            // error={profileData.firstName}
            />

            {/* <br /> */}

            <TextInput
                className="w-50"
                size="sm"
                label="Last Name"
                placeholder="Last name"
                withAsterisk
                name="lastName"
                value={profileData.lastName}
                onChange={(event) => handleChange('lastName', event.target.value)}
            // error={profileData.firstName}
            />
        </div>
    )
}

export default NameComp