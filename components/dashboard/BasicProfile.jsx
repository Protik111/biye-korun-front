import useAxiosPost from "@/hooks/axios/useAxiosPost";
import { calculateAge } from "@/utils/calculateAge";
import { heightCalculator } from "@/utils/heightCalculator";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import { Badge, Button, Divider, List, ThemeIcon } from "@mantine/core";
import {
  IconCircleCheck,
  IconCircleDashed,
  IconLock,
  IconMessage2,
  IconMessages,
  IconRocket,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import LoaderWithText from "../global/LoaderWithText";
import axios from "axios";

const message = {
  success: "Invitation sent successfully!",
  error: "Error occurred!",
};

const BasicProfile = ({ profile, fetchSingleProfile }) => {
  const {
    data,
    loading,
    error,
    postData: sendPostRequest,
  } = useAxiosPost("user/single-invite", null, message);

  // console.log('data, loading, error,', data, loading, error);

  const handleSendRequest = () => {
    // console.log('data');

    sendPostRequest(
      {
        recipient: profile?._id,
      },
      fetchSingleProfile
    );

    // if (data?.success) {
    //   notifySuccess("Invitation sent successfully!")
    // } else {
    //   notifyError(error?.response?.data?.message)
    // }
  };

  // console.log('basic profile', profile);

  const {
    location: { city, residencyStatus } = {},
    doctrine: { caste, motherTongue } = {},
    appearance: { height } = {},
    education: { college, education } = {},
    family: { children, livingWith } = {},
    lifestyle: { diet, maritalStatus } = {},
    profession: {
      employer,
      // income: { min, max } = {},
      occupation,
      workingWith,
    } = {},
    educationCareer: { income: { min, max } = {} } = {},
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
  // console.log('profile', profile);

  const handleDeclineAccept = (requisterId, status) => {
    let statusGlobal = "";

    if (status == "accepted") {
      statusGlobal = "accepted";
    }
    if (status == "declined") {
      statusGlobal = "declined";
    }
    if (status == "cancel") {
      statusGlobal = "cancel";
    }

    const payload = {
      status: statusGlobal,
      friendshipId: requisterId,
    };

    // console.log('payload', payload);
    axios
      .patch(`user/updatefriends`, payload)
      .then((res) => {
        if (statusGlobal === "accepted") {
          notifySuccess("Request accepted successfully!");
          fetchSingleProfile();
          // refetch();
        }

        if (statusGlobal === "declined") {
          notifySuccess("Request declined successfully!");
          fetchSingleProfile();
          // refetch();
        }

        if (statusGlobal === "cancel") {
          notifySuccess("Request cancelled successfully!");
          fetchSingleProfile();
          // refetch();
        }
      })
      .catch((err) => {
        notifyError(err.response.data.message);
      });
  };

  return (
    <div className="basicProfile container-box-bg p-15">
      <div className="basiscProfile__top">
        <div className="flex align-center justify-between">
          <div className="flex align-center justify-between flex-gap-5">
            <h3>{firstName + " " + lastName}</h3>

            {/* <IconLock color="#E64980"></IconLock> */}
          </div>

          {/* {!friendships ? (
            <Button
              rightIcon={<IconRocket />}
              sx={{ backgroundColor: "#e64980", color: "white" }}
              color="pink"
              variant="white"
              onClick={handleSendRequest}
            >
              Send Request
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
          )} */}
          {!friendships ? (
            <Button
              rightIcon={<IconRocket />}
              sx={{ backgroundColor: "#e64980", color: "white" }}
              color="pink"
              variant="white"
              disabled={loading}
              onClick={() => handleSendRequest()}
            >
              {loading ? (
                <>
                  <LoaderWithText
                    text="Connecting.."
                    color="white"
                  ></LoaderWithText>
                </>
              ) : (
                <>Send Request</>
              )}
            </Button>
          ) : friendships?.status === "pending" ? (
            <Button
              // disabled
              rightIcon={<IconX />}
              // sx={{ backgroundColor: "#e64980", color: "white" }}
              color="pink"
              variant="outline"
              onClick={() => handleDeclineAccept(friendships?._id, "cancel")}
            >
              Cancel Request
            </Button>
          ) : friendships?.status === "accepted" ? (
            <Button
              // disabled
              rightIcon={<IconMessage2 />}
              sx={{ backgroundColor: "#e64980", color: "white" }}
              color="pink"
              variant="white"
              onClick={() => notifyError("Coming soon!")}
            >
              Message
            </Button>
          ) : friendships?.status === "declined" ? (
            <Button
              disabled
              rightIcon={<IconRocket />}
              sx={{ backgroundColor: "#e64980", color: "white" }}
              color="pink"
              variant="white"
              // onClick={handleSendRequest}
            >
              Declined Request
            </Button>
          ) : (
            <Link href={`/view-profile/${_id}`}>
              <Button
                rightIcon={<IconRocket />}
                sx={{ backgroundColor: "#e64980", color: "white" }}
                color="pink"
                variant="white"
                // onClick={handleSendRequest}
              >
                View Profile
              </Button>
            </Link>
          )}
        </div>

        {profile?.postedBy == "Myself" && (
          <div>
            <p className="mt-5 opacity-8  run_text">
              This profile is created and maintained by Friends & Family.
            </p>
          </div>
        )}
        <div className="flex align-center mt-15">
          <div className="flex align-center flex-gap-5 flex-item">
            {/* <IconMessages color="#E64980"></IconMessages> */}
            {/* <p>Online 2d ago</p> */}
          </div>
          <div className="flex-item">{/* <p>You & her</p> */}</div>
          <div className="flex-item">{/* <p>You & her</p> */}</div>
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
            {/* {dateOfBirth && <List.Item>
              {calculateAge(dateOfBirth)} yrs{" "}
              {height ? `, ${heightCalculator(height)}` : ""}
            </List.Item>}

            {community && <List.Item>{community}</List.Item>}
            {religion && <List.Item>
              {religion}
            </List.Item>}
            {city && <List.Item>{city}</List.Item>} */}

            {dateOfBirth && (
              <List.Item>
                <b>Age:</b> {calculateAge(dateOfBirth)}
              </List.Item>
            )}

            {height && (
              <List.Item>
                <b>Height:</b> {heightCalculator(height)}
              </List.Item>
            )}

            {motherTongue && (
              <List.Item>
                {/* <b>Native Language:</b>{" "}
                {community?.map((item, i) => (
                  <>
                    {item} {community.length - 1 !== i ? "," : ""}{" "}
                  </>
                ))} */}
                <b>Native Language:</b> {motherTongue || ""}
              </List.Item>
            )}

            {religion && (
              <List.Item>
                <b>Religion: </b>
                {religion}
              </List.Item>
            )}
            {city && (
              <List.Item>
                <b>City: </b>
                {city}
              </List.Item>
            )}
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
            {maritalStatus && (
              <List.Item>
                <b>Marital Status: </b>
                {maritalStatus}
              </List.Item>
            )}

            {country && (
              <List.Item>
                {" "}
                <b>Country: </b> {country}
              </List.Item>
            )}

            {/* <List.Item>Works at </List.Item> */}
            {min && max ? (
              <List.Item>
                <b>Yearly Income: </b> ${min} -{" "}
                {`${max === "Above" ? "" : "$"}` + max + ""}
              </List.Item>
            ) : (
              <List.Item>
                <b>Yearly Income: </b> ${"1000"} - ${"30000"}
              </List.Item>
            )}
          </List>
        </div>
      </div>
    </div>
  );
};

export default BasicProfile;
