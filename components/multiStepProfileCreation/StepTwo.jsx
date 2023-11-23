import React, { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
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
import { useDispatch, useSelector } from "react-redux";
import { createProfile, loadUserData } from "@/redux/features/user/userSlice";
import LoaderWithText from "../global/LoaderWithText";
import TitleStepper from "./TitleStepper";

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

const StepTwo = ({
  formValues,
  setFormValues,
  handlePrevStep,
  handleNextStep,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch();
  const [openModal, closeModal] = useState(true);
  // list of country
  const [contries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState();

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState();
  const [loading, setLoading] = useState(false);
  const handleModalClose = () => closeModal(false);

  const handleFormChange = (name, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
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

  const handleCountryChange = (event) => {
    // setSelectedCountry(event);
    setFormValues({
      ...formValues,
      familyCountry: event,
      familyCity: "",
      familyState: "",
    });
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (event) => {
    setFormValues({
      ...formValues,
      familyState: event,
      familyCity: "",
    });

    // setSelectedState(event);
    // setSelectedCity("");
  };

  const handleCityChange = (event) => {
    // setSelectedCity(event);
    setFormValues({
      ...formValues,
      familyCity: event,
    });
  };

  const handleSubmit = () => {
    console.log("formValues", formValues);

    setLoading(true);

    dispatch(
      createProfile({
        family: formValues,
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

  useEffect(() => {
    // if (selectedCountry !== "Select Country" && selectedCountry) {
    //   getStatesForCountry(selectedCountry).then((result) => {
    //     const convertedList = result?.data.data?.states.map((item) => ({
    //       label: item?.name,
    //       value: item?.name,
    //     }));
    //     setStates(convertedList);
    //   });
    //   //   setSelectedState("");
    //   //   setSelectedCity("");
    //   setStates([]);
    //   setCities([]);
    // }
    if (
      formValues.familyCountry !== "Select Country" &&
      formValues.familyCountry
    ) {
      getStatesForCountry(formValues.familyCountry).then((result) => {
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
  }, [formValues.familyCountry]);

  useEffect(() => {
    // if (selectedState !== "Select State" && selectedCountry && selectedState) {
    //   getCities(selectedCountry, selectedState).then((result) => {
    //     console.log("result.data.data", result.data.data);
    //     setCities(result.data.data);
    //   });
    //   setCities([]);
    //   //   setSelectedCity("");
    // }

    if (
      formValues.familyState !== "Select State" &&
      formValues.familyCountry &&
      formValues.familyState
    ) {
      getCities(formValues.familyCountry, formValues.familyState).then(
        (result) => {
          console.log("result.data.data", result.data.data);
          setCities(result.data.data);
        }
      );
      setCities([]);
    }
  }, [formValues.familyState]);

  return (
    <div>
      <TitleStepper
        title="Family Details"
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
        step="B"
      />
      <div className="">
        <TextInput
          label="Father's Profession"
          placeholder="Father's Profession"
          name="fatherProfession"
          radius="xl"
          variant="filled"
          size="md"
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
          radius="xl"
          variant="filled"
          size="md"
          value={formValues.motherProfession}
          onChange={(event) =>
            handleFormChange("motherProfession", event.currentTarget.value)
          }
        />
        <br />

        <Select
          searchable
          placeholder="Select "
          label="Family Country"
          data={contries}
          name="livingIn"
          onChange={handleCountryChange}
          // value={selectedCountry}
          value={formValues.familyCountry}
          radius="xl"
          variant="filled"
          size="md"
        />
        <br />
        <Select
          searchable
          placeholder="Select"
          label="Family State"
          data={states}
          onChange={handleStateChange}
          // value={selectedState}
          value={formValues.familyState}
          radius="xl"
          variant="filled"
          size="md"
        />
        <br />
        <Select
          searchable
          placeholder="Select"
          label="Family City"
          data={cities}
          onChange={handleCityChange}
          // value={selectedCity}
          value={formValues.familyCity}
          radius="xl"
          variant="filled"
          size="md"
        />
        <br />

        <Select
          searchable
          placeholder="Select"
          label="Family Type"
          radius="xl"
          variant="filled"
          data={[
            "Nuclear Family",
            "Extended Family",
            "Step Family",
            "Same Sex Family",
            "Grandparent Family",
            "Single Parent Family",
          ]}
          name="type"
          size="md"
          value={formValues.type}
          onChange={(event) => handleFormChange("type", event)}
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

export default StepTwo;
