import { Anchor, Button, Skeleton, Tooltip } from "@mantine/core";
import BasicProfile from "./BasicProfile";
import DetailedProfile from "./DetailedProfile";
import useAxios from "@/hooks/axios/useAxios";
import { useEffect, useState } from "react";
import { imageUrl } from "@/staticData/image";
import CardSkeleton from "../global/CardSkeleton";
import NoDataFound from "../global/NoDataFound";
import axios from "axios";
import { useParams, usePathname, useRouter } from "next/navigation";

const ViewProfile = () => {
    const [limit, setLimit] = useState(1)
    const [index, setIndex] = useState(0);
    const { userId } = useParams()

    const { data, error, loading, refetch } = useAxios(`user/user-profile/${userId}`);

    // console.log('data today', userId);

    const handleNext = () => {
        setLimit(limit + 1);
    }

    useEffect(() => {
        if (data?.data?.length > 0 && index < data.data.length - 1) {
            setIndex((prev) => prev + 1);
        }
    }, [data, index]);

    const isDisable = data?.data?.length >= data?.total;

    return (
        <div className="todaysMatch container">
            <>
                <div className="todaysMatch__wrapper">
                    {data?.data ? <div className="todaysMatch__wrapper--requestBox">
                        <div className="requestBox-container">
                            <div className="requestPhoto">
                                <img src={data?.data?.profilePicture?.url?.medium || imageUrl} alt="Request Photo" />
                            </div>
                            {/* <div className="text-center">
              <Anchor href="/" target="_blank">
                Request a photo
              </Anchor>
            </div> */}
                        </div>
                    </div> :
                        !loading && data?.data ?
                            <>
                            </> :
                            <div className="requestBox-container container-box-bg p-30">
                                <Skeleton height={150} circle mb="xl" />
                                <Skeleton height={8} radius="xl" width="85%" />
                                <Skeleton height={8} mt={6} radius="xl" />
                            </div>
                    }

                    <div className="todaysMatch__wrapper--contentBox">
                        {data?.data ? <BasicProfile profile={data?.data}></BasicProfile> :
                            !loading && data?.data ?
                                <></> :
                                <div className="container-box-bg p-30">
                                    <CardSkeleton></CardSkeleton>
                                </div>}

                        {data?.data ? <DetailedProfile profile={data?.data}></DetailedProfile> :
                            !loading && data?.data ?
                                <></> :
                                <div className="container-box-bg p-30 mt-20 min-vh-75">
                                    <CardSkeleton></CardSkeleton>
                                </div>}

                    </div>
                </div>

                <div>
                    {
                        !loading && data?.data?.length === 0 ? <NoDataFound></NoDataFound> : <></>
                    }
                </div>
            </>
        </div>
    )
}

export default ViewProfile