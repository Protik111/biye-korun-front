import useAxiosPost from "@/hooks/axios/useAxiosPost";
import { btnBackground } from "@/styles/library/mantine";
import { calculateAge } from "@/utils/calculateAge"
import { heightCalculator } from "@/utils/heightCalculator"
import { Avatar, Button } from "@mantine/core";
import LoaderWithText from "../global/LoaderWithText";

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

    const {
        friendships,
        userId,
    } = profile?.visit || {};


    // Check if 'friendships' exists in profile and has a 'status' property
    const friendshipsStatus = profile && friendships && friendships.status;

    // Use the value of 'friendshipsStatus' for the 'status' property
    const status = friendshipsStatus !== undefined ? friendshipsStatus : null;

    console.log('friendshipsStatus, status', status);

    return (
        <div className="single container-box-bg py-15">
            <Avatar
                size="xl"
                radius="xl"
                src={profile?.visit?.profilePicture?.url?.medium}
                alt="it's me"
            />
            <div className="mt-10">
                <h3>{profile?.visit?.firstName + " " + profile?.visit?.lastName}</h3>
                <p>{calculateAge(profile?.visit?.dateOfBirth)}{" "}{heightCalculator(profile?.visit?.appearance?.height)}{" "}{profile?.visit?.community}</p>
            </div>
            {/* <Button
                size="xs"
                radius="xl"
                // leftIcon={<IconArrowNarrowLeft />}
                style={btnBackground} type="button"
                className={`button mt-10`}
                onClick={() => handleSendRequest(profile?.visit?._id)}
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
                onClick={() => handleSendRequest(profile?.visit?._id)}
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