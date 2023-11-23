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
import { createProfile, loadUserData } from "@/redux/features/user/userSlice";
import LoaderWithText from "../global/LoaderWithText";
import TitleStepper from "./TitleStepper";

const StepFour = ({
  formValues,
  setFormValues,
  handlePrevStep,
  handleNextStep,
}) => {
  const dispatch = useDispatch();
  // list of country
  const [contries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState();

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState();

  const [loading, setLoading] = useState(false);

  const handleCountryChange = (event) => {
    setFormValues({
      ...formValues,
      country: event,
      city: "",
      state: "",
    });
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (event) => {
    setFormValues({
      ...formValues,
      state: event,
      city: "",
    });
  };

  const handleCityChange = (event) => {
    setFormValues({
      ...formValues,
      city: event,
    });
  };

  const handleFormChange = (name, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setLoading(true);

    dispatch(
      createProfile({
        location: formValues,
      })
    )
      .unwrap()
      .then(() => {
        handleNextStep();
        setLoading(false);
      })
      .catch(() => {
        notifyError(message);
        setLoading(false);
      });
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
    if (formValues.country !== "Select Country" && formValues.country) {
      getStatesForCountry(formValues.country).then((result) => {
        const convertedList = result?.data.data?.states.map((item) => ({
          label: item?.name,
          value: item?.name,
        }));
        setStates(convertedList);
      });

      setStates([]);
      setCities([]);
    }
  }, [formValues.country]);

  useEffect(() => {
    if (
      formValues.state !== "Select State" &&
      formValues.country &&
      formValues.state
    ) {
      getCities(formValues.country, formValues.state).then((result) => {
        setCities(result.data.data);
      });
      setCities([]);
    }
  }, [formValues.state]);

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
          data={contries}
          name="livingIn"
          size="md"
          onChange={handleCountryChange}
          value={formValues.country}
        />
        <br />

        <Select
          searchable
          radius="xl"
          variant="filled"
          placeholder="Select state"
          label="State"
          data={states}
          name="states"
          size="md"
          value={formValues.state}
          onChange={handleStateChange}
        />

        <br />

        <Select
          searchable
          radius="xl"
          variant="filled"
          placeholder="Select city"
          label="City"
          data={cities}
          name="livingIn"
          size="md"
          onChange={handleCityChange}
          value={formValues.city}
        />

        <br />
        <TextInput
          radius="xl"
          variant="filled"
          label="Zip Code"
          placeholder="Zip Code"
          value={formValues.zipCode}
          name="zipCode"
          size="md"
          onChange={(event) =>
            handleFormChange("zipCode", event.currentTarget.value)
          }
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
          defaultValue={formValues.residencyStatus}
          onChange={(event) => handleFormChange("residencyStatus", event)}
          searchable
        />
        <br />
        <Button
          size="md"
          fullWidth
          radius="xl"
          color="rgba(244, 42, 65, 0.10)"
          style={btnBackground_prev}
          onClick={handleSubmit}
        >
          {loading ? (
            <>
              <LoaderWithText text="" color="white"></LoaderWithText>
            </>
          ) : (
            <> Continue</>
          )}
        </Button>
      </div>
    </div>
  );
};

export default StepFour;
