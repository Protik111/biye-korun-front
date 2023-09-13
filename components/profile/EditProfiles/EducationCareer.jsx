import { colleges, companies, incomes, professions, qualifications, worksWiths } from '@/staticData/InputFields/inputFields'
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
                className='w-50 w-md-100-responsive'
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
                className='w-50 w-md-100-responsive'
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

            <br />

            <Select
                className='w-50 w-md-100-responsive'
                size="md"
                placeholder="Select"
                label="Income Monthly"
                data={incomes}
                value={profileDatas.income}
                name="income"
                onChange={(event) => handleFormChange('income', event)}
            // error={formErrors.income}
            />

            <br />
            <Select
                className='w-50 w-md-100-responsive'
                size="md"
                placeholder="Select"
                label="Works with"
                // styles={{ label: labelStyles }}
                data={worksWiths}
                value={profileDatas.workingWith}
                name="workingWith"
                onChange={(event) => handleFormChange('workingWith', event)}
            />

            <br />

            <Select
                className='w-50 w-md-100-responsive'
                size="md"
                placeholder="Select"
                label="As"
                data={professions}
                value={profileDatas.occupation}
                name="occupation"
                onChange={(event) => handleFormChange('occupation', event)}
            />

            <br />

            <Select
                className='w-50 w-md-100-responsive'
                size="md"
                placeholder="Select"
                label="Company"
                data={companies}
                value={profileDatas.employer}
                name="employer"
                onChange={(event) => handleFormChange('employer', event)}
            />

            <br />
        </div>
    )
}

export default EducationCareer