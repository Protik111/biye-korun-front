import { Anchor, Skeleton } from "@mantine/core";
import BasicProfile from "./BasicProfile";
import DetailedProfile from "./DetailedProfile";
import useAxios from "@/hooks/axios/useAxios";
import { useState } from "react";
import { imageUrl } from "@/staticData/image";
import CardSkeleton from "../global/CardSkeleton";

const TodaysMatch = () => {
  const { data, error, loading, refetch } = useAxios("user/getMatches", "POST", null, {}, {
    page: 1,
    limit: 10,
    sort_by: "newest",
    isToday: true
  });

  console.log('data', data);

  return (
    <div className="todaysMatch container">
      <h2 className="text-center mb-15">
        Here are Today's top Matches for you. Connect with them now!
      </h2>

      <div className="todaysMatch__wrapper">
        {data?.data?.length > 0 ? <div className="todaysMatch__wrapper--requestBox">
          <div className="requestBox-container">
            <div className="requestPhoto">
              <img src={data?.data[0]?.profilePicture?.url?.medium || imageUrl} alt="Request Photo" />
            </div>
            {/* <div className="text-center">
              <Anchor href="/" target="_blank">
                Request a photo
              </Anchor>
            </div> */}
          </div>
        </div> : <div className="requestBox-container container-box-bg p-30">
          <Skeleton height={150} circle mb="xl" />
          <Skeleton height={8} radius="xl" width="85%" />
          <Skeleton height={8} mt={6} radius="xl" />
        </div>}

        <div className="todaysMatch__wrapper--contentBox">
          {data?.data?.length > 0 ? <BasicProfile profile={data?.data[0]}></BasicProfile> : <div className="container-box-bg p-30">
            <CardSkeleton></CardSkeleton>
          </div>}

          {data?.data?.length > 0 ? <DetailedProfile profile={data?.data[0]}></DetailedProfile> : <div className="container-box-bg p-30 mt-20 min-vh-75">
            <CardSkeleton></CardSkeleton>
          </div>}

        </div>
      </div>
    </div>
  );
};

export default TodaysMatch;
