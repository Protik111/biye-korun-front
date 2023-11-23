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
import { createProfile } from "@/redux/features/user/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoaderWithText from "../global/LoaderWithText";
const StepFive = ({
  formValues,
  setFormValues,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const phoneInfo = parsePhoneNumber("");
  const [loading, setLoading] = useState(false);

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
  };

  const handleSubmit = () => {
    const { phone, aboutMe, nativeLanguage } = formValues;
    const phoneInfo = parsePhoneNumber(phone);

    //  dispatch(
    //    createProfile({
    //      about: { aboutMe },
    //      phone: {
    //        number: phoneInfo.nationalNumber,
    //        countryCode: phoneInfo.countryCallingCode,
    //      },
    //      community: { nativeLanguage },
    //    })
    //  );

    setLoading(true);

    dispatch(
      createProfile({
        about: { aboutMe },
        phone: {
          number: phoneInfo.nationalNumber,
          countryCode: phoneInfo.countryCallingCode,
        },
        community: { nativeLanguage },
      })
    )
      .unwrap()
      .then(() => {
        setLoading(false);
        router.push("/dashboard");
      })
      .catch(() => {
        notifyError(message);
        setLoading(false);
      });
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
        value={formValues.aboutMe}
        onChange={(event) => handleFormChange("aboutMe", event.target.value)}
        // error={formErrors.about}
      />

      <br />
      <Select
        placeholder="Select"
        label="Native Language"
        defaultValue="20"
        data={motherTongues}
        name="nativeLanguage"
        value={formValues.nativeLanguage}
        onChange={(event) => handleFormChange("nativeLanguage", event)}
        searchable
        radius="xl"
        variant="filled"
        size="md"
      />

      <br />
      <div>
        <PhoneInput
          defaultCountry="bd"
          value={formValues.phone}
          onChange={(phone) => handleFormChange("phone", phone)}
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
        onClick={handleSubmit}
      >
        {loading ? (
          <>
            <LoaderWithText text="" color="white"></LoaderWithText>
          </>
        ) : (
          <> Create Profile</>
        )}
      </Button>
    </div>
  );
};

export default StepFive;
