"use client";

import {
  Alert,
  Anchor,
  Button,
  Divider,
  Input,
  Tooltip,
  Textarea,
  Select,
  Chip,
  MultiSelect,
  TextInput,
  Autocomplete,
} from "@mantine/core";
import { List, ThemeIcon } from "@mantine/core";
import {
  IconCircleCheck,
  IconCircleDashed,
  IconPlayerRecordFilled,
} from "@tabler/icons-react";
import ThemeIconComp from "../global/ThemeIconComp";
import { btnBackground, labelStyles } from "@/styles/library/mantine";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { heightCalculator } from "@/utils/heightCalculator";
import { calculateAge } from "@/utils/calculateAge";
import { notSpecfied } from "@/staticData/image";
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
import useCountry from "@/hooks/common/useCountry";
import { cityData } from "@/staticData/InputFields/city";
import {
  getCities,
  getCountries,
  getStatesForCountry,
} from "@/hooks/common/countryApi";

const imageUrl =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80";

const MyProfile = () => {
  const { userInfo } = useSelector((state) => state.user) || {};
  const { data, error, loading } = useCountry();
  const partnerPreferencesRef = useRef(null);
  const router = useRouter();
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);
  const [isModal5Open, setIsModal5Open] = useState(false);
  const [isModal6Open, setIsModal6Open] = useState(false);
  const [countryList, setCountryList] = useState([]);
  // list of country
  const [contries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState();

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState();

  const openModal1 = () => setIsModal1Open(true);
  const closeModal1 = () => setIsModal1Open(false);

  const openModal2 = () => setIsModal2Open(true);
  const closeModal2 = () => setIsModal2Open(false);
  const openModal3 = () => setIsModal3Open(true);
  const closeModal3 = () => setIsModal3Open(false);
  const openModal4 = () => setIsModal4Open(true);
  const closeModal4 = () => setIsModal4Open(false);
  const openModal5 = () => setIsModal5Open(true);
  const closeModal5 = () => setIsModal5Open(false);
  const openModal6 = () => setIsModal6Open(true);
  const closeModal6 = () => setIsModal6Open(false);
  const {
    location: { city, residencyStatus } = {},
    doctrine: { caste } = {},
    appearance: { height } = {},
    education: { college, education } = {},
    family: { children, livingWith } = {},
    lifestyle: { diet, maritalStatus } = {},
    profession: {
      employer,
      income: { min, max } = {},
      occupation,
      workingWith,
    } = {},
    trait: { aboutMe } = {},
    phone,
    profilePicture,
    // profilePicture: { url } = {},
    // profilePicture: { url } = { url: null },
    fullName,
    firstName,
    lastName,
    userId,
    dateOfBirth,
    postedBy,
    religion,
    community,
    country,
  } = userInfo || {};

  const {
    basicDetails,
    educationCareer,
    location,
    community: communityData,
  } = userInfo?.partnerpreference;
  console.log("userInfo", userInfo);
  const url = profilePicture ? profilePicture.url : null;

  const scrollToPartnerPreferences = () => {
    if (partnerPreferencesRef.current) {
      partnerPreferencesRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const handleCountryChange = (event) => {
    setSelectedCountry(event);
  };

  const handleStateChange = (event) => {
    setSelectedState(event);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event);
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

  useEffect(() => {
    setSelectedState("");
    setSelectedCity("");
    setStates([]);
    setCities([]);

    if (selectedCountry !== "Select Country" && selectedCountry) {
      getStatesForCountry(selectedCountry).then((result) => {
        const convertedList = result?.data.data?.states.map((item) => ({
          label: item?.name,
          value: item?.name,
        }));
        console.log("150", convertedList);
        setStates(convertedList);
      });
    }
  }, [selectedCountry]);

  useEffect(() => {
    setCities([]);
    setSelectedCity("");

    if (selectedState !== "Select State" && selectedCountry && selectedState) {
      getCities(selectedCountry, selectedState).then((result) => {
        console.log("result.data.data", result.data.data);
        setCities(result.data.data);
      });
    }
  }, [selectedState]);

  // console.log('userinfo', userInfo);

  return (
    <div className="myProfile container">
      <div className="myProfile__top container-box-bg p-15">
        <Alert
          title={
            <h2>
              {firstName + " " + lastName}
              <p>User Id : {userId}</p>
            </h2>
          }
          color="red"
        ></Alert>

        <div className="myProfile__top--wrapper">
          <div className="profile-img">
            <img src={url?.large || imageUrl} alt="Profile" />
          </div>
          <div>
            <div className="profile-info">
              <div>
                <div className="single-item">
                  <p className="left">Age & Height</p>
                  <p className="right">
                    : {calculateAge(dateOfBirth)}/{heightCalculator(height)}
                  </p>
                </div>
                <div className="single-item">
                  <p className="left">Marital Status</p>
                  <p className="right">: {maritalStatus || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Posted by</p>
                  <p className="right">: {postedBy || notSpecfied}</p>
                </div>
              </div>

              <div>
                <div className="single-item">
                  <p className="left">Religion</p>
                  <p className="right">: {religion || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Country</p>
                  <p className="right">: {country || notSpecfied} </p>
                </div>
                {/* <div className="single-item">
                                    <p className="left">Mother Tonue</p>
                                    <p className="right">: Bengali</p>
                                </div> */}
              </div>
            </div>
            <Divider my={10}></Divider>

            <div className="manage-profile mt-25 border-1 p-15 mr-5 rounded-10">
              <h3 className="secondary-text">Manage your profile</h3>
              <div className="mt-10 flex align-center flex-gap-15 flex-wrap">
                <div className="flex align-center flex-gap-5">
                  <ThemeIconComp
                    iconComp={<IconPlayerRecordFilled size="10" />}
                    size="10"
                  ></ThemeIconComp>
                  <Link href="/edit-profile">
                    <Anchor>Edit Personal Profile</Anchor>
                  </Link>
                </div>

                <div className="flex align-center flex-gap-5">
                  <ThemeIconComp
                    iconComp={<IconPlayerRecordFilled size="10" />}
                    size="10"
                  ></ThemeIconComp>
                  <Link href="/">
                    <Anchor>View Profile Stats</Anchor>
                  </Link>
                </div>

                <div className="flex align-center flex-gap-5">
                  <ThemeIconComp
                    iconComp={<IconPlayerRecordFilled size="10" />}
                    size="10"
                  ></ThemeIconComp>
                  <Link href="/">
                    <Anchor>Set Contact Filters</Anchor>
                  </Link>
                </div>
              </div>

              <div className="mt-10 flex align-center flex-gap-15 flex-wrap">
                <div className="flex align-center flex-gap-5">
                  <ThemeIconComp
                    iconComp={<IconPlayerRecordFilled size="10" />}
                    size="10"
                  ></ThemeIconComp>
                  <Link href="/partner-preferences">
                    <Anchor>Edit Partner Profile</Anchor>
                  </Link>
                </div>

                <div className="flex align-center flex-gap-5">
                  <ThemeIconComp
                    iconComp={<IconPlayerRecordFilled size="10" />}
                    size="10"
                  ></ThemeIconComp>
                  <Link href="/my-photos">
                    <Anchor>Add Photos</Anchor>
                  </Link>
                </div>

                <div className="flex align-center flex-gap-5">
                  <ThemeIconComp
                    iconComp={<IconPlayerRecordFilled size="10" />}
                    size="10"
                  ></ThemeIconComp>
                  <Link href="/settings?state=4">
                    <Anchor>Delete Profile</Anchor>
                  </Link>
                </div>
              </div>

              <div className="mt-10 flex align-center flex-gap-15">
                <div className="flex align-center flex-gap-5">
                  <ThemeIconComp
                    iconComp={<IconPlayerRecordFilled size="10" />}
                    size="10"
                  ></ThemeIconComp>
                  <Link href="/edit-profile">
                    <Anchor>Edit Contact Details</Anchor>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="myProfile__top--about">
          <div>
            <Divider color="#9880E7" size={"md"} mt={15}></Divider>
            <div className="flex">
              <Button
                size="xs"
                radius="xl"
                // leftIcon={<IconArrowNarrowLeft />}
                style={btnBackground}
                type="button"
                className={`button mt-10`}
                component="a"
                href="#myself"
              >
                About Myself
              </Button>

              <Button
                variant="outline"
                size="xs"
                radius="xl"
                color="pink"
                className={`button mt-10`}
                onClick={scrollToPartnerPreferences}
              >
                Partner Preferences
              </Button>
            </div>
          </div>

          <div className="personality mt-20" id="myself">
            <div className="flex justify-between align-center">
              <h3 className="secondary-text">About</h3>

              <Button
                variant="light"
                size="xs"
                radius="xl"
                color="pink"
                className={`button mt-10`}
                onClick={openModal1}
              >
                Edit
              </Button>
            </div>
            <Divider mt={5}></Divider>
            <p className="mt-5">{aboutMe}</p>
          </div>

          {/* Basic lifestyle */}
          <div className="basic-lifestyle info-section mt-20">
            <div className="flex justify-between align-center">
              <Tooltip label="Basic & Lifestyle" color="red">
                <h3 className="secondary-text">Basic & Lifestyle</h3>
              </Tooltip>

              <Button
                variant="light"
                size="xs"
                radius="xl"
                color="pink"
                className={`button mt-10`}
                onClick={openModal2}
              >
                Edit
              </Button>
            </div>
            <Divider mt={5}></Divider>
            <div className="profile-info mt-10">
              <div>
                <div className="single-item">
                  <p className="left">Age</p>
                  <p className="right">: {calculateAge(dateOfBirth)}</p>
                  {/* :{" "}<Input
                                        variant="unstyled"
                                        disabled
                                        placeholder="Your email"
                                        size="xs"
                                    /> */}
                </div>
                <div className="single-item">
                  <p className="left">Marital Status</p>
                  <p className="right">: {maritalStatus || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Date of Birth</p>
                  <p className="right">
                    : {format(new Date(dateOfBirth), "MM/dd/yyyy")}
                  </p>
                </div>
                <div className="single-item">
                  <p className="left">Height</p>
                  <p className="right">: {heightCalculator(height)}</p>
                </div>
                <div className="single-item">
                  <p className="left">Born And Raised</p>
                  <p className="right">: {country}</p>
                </div>
              </div>

              <div>
                <div className="single-item">
                  <p className="left">Diet</p>
                  <p className="right">: {diet || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Blood Groop</p>
                  <p className="right">: Any</p>
                </div>
                {/* <div className="single-item">
                                    <p className="left">Disbalility</p>
                                    <p className="right">: Not Specified</p>
                                </div> */}
              </div>
            </div>
          </div>

          {/* Religious Background */}
          <div className="religious-background info-section mt-20">
            <div className="flex justify-between align-center">
              <Tooltip label="Religion" color="red">
                <h3 className="secondary-text">Religion</h3>
              </Tooltip>

              <Button
                variant="light"
                size="xs"
                radius="xl"
                color="pink"
                className={`button mt-10`}
                onClick={openModal3}
              >
                Edit
              </Button>
            </div>
            <Divider mt={5}></Divider>
            <div className="profile-info mt-10">
              <div>
                <div className="single-item">
                  <p className="left">Religion</p>
                  <p className="right">: {religion}</p>
                </div>
                <div className="single-item">
                  <p className="left">Language</p>
                  <p className="right">: {community} </p>
                </div>
                {/* <div className="single-item">
                  <p className="left">Sub community</p>
                  <p className="right">: Not Specified</p>
                </div> */}
              </div>

              <div>
                <div className="single-item">
                  <p className="left">Native Language</p>
                  <p className="right">: Bengali</p>
                </div>
              </div>
            </div>
          </div>

          {/* Family Details */}
          <div className="family-details info-section mt-20">
            <div className="flex justify-between align-center">
              <Tooltip label="Family Details" color="red">
                <h3 className="secondary-text">Family Details</h3>
              </Tooltip>

              <Button
                variant="light"
                size="xs"
                radius="xl"
                color="pink"
                className={`button mt-10`}
                onClick={openModal4}
              >
                Edit
              </Button>
            </div>
            <Divider mt={5}></Divider>
            <div className="profile-info mt-10">
              <div>
                <div className="single-item">
                  <p className="left">Father's Status</p>
                  <p className="right">: {notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Mother's Status</p>
                  <p className="right">: {notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Family Location</p>
                  <p className="right">: Dhaka Bangladesh</p>
                </div>
              </div>

              <div>
                <div className="single-item">
                  <p className="left">No. of Brothers</p>
                  <p className="right">: {notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">No. of Sisters</p>
                  <p className="right">: {notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Family Type</p>
                  <p className="right">: {notSpecfied}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Career */}
          <div className="family-details info-section mt-20">
            <div className="flex justify-between align-center">
              <Tooltip label="Education & Career" color="red">
                <h3 className="secondary-text">Education & Career</h3>
              </Tooltip>

              <Button
                variant="light"
                size="xs"
                radius="xl"
                color="pink"
                className={`button mt-10`}
                onClick={openModal5}
              >
                Edit
              </Button>
            </div>
            <Divider mt={5}></Divider>
            <div className="profile-info mt-10">
              <div>
                <div className="single-item">
                  <p className="left">Highest Qualification</p>
                  <p className="right">: {education || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">College(s) Attended</p>
                  <p className="right">: {college || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Yearly Income - Min/Max</p>
                  <p className="right">
                    : {"$" + min + "" || notSpecfied} /{" "}
                    {"$" + max + "" || notSpecfied}
                  </p>
                </div>
              </div>

              <div>
                <div className="single-item">
                  <p className="left">Job Setor</p>
                  <p className="right">: {workingWith || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Job Title</p>
                  <p className="right">: {occupation || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Employer Name</p>
                  <p className="right">: {employer || notSpecfied}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location of Groom */}
          <div className="family-details info-section mt-20">
            <div className="flex justify-between align-center">
              <Tooltip label="Locations" color="red">
                <h3 className="secondary-text">Locations</h3>
              </Tooltip>

              <Button
                variant="light"
                size="xs"
                radius="xl"
                color="pink"
                className={`button mt-10`}
                onClick={openModal6}
              >
                Edit
              </Button>
            </div>
            <Divider mt={5}></Divider>
            <div className="profile-info mt-10">
              <div>
                <div className="single-item">
                  <p className="left">Current Residence</p>
                  <p className="right">
                    : {city}, {country}
                  </p>
                </div>
                <div className="single-item">
                  <p className="left">State Of Residence</p>
                  <p className="right">: {city}</p>
                </div>
              </div>

              <div>
                <div className="single-item">
                  <p className="left">Residency Status</p>
                  <p className="right">: {notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Zip / Pin code</p>
                  <p className="right">: {notSpecfied}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-15"
            id="partner-preferences"
            ref={partnerPreferencesRef}
          >
            <Alert title={<h3>Partner Prefrences</h3>} color="red"></Alert>

            {/* Basic Info */}
            <div className="family-details info-section mt-20">
              <div className="flex justify-between align-center">
                <Tooltip label="Basic Info" color="red">
                  <h3 className="secondary-text">Basic Info</h3>
                </Tooltip>

                <Button
                  variant="light"
                  size="xs"
                  radius="xl"
                  color="pink"
                  className={`button mt-10`}
                >
                  Edit
                </Button>
              </div>
              <Divider mt={5}></Divider>
              <div className="profile-info mt-10">
                <div>
                  <div className="single-item">
                    <p className="left">Age</p>
                    <p className="right">
                      : {basicDetails.ageRange.min} to{" "}
                      {basicDetails.ageRange.max}
                    </p>
                  </div>
                  <div className="single-item">
                    <p className="left">Height</p>
                    <p className="right">
                      : {heightCalculator(basicDetails.heightRange.min)} to{" "}
                      {heightCalculator(basicDetails.heightRange.max)}
                    </p>
                  </div>
                  {/* <div className="single-item">
                    <p className="left">Religion</p>
                    <p className="right">
                      : Muslim:Sunni, Muslim:Bengali, Muslim:Sunni Hanafi,
                      Muslim:Arain, Muslim:Jat, Muslim:Siddiqui,
                    </p>
                  </div> */}
                </div>

                <div>
                  {/* <div className="single-item">
                    <p className="left">Native Language</p>
                    <p className="right">: Any</p>
                  </div> */}

                  <div className="single-item">
                    <p className="left">Marital Status</p>
                    <p className="right">: {basicDetails?.maritalStatus}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Community */}
            <div className="family-details info-section mt-20">
              <div className="flex justify-between align-center">
                <Tooltip label="Community" color="red">
                  <h3 className="secondary-text"> Community</h3>
                </Tooltip>

                <Button
                  variant="light"
                  size="xs"
                  radius="xl"
                  color="pink"
                  className={`button mt-10`}
                >
                  Edit
                </Button>
              </div>
              <Divider mt={5}></Divider>
              <div className="profile-info mt-10">
                <div>
                  <div className="single-item">
                    <p className="left">Religion</p>
                    <p className="right">: Islam </p>
                  </div>

                  <div className="single-item">
                    <p className="left">Native Language</p>
                    <p className="right">
                      :{" "}
                      {communityData?.motherTongue.map((item, index) => {
                        return (
                          <React.Fragment key={index}>
                            {item}
                            {index !==
                              communityData?.motherTongue.length - 1 && <br />}
                          </React.Fragment>
                        );
                      })}
                    </p>
                  </div>
                </div>

                <div></div>
              </div>
            </div>
            {/* Location Details */}
            <div className="family-details info-section mt-20">
              <div className="flex justify-between align-center">
                <Tooltip label="Location Details" color="red">
                  <h3 className="secondary-text">Location Details</h3>
                </Tooltip>

                <Button
                  variant="light"
                  size="xs"
                  radius="xl"
                  color="pink"
                  className={`button mt-10`}
                >
                  Edit
                </Button>
              </div>
              <Divider mt={5}></Divider>
              <div className="profile-info mt-10">
                <div>
                  <div className="single-item">
                    <p className="left">Country</p>
                    <p className="right">
                      :{" "}
                      {location?.country.map((item, index) => {
                        return (
                          <React.Fragment key={index}>
                            {item}
                            {index !== location?.country.length - 1 && <br />}
                          </React.Fragment>
                        );
                      })}
                    </p>
                  </div>
                  {/* <div className="single-item">
                    <p className="left">State living in</p>
                    <p className="right">: Any</p>
                  </div> */}
                  <div className="single-item">
                    <p className="left">Residency Status </p>
                    <p className="right">
                      :{" "}
                      {location?.residencyStatus.map((item, index) => {
                        return (
                          <React.Fragment key={index}>
                            {item}
                            {index !== location?.residencyStatus.length - 1 &&
                              ", "}
                          </React.Fragment>
                        );
                      })}
                    </p>
                  </div>
                </div>

                <div></div>
              </div>
            </div>

            {/* Education & Career */}
            <div className="family-details info-section mt-20">
              <div className="flex justify-between align-center">
                <Tooltip label="Education & Career" color="red">
                  <h3 className="secondary-text">Education & Career</h3>
                </Tooltip>

                <Button
                  variant="light"
                  size="xs"
                  radius="xl"
                  color="pink"
                  className={`button mt-10`}
                >
                  Edit
                </Button>
              </div>
              <Divider mt={5}></Divider>
              <div className="profile-info mt-10">
                <div>
                  <div className="single-item">
                    <p className="left">Qualification</p>
                    <p className="right">
                      :{" "}
                      {educationCareer?.qualification.map((item, index) => {
                        return (
                          <React.Fragment key={index}>
                            {item}
                            {index !==
                              educationCareer?.qualification.length - 1 && (
                              <br />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </p>
                  </div>
                  {/* <div className="single-item">
                    <p className="left">Job Sector</p>
                    <p className="right">: Any</p>
                  </div> */}
                  <div className="single-item">
                    <p className="left">Job Sector</p>
                    <p className="right">
                      :{" "}
                      {educationCareer?.profession.map((item, index) => {
                        return (
                          <React.Fragment key={index}>
                            {item}
                            {index !==
                              educationCareer?.profession.length - 1 && <br />}
                          </React.Fragment>
                        );
                      })}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="single-item">
                    <p className="left">Job Title</p>
                    <p className="right">
                      :{" "}
                      {educationCareer?.workingWith.map((item, index) => {
                        return (
                          <React.Fragment key={index}>
                            {item}
                            {index !==
                              educationCareer?.workingWith.length - 1 && <br />}
                          </React.Fragment>
                        );
                      })}
                    </p>
                  </div>
                  <div className="single-item">
                    <p className="left">Yearly Icome</p>
                    <p className="right">
                      : ${educationCareer?.annualIncome.min} to $
                      {educationCareer?.annualIncome.max}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReuseModal isOpen={isModal1Open} onClose={closeModal1} title="About">
        {" "}
        <Textarea
          autosize
          minRows={5}
          maxRows={10}
          // value={value}
          // onChange={(event) => setValue(event.currentTarget.value)}
        />
        <div className="flex justify-end mt-10">
          <Button variant="filled" color="violet" size="sm">
            Save
          </Button>
        </div>
      </ReuseModal>
      <ReuseModal
        isOpen={isModal2Open}
        onClose={closeModal2}
        title="Basic & Lifestyle"
      >
        <div className="mt-25">
          <div>
            <label htmlFor="diet" className="label">
              Select Diets
            </label>
            <Chip.Group
              multiple={false}
              // value={formValues.diet}
              // onChange={(event) => handleFormChange("diet", event)}
              name="diet"
            >
              <div className="flex flex-gap-10 flex-wrap mt-5">
                <Chip variant="filled" color="pink" value="Vegetarian">
                  Vegetarian
                </Chip>
                <Chip variant="filled" color="pink" value="Non-Veg">
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
            size="md"
            placeholder="Select"
            label="Blood Group"
            data={bloodGroups}
            // value={formValues.bloodGroup}
            withAsterisk
            // name="bloodGroup"
            // onChange={(event) => handleFormChange("bloodGroup", event)}
            // error={formErrors.bloodGroup}
          />
          <br />
          <Select
            size="md"
            placeholder="Select"
            label="Marital Status"
            // styles={{ label: labelStyles }}
            data={maritalStatuses}
            // value={formValues.maritalStatus}
            // withAsterisk
            // name="maritalStatus"
            // onChange={(event) => handleFormChange("maritalStatus", event)}
            // error={formErrors.maritalStatus}
          />
          <br />
          <Select
            size="md"
            placeholder="Select"
            label="Height"
            data={heights}
            // value={formValues.height}
            // withAsterisk
            // name="height"
            // onChange={(event) => handleFormChange("height", event)}
            // error={formErrors.height}
          />

          <br />

          <MultiSelect
            searchable
            size="md"
            placeholder="Select country"
            label="Born And Raised"
            // data={countries}
            data={countryList}
            name="livingIn"
            // defaultValue={formData.livingIn}
            // onChange={(event) => handleFormChange("livingIn", event)}
            // style={{ width: '180px' }}
            // sx={selectMobileStyles}
          />
          <br />
          <DatePickerInput
            clearable
            // defaultValue={today}
            // description="Years must be at least 18"
            label="Date of Birth"
            placeholder="Pick a date"
            mx="auto"
            size="sm"
            // maw={400}
            withAsterisk
            // value={data.basic2dob}
            // onChange={(event) => handleChange("basic2dob", event)}
            // error={fieldErrors.basic2dob}
            //disableBeforeDate={minDate} // Use the disableDate function
            // maxDate={generate18YearBefore()}
          />

          <div className="flex justify-end mt-10">
            <Button variant="filled" color="violet" size="sm">
              Save
            </Button>
          </div>
          <br />
        </div>
      </ReuseModal>

      <ReuseModal isOpen={isModal3Open} onClose={closeModal3} title="Religion">
        {" "}
        <div className="mt-25 mb-25">
          <br />

          <MultiSelect
            size="md"
            placeholder="Select"
            label="Religion"
            withAsterisk
            data={[
              "Islam",
              "Hinduism",
              "Christianity",
              "Buddhism",
              "Judaism",
              "Others",
            ]}
            name="religion"
            // defaultValue={formData.religion}
            // onChange={(event) => handleFormChange("religion", event)}
          />
          <br />
          <MultiSelect
            size="md"
            placeholder="Select"
            label="Native Language"
            withAsterisk
            defaultValue="20"
            data={motherTongues}
            // name="motherTongue"
            // value={formData.motherTongue}
            // onChange={(event) => handleFormChange("motherTongue", event)}
            searchable
            // style={{ width: '180px' }}
            // sx={selectMobileStyles}
          />
          <br />
          <Select
            size="md"
            placeholder="Select"
            label="Language"
            withAsterisk
            defaultValue="20"
            data={motherTongues}
            // name="motherTongue"
            // value={formData.motherTongue}
            // onChange={(event) => handleFormChange("motherTongue", event)}
            searchable
            // style={{ width: '180px' }}
            // sx={selectMobileStyles}
          />
          <div className="flex justify-end mt-10">
            <Button variant="filled" color="violet" size="sm">
              Save
            </Button>
          </div>
        </div>
      </ReuseModal>

      <ReuseModal
        isOpen={isModal4Open}
        onClose={closeModal4}
        title="Family Details"
      >
        {" "}
        <div className="mt-25 mb-25">
          <TextInput label="Father's Status" placeholder="Father's Status" />
          <br />
          <TextInput
            label="Mother's Status"
            placeholder="Mother's Status"
          />{" "}
          <br />
          <TextInput label="Family Location" placeholder="Family Location" />
          <br />
          <TextInput label="No. of Brothers" placeholder="No. of Brothers" />
          <br />
          <TextInput label="No. of Sisters" placeholder="No. of Sisters" />
          <br />
          <Select
            searchable
            size="md"
            placeholder="Select country"
            label="Country"
            // data={countries}
            data={contries}
            name="livingIn"
            onChange={handleCountryChange}
            value={selectedCountry}
            // defaultValue={formData.livingIn}
            // onChange={(event) => handleFormChange("livingIn", event)}
            // style={{ width: '180px' }}
            // sx={selectMobileStyles}
          />
          <br />
          <Select
            searchable
            size="md"
            placeholder="Select country"
            label="State"
            // data={countries}
            data={states}
            name="livingIn"
            onChange={handleStateChange}
            value={selectedState}
            // defaultValue={formData.livingIn}
            // onChange={(event) => handleFormChange("livingIn", event)}
            // style={{ width: '180px' }}
            // sx={selectMobileStyles}
          />
          <br />
          <Select
            searchable
            size="md"
            placeholder="Select country"
            label="City"
            // data={countries}
            data={cities}
            name="livingIn"
            onChange={handleCityChange}
            value={selectedCity}
            // defaultValue={formData.livingIn}
            // onChange={(event) => handleFormChange("livingIn", event)}
            // style={{ width: '180px' }}
            // sx={selectMobileStyles}
          />
          <br />
          <div className="flex justify-end mt-10">
            <Button variant="filled" color="violet" size="sm">
              Save
            </Button>
          </div>
        </div>
      </ReuseModal>

      <ReuseModal
        isOpen={isModal5Open}
        onClose={closeModal5}
        title="Education & Career"
      >
        <br />
        <MultiSelect
          size="md"
          placeholder="Select"
          label="Qualification"
          withAsterisk
          defaultValue="20"
          data={qualifications}
          name="profession"
          searchable
          // value={formData.profession}
          // onChange={(event) => handleFormChange("profession", event)}
        />
        <br />
        <Select
          size="md"
          placeholder="Select"
          label="Job Sector"
          withAsterisk
          defaultValue="20"
          data={worksWithsOwn}
          name="workingWith"
          searchable
        />

        <br />
        <Select
          size="md"
          placeholder="Select"
          label=" Job Title"
          withAsterisk
          defaultValue="20"
          data={professions}
          name="profession"
          searchable
          // value={formData.profession}
          // onChange={(event) => handleFormChange("profession", event)}
        />
        <br />

        <Autocomplete
          size="md"
          placeholder="Select"
          label="Company"
          data={companies}
          // value={formValues.company}
          withAsterisk
          name="company"
          // onChange={(event) => handleFormChange("company", event)}
          // error={formErrors.company}
          searchable
        />
        <br />
        <Select
          size="md"
          placeholder="Select"
          label="Yearly Income"
          data={incomes}
          // value={formValues.income}
          withAsterisk
          name="income"
          // onChange={(event) => handleFormChange("income", event)}
          // error={formErrors.income}
        />
        <br />
        <div className="flex justify-end mt-10">
          <Button variant="filled" color="violet" size="sm">
            Save
          </Button>
        </div>
      </ReuseModal>

      <ReuseModal isOpen={isModal6Open} onClose={closeModal6} title="Locations">
        <br />
        <TextInput label="Zip / Pin code" placeholder="Zip / Pin code" />
        <br />
        <Select
          searchable
          size="md"
          placeholder="Select country"
          label="Country"
          // data={countries}
          data={contries}
          name="livingIn"
          onChange={handleCountryChange}
          value={selectedCountry}
          // defaultValue={formData.livingIn}
          // onChange={(event) => handleFormChange("livingIn", event)}
          // style={{ width: '180px' }}
          // sx={selectMobileStyles}
        />
        <br />
        <Select
          searchable
          size="md"
          placeholder="Select country"
          label="State"
          // data={countries}
          data={states}
          name="livingIn"
          onChange={handleStateChange}
          value={selectedState}
          // defaultValue={formData.livingIn}
          // onChange={(event) => handleFormChange("livingIn", event)}
          // style={{ width: '180px' }}
          // sx={selectMobileStyles}
        />
        <br />
        <Select
          searchable
          size="md"
          placeholder="Select country"
          label="City"
          // data={countries}
          data={cities}
          name="livingIn"
          onChange={handleCityChange}
          value={selectedCity}
          // defaultValue={formData.livingIn}
          // onChange={(event) => handleFormChange("livingIn", event)}
          // style={{ width: '180px' }}
          // sx={selectMobileStyles}
        />
        <br />
        <div className="flex justify-end mt-10">
          <Button variant="filled" color="violet" size="sm">
            Save
          </Button>
        </div>
      </ReuseModal>
    </div>
  );
};

export default MyProfile;
