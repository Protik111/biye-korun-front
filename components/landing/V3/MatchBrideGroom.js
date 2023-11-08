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

export const MatchBrideGroom = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { data, error, loading, refetch } = useAxios("user/public-profile");
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => setModalOpen(false);

  const handleRegister = () => {
    if (!isAuthenticated) {
      setModalOpen(true);
    } else {
      router.push("/my-matches");
    }
  };

  const handleRedirect = () => {
    router.push("/login");
  };

  const { makeAnimation } = useAnimation(600);

  useEffect(() => {
    makeAnimation()
  }, [])

  return (
    <div className="matches_main">
      <div className="container">
        <div className="flex justify-between align-center  match_title_for_mobile">
          <div className="title" data-aos="fade-right">
            <h1 className="heading1V3">Match Bride & Grooms</h1>
          </div>
          <div className="see_more_btn">
            <Button size="xs" style={{ color: "red", background: "#FFF" }}>
              See More
            </Button>
          </div>
        </div>
        {data?.data?.length > 0 ? (
          <div class="card-container">
            {data?.data?.map((item, i) => {
              return (
                <div className="card">
                  <div className="header">
                    <div className="flex flex-gap-10 justify-between align-center">
                      <div className="flex flex-gap-10 align-center">
                        <h3 className="name heading3V3">
                          {" "}
                          {abbreviateName(
                            item?.firstName + " " + item?.lastName
                          )}
                        </h3>
                        <span>#{item.userId}</span>
                      </div>
                      <div>
                        <BiDotsHorizontalRounded />
                      </div>
                    </div>
                    <p className="subtitle paragraphV3">
                      {item?.educationCareer?.occupation
                        ? item?.educationCareer?.occupation
                        : "Software Engineer"}
                    </p>
                  </div>
                  <div className="content">
                    <div className="details">
                      <p className="paragraphV3">
                        {" "}
                        {item?.dateOfBirth
                          ? `${calculateAge(item?.dateOfBirth)} years`
                          : "18 years"}
                        ,{" "}
                        {heightCalculator(item?.basicInfo?.height) ||
                          `5 feet 10 inches`}
                      </p>
                      <p className="paragraphV3">
                        {`${item?.location.city ? item?.location.city : ""} ${item?.location.country
                          }`}
                      </p>
                    </div>
                  </div>
                  <div className="footer">
                    <button className="custom-button" onClick={handleRedirect}>
                      Send Request
                    </button>
                    <button
                      className="custom-button btn_clr"
                      onClick={handleRedirect}
                    >
                      View Profile
                    </button>
                  </div>
                  <div class="avatar">
                    <img
                      src={item?.profilePicture?.url?.medium || imageUrl}
                      alt={item?.name}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <>No data found</>
        )}
        <div className="register_btn flex justify-center">
          <button
            className="secondary-btn-v3 reg_btn_clr flex justify-center align-center flex-gap-5"
            onClick={handleRegister}
          >
            {!isAuthenticated ? "Register Now" : "Let's Begin"}{" "}
            <BsArrowRight></BsArrowRight>
          </button>
        </div>
      </div>
      {modalOpen && (
        <CenteredModal
          modalOpen={modalOpen}
          handleModalClose={handleModalClose}
          modalTitle={<h3 className="text-center">Let's Create an Account!</h3>}
        >
          {/* <MultistepRegistration></MultistepRegistration> */}
          <FormProvider>
            <Form handleModalClose={handleModalClose}></Form>
          </FormProvider>
        </CenteredModal>
      )}
    </div>
  );
};
