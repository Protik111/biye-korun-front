import {
  Anchor,
  Badge,
  Button,
  Divider,
  Progress,
  Accordion,
} from "@mantine/core";
import React, { useState } from "react";
import ThemeIconComp from "../global/ThemeIconComp";
import { IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { btnBackground } from "@/styles/library/mantine";
import { useSelector } from "react-redux";
import { imageUrl } from "@/staticData/image";
import { useRouter } from "next/navigation";
import useAxios from "@/hooks/axios/useAxios";
import Link from "next/link";
import { DisableRightClick } from "@/utils/DisableRightClick";
import ReuseModal from "../global/ReuseModal";
import VerifyModalBody from "../dashboard/VerifyModalBody";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  IoMdCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

import MatchesInfo from "../dashboard/MatchesInfo";
import { SearchCard } from "./SearchCard";
// import UniqueService from "./UniqueService";
// import DashBoardCounter from "./DashBoardCounter";

const SearchBoard = () => {
  const router = useRouter();
  const { userInfo } = useSelector((state) => state.user) || {};

  const { data, error, loading, refetch } = useAxios(
    "user/invitefriendship/all"
  );
  const {
    data: data2,
    error: error2,
    loading: loading2,
    refetch: refetch2,
  } = useAxios("user/recent-visitors"); //todo '/user/recent-visitors'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // console.log('data', data);

  // const statusSum = data?.data?.reduce((sum, item) => {
  //     if (item.status === 'pending') {
  //         return sum + 1;
  //     }
  //     return sum;
  // }, 0);

  let acceptedCount = 0;
  let pendingCount = 0;

  data?.data?.forEach((item) => {
    if (item.status === "accepted") {
      acceptedCount++;
    } else if (item.status === "pending") {
      pendingCount++;
    }
  });

  // console.log(userInfo);
  const url = userInfo?.profilePicture?.url ?? imageUrl;

  const {
    location: { city, residencyStatus } = {},
    doctrine: { caste } = {},
    appearance: { height } = {},
    education: { college, education } = {},
    family: { children, livingWith } = {},
    lifestyle: { diet, maritalStatus } = {},

    profession: {
      employer,
      income: { min, max } = {},
      occupation,
      workingWith,
    } = {},
    trait: { aboutMe } = {},
    phone,
    // profilePicture: { url } = {},
    fullName,
    firstName,
    lastName,
    userId,
    dateOfBirth,
    postedBy,
    religion,
    community,
    country,
    isPremium,
    isIdVerify,
    isPhoneVerified,
    isEmailVerified,
  } = userInfo ?? {};

  const handleClick = (num) => {
    router.push(`/settings/?state=${num}`);
  };

  return (
    <div className="myDashboard container">
      <div className="search_main pt-25">
        <div className="flex flex-gap-25 align-center  px-20">
          <div className="title">
            <p>Explore</p>
            <h3>Potential Partner</h3>
          </div>
          <div className="flex ml-15">
            <div className="search-input-container">
              <button className="search_btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.2617 21.2588L19.4098 19.4069M11.5395 20.3328C12.6946 20.3328 13.8384 20.1053 14.9057 19.6632C15.9729 19.2212 16.9426 18.5733 17.7594 17.7565C18.5762 16.9396 19.2241 15.9699 19.6662 14.9027C20.1082 13.8355 20.3358 12.6917 20.3358 11.5365C20.3358 10.3814 20.1082 9.23755 19.6662 8.17033C19.2241 7.10312 18.5762 6.13342 17.7594 5.31661C16.9426 4.4998 15.9729 3.85187 14.9057 3.40981C13.8384 2.96776 12.6946 2.74023 11.5395 2.74023C9.20654 2.74023 6.96916 3.66698 5.31954 5.31661C3.66991 6.96624 2.74316 9.20361 2.74316 11.5365C2.74316 13.8695 3.66991 16.1068 5.31954 17.7565C6.96916 19.4061 9.20654 20.3328 11.5395 20.3328Z"
                    stroke="white"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <input
                type="text"
                className="search-input"
                placeholder="Search"
              />
                      
            </div>
            <button className="btn_advance_search">Advanced Search</button>
          </div>
        </div>
        <SearchCard />
      </div>
      <ReuseModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Identity Verification"
      >
        <VerifyModalBody closeModal={closeModal} />
      </ReuseModal>
    </div>
  );
};

export default SearchBoard;
