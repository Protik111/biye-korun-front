import useAxiosPost from "@/hooks/axios/useAxiosPost";
import { calculateAge } from "@/utils/calculateAge";
import { heightCalculator } from "@/utils/heightCalculator";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import { Badge, Button, Divider, List, ThemeIcon } from "@mantine/core";
import {
  IconCircleCheck,
  IconCircleDashed,
  IconLock,
  IconMessages,
  IconRocket,
} from "@tabler/icons-react";
import React from "react";

const message = {
  success: "Invitation sent successfully!",
  error: "Error occurred!",
};

const BasicProfile = ({ profile }) => {
  const {
    data,
    loading,
    error,
    postData: sendPostRequest,
  } = useAxiosPost("user/single-invite", null, message);

  // console.log('data, loading, error,', data, loading, error);

  const handleSendRequest = () => {
    // console.log('data');
    sendPostRequest({
      recipient: profile?._id,
    });

    // if (data?.success) {
    //   notifySuccess("Invitation sent successfully!")
    // } else {
    //   notifyError(error?.response?.data?.message)
    // }
  };

  // console.log('basic profile', profile);

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
    profilePicture: { url } = {},
    firstName,
    lastName,
    friendships,
    userId,
    dateOfBirth,
    postedBy,
    religion,
    community,
    country,
  } = profile || {};

  // console.log('country', country);

  // Check if 'friendships' exists in profile and has a 'status' property
  const friendshipsStatus =
    profile && profile.friendships && profile.friendships.status;

  // Use the value of 'friendshipsStatus' for the 'status' property
  const status = friendshipsStatus !== undefined ? friendshipsStatus : null;

  const friendships2 = true;

  // console.log('status', status, friendships);

  return (
    <div className="basicProfile container-box-bg p-15">
      <div className="basiscProfile__top">
        <div className="flex align-center justify-between">
          <div className="flex align-center justify-between flex-gap-5">
            <h3>{firstName + " " + lastName}</h3>
            <IconLock color="#E64980"></IconLock>
          </div>
          {!friendships ? (
            <Button
              rightIcon={<IconRocket />}
              sx={{ backgroundColor: "#e64980", color: "white" }}
              color="pink"
              variant="white"
              onClick={handleSendRequest}
            >
              Connect with her
            </Button>
          ) : (
            <Button
              disabled
              rightIcon={<IconRocket />}
              sx={{ backgroundColor: "#e64980", color: "white" }}
              color="pink"
              variant="white"
              // onClick={handleSendRequest}
            >
              Request Pending
            </Button>
          )}
        </div>
        <div className="flex align-center mt-15">
          <div className="flex align-center flex-gap-5 flex-item">
            <IconMessages color="#E64980"></IconMessages>
            <p>Online 2d ago</p>
          </div>
          <div className="flex-item">
            <p>You & her</p>
          </div>
        </div>
      </div>
      <Divider mt={10} size="sm" />

      <div className="basicProfile__details mt-15">
        <div className="basicProfile__details--left">
          <List
            spacing="xs"
            size="md"
            center
            icon={
              <ThemeIcon color="teal" size={14} radius="xl">
                <IconCircleCheck size="12" />
              </ThemeIcon>
            }
          >
            <List.Item>
              {calculateAge(dateOfBirth)} yrs{" "}
              {height ? `, ${heightCalculator(height)}` : ""}
            </List.Item>

            <List.Item>{community}</List.Item>
            <List.Item>
              {religion} {caste ? `, ${caste}` : ""}
            </List.Item>
            {city && <List.Item>{city}</List.Item>}
          </List>
        </div>

        <div className="basicProfile__details--right">
          <List
            spacing="xs"
            size="md"
            center
            icon={
              <ThemeIcon color="teal" size={14} radius="xl">
                <IconCircleCheck size="12" />
              </ThemeIcon>
            }
          >
            {maritalStatus && <List.Item>{maritalStatus}</List.Item>}
            {country && <List.Item>Lives in {country}</List.Item>}
            {/* <List.Item>Works at </List.Item> */}
            {!min && max ? (
              <List.Item> {max}K monthly</List.Item>
            ) : min ? (
              <List.Item>
                Earns Upto BDT {min}K - {max}K monthly
              </List.Item>
            ) : (
              <></>
            )}
          </List>
        </div>
      </div>
    </div>
  );
};

export default BasicProfile;
