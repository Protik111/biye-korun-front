import {
  Anchor,
  Badge,
  Button,
  Divider,
  Progress,
  Accordion,
  Pagination,
} from "@mantine/core";
import React, { useRef, useState } from "react";
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
import CenteredModal from "../global/CenteredModal";
import AdvancedSearch from "./AdvancedSearch";
import { useEffect } from "react";
import useCountry from "@/hooks/common/useCountry";
import NoDataFound from "../global/NoDataFound";
import CardSkeleton from "../global/CardSkeleton";
import { useSetState } from "@mantine/hooks";
import axios from "axios";
import { toast } from "react-toastify";
import { notifyInfo } from "@/utils/showNotification";
// import UniqueService from "./UniqueService";
// import DashBoardCounter from "./DashBoardCounter";

const SearchBoard = () => {
  const router = useRouter();
  const { userInfo } = useSelector((state) => state.user) || {};
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = () => setModalOpen(false);

  const [searchInput, setSearchInput] = useState("");
  const [matchUrl, setMatchurl] = useState('user/getMatches')

  const [filterData, setFilterData] = useState({
    marital: ["all"],
    religion: "",
    motherTongue: [],
    country: [],
    education: [],
    query: ''
  });

  const [activePage, setActivePage] = useState(1);
  const [countryList, setCountryList] = useState([]);
  const pageSize = 9;

  const { marital, religion, nativeLanguage, country, education, query } =
    filterData;
  const skeletons = new Array(5).fill();

  const payload = {
    page: activePage,
    limit: pageSize,
    sort_by: "newest",
  };

  if (marital.length > 0) {
    payload.marital = marital;
  }

  if (nativeLanguage?.length !== 0) {
    payload.nativeLanguage = nativeLanguage;
  }

  if (country?.length !== 0) {
    payload.country = country;
  }

  if (education?.length !== 0) {
    payload.education = education;
  }

  if (religion?.length !== 0) {
    payload.religion = religion;
  }

  if (query?.length !== 0) {
    payload.query = query
  }

  const { data, error, loading, refetch } = useAxios(
    matchUrl,
    "POST",
    null,
    {},
    payload
  );

  //for page count in the pagination component
  const totalCount = Math.ceil(data?.total / pageSize);

  useEffect(() => {
    refetch();
  }, [filterData, activePage]);


  useEffect(() => {
    setMatchurl('user/getMatches')
  }, [])

  // console.log('data', data);

  const handleChange = (name, value) => {
    setFilterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePageChange = (page) => {
    // console.log('page', page);
    setActivePage(page);
  };

  const { data: data2, error: error2, loading: loading2 } = useCountry();

  useEffect(() => {
    if (!loading2?.country) {
      const convertedList = data2?.country?.map((item) => ({
        label: item?.name,
        value: item?.name,
        code: item?.iso2,
      }));

      setCountryList(convertedList);
    }
  }, [data2]);

  const handleClearFilter = () => {
    setMatchurl('user/getMatches')

    setFilterData({
      marital: ["all"],
      religion: "",
      motherTongue: [],
      country: [],
      education: [],
      query: ""
    });

    setModalOpen(false)
  };

  const handleSearch = () => {
    if (searchInput?.length !== 0) {
      setMatchurl('user/search')
      setFilterData((prev) => ({
        ...prev,
        ['query']: searchInput,
      }));
      refetch();
    } else {
      setFilterData((prev) => ({
        ...prev,
        ['query']: "",
      }));
      setMatchurl('user/getMatches')
      refetch();
    }
  }

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
              <input
                type="text"
                className="search-input"
                placeholder="Search"
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button className="search_btn" onClick={() => handleSearch()}>
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
            </div>
            <button
              className="btn_advance_search"
              onClick={() => setModalOpen(true)}
            >
              Advanced Search
            </button>
          </div>
        </div>
        {/* <SearchCard /> */}
        {!loading && data?.data?.length > 0 ?
          <div className="grid grid-cols-3 grid-cols-3-responsive">
            {data?.data?.map((profile, i) => (
              <div key={i} className="mt-15">
                <SearchCard
                  profile={profile}
                  loading={loading}
                  refetch={refetch}
                ></SearchCard>
              </div>
            ))
            }
          </div> : !loading && data?.data?.length === 0 ? (
            <div className="flex justify-center flex-column align-center">
              {/* <h2>No Matches Found!</h2> */}
              <NoDataFound></NoDataFound>
            </div>
          ) : loading ? (
            <div className="container-box-bg p-30 mt-20 min-vh-75">
              <CardSkeleton></CardSkeleton>
            </div>
          ) : (
            <></>
          )}
      </div>

      {data?.data?.length > 0 && (
        <div className="flex justify-center px-10 py-30 search-pagination">
          <Pagination
            color="pink"
            value={activePage}
            onChange={handlePageChange}
            total={totalCount}
          />
        </div>
      )}
      {modalOpen && (
        <CenteredModal
          modalOpen={modalOpen}
          handleModalClose={handleModalClose}
        >
          <div className="flex flex-column flex-gap-15">
            <AdvancedSearch
              handleClearFilter={handleClearFilter}
              handleModalClose={handleModalClose}
              handleChange={handleChange}
              countryList={countryList}
              filterData={filterData}
            />
          </div>
        </CenteredModal>
      )}
    </div>
  );
};

export default SearchBoard;
