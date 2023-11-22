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

const StepOne = ({ formData, handleChangeInput, handleNextStep }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [openModal, closeModal] = useState(true);
  const handleModalClose = () => closeModal(false);

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
          // value={formValues.maritalStatus}
          name="maritalStatus"
          radius="xl"
          size="md"
          variant="filled"
          // onChange={(event) => handleFormChange("maritalStatus", event)}
          // error={formErrors.maritalStatus}
        />

        <br />

        <Select
          placeholder="Select height"
          label="Height"
          data={heights}
          // value={formValues.height}
          name="height"
          radius="xl"
          size="md"
          variant="filled"
          // onChange={(event) => handleFormChange("height", event)}
          // error={formErrors.height}
        />

        <br />
        <NumberInput
          placeholder="Enter weight"
          label="Weight(kg)"
          // value={formValues.weight}
          name="Select weight"
          variant="filled"
          radius="lg"
          size="md"
          // onChange={(event) => handleFormChange("weight", event)}
          // error={formErrors.weight}
        />

        <br />

        <div>
          <label htmlFor="diet" className="label">
            Select Diet
          </label>
          <Chip.Group
            multiple={false}
            // value={formValues.diet}
            // onChange={(event) => handleFormChange("diet", event)}
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
          // value={formValues.bloodGroup}

          name="bloodGroup"
          radius="xl"
          variant="filled"
          size="md"
          // onChange={(event) => handleFormChange("bloodGroup", event)}
          // error={formErrors.bloodGroup}
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

export default StepOne;
