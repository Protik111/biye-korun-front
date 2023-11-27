import React, { useState } from "react";
import { Button } from "@mantine/core";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import useAxios from "@/hooks/axios/useAxios";
import { useRouter } from "next/navigation";
import { imageUrl } from "@/staticData/image";
import { abbreviateName } from "@/utils/abbreviation";
import { calculateAge } from "@/utils/calculateAge";
import { heightCalculator } from "@/utils/heightCalculator";
import CenteredModal from "@/components/global/CenteredModal";
import { FormProvider } from "@/context/FormContext";
import Form from "@/components/multiStepRegistration/Form";
import { useEffect } from "react";
import useAnimation from "@/hooks/common/useAnimation";

export const SearchCard = ({ profile, loading: loadingPrev, refetch }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  // const { data, error, loading, refetch } = useAxios("user/public-profile");
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => setModalOpen(false);

  const handleRegister = () => {
    router.push("/login");
  };

  const handleRedirect = () => {
    router.push("/login");
  };

  const { makeAnimation } = useAnimation(600);

  useEffect(() => {
    makeAnimation();
  }, []);

  return (
    <div>
      {/* {data?.data?.length > 0 ? ( */}
      <div className="card-container">
        {/* {data?.data?.map((profile, i) => {
            return ( */}
        <div className="card">
          <div className="header">
            <div className="flex flex-gap-10 justify-between align-center">
              <div className="flex flex-gap-10 align-center">
                <h3 className="name heading3V3">
                  {" "}
                  {abbreviateName(profile?.firstName + " " + profile?.lastName)}
                </h3>
                <p className="hide_mobile">#{profile?.userId}</p>
              </div>
              <div>
                <BiDotsHorizontalRounded />
              </div>
            </div>
            {/* <div>
                    <p>#{profile.userId}</p>
                  </div> */}
            {/* <p className="subtitle paragraphV3">
                      {profile?.educationCareer?.occupation
                        ? profile?.educationCareer?.occupation
                        : "Software Engineer"}
                    </p> */}
          </div>
          <div className="content">
            <div className="details">
              <p className="hide_desktop">#{profile?.userId}</p>
              <p className="subtitle paragraphV3">
                {profile?.educationCareer?.occupation
                  ? profile?.educationCareer?.occupation
                  : "Software Engineer"}
              </p>
              <p className="paragraphV3">
                {" "}
                {profile?.dateOfBirth
                  ? `${calculateAge(profile?.dateOfBirth)} years`
                  : "18 years"}
                ,{" "}
                {heightCalculator(profile?.basicInfo?.height) ||
                  `5 feet 10 inches`}
              </p>
              <p className="paragraphV3 text_bold">
                {`${profile?.location.city ? profile?.location.city : ""} ${
                  profile?.location.country
                }`}
              </p>
            </div>
          </div>
          <div className="px-20">
            <div className="border_line" />
          </div>
          <div className="footer  ">
            <div className="flex flex-gap-10 ">
              <div className="pointer circle_img">
                <img src="/dashboard/love.svg" alt="" />
              </div>
              <div className="pointer circle_img">
                <img src="/dashboard/chat.svg" alt="" />
              </div>
              <div className="pointer circle_img">
                <img src="/dashboard/star.svg" alt="" />
              </div>
            </div>

            <button
              className="custom-button custom_btn_size "
              // onClick={handleRedirect}
            >
              Send Request
            </button>
            {/* <Button
                    variant="filled"
                    color="#9908F5"
                    size="md"
                    radius="md"
                  >
                    Button
                  </Button> */}
          </div>
          <div className="avatar">
            <img
              src={profile?.profilePicture?.url?.medium || imageUrl}
              alt={profile?.name}
            />
          </div>
        </div>
        {/* );
          })} */}
      </div>
      {/* ) : (
        <>No data found</>
      )} */}
    </div>
  );
};
