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
  heights,
  maritalStatuses,
} from "@/staticData/InputFields/inputFields";
import { DatePickerInput } from "@mantine/dates";
import { getCountries } from "@/hooks/common/countryApi";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import { generate18YearBefore } from "@/utils/generate18YearBefore";
import { loadUserData } from "@/redux/features/user/userSlice";
import LoaderWithText from "../global/LoaderWithText";

const BasicLifeStyle = ({ closeModal2 }) => {
  const { userInfo } = useSelector((state) => state.user) || {};
  const partnerPreferencesRef = useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    appearance: { height } = {},
    lifestyle: { diet, maritalStatus } = {},
    dateOfBirth,
    country,
    bloodGroup,
  } = userInfo || {};

  // list of country
  const [contries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(country);

  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    diet: diet ? diet : "",
    bloodGroup: bloodGroup ? bloodGroup : "",
    maritalStatus: maritalStatus ? maritalStatus : "",
    height: height ? height : "",
    dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : "",
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

  const handleFormChange = (name, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { bloodGroup, maritalStatus, diet, dateOfBirth, height } = formValues;

    const data = {
      lifestyle: { diet, maritalStatus },
      appearance: { height },
      dateOfBirth,
      bloodGroup,
      country: selectedCountry,
    };
    setLoading(true);
    axios
      .patch("/user/update-user-profile", data)
      .then((res) => {
        notifySuccess("Profile updated successfully!");
        setLoading(false);
        dispatch(loadUserData());
        setTimeout(() => {
          closeModal2();
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

  return (
    <div className="myProfile container">
      <div className="mt-25">
        <div>
          <label htmlFor="diet" className="label">
            Select Diets
          </label>
          <Chip.Group
            multiple={false}
            value={formValues.diet}
            onChange={(event) => handleFormChange("diet", event)}
            name="diet"
          >
            <div className="flex flex-gap-10 flex-wrap mt-5">
              <Chip variant="filled" color="pink" value="Veg">
                Vegetarian
              </Chip>
              <Chip variant="filled" color="pink" value="Non-Veg">
                Non Vegetarian
              </Chip>
            </div>
            {/* {formErrors.diet && (
                <p className="error-message">{formErrors.diet}</p>
              )} */}
          </Chip.Group>
        </div>
        <br />
        <Select
          size="md"
          placeholder="Select"
          label="Blood Group"
          data={bloodGroups}
          value={formValues.bloodGroup}
          // withAsterisk
          name="bloodGroup"
          onChange={(event) => handleFormChange("bloodGroup", event)}
          // error={formErrors.bloodGroup}
        />
        <br />
        <Select
          size="md"
          placeholder="Select"
          label="Marital Status"
          // styles={{ label: labelStyles }}
          data={maritalStatuses}
          value={formValues.maritalStatus}
          // withAsterisk
          name="maritalStatus"
          onChange={(event) => handleFormChange("maritalStatus", event)}
          // error={formErrors.maritalStatus}
        />
        <br />
        <Select
          size="md"
          placeholder="Select"
          label="Height"
          data={heights}
          value={formValues.height}
          // withAsterisk
          name="height"
          onChange={(event) => handleFormChange("height", event)}
          // error={formErrors.height}
        />

        <br />

        <Select
          searchable
          size="md"
          placeholder="Select country"
          label="Born and Raised"
          data={contries}
          onChange={handleCountryChange}
          value={selectedCountry}
          // name="country"
          // onChange={(event) => handleFormChange("country", event)}
        />
        <br />
        <DatePickerInput
          clearable
          label="Date of Birth"
          placeholder="Pick a date"
          mx="auto"
          size="sm"
          // maw={400}
          // withAsterisk
          value={formValues.dateOfBirth}
          onChange={(event) => handleFormChange("dateOfBirth", event)}
          maxDate={generate18YearBefore()}
        />

        <div className="flex justify-end mt-10">
          <Button
            variant="filled"
            color="violet"
            size="sm"
            onClick={handleSubmit}
          >
            {loading ? (
              <LoaderWithText text="Saving.."></LoaderWithText>
            ) : (
              "Save"
            )}
          </Button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default BasicLifeStyle;
