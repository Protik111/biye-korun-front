import {
  Alert,
  Anchor,
  Button,
  Divider,
  Input,
  Tooltip,
  Textarea,
  Select,
  Chip,
  MultiSelect,
  TextInput,
  Autocomplete,
} from "@mantine/core";
import { List, ThemeIcon } from "@mantine/core";
import {
  IconCircleCheck,
  IconCircleDashed,
  IconPlayerRecordFilled,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import ThemeIconComp from "../global/ThemeIconComp";
import axios from "axios";
import {
  btnBackground,
  btnBackground_prev,
  labelStyles,
} from "@/styles/library/mantine";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { heightCalculator } from "@/utils/heightCalculator";
import { calculateAge } from "@/utils/calculateAge";
import { notSpecfied } from "@/staticData/image";
import { format } from "date-fns";
import Link from "next/link";
import ReuseModal from "../global/ReuseModal";
import {
  bloodGroups,
  companies,
  heights,
  incomes,
  maritalStatuses,
  motherTongues,
  professions,
  qualifications,
  worksWithsOwn,
} from "@/staticData/InputFields/inputFields";
import { DatePickerInput } from "@mantine/dates";
import {
  getCities,
  getCountries,
  getStatesForCountry,
} from "@/hooks/common/countryApi";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import { loadUserData } from "@/redux/features/user/userSlice";
import LoaderWithText from "../global/LoaderWithText";
import TitleStepper from "./TitleStepper";

const StepFour = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  // list of country
  const [contries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState();

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState();

  const [loading, setLoading] = useState(false);

  const handleCountryChange = (event) => {
    setSelectedCountry(event);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (event) => {
    setSelectedState(event);
    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event);
  };

  const handleFormChange = (name, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    getCountries().then((result) => {
      const convertedList = result?.data.data?.map((item) => ({
        label: item?.name,
        value: item?.name,
      }));
      setCountries(convertedList);
    });
  }, []);

  useEffect(() => {
    if (selectedCountry !== "Select Country" && selectedCountry) {
      getStatesForCountry(selectedCountry).then((result) => {
        const convertedList = result?.data.data?.states.map((item) => ({
          label: item?.name,
          value: item?.name,
        }));

        setStates(convertedList);
      });
      // setSelectedState("");
      // setSelectedCity("");
      setStates([]);
      setCities([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState !== "Select State" && selectedCountry && selectedState) {
      getCities(selectedCountry, selectedState).then((result) => {
        console.log("result.data.data", result.data.data);
        setCities(result.data.data);
      });
      setCities([]);
      // setSelectedCity("");
    }
  }, [selectedState]);

  return (
    <div>
      <div className="myProfile ">
        <TitleStepper
          title="Locations"
          step="D"
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
        />

        <Select
          searchable
          radius="xl"
          variant="filled"
          placeholder="Select country"
          label="Country"
          // data={countries}
          data={contries}
          name="livingIn"
          size="md"
          // onChange={handleCountryChange}
          // value={selectedCountry}
        />
        <br />

        <Select
          searchable
          radius="xl"
          variant="filled"
          placeholder="Select country"
          label="State"
          // data={countries}
          data={states}
          name="livingIn"
          size="md"
          // onChange={handleStateChange}
          // value={selectedState}
        />

        <br />

        <Select
          searchable
          radius="xl"
          variant="filled"
          placeholder="Select country"
          label="City"
          // data={countries}
          data={cities}
          name="livingIn"
          size="md"
          // onChange={handleCityChange}
          // value={selectedCity}
        />

        <br />
        <TextInput
          radius="xl"
          variant="filled"
          label="Zip Code"
          placeholder="Zip Code"
          // value={formValues.zipCode}
          name="zipCode"
          size="md"
          // onChange={(event) =>
          //   handleFormChange("zipCode", event.currentTarget.value)
          // }
        />
        <br />
        <Select
          radius="xl"
          variant="filled"
          placeholder="Select"
          label="Residency Status"
          withAsterisk
          data={[
            "Citizen",
            "Permanent Resident",
            "Student Visa",
            "Temporary Visa",
            "Work Permit",
          ]}
          name="residencyStatus"
          size="md"
          // defaultValue={formValues.residencyStatus}
          // onChange={(event) => handleFormChange("residencyStatus", event)}
          searchable
        />
        <br />
        <Button
          size="md"
          fullWidth
          radius="xl"
          color="rgba(244, 42, 65, 0.10)"
          style={btnBackground_prev}
          onClick={handleNextStep}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default StepFour;
