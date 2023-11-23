import useCountry from "@/hooks/common/useCountry";
import useFormContext from "@/hooks/common/useFormContext";
import { countries, profileFor } from "@/staticData/InputFields/inputFields";
import { btnBackground } from "@/styles/library/mantine";
import { generate18YearBefore } from "@/utils/generate18YearBefore";
import {
  Button,
  Group,
  Input,
  PasswordInput,
  Radio,
  Select,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useEffect, useState } from "react";
import ModalTitle from "../global/ModalTitle";

const Basic2 = () => {
  const { data, handleChange, fieldErrors } = useFormContext();
  const [countryList, setCountryList] = useState([]);
  const { data: data2, error: error2, loading: loading2 } = useCountry();

  useEffect(() => {
    if (!loading2?.country) {
      const convertedList = data2?.country?.map((item) => ({
        label: item?.name,
        value: item?.name,
        code: item?.iso2,
      }));

      setCountryList(convertedList);
    }
  }, [data2]);

  const content = (
    <div className="mutlistep__registration basic1 px-10 py-10">
      <ModalTitle />

      <TextInput
        label="Email"
        placeholder="Enter email"
        size="md"
        withAsterisk
        variant="filled"
        radius="xl"
        name="basic2email"
        value={data.basic2email}
        onChange={(event) => handleChange("basic2email", event.target.value)}
        error={fieldErrors.basic2email}
      />
      <br />

      <PasswordInput
        label="Password"
        placeholder="Enter password"
        size="md"
        radius="xl"
        withAsterisk
        variant="filled"
        name="basic2password"
        value={data.basic2password}
        onChange={(event) => handleChange("basic2password", event.target.value)}
        error={fieldErrors.basic2password}
      />
      <br />

      <Select
        size="md"
        placeholder="Select"
        label="Country"
        // styles={{ label: labelStyles }}
        // data={countries}
        radius="xl"
        data={countryList}
        value={data.basic2country}
        variant="filled"
        withAsterisk
        name="basic2country"
        onChange={(event) => handleChange("basic2country", event)}
        error={fieldErrors.basic2country}
        searchable
      />

      <br />

      <DatePickerInput
        clearable
        // defaultValue={today}
        // description="Years must be at least 18"
        label="Date of Birth"
        placeholder="Pick a date"
        variant="filled"
        mx="auto"
        size="md"
        maw={400}
        withAsterisk
        radius="xl"
        value={data.basic2dob}
        onChange={(event) => handleChange("basic2dob", event)}
        error={fieldErrors.basic2dob}
        //disableBeforeDate={minDate} // Use the disableDate function
        maxDate={generate18YearBefore()}
      />

      <br />
    </div>
  );

  return content;
};
export default Basic2;
