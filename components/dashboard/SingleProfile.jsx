import useAxiosPost from "@/hooks/axios/useAxiosPost";
import { imageUrl, imageUrlFemale, notSpecfied } from "@/staticData/image";
import { calculateAge } from "@/utils/calculateAge";
import { heightCalculator } from "@/utils/heightCalculator";
import {
  AspectRatio,
  Badge,
  Button,
  Divider,
  List,
  Overlay,
  ThemeIcon,
} from "@mantine/core";
import {
  IconCircleCheck,
  IconCircleDashed,
  IconLock,
  IconMessages,
  IconRocket,
  IconX,
} from "@tabler/icons-react";
import React from "react";
import LoaderWithText from "../global/LoaderWithText";
import Link from "next/link";
import { DisableRightClick } from "@/utils/DisableRightClick";
import { useSelector } from "react-redux";
import axios from "axios";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import { IconMessage2 } from "@tabler/icons-react";

const message = {
  success: "Invitation sent successfully!",
  error: "Error occurred!",
};

const SingleProfile = ({ profile, loading: loadingPrev, refetch }) => {
  const { userInfo } = useSelector((state) => state.user);
  const {
    data,
    loading,
    error,
    postData: sendPostRequest,
  } = useAxiosPost("user/single-invite", null, message);


  const {
    location: { city, residencyStatus, country } = {},
    // doctrine: { caste } = {},
    // appearance: { height } = {},
    education: { college, education } = {},
    family: { children, livingWith } = {},
    basicInfo: { diet, maritalStatus, height, dateOfBirth, bloodGroup } = {},
    profession: {
      employer,
      // income: { min, max } = {},
      occupation,
      workingWith,
    } = {},
    educationCareer: { income: { min, max } = {} } = {},
    trait: { aboutMe } = {},
    phone,
    profilePicture: { url, isBlur, isVisible } = {},
    firstName,
    lastName,
    friendships,
    userId,
    postedBy,
    community: { language, nativeLanguage, religion },
    // country,
    _id,
  } = profile || {};

  const { isPremium = {} } = userInfo || {};

  const photoVisible = isPremium || (!isPremium && isVisible);
  const photoVisibleWithBlur = isPremium || (!isPremium && isBlur);

  // Check if 'friendships' exists in profile and has a 'status' property
  const friendshipsStatus =
    profile && profile.friendships && profile.friendships.status;

  // Use the value of 'friendshipsStatus' for the 'status' property
  const status = friendshipsStatus !== undefined ? friendshipsStatus : null;

  const handleSendRequest = (id) => {
    sendPostRequest(
      {
        recipient: id,
      },
      refetch
    );
  };


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
          refetch();
        }

        if (statusGlobal === "declined") {
          notifySuccess("Request declined successfully!");
          refetch();
        }

        if (statusGlobal === "cancel") {
          notifySuccess("Request cancelled successfully!");
          refetch();
        }
      })
      .catch((err) => {
        notifyError(err.response.data.message);
      });
  };


  let friendShipStatus = false;
  const statusList = ['pending', 'accepted', 'declined'];
  if (statusList.includes(friendships?.status)) {
    friendShipStatus = true
  }

  // console.log("profile", profile);
  // console.log('friendships', friendships);
  // console.log('friendShipStatus', friendShipStatus);


  return (
    <div className="singleProfile container-box-bg p-15">
      <div className="singleProfile__image cursor">
        <Link href={`/view-profile/${_id}`}>
          {photoVisible ? (
            <img
              onContextMenu={(e) => DisableRightClick(e)}
              src={
                url?.medium ||
                (profile?.gender === "male" ? imageUrl : imageUrlFemale)
              }
              alt="profile"
            />
          ) : (
            // <AspectRatio ratio={10 / 10} onContextMenu={(e) => DisableRightClick(e)}>
            //   <img
            //     src={url?.medium || imageUrl}
            //     alt="Profile"
            //   />
            //   <Overlay className="rounded-10" color="#000" backgroundOpacity={0.55} blur={5} />
            // </AspectRatio>
            <>
              <img src={url?.medium || imageUrl} alt="Profile" />
            </>
          )}
        </Link>
      </div>
      <div>
        <div className="basiscProfile__top">
          <div className="basiscProfile__top--wrapper flex align-center justify-between">
            <div className="flex align-center justify-between flex-gap-5">
              <Link style={{ color: "black" }} href={`/view-profile/${_id}`}>
                <h3>{firstName + " " + lastName}</h3>
              </Link>
              {/* <IconLock color="#E64980"></IconLock> */}
              {/* <Badge variant="outline" color="pink">
                2-Way
              </Badge> */}
            </div>
            {!friendships ? (
              <Button
                rightIcon={<IconRocket />}
                sx={{ backgroundColor: "#e64980", color: "white" }}
                color="pink"
                variant="white"
                disabled={loading}
                onClick={() => handleSendRequest(_id)}
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
                variant="filled"
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
            )
              :
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
            }
          </div>
          <div className="flex align-center mt-15">
            <div className="flex align-center flex-gap-5 flex-item">
              {/* <IconMessages color="#E64980"></IconMessages>
              <p>Online 2d ago</p> */}
            </div>
            <div className="flex-item">{/* <p>You & her</p> */}</div>
          </div>
          <Divider mt={10} size="sm" />
        </div>

        <div className="singleProfile__details mt-15">
          <div className="singleProfile__details--left">
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

              {/* {community?.length > 0 && (
                <List.Item>
                  <b>Native Language:</b>{" "}
                  {community?.map((item, i) => (
                    <>
                      {item} {community.length - 1 !== i ? "," : ""}{" "}
                    </>
                  ))}
                </List.Item>
              )} */}

              {nativeLanguage && (
                <List.Item>
                  {/* <b>Native Language:</b>{" "}
                {community?.map((item, i) => (
                  <>
                    {item} {community.length - 1 !== i ? "," : ""}{" "}
                  </>
                ))} */}
                  <b>Native Language:</b> {nativeLanguage || ""}
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

          <div className="singleProfile__details--right">
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
                  <b>Yearly Income: </b> ${min} - ${max}
                </List.Item>
              ) : (
                <List.Item>
                  <b>Yearly Income: </b> {notSpecfied}
                </List.Item>
              )}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfile;
