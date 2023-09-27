import { Button, TextInput } from '@mantine/core'
import React from 'react'

const AccountSettings = ({ profileData, setProfileData }) => {

    const handleChange = (name, value) => {
        setProfileData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className='border-1 rounded-10 p-15'>
            <TextInput
                className='w-50'
                label="Update Your Email"
                placeholder="Enter your email"
                size="md"
                withAsterisk
                name="email"
                value={profileData.email}
                onChange={(event) => handleChange('email', event.target.value)}
            />
            <br />

            <div className='flex flex-gap-15'>
                <Button variant="outline" color="pink" radius="xl">Cancel</Button>
                <Button variant="filled" radius="xl">Save</Button>
            </div>
        </div>
    )
}

export default AccountSettings