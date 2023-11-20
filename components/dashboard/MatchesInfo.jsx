import React from "react";
import { Tabs, rem } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import { MatchesCard } from "./MatchesCard";
import TabBar from "../profile/TabBar";
const MatchesInfo = () => {
  const tabs = ["Connection", "Accept Invitation", "New Visitor", "Online"]; // Replace with your tab names
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
    <div className="dashboard_grid_right pt-20 pb-20 flex flex-column flex-gap-20 ">
      <h1 className="pt-20">Matches Information</h1>
      <div className="tab_section flex flex-gap-20 ">
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
        <TabBar
          tabs={tabs}
          // icons={icons}
          // activeIcons={activeIcons}
          initialTab={tabs[0]}
          onTabChange={handleTabChange}
          padding_value="0"
        />
      </div>

      <MatchesCard />
    </div>
  );
};

export default MatchesInfo;
