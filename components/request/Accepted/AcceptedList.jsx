"use client";
import useAxios from "@/hooks/axios/useAxios";
import NoDataFound from "../../global/NoDataFound";
import CardSkeleton from "../../global/CardSkeleton";
import { Badge, Button, Card, Group, Text, Tooltip } from "@mantine/core";
import { imageUrl } from "@/staticData/image";
import { calculateAge } from "@/utils/calculateAge";
import { heightCalculator } from "@/utils/heightCalculator";
import Link from "next/link";

const AcceptedList = () => {
  const { data, error, loading, refetch } = useAxios(
    "user/friendship/accepted"
  );
  console.log("data", data?.data);
  const skeletons = new Array(5).fill();

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
                          imageUrl
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

                  <Text size="sm" color="dimmed">
                    {calculateAge(item?.requester?.dateOfBirth)} yrs,{" "}
                    {heightCalculator(item?.requester?.appearance?.height)},{" "}
                    {item?.requester?.religion},
                    <br />
                    {item?.requester?.community},{" "}
                    {item?.requester?.doctrine?.caste}, Lives in{" "}
                    {item?.requester?.country}
                  </Text>

                  {/* <h3 className="text-center pt-15">
                    Connect with{" "}
                    {item?.requester?.gender === "Male" ? "him" : "her"}?
                  </h3> */}

                  <div className="flex justify-between flex-gap-5">
                    <Button
                      variant="filled"
                      color="pink"
                      fullWidth
                      mt="md"
                      radius="md"
                    >
                      Unfriend
                    </Button>
                    <Tooltip label="Comming Soon..." color="pink">
                      <Button
                        variant="filled"
                        color="gray"
                        fullWidth
                        mt="md"
                        radius="md"
                      >
                        Message
                      </Button>
                    </Tooltip>
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
          <h2 className="text-center">There is no accepted request!</h2>
        </div>
      )}

      {data?.data?.length === 0 && <NoDataFound></NoDataFound>}
    </>
  );
};

export default AcceptedList;
