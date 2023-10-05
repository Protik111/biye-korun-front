import useAxiosPost from "@/hooks/axios/useAxiosPost";
import { btnBackground } from "@/styles/library/mantine";
import { calculateAge } from "@/utils/calculateAge"
import { heightCalculator } from "@/utils/heightCalculator"
import { Avatar, Button } from "@mantine/core";
import LoaderWithText from "../global/LoaderWithText";
import Link from "next/link";
import { DisableRightClick } from "@/utils/DisableRightClick";

const message = {
    success: 'Invitation sent successfully!',
    error: 'Error occurred!'
}

const RecentVisitors = ({ profile, refetch }) => {
    const { data, loading, error, postData: sendPostRequest } = useAxiosPost('user/single-invite', null, message);

    const handleSendRequest = (userId) => {
        // console.log('userId', userId);

        sendPostRequest({
            recipient: userId
        }, refetch);
    };

    // console.log('profile', profile);

    const {
        friendships,
        userId,
    } = profile?.owner || {};


    // Check if 'friendships' exists in profile and has a 'status' property
    const friendshipsStatus = profile && friendships && friendships.status;

    // Use the value of 'friendshipsStatus' for the 'status' property
    const status = friendshipsStatus !== undefined ? friendshipsStatus : null;

    // console.log('friendshipsStatus, status', status);

    return (
        <div className="single container-box-bg py-15">
            <Link href={`/view-profile/${profile?.owner?._id}`} className="flex justify-center align-center">
                <Avatar
                    onContextMenu={(e) => DisableRightClick(e)}
                    size="xl"
                    radius="xl"
                    src={profile?.owner?.profilePicture?.url?.medium}
                    alt="it's me"
                />
            </Link>
            <div className="mt-10">
                <Link style={{ color: 'black' }} href={`/view-profile/${profile?.owner?._id}`} >
                    <h3>{profile?.owner?.firstName + " " + profile?.owner?.lastName}</h3>
                    <p>{calculateAge(profile?.owner?.dateOfBirth)}{" "}{heightCalculator(profile?.owner?.appearance?.height)}{" "}{profile?.owner?.community}</p>
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

            {!status ? <Button
                size="xs"
                radius="xl"
                // leftIcon={<IconArrowNarrowLeft />}
                style={btnBackground} type="button"
                className={`button mt-10`}
                disabled={loading}
                onClick={() => handleSendRequest(profile?.owner?._id)}
            >
                {loading ? (
                    <>
                        <LoaderWithText text="Connecting.." color="white"></LoaderWithText>
                    </>
                ) : (
                    <>
                        Connect now
                    </>
                )}
            </Button> :
                <Button
                    disabled
                    size="xs"
                    radius="xl"
                    // leftIcon={<IconArrowNarrowLeft />}
                    // style={btnBackground} type="button"
                    className={`button mt-10`}
                // onClick={handleSendRequest}
                >
                    Request Pending
                </Button>}
        </div>
    )
}

export default RecentVisitors