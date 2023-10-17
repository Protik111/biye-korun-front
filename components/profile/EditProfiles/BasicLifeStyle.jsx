import { cities, countries, heights, maritalStatuses } from '@/staticData/InputFields/inputFields'
import { generate18YearBefore } from '@/utils/generate18YearBefore'
import { Chip, Select } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'

const BasicLifeStyle = ({ profileDatas, setProfileDatas }) => {

    const handleFormChange = (name, value) => {
        setProfileDatas((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    }
    return (
        <div className='px-15' >
            <Select
                className='w-50 w-md-100-responsive'
                size="md"
                placeholder="Select"
                label="Marital Status"
                // styles={{ label: labelStyles }}
                data={maritalStatuses}
                value={profileDatas.maritalStatus}
                name="maritalStatus"
                onChange={(event) => handleFormChange('maritalStatus', event)}
            // error={formErrors.maritalStatus}
            />

            <br />

            <DatePickerInput
                className='w-50 w-md-100-responsive'
                clearable
                // defaultValue={today}
                // description="Years must be at least 18"
                label="Your date of birth"
                placeholder="Pick date"
                size="md"
                // maw={400}
                value={profileDatas.dateOfBirth}
                onChange={(event) => handleFormChange('dateOfBirth', event)}
                // error={fieldErrors.basic2dob}
                //disableBeforeDate={minDate} // Use the disableDate function
                maxDate={generate18YearBefore()}

            />

            <br />

            <Select
                className='w-50 w-md-100-responsive'
                size="md"
                placeholder="Select"
                label="Your Country"
                // styles={{ label: labelStyles }}
                data={countries}
                value={profileDatas.country}
                name="country"
                onChange={(event) => handleFormChange('country', event)}
            // error={fieldErrors.basic2country}
            />

            <br />

            <Select
                className='w-50 w-md-100-responsive'
                size="md"
                placeholder="Select"
                label="Your City"
                // styles={{ label: labelStyles }}
                data={cities}
                value={profileDatas.city}
                name="city"
                onChange={(event) => handleFormChange('city', event)}
            // error={fieldErrors.basic2country}
            />

            <br />

            <div>
                <label htmlFor="diet" className="label">Your diet?</label>
                <Chip.Group
                    multiple={false}
                    value={profileDatas.diet}
                    onChange={(event) => handleFormChange('diet', event)}
                    name="diet"
                >
                    <div className="flex flex-gap-10 flex-wrap mt-5">
                        <Chip variant="filled" color="pink" value="Veg">Veg</Chip>
                        <Chip variant="filled" color="pink" value="Non-Veg">Non-Veg</Chip>
                        <Chip variant="filled" color="pink" value="Eggetarian">Eggetarian</Chip>
                        <Chip variant="filled" color="pink" value="Jain">Jain</Chip>
                        <Chip variant="filled" color="pink" value="Vegan">Vegan</Chip>
                    </div>
                    {/* {formErrors.diet && (
                        <p className="error-message">{formErrors.diet}</p>
                    )} */}
                </Chip.Group>
            </div>

            <br />

            <Select
                className='w-50 w-md-100-responsive'
                size="md"
                placeholder="Select"
                label="Height"
                data={heights}
                value={profileDatas.height}
                name="height"
                onChange={(event) => handleFormChange('height', event)}
            // error={formErrors.height}
            />
        </div>
    )
}

export default BasicLifeStyle