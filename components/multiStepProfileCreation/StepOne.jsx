import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

import TitleStepper from "./TitleStepper";
import {
  bloodGroups,
  cities,
  heights,
  maritalStatuses,
  motherTongues,
  motherTongues2,
  recidencies,
  subCommunities,
} from "@/staticData/InputFields/inputFields";
import {
  Button,
  Select,
  TextInput,
  NumberInput,
  Chip,
  Autocomplete,
  Modal,
} from "@mantine/core";
import { btnBackground_prev } from "@/styles/library/mantine";
import { useDispatch } from "react-redux";
import { createProfile } from "@/redux/features/user/userSlice";
import { notifyError } from "@/utils/showNotification";
import LoaderWithText from "../global/LoaderWithText";

const StepOne = ({
  formValues,
  setFormValues,
  handleChangeInput,
  handleNextStep,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch();
  const [openModal, closeModal] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleModalClose = () => closeModal(false);

  const handleFormChange = (name, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  console.log("formValues", formValues);
  const handleSubmit = () => {
    const { maritalStatus, diet, height, weight, bloodGroup } = formValues;

    console.log("maritalStatus", maritalStatus);

    setLoading(true);

    dispatch(
      createProfile({
        basicInfo: { maritalStatus, diet, height, weight, bloodGroup },
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

  return (
    <div>
      <TitleStepper
        title="Basic & Lifestyle"
        showArrow={false}
        step="A"
        handleNextStep={handleNextStep}
      />
      <div className="flex- flex-column ">
        <Select
          placeholder="Select"
          label="Marital Status"
          // styles={{ label: labelStyles }}
          data={maritalStatuses}
          value={formValues.maritalStatus}
          name="maritalStatus"
          radius="xl"
          size="md"
          variant="filled"
          onChange={(event) => handleFormChange("maritalStatus", event)}
          // error={formErrors.maritalStatus}
        />

        <br />

        <Select
          placeholder="Select height"
          label="Height"
          data={heights}
          value={formValues.height}
          name="height"
          radius="xl"
          size="md"
          variant="filled"
          onChange={(event) => handleFormChange("height", event)}
          // error={formErrors.height}
        />

        <br />
        <NumberInput
          placeholder="Enter weight"
          label="Weight(kg)"
          value={formValues.weight}
          name="Select weight"
          variant="filled"
          radius="lg"
          size="md"
          onChange={(event) => handleFormChange("weight", event)}
          // error={formErrors.weight}
        />

        <br />

        <div>
          <label htmlFor="diet" className="label">
            Select Diet
          </label>
          <Chip.Group
            multiple={false}
            value={formValues.diet}
            onChange={(event) => handleFormChange("diet", event)}
            name="diet"
          >
            <div className="flex flex-gap-25  flex-wrap mt-5">
              <Chip variant="filled" color="pink" value="Vegetarian" size="md">
                Vegetarian
              </Chip>
              <Chip variant="filled" color="pink" value="Non-Veg" size="md">
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
          placeholder="Select"
          label="Blood Group"
          data={bloodGroups}
          value={formValues.bloodGroup}
          name="bloodGroup"
          radius="xl"
          variant="filled"
          size="md"
          onChange={(event) => handleFormChange("bloodGroup", event)}
          // error={formErrors.bloodGroup}
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

export default StepOne;
