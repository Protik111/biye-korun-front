import { colleges, qualifications } from '@/staticData/InputFields/inputFields'
import { Select } from '@mantine/core'
import React from 'react'

const EducationCareer = ({ profileDatas, setProfileDatas }) => {
    const handleFormChange = (name, value) => {
        setProfileDatas((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    }

    return (
        <div className='px-15'>
            <Select
                className='w-50'
                size="md"
                placeholder="Select"
                label="Education qualification"
                data={qualifications}
                value={profileDatas.education}
                withAsterisk
                name="education"
                onChange={(event) => handleFormChange('education', event)}
            // error={formErrors.education}
            />

            <br />

            <Select
                className='w-50'
                size="md"
                placeholder="Select"
                label="College"
                data={colleges}
                value={profileDatas.college}
                withAsterisk
                name="college"
                onChange={(event) => handleFormChange('college', event)}
            // error={formErrors.education}
            />
        </div>
    )
}

export default EducationCareer