"use client";

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
import { btnBackground, labelStyles } from "@/styles/library/mantine";
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

const LocationsModal = ({ closeModal6 }) => {
  const { userInfo } = useSelector((state) => state.user) || {};
  const dispatch = useDispatch();
  const partnerPreferencesRef = useRef(null);
  const router = useRouter();
  const { location: { country, city, state, zipCode, residencyStatus } = {} } =
    userInfo || {};

  // list of country
  const [contries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(country);

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(state);

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(city);

  const [loading, setLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    zipCode: zipCode ? zipCode : "",
    residencyStatus: residencyStatus ? residencyStatus : "",
  });

  const scrollToPartnerPreferences = () => {
    if (partnerPreferencesRef.current) {
      partnerPreferencesRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const handleCountryChange = (event) => {
    setSelectedCountry(event);
  };

  const handleStateChange = (event) => {
    setSelectedState(event);
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

  const handleSubmit = () => {
    const { zipCode, residencyStatus } = formValues;

    const data = {
      location: {
        country: selectedCountry,
        city: selectedCity,
        state: selectedState,
        zipCode,
        residencyStatus,
      },
    };
    setLoading(true);
    axios
      .patch("/user/update-user-profile", data)
      .then((res) => {
        notifySuccess("Profile updated successfully!");
        setLoading(false);
        dispatch(loadUserData());
        setTimeout(() => {
          closeModal6();
        }, 4000);
      })
      .catch((err) => {
        setLoading(false);
        notifyError(err.response.data.message);
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
    if (selectedCountry !== "Select Country" && selectedCountry) {
      getStatesForCountry(selectedCountry).then((result) => {
        const convertedList = result?.data.data?.states.map((item) => ({
          label: item?.name,
          value: item?.name,
        }));

        setStates(convertedList);
      });
      //   setSelectedState("");
      //   setSelectedCity("");
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
      //   setSelectedCity("");
    }
  }, [selectedState]);
  return (
    <div className="myProfile container">
      <br />
      <Select
        searchable
        size="md"
        placeholder="Select country"
        label="Country"
        // data={countries}
        data={contries}
        name="livingIn"
        onChange={handleCountryChange}
        value={selectedCountry}
        // defaultValue={formData.livingIn}
        // onChange={(event) => handleFormChange("livingIn", event)}
      />
      <br />
      <Select
        searchable
        size="md"
        placeholder="Select country"
        label="State"
        // data={countries}
        data={states}
        name="livingIn"
        onChange={handleStateChange}
        value={selectedState}
      />
      <br />
      <Select
        searchable
        size="md"
        placeholder="Select country"
        label="City"
        // data={countries}
        data={cities}
        name="livingIn"
        onChange={handleCityChange}
        value={selectedCity}
        // defaultValue={formData.livingIn}
        // onChange={(event) => handleFormChange("livingIn", event)}
      />
      <br />
      <TextInput
        label="Zip Code"
        placeholder="Zip Code"
        value={formValues.zipCode}
        name="zipCode"
        onChange={(event) =>
          handleFormChange("zipCode", event.currentTarget.value)
        }
      />
      <br />
      <Select
        size="md"
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
        defaultValue={formValues.residencyStatus}
        onChange={(event) => handleFormChange("residencyStatus", event)}
        searchable
      />
      <br />
      <div className="flex justify-end mt-10">
        <Button
          variant="filled"
          color="violet"
          size="sm"
          onClick={handleSubmit}
        >
          {loading ? <LoaderWithText text="Saving.."></LoaderWithText> : "Save"}
        </Button>
      </div>
    </div>
  );
};

export default LocationsModal;
