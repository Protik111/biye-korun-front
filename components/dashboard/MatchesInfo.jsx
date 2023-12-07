'use client'
import React, { Suspense, useEffect, useState } from "react";
import { Tabs } from "@mantine/core";

import { MatchesCard } from "./MatchesCard";
import axios from "axios";
import { notifyError } from "@/utils/showNotification";
import MidCard from "../user-card/MidCard";
import CardSkeleton from "../global/CardSkeleton";

const MatchesInfo = () => {
  // const tabs = ["Connection", "Accept Invitation", "New Visitor", "Online"]; // Replace with your tab names
  // const icons = [
  //   "tab/deactive1.svg",
  //   "tab/deactive2.svg",
  //   "tab/deactive3.svg",
  //   "tab/deactive4.svg",
  //   "tab/deactive5.svg",
  //   "tab/deactive6.svg",
  // ];
  // const activeIcons = [
  //   "tab/active1.svg",
  //   "tab/active2.svg",
  //   "tab/active3.svg",
  //   "tab/active4.svg",
  //   "tab/active5.svg",
  //   "tab/active6.svg",
  // ];

  // const { data, error, loading, refetch } = useAxios(
  //   "user/connections"
  // );

  // console.log("43 Friends", data)
  // const { data: friends, error: errorFriends, loading: loadingFriends, postData: getFriendsData } = useAxiosPost('user/connections');
  // const { data: pendingFriends, error: pendingError, loading: pendingLoading, postData: getPendingFriends } = useAxiosPost('user/friendship/pending',);
  // const { data: acceptedFriends, error: acceptedError, loading: acceptedLoading, postData: getAcceptedFriends } = useAxiosPost('user/friendship/accepted');


  // const { data: data2, error: error2, loading: loading2, postData: sendPostRequest2, } = useAxiosPost('user/connections');

  // console.log(data, 'data from send')

  const [friends, setFriends] = useState([])
  const [pendingFriends, setPendingFriends] = useState([])
  const [receiveFriends, setReceiveFriends] = useState([])

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('/user/connections').then(res => {
      setFriends(res.data)
    })
  }, [])

  const handleTabChange = async (tab) => {
    if (tab === "friends") {
      if (friends === null) {
        setLoading(true)
        const friends = await axios.get('/user/connections')
        if (friends?.status === 200) {
          setFriends(friends.data?.data)
          setLoading(false)
        } else {
          notifyError("We're experiencing technical difficulties!")
          setLoading(false)
        }
      }
    }

    if (tab === "sentRequest") {
      if (pendingFriends === null) {
        setLoading(true)
        const pendingFriends = await axios.get('/user/friendship/pending')
        if (pendingFriends?.status === 200) {
          setPendingFriends(pendingFriends.data?.data)
          setLoading(false)
        } else {
          notifyError("We're experiencing technical difficulties!")
          setLoading(false)
        }
      }
    }

    if (tab === "receiveRequest") {
      if (receiveFriends === null) {
        setLoading(true)
        const acceptedFriends = await axios.get('/user/friendship/accepted')
        if (acceptedFriends?.status === 200) {
          setReceiveFriends(acceptedFriends.data?.data)
          setLoading(false)
        } else {
          notifyError("We're experiencing technical difficulties!")
          setLoading(false)
        }
      }
    }
  };

  return (
    <div className="flex flex-column match_info">
      <div className="match_info_title">
        <h1>Matches Information</h1>
        <div className="search-input-container">
          {/* <i className="search-icon fas fa-search"></i> */}
          {/* <CiSearch className="search-icon" /> */}
          <button className="search_btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21.2617 21.2588L19.4098 19.4069M11.5395 20.3328C12.6946 20.3328 13.8384 20.1053 14.9057 19.6632C15.9729 19.2212 16.9426 18.5733 17.7594 17.7565C18.5762 16.9396 19.2241 15.9699 19.6662 14.9027C20.1082 13.8355 20.3358 12.6917 20.3358 11.5365C20.3358 10.3814 20.1082 9.23755 19.6662 8.17033C19.2241 7.10312 18.5762 6.13342 17.7594 5.31661C16.9426 4.4998 15.9729 3.85187 14.9057 3.40981C13.8384 2.96776 12.6946 2.74023 11.5395 2.74023C9.20654 2.74023 6.96916 3.66698 5.31954 5.31661C3.66991 6.96624 2.74316 9.20361 2.74316 11.5365C2.74316 13.8695 3.66991 16.1068 5.31954 17.7565C6.96916 19.4061 9.20654 20.3328 11.5395 20.3328Z" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
          // value={value}
          // onChange={onChange}
          />
        </div>
      </div>

      <div className="tab_section flex flex-gap-30 ">

        <Tabs defaultValue="friends" className="w-100">
          <Tabs.List className="tabList">
            <Tabs.Tab className="tab" onClick={() => handleTabChange("friends")} value="friends">Friends</Tabs.Tab>
            <Tabs.Tab className="tab" onClick={() => handleTabChange("sentRequest")} value="sentRequest">Sent Request </Tabs.Tab>
            <Tabs.Tab className="tab" onClick={() => handleTabChange("receiveRequest")} value="receiveRequest">Received Request </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel className="tabPanel" value="friends">
            <div className="grid grid-cols-2 grid-cols-2-responsive grid-gap-30 px-30 pb-30">
              <MidCard />
              <MidCard />
              <MidCard />
              <MidCard />
              <MidCard />
              <MidCard />
              {/* {
                !loading && friends?.length > 0 ?
                  friends?.map((profile, i) => <MidCard key={i} index={i} profile={profile} handleFavorite={handleFavorite} handleSendRequest={handleSendRequest} handleFriendsUpdate={handleFriendsUpdate} />)
                  :
                  loading &&
                  <>
                    <div className="container-box-bg p-30 mt-20 ">
                      <CardSkeleton></CardSkeleton>
                    </div>
                    <div className="container-box-bg p-30 mt-20 ">
                      <CardSkeleton></CardSkeleton>
                    </div>
                    <div className="container-box-bg p-30 mt-20 ">
                      <CardSkeleton></CardSkeleton>
                    </div>
                    <div className="container-box-bg p-30 mt-20 ">
                      <CardSkeleton></CardSkeleton>
                    </div>
                  </>
              } */}
            </div>
            {/* <AcceptedList /> */}
            {/* <MatchesCard /> */}
          </Tabs.Panel>
          <Tabs.Panel className="tabPanel" value="sentRequest">
            {/* <MatchesCard /> */}
          </Tabs.Panel>
          <Tabs.Panel className="tabPanel" value="receiveRequest">
            {/* <MatchesCard /> */}
          </Tabs.Panel>

        </Tabs>

        {/* <Tabs
          color="red"
          variant="pills"
          defaultValue="Connection"
          styles={{
            tabsList: {
              // Customize styles for the tabs list
              display: "flex",
              gap: "20px",
              //   justifyContent: "space-between", // Space tabs evenly
            },
            tab: {
              // Customize styles for each tab
              color: "black", // Set color of inactive tabs to white
              background: "white",
            },
            tabActive: {
              // Customize styles for the active tab
              color: "red", // Set color of the active tab to red
            },
          }}
        >
          <Tabs.List>
            <Tabs.Tab value="Connection">Connection</Tabs.Tab>
            <Tabs.Tab value="Accept Invitation">Accept Invitation</Tabs.Tab>
            <Tabs.Tab value="New Visitor">New Visitor</Tabs.Tab>
            <Tabs.Tab value="Online">Online</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="Connection">
            <MatchesCard />
          </Tabs.Panel>

          <Tabs.Panel value="Accept Invitation">
            <MatchesCard />
          </Tabs.Panel>

          <Tabs.Panel value="New Visitor">
            <MatchesCard />
          </Tabs.Panel>
          <Tabs.Panel value="Online">
            <MatchesCard />
          </Tabs.Panel>
        </Tabs> */}
        {/* <TabBar
          tabs={tabs}
          // icons={icons}
          // activeIcons={activeIcons}
          initialTab={tabs[0]}
          onTabChange={handleTabChange}
          padding_value="0"
        /> */}
      </div>

    </div>
  );
};

export default MatchesInfo;
