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
  colleges,
  heights,
  incomes,
  maritalStatuses,
  motherTongues,
  professions,
  qualifications,
  worksWithsOwn,
} from "@/staticData/InputFields/inputFields";

import { notifyError, notifySuccess } from "@/utils/showNotification";
import { loadUserData } from "@/redux/features/user/userSlice";
import LoaderWithText from "../global/LoaderWithText";

const EducationCareer = ({ closeModal5 }) => {
  const { userInfo } = useSelector((state) => state.user) || {};
  const [opened, { open, close }] = useDisclosure(false);
  const partnerPreferencesRef = useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    educationCareer: {
      education,
      college,
      income,
      occupation,
      employer,
      workingWith,
    } = {},
  } = userInfo || {};

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    employer: employer ? employer : "",
    education: education ? education : "",
    workingWith: workingWith ? workingWith : "",
    occupation: occupation ? occupation : "",
    income: income ? income : "",
    college: college ? college : "",
  });
  console.log("income 81", income);
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
    const {
      employer,
      income: income,
      occupation,
      workingWith,
      education,
      college,
    } = formValues;

    const data = {
      educationCareer: {
        education,
        college,
        income,
        occupation,
        employer,
        workingWith,
      },
    };
    setLoading(true);
    axios
      .patch("/user/update-profile", data)
      .then((res) => {
        notifySuccess("Profile updated successfully!");
        setLoading(false);
        dispatch(loadUserData());
        closeModal5();
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
  useEffect(() => {
    // Loop through income options and set a default value if it matches
    for (const income of incomes) {
      if (JSON.stringify(income.value) === JSON.stringify(formValues.income)) {
        setFormValues({ ...formValues, income: income.value });
        break; // Stop the loop when a match is found
      }
    }
  }, [formValues.income]);

  const collegeOptions = colleges.map((college) => ({
    value: college.name,
    label: college.name,
  }));

  return (
    <div className="myProfile container">
      <Select
        size="md"
        placeholder="Select Qualification"
        label="Qualification"
        // withAsterisk
        defaultValue="20"
        data={qualifications}
        name="education"
        searchable
        value={formValues.education}
        onChange={(event) => handleFormChange("education", event)}
      />
      <br />
      <Autocomplete
        size="md"
        placeholder="Enter college"
        label="College"
        data={collegeOptions}
        value={formValues.college}
        // withAsterisk
        name="college"
        limit={5}
        onChange={(event) => handleFormChange("college", event)}
        // error={formErrors.college}
        searchable
      />
      <br />
      <Select
        size="md"
        placeholder="Select"
        label="Job Sector"
        // withAsterisk
        defaultValue="20"
        data={worksWithsOwn}
        name="workingWith"
        value={formValues.workingWith}
        onChange={(event) => handleFormChange("workingWith", event)}
        searchable
      />

      <br />
      <Select
        size="md"
        placeholder="Select"
        label=" Job Title"
        // withAsterisk
        defaultValue="20"
        data={professions}
        name="occupation"
        searchable
        value={formValues.occupation}
        onChange={(event) => handleFormChange("occupation", event)}
      />
      <br />

      <Autocomplete
        size="md"
        placeholder="Select Company"
        label="Company"
        data={companies}
        value={formValues.employer}
        // withAsterisk
        name="employer"
        onChange={(event) => handleFormChange("employer", event)}
        // error={formErrors.company}
        searchable
      />
      <br />
      <Select
        size="md"
        placeholder="Select"
        label="Yearly Income"
        data={incomes}
        value={formValues.income}
        // withAsterisk
        name="income"
        onChange={(event) => handleFormChange("income", event)}
        // error={formErrors.income}
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

export default EducationCareer;
