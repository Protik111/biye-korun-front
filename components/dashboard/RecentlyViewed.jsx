"use client";

import useAxios from "@/hooks/axios/useAxios";
import { calculateAge } from "@/utils/calculateAge";
import { heightCalculator } from "@/utils/heightCalculator";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import CardSkeleton from "../global/CardSkeleton";
import useAxiosPost from "@/hooks/axios/useAxiosPost";
import NoDataFound from "../global/NoDataFound";
import { imageUrl } from "@/staticData/image";
import Link from "next/link";

const skeletons = new Array(5).fill();
const message = {
  success: 'Invitation sent successfully!',
  error: 'Error occurred!'
}

const RecentlyViewed = () => {
  const { data, error, loading, refetch } = useAxios("user/view-profile");
  const { data: data2, loading: loading2, error: error2, postData: sendPostRequest } = useAxiosPost('user/single-invite', null, message);

  // console.log('data, loading, error,', data, loading, error);


  const handleSendRequest = (userId) => {
    // console.log('userId', userId);
    sendPostRequest({
      recipient: userId
    });
  };


  // console.log('data', data);

  return (
    <>
      <div className="container recentlyViewed">
        {!loading ?
          <>
            {data?.data?.map((item, i) => (
              <div key={i} className="recentlyViewed__singleContainer">
                {console.log('item', item)}
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section className="pointer">
                    <Link href={`/view-profile/${item?.visit?._id}`}>
                      <img
                        src={item?.visit?.profilePicture?.url?.large || imageUrl}
                        height={250}
                        alt="Profile"
                        fit="contain"
                        className="recently_img"
                      />
                    </Link>
                  </Card.Section>

                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{item?.visit?.firstName + " " + item?.visit?.lastName}</Text>
                    <Badge color="pink" variant="light" size="md">
                      Online 2h ago
                    </Badge>
                  </Group>

                  <Text size="sm" color="dimmed">
                    {calculateAge(item?.visit?.dateOfBirth)} yrs, {heightCalculator(item?.visit?.appearance?.height)}, {item?.visit?.religion},
                    <br />
                    {item?.visit?.community}, {item?.visit?.doctrine?.caste}, Lives in {item?.visit?.country}
                  </Text>

                  <h3 className="text-center pt-15">Connect with {item?.visit?.gender === "Male" ? 'him' : 'her'}?</h3>

                  {
                    item?.visit?.friendships ?
                      <Button disabled onClick={() => handleSendRequest(item?.visit?._id)} variant="filled" color="pink" fullWidth mt="md" radius="md">
                        Sent Request
                      </Button> :
                      <Button onClick={() => handleSendRequest(item?.visit?._id)} variant="filled" color="pink" fullWidth mt="md" radius="md">
                        Yes
                      </Button>
                  }
                </Card>
              </div>
            ))}
          </> :
          <>
            {
              skeletons?.map((item, i) => <div className="mt-15" key={i}>
                <CardSkeleton></CardSkeleton>
              </div>)
            }
          </>}

      </div>
      {data?.data?.length === 0 && <div className="text-center">
        <h2 className="text-center">You didn't view any profile yet!</h2>
      </div>}

      {data?.data?.length === 0 && <NoDataFound></NoDataFound>}
    </>
  );
};

export default RecentlyViewed;
