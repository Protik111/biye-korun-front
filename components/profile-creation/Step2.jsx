"use client";

import useAxios from "@/hooks/axios/useAxios";
import {
  colleges,
  companies,
  incomes,
  professions,
  qualifications,
  worksWithsOwn,
} from "@/staticData/InputFields/inputFields";
import {
  Button,
  Select,
  MultiSelect,
  TextInput,
  Autocomplete,
  ComboboxItem,
  OptionsFilter,
} from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const Step2 = ({
  onNextStep,
  formValues,
  setFormValues,
  formErrors,
  setFormErrors,
}) => {
  const { qualification, worksWith, profession, income, college, company } =
    formValues;
  const [filterValue, setFilterValue] = useState("");
  const validateForm = () => {
    const errors = {};

    if (!qualification) {
      errors.qualification = "Qualification is required";
    }

    if (!college) {
      errors.college = "College is required";
    }

    if (!company) {
      errors.company = "Company is required";
    }

    if (!worksWith) {
      errors.worksWith = "Works with is required";
    }

    if (!profession) {
      errors.profession = "Profession is required";
    }

    if (!income) {
      errors.income = "Income Status is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleNextStep = () => {
    if (validateForm()) {
      // Call the parent component's callback with the formValues
      onNextStep(formValues);
    }
  };

  const handleFormChange = (name, value) => {
    console.log("name", name, value);
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const collegeOptions = colleges.map((college) => ({
    value: college.name,
    label: college.name,
  }));

  return (
    <div className="step1">
      <h2 className="text-center">Education And Qualifications</h2>
      {console.log("qualifications", qualifications)}
      <Select
        size="md"
        placeholder="Select"
        label="Education Qualification"
        data={qualifications}
        dataKey="value"
        groupKey="label"
        // value={formValues.qualification}
        withAsterisk
        name="qualification"
        onChange={(event) => handleFormChange("qualification", event)}
        error={formErrors.qualification}
        searchable
      />

      <br />

      {qualification && (
        <>
          {/* <Select
            size="md"
            placeholder="Enter college"
            label="College"
            data={options}
            value={formValues.college}
            withAsterisk
            name="college"
            onChange={(event) => handleFormChange("college", event)}
            error={formErrors.college}
            searchable
          /> */}
          <Autocomplete
            size="md"
            placeholder="Enter college"
            label="College"
            data={collegeOptions}
            value={formValues.college}
            withAsterisk
            name="college"
            limit={5}
            onChange={(event) => handleFormChange("college", event)}
            error={formErrors.college}
            searchable
          />
          <br />
        </>
      )}

      <Select
        size="md"
        placeholder="Select"
        label="Job Sector"
        // styles={{ label: labelStyles }}
        data={worksWithsOwn}
        value={formValues.worksWith}
        withAsterisk
        name="worksWith"
        onChange={(event) => handleFormChange("worksWith", event)}
        error={formErrors.worksWith}
      />

      <br />

      <Select
        size="md"
        placeholder="Select"
        label="Job Title"
        data={professions}
        value={formValues.profession}
        withAsterisk
        name="profession"
        onChange={(event) => handleFormChange("profession", event)}
        error={formErrors.profession}
        searchable
      />

      <br />

      {profession && (
        <>
          {/* <Select
            size="md"
            placeholder="Select"
            label="Company"
            data={companies}
            value={formValues.company}
            withAsterisk
            name="company"
            onChange={(event) => handleFormChange("company", event)}
            error={formErrors.company}
            searchable
          /> */}

          <Autocomplete
            size="md"
            placeholder="Select"
            label="Company"
            data={companies}
            value={formValues.company}
            withAsterisk
            name="company"
            onChange={(event) => handleFormChange("company", event)}
            error={formErrors.company}
            searchable
          />

          <br />
        </>
      )}

      <Select
        size="md"
        placeholder="Select"
        label="Yearly Income"
        data={incomes}
        value={formValues.income}
        withAsterisk
        name="income"
        onChange={(event) => handleFormChange("income", event)}
        error={formErrors.income}
      />

      <br />

      <Button
        fullWidth
        // sx={{ width: '180px' }}
        size="md"
        type="submit"
        rightIcon={<IconArrowNarrowRight />}
        onClick={handleNextStep}
      >
        Continue
      </Button>
    </div>
  );
};

export default Step2;
