"use client";
import useAxios from "@/hooks/axios/useAxios";
import NoDataFound from "../../global/NoDataFound";
import CardSkeleton from "../../global/CardSkeleton";
import { Badge, Button, Card, Group, Text } from "@mantine/core";
import { imageUrl, imageUrlFemale } from "@/staticData/image";
import { calculateAge } from "@/utils/calculateAge";
import { heightCalculator } from "@/utils/heightCalculator";
import Link from "next/link";
import { notifyError, notifySuccess } from "@/utils/showNotification";
import axios from "axios";

const RecievedList = () => {
  const { data, error, loading, refetch } = useAxios("user/friendship/pending");

  const skeletons = new Array(5).fill();

  const handleDeclineAccept = (requisterId, status) => {
    let statusGlobal = "";

    if (status == "accepted") {
      statusGlobal = "accepted";
    }
    if (status == "declined") {
      statusGlobal = "declined";
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
      })
      .catch((err) => {
        notifyError(err.response.data.message);
      });
  };

  return (
    <>
      <div className="container recentlyViewed">
        {!loading ? (
          <>
            {data?.data?.map((item, i) => (
              <div key={i} className="recentlyViewed__singleContainer">
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section className="pointer">
                    <Link href={`/view-profile/${item?.requester?._id}`}>
                      <img
                        src={
                          item?.requester?.profilePicture?.url?.large ||
                          (item?.gender === "male" ? imageUrl : imageUrlFemale)
                        }
                        height={250}
                        alt="Profile"
                        fit="contain"
                        className="recently_img"
                      />
                    </Link>
                  </Card.Section>

                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>
                      {item?.requester?.firstName +
                        " " +
                        item?.requester?.lastName}
                    </Text>
                    {/* <Badge color="pink" variant="light" size="md">
                      Online 2h ago
                    </Badge> */}
                  </Group>

                  <Text size="sm">
                    <div>
                      <b> Age </b> :{" "}
                      {calculateAge(item?.requester?.basicInfo?.dateOfBirth)} yrs
                    </div>
                    <div>
                      <b>Height</b> :{" "}
                      {heightCalculator(item?.requester?.basicInfo?.height)}
                    </div>
                    <div>
                      <b>Religion</b>: {item?.requester?.community?.religion}
                    </div>
                    {item?.requester?.community?.nativeLanguage && (
                      <div>
                        <b>Native Language</b>:{" "}
                        {item?.requester?.community?.nativeLanguage}
                      </div>
                    )}
                    <div>
                      <b>Country</b>: {item?.requester?.location?.country}
                    </div>
                  </Text>
                  {/* <h3 className="text-center pt-15">Connect with {item?.requester?.gender === "Male" ? 'him' : 'her'}?</h3> */}
                  {/* <h3 className="text-center pt-15">Send Biye Korun Request?</h3> */}

                  <div className="flex justify-center align-center flex-gap-15">
                    <Button
                      onClick={() => handleDeclineAccept(item?._id, "declined")}
                      variant="outline"
                      color="pink"
                      mt="sm"
                      radius="sm"
                      fullWidth
                    >
                      Decline request
                    </Button>
                    <Button
                      onClick={() => handleDeclineAccept(item?._id, "accepted")}
                      variant="filled"
                      mt="md"
                      radius="sm"
                      fullWidth
                    >
                      Accept request
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </>
        ) : (
          <>
            {skeletons?.map((item, i) => (
              <div className="mt-15" key={i}>
                <CardSkeleton></CardSkeleton>
              </div>
            ))}
          </>
        )}
      </div>
      {data?.data?.length === 0 && (
        <div className="text-center">
          <h2 className="text-center">There are no recieved requests! </h2>
        </div>
      )}

      {data?.data?.length === 0 && <NoDataFound></NoDataFound>}
    </>
  );
};

export default RecievedList;
