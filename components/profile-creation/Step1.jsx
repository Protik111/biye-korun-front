"use client";

import useCountry from "@/hooks/common/useCountry";
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
import { Button, Select, TextInput, Chip, Autocomplete } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Step1 = ({
  onNextStep,
  formValues,
  setFormValues,
  formErrors,
  setFormErrors,
}) => {
  const { userInfo, message } = useSelector((state) => state.user);
  const [countryCode, setCountryCode] = useState("");
  const [stateList, setStateList] = useState([]);

  const {
    data: data2,
    error: error2,
    loading: loading2,
  } = useCountry(countryCode);

  const {
    city,
    livesWithFamily,
    residency,
    maritalStatus,
    hasChildren,
    diet,
    height,
    weight,
    subCommunity,
    motherTongue,
    bloodGroup,
  } = formValues;

  const { basicInfo: { country } = {} } = userInfo;
  const { state } = data2;

  useEffect(() => {
    const countryWithCode = data2?.country?.find(
      (item) => item?.name == country
    );
    if (countryWithCode) {
      setCountryCode(countryWithCode.iso2);
    }
  }, [data2.country, country]);

  useEffect(() => {
    if (data2 && data2.state && !loading2.state) {
      // console.log("state", state);
      const modifiedState = state?.map((state) => state?.name);
      // console.log("modifiedState", modifiedState);
      setStateList(modifiedState);
    }
  }, [data2, loading2.state]);

  const validateForm = () => {
    const errors = {};

    if (!city) {
      errors.city = "City is required";
    }

    if (!livesWithFamily) {
      errors.livesWithFamily = "Lives with family is required";
    }

    if (!residency) {
      errors.residency = "Residency is required";
    }

    if (!maritalStatus) {
      errors.maritalStatus = "Marital Status is required";
    }

    // if (!hasChildren) {
    //     errors.hasChildren = 'Has Children is required';
    // }

    if (!diet) {
      errors.diet = "Diet is required";
    }

    if (!height) {
      errors.height = "Height is required";
    }
    if (!weight) {
      errors.weight = "Weight is required";
    }

    if (!bloodGroup) {
      errors.bloodGroup = "Blood Group is required";
    }

    if (!motherTongue) {
      errors.motherTongue = "Mother Tongue is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleNextStep = () => {
    // console.log("122", weight);
    if (validateForm()) {
      // console.log("success validation");
      // Call the parent component's callback with the formValues
      onNextStep(formValues);
    } else {
    }
  };

  const handleFormChange = (name, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  // console.log('e', formErrors);

  return (
    <div className="step1">
      <h2 className="text-center">Create An Account</h2>

      <Autocomplete
        label="City"
        placeholder="Enter the city "
        size="md"
        withAsterisk
        name="city"
        // data={cities}
        data={stateList}
        value={formValues.city}
        onChange={(event) => handleFormChange("city", event)}
        error={formErrors.city}
      />

      <br />

      <div>
        <label htmlFor="livesWithFamily" className="label label-required">
          Do You Live With Your Family?
          <span className="required-field">*</span>
        </label>
        <Chip.Group
          multiple={false}
          value={formValues.livesWithFamily}
          onChange={(event) => handleFormChange("livesWithFamily", event)}
          name="livesWithFamily"
        >
          <div className="flex flex-gap-10 mt-5">
            <Chip variant="filled" color="pink" value="yes">
              Yes
            </Chip>
            <Chip variant="filled" color="pink" value="no">
              No
            </Chip>
          </div>
        </Chip.Group>
        {formErrors.livesWithFamily && (
          <p className="error-message">{formErrors.livesWithFamily}</p>
        )}
      </div>

      <br />

      <Select
        size="md"
        placeholder="Select"
        label="Residency Status"
        // styles={{ label: labelStyles }}
        data={recidencies}
        value={formValues.residency}
        withAsterisk
        name="residency"
        onChange={(event) => handleFormChange("residency", event)}
        error={formErrors.residency}
        searchable
      />

      <br />

      <Select
        size="md"
        placeholder="Select"
        label="Marital Status"
        // styles={{ label: labelStyles }}
        data={maritalStatuses}
        value={formValues.maritalStatus}
        withAsterisk
        name="maritalStatus"
        onChange={(event) => handleFormChange("maritalStatus", event)}
        error={formErrors.maritalStatus}
      />

      <br />

      {formValues.maritalStatus !== "Never Married" ? (
        <>
          <div>
            <label htmlFor="hasChildren" className="label">
              Do You Have Any Children?
            </label>
            <Chip.Group
              multiple={false}
              value={formValues.hasChildren}
              onChange={(event) => handleFormChange("hasChildren", event)}
              name="hasChildren"
              className="mt-5"
            >
              <div className="flex flex-gap-10 flex-wrap mt-5">
                <Chip variant="filled" color="pink" value="no">
                  No
                </Chip>
                <Chip variant="filled" color="pink" value="yes, livingTogether">
                  Yes. Living together
                </Chip>
                <Chip
                  variant="filled"
                  color="pink"
                  value="yes, notLivingTogether"
                >
                  Yes. Not living together
                </Chip>
              </div>
            </Chip.Group>

            {formErrors.hasChildren && (
              <p className="error-message">{formErrors.hasChildren}</p>
            )}
          </div>

          <br />
        </>
      ) : (
        <></>
      )}

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
          <div className="flex flex-gap-10 flex-wrap mt-5">
            <Chip variant="filled" color="pink" value="Vegetarian">
              Vegetarian
            </Chip>
            <Chip variant="filled" color="pink" value="Non-Veg">
              Non Vegetarian
            </Chip>
            {/* <Chip variant="filled" color="pink" value="Eggetarian">
              Eggetarian
            </Chip>
            <Chip variant="filled" color="pink" value="Jain">
              Jain
            </Chip>
            <Chip variant="filled" color="pink" value="Vegan">
              Vegan
            </Chip> */}
          </div>
          {formErrors.diet && (
            <p className="error-message">{formErrors.diet}</p>
          )}
        </Chip.Group>
      </div>

      <br />

      <Select
        size="md"
        placeholder="Select"
        label="Height"
        data={heights}
        value={formValues.height}
        withAsterisk
        name="height"
        onChange={(event) => handleFormChange("height", event)}
        error={formErrors.height}
      />

      <br />

      <TextInput
        size="md"
        placeholder="Enter weight"
        label="Weight(kg)"
        value={formValues.weight}
        withAsterisk
        name="weight"
        onChange={(event) =>
          handleFormChange("weight", event.currentTarget.value)
        }
        error={formErrors.weight}
      />

      <br />

      {/* <Select
        size="md"
        placeholder="Select"
        label="Sub-Community"
        data={subCommunities}
        value={formValues.subCommunity}
        withAsterisk
        name="subCommunity"
        onChange={(event) => handleFormChange("subCommunity", event)}
        error={formErrors.subCommunity}
      />

      <br /> */}

      <Select
        size="md"
        placeholder="Select"
        label="Native Language"
        data={motherTongues}
        value={formValues.motherTongue}
        withAsterisk
        name="motherTongue"
        onChange={(event) => handleFormChange("motherTongue", event)}
        error={formErrors.motherTongue}
        searchable
      />

      <br />

      <Select
        size="md"
        placeholder="Select"
        label="Blood Group"
        data={bloodGroups}
        value={formValues.bloodGroup}
        withAsterisk
        name="bloodGroup"
        onChange={(event) => handleFormChange("bloodGroup", event)}
        error={formErrors.bloodGroup}
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

export default Step1;
