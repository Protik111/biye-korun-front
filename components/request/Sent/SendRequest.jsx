"use client"
import useAxios from "@/hooks/axios/useAxios";
import NoDataFound from "../../global/NoDataFound";
import CardSkeleton from "../../global/CardSkeleton";
import { Badge, Button, Card, Group, Text } from "@mantine/core";
import { imageUrl, imageUrlFemale } from "@/staticData/image";
import { calculateAge } from "@/utils/calculateAge";
import { heightCalculator } from "@/utils/heightCalculator";
import Link from "next/link";


const SendRequest = () => {
    const { data, error, loading, refetch } = useAxios("user/invitefriendship/pending");

    const skeletons = new Array(5).fill();

    return (
        <>
            <div className="container recentlyViewed">
                {!loading ?
                    <>
                        {data?.data?.map((item, i) => (
                            <div key={i} className="recentlyViewed__singleContainer">
                                <Card shadow="sm" padding="lg" radius="md" withBorder>
                                    <Card.Section className="pointer">
                                        <Link href={`/view-profile/${item?.recipient?._id}`}>
                                            <img
                                                src={item?.recipient?.profilePicture?.url?.large || (item?.gender === "male" ? imageUrl : imageUrlFemale)}
                                                height={250}
                                                alt="Profile"
                                                fit="contain"
                                                className="recently_img"
                                            />
                                        </Link>
                                    </Card.Section>

                                    <Group position="apart" mt="md" mb="xs">
                                        <Text weight={500}>{item?.recipient?.firstName + " " + item?.recipient?.lastName}</Text>
                                        <Badge color="pink" variant="light" size="md">
                                            Online 2h ago
                                        </Badge>
                                    </Group>

                                    <Text size="sm" color="dimmed">
                                        {calculateAge(item?.recipient?.dateOfBirth)} yrs, {heightCalculator(item?.recipient?.appearance?.height)}, {item?.recipient?.religion},
                                        <br />
                                        {item?.recipient?.community}, {item?.recipient?.doctrine?.caste}, Lives in {item?.recipient?.country}
                                    </Text>

                                    {/* <h3 className="text-center pt-15">Connect with {item?.recipient?.gender === "Male" ? 'him' : 'her'}?</h3> */}
                                    <h3 className="text-center pt-15">Send Biye Korun Request?</h3>

                                    <Button disabled variant="filled" color="pink" fullWidth mt="md" radius="md">
                                        Already sent request
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

            </div>
            {data?.data?.length === 0 && <div className="text-center">
                <h2 className="text-center">You didn't view any profile yet!</h2>
            </div>}

            {data?.data?.length === 0 && <NoDataFound></NoDataFound>}
        </>
    )
}

export default SendRequest