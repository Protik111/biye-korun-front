import useCountry from "@/hooks/common/useCountry"
import useFormContext from "@/hooks/common/useFormContext"
import { countries, profileFor } from "@/staticData/InputFields/inputFields"
import { btnBackground } from "@/styles/library/mantine"
import { generate18YearBefore } from "@/utils/generate18YearBefore"
import { Button, Group, Input, PasswordInput, Radio, Select, TextInput } from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"
import { useEffect, useState } from "react"

const Basic2 = () => {
    const { data, handleChange, fieldErrors } = useFormContext()
    const [countryList, setCountryList] = useState([]);
    const { data: data2, error: error2, loading: loading2 } = useCountry();

    useEffect(() => {
        if (!loading2?.country) {
            const convertedList = data2?.country?.map((item) => ({
                label: item?.name,
                value: item?.name,
                code: item?.iso2
            }));

            setCountryList(convertedList);
        }
    }, [data2]);

    const content = (
        <div className="mutlistep__registration px-10 py-10">

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


            <PasswordInput
                label="Your Password"
                placeholder="Enter your password"
                size="md"
                withAsterisk
                name="basic2password"
                value={data.basic2password}
                onChange={(event) => handleChange('basic2password', event.target.value)}
                error={fieldErrors.basic2password}

            />
            <br />

            <Select
                size="md"
                placeholder="Select"
                label="Your Country"
                // styles={{ label: labelStyles }}
                // data={countries}
                data={countryList}
                value={data.basic2country}
                withAsterisk
                name="basic2country"
                onChange={(event) => handleChange('basic2country', event)}
                error={fieldErrors.basic2country}
            />

            <br />

            <DatePickerInput
                clearable
                // defaultValue={today}
                // description="Years must be at least 18"
                label="Your date of birth"
                placeholder="Pick date"
                mx="auto"
                size="md"
                maw={400}
                withAsterisk
                value={data.basic2dob}
                onChange={(event) => handleChange('basic2dob', event)}
                error={fieldErrors.basic2dob}
                //disableBeforeDate={minDate} // Use the disableDate function
                maxDate={generate18YearBefore()}

            />

            <br />

        </div>
    )

    return content
}
export default Basic2