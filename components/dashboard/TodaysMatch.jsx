import { Anchor, Button, Skeleton, Tooltip } from "@mantine/core";
import BasicProfile from "./BasicProfile";
import DetailedProfile from "./DetailedProfile";
import useAxios from "@/hooks/axios/useAxios";
import { useEffect, useState } from "react";
import { imageUrl } from "@/staticData/image";
import CardSkeleton from "../global/CardSkeleton";

const TodaysMatch = () => {
  const [limit, setLimit] = useState(1)
  const [index, setIndex] = useState(0);
  const { data, error, loading, refetch } = useAxios("user/getMatches", "POST", null, {}, {
    page: 1,
    limit,
    sort_by: "newest",
    isToday: true
  });

  const { data: data2, error: error2, loading: loading2, refetch: refetch2 } = useAxios("user/view-profile", "POST", null, {}, {
    userId: data?.data[index]?._id
  });

  console.log('data today', data);

  const handleNext = () => {
    setLimit(limit + 1);
    refetch();
    // setIndex((prev) => prev + 1)
  }

  useEffect(() => {
    if (data?.data?.length > 0 && index < data.data.length - 1) {
      setIndex((prev) => prev + 1);
    }
  }, [data, index]);

  const isDisable = data?.data?.length >= data?.total;

  // console.log('isDisable', isDisable);

  console.log('data', data);


  return (
    <div className="todaysMatch container">
      <>
        <div className="flex justify-between align-center">
          <h2 className="text-center mb-15">
            Here are Today's top Matches for you. Connect with them now!
          </h2>
          <button disabled={isDisable} onClick={() => handleNext()} className={`${isDisable ? 'disable' : ''} border-1 container-box-bg btn-clicked`}>
            <Tooltip
              label={data?.data?.length >= data?.total ? "This is the last profile" : "Click to see next match"}
              color="pink"
              withArrow
            >

              <img style={{ height: '35px', objectFit: 'cover' }} className={`${isDisable ? 'disable' : 'pointer'}`} src="/profile/next-chevron.svg" alt="next"></img>
            </Tooltip>
          </button>
        </div>

        <div className="todaysMatch__wrapper">
          {!loading ? <div className="todaysMatch__wrapper--requestBox">
            <div className="requestBox-container">
              <div className="requestPhoto">
                <img src={data?.data[index]?.profilePicture?.url?.medium || imageUrl} alt="Request Photo" />
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
            {!loading ? <BasicProfile profile={data?.data[index]}></BasicProfile> : <div className="container-box-bg p-30">
              <CardSkeleton></CardSkeleton>
            </div>}

            {!loading ? <DetailedProfile profile={data?.data[index]}></DetailedProfile> : <div className="container-box-bg p-30 mt-20 min-vh-75">
              <CardSkeleton></CardSkeleton>
            </div>}

          </div>
        </div>
      </>
    </div>
  );
};

export default TodaysMatch;
