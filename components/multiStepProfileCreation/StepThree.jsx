import { useEffect, useState } from "react";
import TitleStepper from "./TitleStepper";
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
import { btnBackground_prev } from "@/styles/library/mantine";
import { useDispatch } from "react-redux";
import { createProfile } from "@/redux/features/user/userSlice";
import LoaderWithText from "../global/LoaderWithText";

const StepThree = ({
  formValues,
  setFormValues,
  handlePrevStep,
  handleNextStep,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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
        educationCareer: formValues,
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

  const collegeOptions = colleges.map((college) => ({
    value: college.name,
    label: college.name,
  }));

  return (
    <div>
      <TitleStepper
        title="Education & Career"
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
        step="C"
      />

      <Select
        radius="xl"
        size="md"
        variant="filled"
        placeholder="Select"
        label="Highest Qualification"
        data={qualifications}
        dataKey="value"
        groupKey="label"
        value={formValues.education}
        name="education"
        onChange={(event) => handleFormChange("education", event)}
        // error={formErrors.qualification}
        searchable
      />

      <br />

      {/* {qualification && (
          <> */}
      <Autocomplete
        radius="xl"
        size="md"
        variant="filled"
        placeholder="Select"
        label="University/College"
        data={collegeOptions}
        value={formValues.college}
        name="college"
        limit={5}
        onChange={(event) => handleFormChange("college", event)}
        // error={formErrors.college}
        searchable
      />
      <br />
      {/* </>
        )} */}

      <Select
        radius="xl"
        size="md"
        variant="filled"
        placeholder="Select"
        label="Yearly Income"
        data={incomes}
        value={formValues.income}
        name="income"
        onChange={(event) => handleFormChange("income", event)}
        // error={formErrors.income}
      />

      <br />

      <Select
        radius="xl"
        size="md"
        variant="filled"
        placeholder="Select"
        label="Job Sector"
        // styles={{ label: labelStyles }}
        data={worksWithsOwn}
        value={formValues.workingWith}
        name="workingWith"
        onChange={(event) => handleFormChange("workingWith", event)}
        // error={formErrors.worksWith}
      />

      <br />

      <Select
        radius="xl"
        size="md"
        variant="filled"
        placeholder="Select"
        label="Job Title"
        data={professions}
        value={formValues.occupation}
        name="occupation"
        onChange={(event) => handleFormChange("occupation", event)}
        // error={formErrors.profession}
        searchable
      />

      <br />

      {/* {profession && (
          <> */}
      <Autocomplete
        radius="xl"
        size="md"
        variant="filled"
        placeholder="Select"
        label="Company"
        data={companies}
        value={formValues.employer}
        name="employer"
        onChange={(event) => handleFormChange("employer", event)}
        // error={formErrors.company}
        searchable
      />

      <br />
      {/* </>
        )} */}

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
  );
};

export default StepThree;
