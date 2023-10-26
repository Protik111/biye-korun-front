"use client";
import { Button } from "@mantine/core";
import BasicInformation from "./BasicInformation";
import Communities from "./Communities";
import Education from "./Education";
import Location from "./Location";
import { btnBackground } from "@/styles/library/mantine";
import { IconCaretDown } from "@tabler/icons-react";
import { useState } from "react";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loadUserData } from "@/redux/features/user/userSlice";
import ErrorMessages from "@/components/global/ErrorMessages";

// Define the minimum and maximum income values
const minIncome = 10000; // 10000 BDT
const maxIncome = 200000; // 200,000 BDT

const PartnerPreference = ({
  profile,
  header = "Recommended Partner Preferences",
}) => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    basicDetails: {
      ageRange: { max, min } = {},
      heightRange,
      maritalStatus,
    } = {},
    community: { community, nativeLanguage, religion } = {},
    educationCareer: {
      annualIncome: { min: minIncome, max: maxIncome } = {},
      profession,
      qualification,
      workingWith,
    } = {},
    location: { country, residencyStatus, stateLiving } = {},
    family: { children, livingWith } = {},
    // profession: { employer, income: { min, max } = {}, occupation, workingWith } = {},
    trait: { aboutMe } = {},
    phone,
    profilePicture: { url } = {},
  } =
    // = (userInfo?.partnerpreference || {}).basicDetails || {}
    userInfo?.partnerpreference || {};
  // console.log("90", userInfo?.partnerpreference);

  const [seeMore, setSeemore] = useState(false);
  const [formData, setFormData] = useState({
    ages: min && max ? [min, max] : [18, 25],
    height: "",
    maritalStatus: maritalStatus ? maritalStatus : "",
    religion: religion ? religion : "",
    nativeLanguage: nativeLanguage ? nativeLanguage : "",
    livingIn: country ? country : "",
    stateLiving: stateLiving ? stateLiving : "",
    residency: residencyStatus ? residencyStatus : "",
    qualification: qualification ? qualification : "",
    workingWith: workingWith ? workingWith : "",
    profession: profession ? profession : "",
    income: "",
  });

  const [errors, setErrors] = useState({});

  const [minHeight, setMinHeight] = useState(heightRange?.min || "56");
  const [maxHeight, setMaxHeight] = useState(heightRange?.max || "36");

  // Initial income range values
  const [minIncomeValue, setMinIncomeValue] = useState(minIncome || "1000");
  const [maxIncomeValue, setMaxIncomeValue] = useState(maxIncome || "5000");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // console.log('userInfo?.partnerpreference', userInfo);
  // console.log('height', minHeight, maxHeight);
  // console.log('maxIncomeValue', maxIncomeValue, minIncomeValue);

  const handleSave = () => {
    const {
      ages,
      maritalStatus,
      religion,
      nativeLanguage,
      livingIn,
      stateLiving,
      residency,
      qualification,
      workingWith,
      profession,
      income,
    } = formData;

    const data = {
      minAge: ages[0]?.toString(),
      maxAge: ages[1]?.toString(),
      minHeight: minHeight?.toString(),
      maxHeight: maxHeight?.toString(),
      maritalStatus: maritalStatus,
      religion,
      //   community: "Muslim",
      nativeLanguage,
      country: livingIn,
      //   stateLiving,
      residencyStatus: residency,
      qualification,
      workingWith,
      profession,
      minIncome: minIncomeValue?.toString(),
      maxIncome: maxIncomeValue?.toString(),
    };
    setLoading(true);
    axios
      .patch("user/partner-preferences", data)
      .then((res) => {
        notifySuccess("Preferences Updated Successfully!");
        setLoading(false);
        router.push("/matches");

        // setTimeout(() => {
        // }, 500);
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

  const handleSavePartnerPreferences = () => {
    const {
      ages,
      maritalStatus,
      religion,
      nativeLanguage,
      livingIn,
      stateLiving,
      residency,
      qualification,
      workingWith,
      profession,
      income,
    } = formData;

    const data = {
      minAge: ages[0]?.toString(),
      maxAge: ages[1]?.toString(),
      minHeight: minHeight?.toString(),
      maxHeight: maxHeight?.toString(),
      maritalStatus: maritalStatus,
      religion,
      // community: "Muslim",
      nativeLanguage,
      country: livingIn,
      // stateLiving,

      residencyStatus: residency,
      qualification,
      workingWith,
      profession,
      minIncome: minIncomeValue?.toString(),
      maxIncome: maxIncomeValue?.toString(),
    };
    setLoading(true);
    setErrors({});
    axios
      .patch("user/partner-preferences", data)
      .then((res) => {
        notifySuccess("Preferences Updated Successfully!");
        dispatch(loadUserData());
        setLoading(false);
        router.push("/my-profile");
      })
      .catch((error) => {
        setLoading(false);
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          const fieldErrors = error.response.data.errors;
          setErrors(fieldErrors);
        } else {
          notifyError(error.response.data.errors.message);
        }
      });
  };

  return (
    <div className="partenerPref">
      <h2 className="text-center py-15">{header ? header : ""} </h2>

      <div>
        <ErrorMessages errors={errors} />
      </div>

      <BasicInformation
        formData={formData}
        setFormData={setFormData}
        minHeight={minHeight}
        setMinHeight={setMinHeight}
        maxHeight={maxHeight}
        setMaxHeight={setMaxHeight}
      ></BasicInformation>
      <Communities formData={formData} setFormData={setFormData}></Communities>
      <Location formData={formData} setFormData={setFormData}></Location>

      {!seeMore && (
        <div className="flex justify-center mt-30">
          <Button
            rightIcon={<IconCaretDown />}
            variant="light"
            onClick={() => setSeemore(true)}
            size="md"
          >
            See More
          </Button>
        </div>
      )}

      {seeMore ? (
        <Education
          formData={formData}
          setFormData={setFormData}
          minIncomeValue={minIncomeValue}
          setMinIncomeValue={setMinIncomeValue}
          maxIncomeValue={maxIncomeValue}
          setMaxIncomeValue={setMaxIncomeValue}
        ></Education>
      ) : (
        <></>
      )}

      <div className="flex justify-center mt-30">
        {profile ? (
          <Button
            disabled={loading}
            onClick={() => handleSavePartnerPreferences()}
            style={btnBackground}
            size="md"
          >
            Update Partner Preferences
          </Button>
        ) : (
          <Button
            disabled={loading}
            onClick={() => handleSave()}
            style={btnBackground}
            size="md"
          >
            Save & Continue
          </Button>
        )}
      </div>
    </div>
  );
};

export default PartnerPreference;
