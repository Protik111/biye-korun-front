import useFormContext from "@/hooks/common/useFormContext"
import { countries, profileFor } from "@/staticData/InputFields/inputFields"
import { btnBackground } from "@/styles/library/mantine"
import { Button, Group, Input, Radio, Select, TextInput } from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"

const Basic2 = () => {

    const { data, handleChange, fieldErrors } = useFormContext()

    const content = (
        <div className="mutlistep__registration px-15">
            {/* <Select
                size="md"
                placeholder="Select"
                label="Profile for"
                // styles={{ label: labelStyles }}
                data={profileFor}
                value={data.basic1postedBy}
                withAsterisk
                name="basic1postedBy"
                onChange={(event) => handleChange('basic1postedBy', event)}
            // error={formErrors.postedBy}
            /> */}

            <br />

            <TextInput
                label="Your Email"
                placeholder="Enter your email"
                size="md"
                withAsterisk
                name="basic2email"
                value={data.basic2email}
                onChange={(event) => handleChange('basic2email', event.target.value)}
                error={fieldErrors.basic2email}

            />
            <br />

            <DatePickerInput
                clearable
                defaultValue={new Date()}
                label="Your date of birth"
                placeholder="Pick date"
                mx="auto"
                size="md"
                maw={400}
                withAsterisk
                value={data.basic2dob}
                onChange={(event) => handleChange('basic2dob', event)}
                error={fieldErrors.basic2dob}

            />

            <br />

            <Select
                size="md"
                placeholder="Select"
                label="Your Country"
                // styles={{ label: labelStyles }}
                data={countries}
                value={data.basic2country}
                withAsterisk
                name="basic2country"
                onChange={(event) => handleChange('basic2country', event)}
                error={fieldErrors.basic2country}
            />

            <br />

        </div>
    )

    return content
}
export default Basic2