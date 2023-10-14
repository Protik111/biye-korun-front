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
import { useSelector } from "react-redux";
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
import useCountry from "@/hooks/common/useCountry";
import { cityData } from "@/staticData/InputFields/city";
import {
  getCities,
  getCountries,
  getStatesForCountry,
} from "@/hooks/common/countryApi";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import { generate18YearBefore } from "@/utils/generate18YearBefore";
import BasicLifeStyle from "../my-profile/BasicLifeStyle";
import Religion from "../my-profile/Religion";

const imageUrl =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80";

const FamilyDetails = () => {
  const { userInfo } = useSelector((state) => state.user) || {};
  const partnerPreferencesRef = useRef(null);
  const router = useRouter();
  const {
    family: {
      familyCountry,
      familyCity,
      familyState,
      motherProfession,
      fatherProfession,
      type,
    } = {},
  } = userInfo || {};

  // list of country
  const [contries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(familyCountry);

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(familyState);

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(familyCity);

  const [loading, setLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    fatherProfession: fatherProfession ? fatherProfession : "",
    motherProfession: motherProfession ? motherProfession : "",
    type: type ? type : "",
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
    const { motherProfession, fatherProfession, type } = formValues;

    const data = {
      family: {
        familyCountry: selectedCountry,
        familyCity: selectedCity,
        familyState: selectedState,
        motherProfession,
        fatherProfession,
        type,
      },
    };
    setLoading(true);
    axios
      .patch("/user/update-user-profile", data)
      .then((res) => {
        notifySuccess("Profile updated successfully!");
        setLoading(false);
        close();
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
      console.log("169");
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
      <div className="mt-25 mb-25">
        <TextInput
          label="Father's Profession"
          placeholder="Father's Profession"
          name="fatherProfession"
          value={formValues.fatherProfession}
          onChange={(event) =>
            handleFormChange("fatherProfession", event.currentTarget.value)
          }
        />
        <br />
        <TextInput
          label="Mother's Profession"
          placeholder="Mother's Profession"
          name="motherProfession"
          value={formValues.motherProfession}
          onChange={(event) =>
            handleFormChange("motherProfession", event.currentTarget.value)
          }
        />{" "}
        <br />
        <TextInput
          label="Family Type"
          placeholder="Family Type"
          name="type"
          value={formValues.type}
          onChange={(event) =>
            handleFormChange("type", event.currentTarget.value)
          }
        />
        <br />
        <Select
          searchable
          size="md"
          placeholder="Select country"
          label="Country"
          data={contries}
          name="livingIn"
          onChange={handleCountryChange}
          value={selectedCountry}
        />
        <br />
        <Select
          searchable
          size="md"
          placeholder="Select country"
          label="State"
          data={states}
          onChange={handleStateChange}
          value={selectedState}
        />
        <br />
        <Select
          searchable
          size="md"
          placeholder="Select country"
          label="City"
          data={cities}
          onChange={handleCityChange}
          value={selectedCity}
        />
        <br />
        <div className="flex justify-end mt-10">
          <Button
            variant="filled"
            color="violet"
            size="sm"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FamilyDetails;
