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
import useCountry from "@/hooks/common/useCountry";
import {
  getCities,
  getCountries,
  getStatesForCountry,
} from "@/hooks/common/countryApi";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import { generate18YearBefore } from "@/utils/generate18YearBefore";
import LoaderWithText from "../global/LoaderWithText";
import { loadUserData } from "@/redux/features/user/userSlice";

const Religion = ({ closeModal3 }) => {
  const { userInfo } = useSelector((state) => state.user) || {};
  const [opened, { open, close }] = useDisclosure(false);
  const partnerPreferencesRef = useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const { community: { nativeLanguage, religion, language } = {} } =
    userInfo || {};

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    religion: religion ? religion : "",
    motherTongue: nativeLanguage ? nativeLanguage : "",
    community: language ? language : "",
  });

  const scrollToPartnerPreferences = () => {
    if (partnerPreferencesRef.current) {
      partnerPreferencesRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleFormChange = (name, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { religion, motherTongue, community } = formValues;

    const data = {
      community: { religion, motherTongue, language: community },
    };
    setLoading(true);
    axios
      .patch("/user/update-profile", data)
      .then((res) => {
        setLoading(false);
        notifySuccess("Profile updated successfully!");
        dispatch(loadUserData());
        closeModal3();
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.data.errors && !error.response.data.errors.message) {
          const fieldErrors = error.response.data.errors;
          setErrors(fieldErrors);
        } else {
          notifyError(error.response.data.errors.message);
        }
      });
  };

  return (
    <div className="myProfile container">
      <div className="mt-15 mb-25">
        <br />

        <Select
          size="md"
          placeholder="Select"
          label="Religion"
          // withAsterisk
          data={[
            "Islam",
            "Hinduism",
            "Christianity",
            "Buddhism",
            "Judaism",
            "Others",
          ]}
          name="religion"
          defaultValue={formValues.religion}
          onChange={(event) => handleFormChange("religion", event)}
          error={errors.religion}
        />
        <br />
        <Select
          size="md"
          placeholder="Select"
          label="Native Language"
          // withAsterisk
          defaultValue="20"
          data={motherTongues}
          name="motherTongue"
          value={formValues.motherTongue}
          onChange={(event) => handleFormChange("motherTongue", event)}
          searchable
        />
        <br />
        <MultiSelect
          size="md"
          placeholder="Select"
          label="Language"
          // withAsterisk
          defaultValue="20"
          data={motherTongues}
          name="community"
          value={formValues.community}
          onChange={(event) => handleFormChange("community", event)}
          searchable
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
      </div>
    </div>
  );
};

export default Religion;
