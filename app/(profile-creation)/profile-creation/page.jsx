"use client";

import { useState } from "react";
import { Stepper, Button, Group, Notification } from "@mantine/core";
import { btnBackground } from "@/styles/library/mantine";
import { IconArrowNarrowRight, IconArrowNarrowLeft } from "@tabler/icons-react";
import Step1 from "@/components/profile-creation/Step1";
import Step2 from "@/components/profile-creation/Step2";
import Step3 from "@/components/profile-creation/Step3";
import { useDispatch, useSelector } from "react-redux";
import { createProfile } from "@/redux/features/user/userSlice";
import { notifyError } from "@/utils/showNotification";
import { useRouter } from "next/navigation";
import parsePhoneNumber from "libphonenumber-js";

const ProfileCreation = () => {
  const { userInfo, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  const router = useRouter();

  // const {
  //   location: { city, residencyStatus } = {},
  //   doctrine: { caste, motherTongue } = {},
  //   appearance: { height, weight } = {},
  //   education: { college, education } = {},
  //   family: { children, livingWith } = {},
  //   lifestyle: { diet, maritalStatus } = {},
  //   profession: { employer, income, occupation, workingWith } = {},
  //   trait: { aboutMe } = {},
  //   phone,
  //   countryCode,
  //   bloodGroup,
  //   country,
  // } = userInfo;
  const {
    location: {
      state,
      city,
      // country,
      livingSince,
      residencyStatus,
      zipCode,
    } = {},
    community: { religion, language, nativeLanguage } = {},
    interestAndMore: { interests },
    educationCareer: {
      college,
      education,
      income,
      employer,
      occupation,
      workingWith,
      industry,
    } = {},
    family: {
      noOfBrothers,
      brothersMarried,
      noOfSisters,
      sistersMarried,
      children,
      familyState,
      familyCity,
      familyCountry,
      familyIncome,
      familyValues,
      fatherProfession,
      livingWith,
      motherProfession,
      noOfKids,
      type,
    } = {},
    phone: { number, countryCode } = {},
    basicInfo: {
      diet,
      maritalStatus,
      bloodGroup,
      height,
      weight,
      country,
      dateOfBirth,
      gender,
    } = {},
    firstName,
    middleName,
    lastName,
    about: { aboutMe } = {},
  } = userInfo;

  const [formValues, setFormValues] = useState({
    city: city ? city : "",
    livesWithFamily: livingWith ? livingWith : "",
    residency: residencyStatus ? residencyStatus : "",
    maritalStatus: maritalStatus ? maritalStatus : "",
    hasChildren: children ? children : "",
    diet: diet ? diet : "",
    height: height ? height : "",
    weight: weight ? weight : "",
    qualification: education ? education : "",
    college: college ? college : "",
    worksWith: workingWith ? workingWith : "",
    profession: occupation ? occupation : "",
    company: employer ? employer : "",
    income: income ? income : "",
    about: aboutMe ? aboutMe : "",
    phone: countryCode
      ? countryCode + number
      : number && !countryCode
      ? number
      : "",
    motherTongue: nativeLanguage ? nativeLanguage : "",
    bloodGroup: bloodGroup ? bloodGroup : "",
  });

  const [formErrors, setFormErrors] = useState({
    city: "",
    livesWithFamily: "",
    residency: "",
    maritalStatus: "",
    hasChildren: "",
    diet: "",
    height: "",
    weight: "", //
    // subCommunity: "",
    qualification: "",
    college: "",
    worksWith: "",
    profession: "",
    company: "",
    income: "",
    about: "",
    phone: "",
    motherTongue: "",
    bloodGroup: "",
  });

  // console.log('formValues', formValues);

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));

  const handleStep1Next = (step1FormValues) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      ...step1FormValues,
    }));
    // nextStep();

    if (active === 0) {
      const {
        city,
        livesWithFamily,
        residency,
        maritalStatus,
        hasChildren,
        diet,
        height,
        weight,
        // subCommunity,
        motherTongue,
        bloodGroup,
      } = formValues;
      const data = {
        city,
        livesWithFamily,
        residency,
        maritalStatus,
        hasChildren,
        diet,
        height,
        weight,
        // subCommunity,
        motherTongue,
        bloodGroup,
      };

      dispatch(
        createProfile({
          location: { city, residencyStatus: residency },
          family: { livingWith: livesWithFamily, children: hasChildren },
          basicInfo: { maritalStatus, diet, height, weight, bloodGroup },

          community: { nativeLanguage: motherTongue },
          bloodGroup,
        })
      )
        .unwrap()
        .then(() => {
          nextStep();
        })
        .catch(() => {
          notifyError(message);
        });
    }

    if (active === 1) {
      const { qualification, college, worksWith, company, profession, income } =
        formValues;
      dispatch(
        createProfile({
          educationCareer: {
            education: qualification,
            college,
            income,
            workingWith: worksWith,
            occupation: profession,
            employer: company,
          },
        })
      )
        .unwrap()
        .then(() => {
          nextStep();
        })
        .catch(() => {
          notifyError(message);
        });
    }

    if (active === 2) {
      const { about, phone } = formValues;

      const phoneInfo = parsePhoneNumber(formValues?.phone);

      dispatch(
        createProfile({
          about: { aboutMe: about },
          // phone: phone.replace(/[+\s]/g, ""),
          phone: {
            number: phoneInfo.nationalNumber,
            countryCode: phoneInfo.countryCallingCode,
          },
        })
      )
        .unwrap()
        .then(() => {
          nextStep();
          router.push("/registration/photo");
        })
        .catch(() => {
          notifyError(message);
        });
    }
  };

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  // console.log('formError', formErrors);

  return (
    <>
      <div className="profile-creation py-30">
        <div className="container profile-creation__form rounded-15">
          <h1 className="text-center py-20">Let's Create The Profile Now</h1>
          <Stepper color="pink" active={active} breakpoint="sm">
            <Stepper.Step label="First step" description="Create an account">
              <Step1
                onNextStep={handleStep1Next}
                formValues={formValues}
                setFormValues={setFormValues}
                formErrors={formErrors}
                setFormErrors={setFormErrors}
              ></Step1>
            </Stepper.Step>
            <Stepper.Step
              label="Second step"
              description="Education and qualification"
            >
              <Step2
                onNextStep={handleStep1Next}
                formValues={formValues}
                setFormValues={setFormValues}
                formErrors={formErrors}
                setFormErrors={setFormErrors}
              ></Step2>
            </Stepper.Step>
            <Stepper.Step label="Final step" description="Provide a few words">
              <Step3
                onNextStep={handleStep1Next}
                formValues={formValues}
                setFormValues={setFormValues}
                formErrors={formErrors}
                setFormErrors={setFormErrors}
              ></Step3>
            </Stepper.Step>
          </Stepper>
          {/* 
                <Group position="center" mt="xl">
                    <Button
                        size="md"
                        // fullWidth
                        sx={{ width: '180px' }}
                        leftIcon={<IconArrowNarrowLeft />}
                        style={btnBackground} type="button"
                        onClick={prevStep}
                    >Previous Step</Button>

                    <Button
                        sx={{ width: '180px' }}
                        size="md"
                        type="submit"
                        rightIcon={<IconArrowNarrowRight />}
                        onClick={handleStep1Next}
                    >Next Step</Button>
                </Group> */}
        </div>
      </div>
    </>
  );
};

export default ProfileCreation;
