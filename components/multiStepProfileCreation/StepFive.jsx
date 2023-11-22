"use client";
import { Button, Select, Textarea } from "@mantine/core";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import parsePhoneNumber, {
  AsYouType,
  isValidPhoneNumber,
} from "libphonenumber-js";
import { btnBackground_prev } from "@/styles/library/mantine";
import TitleStepper from "./TitleStepper";
import { motherTongues } from "@/staticData/InputFields/inputFields";

const StepFive = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  //   const { about, phone } = formValues;
  const phoneInfo = parsePhoneNumber("5678789098");

  const validateForm = () => {
    const errors = {};

    if (!about) {
      errors.about = "About is required";
    }

    // console.log('phoneInfo', phoneInfo);

    if (!phone || !phoneInfo) {
      errors.phone = "Phone is required";
    } else if (
      phoneInfo?.country === "US" ||
      phoneInfo?.countryCallingCode === "1"
    ) {
      const formatted = phoneInfo.formatNational();
      if (!isValidPhoneNumber(formatted, "US")) {
        errors.phone = "Enter a valid number";
      }
    } else if (
      phoneInfo?.country === "BD" ||
      phoneInfo?.countryCallingCode === "880"
    ) {
      const formatted = phoneInfo.formatNational();
      if (!isValidPhoneNumber(formatted, "BD")) {
        errors.phone = "Enter a valid number";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  //   const handleNextStep = () => {
  //     if (validateForm()) {
  //       // Call the parent component's callback with the formValues
  //       onNextStep(formValues);
  //     }
  //   };

  const handleFormChange = (name, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  //for phone
  const handleChangePhone = (name, value) => {
    const asYouType = new AsYouType();
    // let input = asYouType.input(value);
    const input = parsePhoneNumber(value);
    console.log(input);
    if (
      asYouType.getChars().startsWith(1) &&
      asYouType.getChars().length <= 11
    ) {
      return setFormValues((prev) => ({ ...prev, [name]: input }));
    } else if (
      !asYouType.getChars().startsWith(1) &&
      asYouType.getChars().length <= 10
    ) {
      return setFormValues((prev) => ({ ...prev, [name]: input }));
    } else {
      return;
    }
    // console.log(asYouType.getChars().startsWith(1));
  };

  return (
    <div className="">
      <TitleStepper
        title="About"
        handlePrevStep={handlePrevStep}
        // handleNextStep={handleNextStep}
        step="E"
      />
      <Textarea
        placeholder="Copy and paste your resume"
        label="About Yourself"
        autosize
        minRows={5}
        variant="filled"
        // value={formValues.about}
        // onChange={(event) => handleFormChange("about", event.target.value)}
        // error={formErrors.about}
      />

      <br />
      <Select
        placeholder="Select"
        label="Native Language"
        defaultValue="20"
        data={motherTongues}
        name="motherTongue"
        // value={formValues.motherTongue}
        // onChange={(event) => handleFormChange("motherTongue", event)}
        searchable
        radius="xl"
        variant="filled"
        size="md"
      />

      <br />
      <div>
        <PhoneInput
          defaultCountry="bd"
          //   value={phone}
          //   onChange={(phone) => handleFormChange("phone", phone)}
        />
        {/* {formErrors.phone && (
          <p className="error-message">{formErrors.phone} </p>
        )} */}
      </div>

      <br />
      <Button
        size="md"
        fullWidth
        radius="xl"
        color="rgba(244, 42, 65, 0.10)"
        style={btnBackground_prev}
        onClick={handleNextStep}
      >
        Create Profile
      </Button>
    </div>
  );
};

export default StepFive;
