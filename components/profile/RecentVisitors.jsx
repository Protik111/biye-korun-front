import useAxiosPost from "@/hooks/axios/useAxiosPost";
import { btnBackground } from "@/styles/library/mantine";
import { calculateAge } from "@/utils/calculateAge";
import { heightCalculator } from "@/utils/heightCalculator";
import { Avatar, Button } from "@mantine/core";
import LoaderWithText from "../global/LoaderWithText";
import Link from "next/link";
import { DisableRightClick } from "@/utils/DisableRightClick";
import { IconMessage2, IconRocket, IconX } from "@tabler/icons-react";
import { notifyError } from "@/utils/showNotification";

const message = {
  success: "Invitation sent successfully!",
  error: "Error occurred!",
};

const RecentVisitors = ({ profile, refetch }) => {
  const {
    data,
    loading,
    error,
    postData: sendPostRequest,
  } = useAxiosPost("user/single-invite", null, message);

  const handleSendRequest = (userId) => {
    // console.log('userId', userId);

    sendPostRequest(
      {
        recipient: userId,
      },
      refetch
    );
  };

  console.log('profile', profile);

  const { friendships, userId } = profile?.owner || {};

  // Check if 'friendships' exists in profile and has a 'status' property
  const friendshipsStatus = profile && friendships && friendships.status;

  // Use the value of 'friendshipsStatus' for the 'status' property
  const status = friendshipsStatus !== undefined ? friendshipsStatus : null;

  // console.log('friendshipsStatus, status', status);

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

  return (
    <div className="single container-box-bg py-25">
      <Link
        href={`/view-profile/${profile?.owner?._id}`}
        className="flex justify-center align-center"
      >
        <Avatar
          onContextMenu={(e) => DisableRightClick(e)}
          size="lg"
          radius="xl"
          src={profile?.owner?.profilePicture?.url?.small}
          alt="it's me"
        />
      </Link>
      <div className="mt-10">
        <Link
          style={{ color: "black" }}
          href={`/view-profile/${profile?.owner?._id}`}
        >
          <h3>{profile?.owner?.firstName + " " + profile?.owner?.lastName}</h3>
          <p>Age: {calculateAge(profile?.owner?.basicInfo?.dateOfBirth)} </p>
          <p>Height: {heightCalculator(profile?.owner?.basicInfo?.height)} </p>
          <p>
            {/* Native Language: */}
            {/* {profile?.owner?.community} */}
          </p>
        </Link>
      </div>
      {/* <Button
                size="xs"
                radius="xl"
                // leftIcon={<IconArrowNarrowLeft />}
                style={btnBackground} type="button"
                className={`button mt-10`}
                onClick={() => handleSendRequest(profile?.owner?._id)}
            >
                Connect Now
            </Button> */}

      {/* {!status ? (
        <Button
          size="xs"
          radius="xl"
          // leftIcon={<IconArrowNarrowLeft />}
          style={btnBackground}
          type="button"
          className={`button`}
          disabled={loading}
          onClick={() => handleSendRequest(profile?.owner?._id)}
        >
          {loading ? (
            <>
              <LoaderWithText
                text="Connecting.."
                color="white"
              ></LoaderWithText>
            </>
          ) : (
            <>Connect now</>
          )}
        </Button>
      ) : (
        <Button
          disabled
          size="xs"
          radius="xl"
          // leftIcon={<IconArrowNarrowLeft />}
          // style={btnBackground} type="button"
          className={`button`}
        // onClick={handleSendRequest}
        >
          Request Pending
        </Button>
      )} */}

      {!friendships ? (
        <Button
          rightIcon={<IconRocket />}
          sx={{ backgroundColor: "#e64980", color: "white" }}
          size="xs"
          radius="xl"
          color="pink"
          variant="white"
          disabled={loading}
          onClick={() => handleSendRequest(profile?.owner?._id)}
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
          size="xs"
          radius="xl"
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
          size="xs"
          radius="xl"
          rightIcon={<IconMessage2 size={16} />}
          sx={{ backgroundColor: "#e64980", color: "white" }}
          color="pink"
          variant="white"
          onClick={() => notifyError("Coming soon!")}
        >
          Message
        </Button>
      ) : friendships?.status === "declined" ? (
        <Button
          size="xs"
          radius="xl"
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
            size="xs"
            radius="xl"
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
  );
};

export default RecentVisitors;
