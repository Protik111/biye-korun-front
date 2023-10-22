"use client";

import {
  Alert,
  Anchor,
  Button,
  Divider,
  Tooltip,
  Textarea,
} from "@mantine/core";
import { IconPlayerRecordFilled } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import ThemeIconComp from "../global/ThemeIconComp";
import axios from "axios";
import { btnBackground, labelStyles } from "@/styles/library/mantine";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { heightCalculator } from "@/utils/heightCalculator";
import { calculateAge } from "@/utils/calculateAge";
import { notSpecfied } from "@/staticData/image";
import { format } from "date-fns";
import Link from "next/link";
import ReuseModal from "../global/ReuseModal";

import { notifyError, notifySuccess } from "@/utils/showNotification";
import BasicLifeStyle from "../my-profile/BasicLifeStyle";
import Religion from "../my-profile/Religion";
import FamilyDetails from "../my-profile/FamilyDetails";
import EducationCareer from "../my-profile/EducationAndCareer";
import LocationsModal from "../my-profile/Locations";
import { loadUserData } from "@/redux/features/user/userSlice";
import LoaderWithText from "../global/LoaderWithText";
import { imageUrl, imageUrlFemale } from "@/staticData/image";
import DisplayFormattedContent from "../global/DisplayFormatedContent";
import { Tiptap } from "../global/TipTap";

