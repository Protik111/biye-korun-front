"use client";
import { fontSizeMnd, rem } from "@/styles/library/mantine";
import { Tabs } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { LuUserCog2 } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { HiOutlinePhoto } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { PiFolderSimpleUserDuotone } from "react-icons/pi";
import TabBar from "./TabBar";

const ProfileTapbar = () => {
  const router = useRouter();

  const pathname = usePathname();

  const [activeState, setActiveState] = useState("dashboard");
  const handleChangeTab = (value) => {
    router.push(`/${value}`);
  };

  // console.log('pathname', pathname.replace(/^\/+/, ''))
  const tabs = [
    "Dashboard",
    "Home Feed",
    "My Profile",
    "My photos",
    "My Matches",
    "Partner Preferences",
  ]; // Replace with your tab names
  const icons = [
    "tab/deactive1.svg",
    "tab/deactive2.svg",
    "tab/deactive3.svg",
    "tab/deactive4.svg",
    "tab/deactive5.svg",
    "tab/deactive6.svg",
  ];
  const activeIcons = [
    "tab/active1.svg",
    "tab/active2.svg",
    "tab/active3.svg",
    "tab/active4.svg",
    "tab/active5.svg",
    "tab/active6.svg",
  ];

  const handleTabChange = (tab) => {
    // Handle tab change logic here
    console.log(`Selected tab: ${tab}`);
  };
  return (
    <div className="tapbar  mb-20 container ">
      {/* <div
        className="container p-25"
        style={{
          backgroundColor: "#F5F5F5",
          width: "100%",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <Tabs
          defaultValue={pathname.replace(/^\/+/, "")}
          color="pink"
          variant="pills"
          value={pathname.replace(/^\/+/, "")}
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
          <Tabs.List grow position="apart">
            <Tabs.Tab
              sx={fontSizeMnd}
              value="dashboard"
              onClick={() => handleChangeTab("dashboard")}
              icon={<MdDashboardCustomize />}
            >
              Dashboard
            </Tabs.Tab>
            <Tabs.Tab
              sx={fontSizeMnd}
              value="my-profile"
              // onClick={() => handleChangeTab("my-profile")}
              icon={<LuUserCog2 />}
            >
              Home Feed
            </Tabs.Tab>
            <Tabs.Tab
              sx={fontSizeMnd}
              value="my-profile"
              onClick={() => handleChangeTab("my-profile")}
              icon={<LuUserCog2 />}
            >
              My Profile
            </Tabs.Tab>
            <Tabs.Tab
              sx={fontSizeMnd}
              value="my-photos"
              onClick={() => handleChangeTab("my-photos")}
              icon={<HiOutlinePhoto />}
            >
              My Photos
            </Tabs.Tab>
            <Tabs.Tab
              sx={fontSizeMnd}
              value="my-matches"
              onClick={() => handleChangeTab("my-matches")}
              icon={<FiUsers />}
            >
              My Matches
            </Tabs.Tab>
            <Tabs.Tab
              sx={fontSizeMnd}
              value="partner-preferences"
              onClick={() => handleChangeTab("partner-preferences")}
              icon={<PiFolderSimpleUserDuotone />}
            >
              Partner Preferences
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div> */}
      <TabBar
        tabs={tabs}
        icons={icons}
        activeIcons={activeIcons}
        initialTab={tabs[0]}
        onTabChange={handleTabChange}
      />
    </div>
  );
};

export default ProfileTapbar;
