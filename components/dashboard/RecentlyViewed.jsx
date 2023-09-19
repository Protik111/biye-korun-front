"use client";

import useAxios from "@/hooks/axios/useAxios";
import { calculateAge } from "@/utils/calculateAge";
import { heightCalculator } from "@/utils/heightCalculator";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import CardSkeleton from "../global/CardSkeleton";
import useAxiosPost from "@/hooks/axios/useAxiosPost";

const skeletons = new Array(5).fill();
const message = {
  success: 'Invitation sent successfully!',
  error: 'Error occurred!'
}

const RecentlyViewed = () => {
  const { data, error, loading, refetch } = useAxios("user/view-profile");
  const { data: data2, loading: loading2, error: error2, postData: sendPostRequest } = useAxiosPost('user/single-invite', null, message);

  console.log('data, loading, error,', data, loading, error);


  const handleSendRequest = (userId) => {
    // console.log('userId', userId);
    sendPostRequest({
      recipient: userId
    });
  };

  return (
    <div className="container recentlyViewed">
      {!loading ?
        <>
          {data?.data?.map((item, i) => (
            <div key={i} className="recentlyViewed__singleContainer">
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src={item?.visit?.profilePicture?.url?.large}
                    height={250}
                    alt="Norway"
                    fit="contain"
                  />
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

                <h3 className="text-center pt-15">Connect with her?</h3>

                <Button onClick={() => handleSendRequest(item?.visit?._id)} variant="filled" color="pink" fullWidth mt="md" radius="md">
                  Yes
                </Button>
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

      {data?.data?.length === 0 && <h2 className="text-center">You didn't view any profile yet!</h2>}
    </div>
  );
};

export default RecentlyViewed;