const MyProfile = () => {
  const { userInfo } = useSelector((state) => state.user) || {};
  const [opened, { open, close }] = useDisclosure(false);
  const partnerPreferencesRef = useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    location: { city, residencyStatus, zipCode } = {},
    doctrine: { caste, motherTongue } = {},
    appearance: { height, weight } = {},
    education: { college, education } = {},
    family: {
      familyCountry,
      familyCity,
      familyState,
      motherProfession,
      fatherProfession,
      type,
    } = {},
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
    bloodGroup,
  } = userInfo || {};
  // console.log("Weight", userInfo);
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);
  const [isModal5Open, setIsModal5Open] = useState(false);
  const [isModal6Open, setIsModal6Open] = useState(false);
  const [description, setDescription] = useState(aboutMe);
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
    basicDetails,
    educationCareer,
    location,
    community: communityData,
  } = userInfo?.partnerpreference || {};

  const url = profilePicture ? profilePicture.url : null;
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    aboutContent: aboutMe ? aboutMe : "",
    firstName: "",
    diet: diet ? diet : "",
    bloodGroup: bloodGroup ? bloodGroup : "",
    maritalStatus: maritalStatus ? maritalStatus : "",
    height: height ? height : "",
    country: country ? country : "",
    dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : "",
  });

  const scrollToPartnerPreferences = () => {
    if (partnerPreferencesRef.current) {
      partnerPreferencesRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleFormChange = (name, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // const { aboutContent } = formValues;

    const data = {
      trait: { aboutMe: description },
    };
    setLoading(true);
    axios
      .patch("/user/update-user-profile", data)
      .then((res) => {
        notifySuccess("Profile updated successfully!");
        setLoading(false);
        dispatch(loadUserData());
        setTimeout(() => {
          closeModal1();
        }, 4000);
      })
      .catch((err) => {
        setLoading(false);
        notifyError(err.response.data.message);
      });
  };
  console.log(userInfo.gender);
  return (
    <div className="myProfile container">
      <div className="myProfile__top container-box-bg p-15">
        <Alert
          title={
            <h2>
              {firstName + " " + lastName}
              <p>User ID: {userId}</p>
            </h2>
          }
          color="red"
        ></Alert>

        <div className="myProfile__top--wrapper">
          <div className="profile-img">
            <img
              src={
                url?.large ||
                (userInfo?.gender === "Male" ? imageUrl : imageUrlFemale)
              }
              alt="Profile"
            />
          </div>
          <div>
            <div className="profile-info">
              <div>
                <div className="single-item">
                  <p className="left">Age & Height</p>
                  <p className="right">
                    {calculateAge(dateOfBirth)} & {heightCalculator(height)}
                  </p>
                </div>
                <div className="single-item">
                  <p className="left">Marital Status</p>
                  <p className="right"> {maritalStatus || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Posted By</p>
                  <p className="right"> {postedBy || notSpecfied}</p>
                </div>
              </div>

              <div>
                <div className="single-item">
                  <p className="left">Weight</p>
                  <p className="right"> {weight} KG</p>
                </div>
                <div className="single-item">
                  <p className="left">Religion</p>
                  <p className="right"> {religion || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Country</p>
                  <p className="right"> {country || notSpecfied} </p>
                </div>
              </div>
            </div>
            <Divider my={10}></Divider>

            <div className="manage-profile mt-25 border-1 p-15 mr-5 rounded-10">
              <h3 className="secondary-text">Manage Profile</h3>
              <div className="mt-10 flex align-center flex-gap-15 flex-wrap">
                <div className="flex align-center flex-gap-5 flex-basis-200">
                  <ThemeIconComp
                    iconComp={<IconPlayerRecordFilled size="10" />}
                    size="10"
                  ></ThemeIconComp>

                  <Anchor onClick={openModal1}>Edit About</Anchor>
                </div>

                <div className="flex align-center flex-gap-5 flex-basis-200">
                  <ThemeIconComp
                    iconComp={<IconPlayerRecordFilled size="10" />}
                    size="10"
                  ></ThemeIconComp>

                  <Anchor onClick={openModal2}>Edit Basic & Lifestyle</Anchor>
                </div>

                <div className="flex align-center flex-gap-5 flex-basis-200">
                  <ThemeIconComp
                    iconComp={<IconPlayerRecordFilled size="10" />}
                    size="10"
                  ></ThemeIconComp>

                  <Anchor onClick={openModal3}>Edit Religion</Anchor>
                </div>
              </div>

              <div className="mt-10 flex align-center flex-gap-15 flex-wrap">
                <div className="flex align-center flex-gap-5 flex-basis-200">
                  <ThemeIconComp
                    iconComp={<IconPlayerRecordFilled size="10" />}
                    size="10"
                  ></ThemeIconComp>

                  <Anchor onClick={openModal4}>Edit Family Details</Anchor>
                </div>

                <div className="flex align-center flex-gap-5 flex-basis-200">
                  <ThemeIconComp
                    iconComp={<IconPlayerRecordFilled size="10" />}
                    size="10"
                  ></ThemeIconComp>

                  <Anchor onClick={openModal5}>Edit Education & Career</Anchor>
                </div>

                <div className="flex align-center flex-gap-5 flex-basis-200">
                  <ThemeIconComp
                    iconComp={<IconPlayerRecordFilled size="10" />}
                    size="10"
                  ></ThemeIconComp>

                  <Anchor onClick={openModal6}>Edit Locations</Anchor>
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
              <Tooltip label="About" color="red">
                <h3 className="secondary-text">About</h3>
              </Tooltip>
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
            <p className="mt-5"></p>
            <div className="p-5">
              <DisplayFormattedContent markdown={aboutMe} />
            </div>
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
                  <p className="right"> {calculateAge(dateOfBirth)} Years</p>
                </div>
                <div className="single-item">
                  <p className="left">Marital Status</p>
                  <p className="right"> {maritalStatus || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Date of Birth</p>
                  <p className="right">
                    {format(new Date(dateOfBirth), "MM/dd/yyyy")}
                  </p>
                </div>
                <div className="single-item">
                  <p className="left">Height</p>
                  <p className="right"> {heightCalculator(height)}</p>
                </div>
                <div className="single-item">
                  <p className="left">Born and Raised</p>
                  <p className="right"> {country}</p>
                </div>
                <div className="single-item">
                  <p className="left">Diet</p>
                  <p className="right"> {diet || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Blood Group</p>
                  <p className="right"> {bloodGroup || notSpecfied}</p>
                </div>
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
                  <p className="right"> {religion}</p>
                </div>
                <div className="single-item">
                  <p className="left">Language</p>
                  <p className="right"> {community?.join(", ")} </p>
                </div>
                <div className="single-item">
                  <p className="left">Native Language</p>
                  <p className="right"> {motherTongue}</p>
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
                  <p className="left">Father's Profession</p>
                  <p className="right"> {fatherProfession || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Mother's Profession</p>
                  <p className="right"> {motherProfession || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Family Location</p>
                  <p className="right">
                    {familyCountry || notSpecfied}, {familyCity || notSpecfied},{" "}
                    {familyState || notSpecfied}
                  </p>
                </div>
                <div className="single-item">
                  <p className="left">Family Type</p>
                  <p className="right"> {type || notSpecfied}</p>
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
                  <p className="right"> {education || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">College(s) Attended</p>
                  <p className="right"> {college || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Yearly Income - Min/Max</p>
                  <p className="right">
                    {"$" + min + "" || notSpecfied} /{" "}
                    {"$" + max + "" || notSpecfied}
                  </p>
                </div>

                <div className="single-item">
                  <p className="left">Job Sector</p>
                  <p className="right"> {workingWith || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Job Title</p>
                  <p className="right"> {occupation || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">Employer Name</p>
                  <p className="right"> {employer || notSpecfied}</p>
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
                    {city}, {country}
                  </p>
                </div>
                <div className="single-item">
                  <p className="left">State of Residence</p>
                  <p className="right"> {city}</p>
                </div>
                <div className="single-item">
                  <p className="left">Residency Status</p>
                  <p className="right"> {residencyStatus || notSpecfied}</p>
                </div>
                <div className="single-item">
                  <p className="left">ZIP Code</p>
                  <p className="right"> {zipCode || notSpecfied}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-15"
            id="partner-preferences"
            ref={partnerPreferencesRef}
          >
            <Alert title={<h3>Partner Preferences</h3>} color="red"></Alert>

            {/* Basic Info */}
            <div className="family-details info-section mt-20">
              <div className="flex justify-between align-center">
                <Tooltip label="Basic Info" color="red">
                  <h3 className="secondary-text">Basic Info</h3>
                </Tooltip>
                <Link href="/partner-preferences">
                  <Button
                    variant="light"
                    size="xs"
                    radius="xl"
                    color="pink"
                    className={`button mt-10`}
                  >
                    Edit
                  </Button>
                </Link>
              </div>
              <Divider mt={5}></Divider>
              <div className="profile-info mt-10">
                <div>
                  <div className="single-item">
                    <p className="left">Age</p>
                    <p className="right">
                      {basicDetails?.ageRange.min} to{" "}
                      {basicDetails?.ageRange.max}
                    </p>
                  </div>
                  <div className="single-item">
                    <p className="left">Height</p>
                    <p className="right">
                      {heightCalculator(basicDetails?.heightRange.min)} to{" "}
                      {heightCalculator(basicDetails?.heightRange.max)}
                    </p>
                  </div>
                  <div className="single-item">
                    <p className="left">Marital Status</p>
                    <p className="right">
                      <span></span> {basicDetails?.maritalStatus?.join(", ")}
                    </p>
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
                <Link href="/partner-preferences">
                  <Button
                    variant="light"
                    size="xs"
                    radius="xl"
                    color="pink"
                    className={`button mt-10`}
                  >
                    Edit
                  </Button>
                </Link>
              </div>
              <Divider mt={5}></Divider>
              <div className="profile-info mt-10">
                <div>
                  <div className="single-item">
                    <p className="left">Religion</p>
                    <p className="right"> Islam </p>
                  </div>

                  <div className="single-item">
                    <p className="left">Native Language</p>
                    <p className="right">
                      {" "}
                      {communityData?.motherTongue.map((item, index) => {
                        return (
                          <React.Fragment key={index}>
                            {item}
                            {index !== communityData?.motherTongue.length - 1 &&
                              ", "}
                          </React.Fragment>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Location Details */}
            <div className="family-details info-section mt-20">
              <div className="flex justify-between align-center">
                <Tooltip label="Location Details" color="red">
                  <h3 className="secondary-text">Location Details</h3>
                </Tooltip>
                <Link href="/partner-preferences">
                  <Button
                    variant="light"
                    size="xs"
                    radius="xl"
                    color="pink"
                    className={`button mt-10`}
                  >
                    Edit
                  </Button>
                </Link>
              </div>
              <Divider mt={5}></Divider>
              <div className="profile-info mt-10">
                <div>
                  <div className="single-item">
                    <p className="left">Country</p>
                    <p className="right">
                      {" "}
                      {location?.country.map((item, index) => {
                        return (
                          <React.Fragment key={index}>
                            {item}
                            {index !== location?.country.length - 1 && ", "}
                          </React.Fragment>
                        );
                      })}
                    </p>
                  </div>

                  <div className="single-item">
                    <p className="left">Residency Status </p>
                    <p className="right">
                      {" "}
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
              </div>
            </div>

            {/* Education & Career */}
            <div className="family-details info-section mt-20">
              <div className="flex justify-between align-center">
                <Tooltip label="Education & Career" color="red">
                  <h3 className="secondary-text">Education & Career</h3>
                </Tooltip>
                <Link href="/partner-preferences">
                  <Button
                    variant="light"
                    size="xs"
                    radius="xl"
                    color="pink"
                    className={`button mt-10`}
                  >
                    Edit
                  </Button>
                </Link>
              </div>
              <Divider mt={5}></Divider>
              <div className="profile-info mt-10">
                <div>
                  <div className="single-item">
                    <p className="left">Qualification</p>
                    <p className="right">
                      {educationCareer?.qualification.map((item, index) => {
                        return (
                          <React.Fragment key={index}>
                            {item}
                            {index !==
                              educationCareer?.qualification.length - 1 && ", "}
                          </React.Fragment>
                        );
                      })}
                    </p>
                  </div>

                  <div className="single-item">
                    <p className="left">Job Sector</p>
                    <p className="right">
                      {" "}
                      {educationCareer?.profession.map((item, index) => {
                        return (
                          <React.Fragment key={index}>
                            {item}
                            {index !== educationCareer?.profession.length - 1 &&
                              ", "}
                          </React.Fragment>
                        );
                      })}
                    </p>
                  </div>
                  <div className="single-item">
                    <p className="left">Job Title</p>
                    <p className="right">
                      {" "}
                      {educationCareer?.workingWith.map((item, index) => {
                        return (
                          <React.Fragment key={index}>
                            {item}
                            {index !==
                              educationCareer?.workingWith.length - 1 && ", "}
                          </React.Fragment>
                        );
                      })}
                    </p>
                  </div>
                  <div className="single-item">
                    <p className="left">Yearly Income</p>
                    <p className="right">
                      ${educationCareer?.annualIncome.min} to $
                      {educationCareer?.annualIncome.max}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReuseModal
        isOpen={isModal1Open}
        onClose={closeModal1}
        title="Add Personal Details"
      >
        {" "}
        <br />
        {/* <Textarea
          autosize
          minRows={5}
          maxRows={10}
          value={formValues.aboutContent}
          name="aboutContent"
          onChange={(event) =>
            handleFormChange("aboutContent", event.currentTarget.value)
          }
        /> */}
        <Tiptap setDescription={setDescription} description={description} />
        <div className="flex justify-end mt-10">
          <Button
            variant="filled"
            color="violet"
            size="sm"
            onClick={handleSubmit}
          >
            {loading ? (
              <LoaderWithText text="Saving.."></LoaderWithText>
            ) : (
              "Save"
            )}
          </Button>
        </div>
      </ReuseModal>
      <ReuseModal
        isOpen={isModal2Open}
        onClose={closeModal2}
        title="Basic & Lifestyle"
      >
        <BasicLifeStyle closeModal2={closeModal2} />
      </ReuseModal>

      <ReuseModal isOpen={isModal3Open} onClose={closeModal3} title="Religion">
        <Religion closeModal3={closeModal3} />
      </ReuseModal>

      <ReuseModal
        isOpen={isModal4Open}
        onClose={closeModal4}
        title="Family Details"
      >
        <FamilyDetails closeModal4={closeModal4} />
      </ReuseModal>

      <ReuseModal
        isOpen={isModal5Open}
        onClose={closeModal5}
        title="Education & Career"
      >
        <EducationCareer closeModal5={closeModal5} />
      </ReuseModal>

      <ReuseModal isOpen={isModal6Open} onClose={closeModal6} title="Locations">
        <LocationsModal closeModal6={closeModal6} />
      </ReuseModal>
    </div>
  );
};

export default MyProfile;
