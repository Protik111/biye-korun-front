import React from "react";
import { Tabs, rem } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import { MatchesCard } from "./MatchesCard";
const MatchesInfo = () => {
  return (
    <div className="dashboard_grid_left pt-20 pb-20 flex flex-column flex-gap-20 px-20">
      <h1 className="">Matches Information</h1>
      <div className="tab_section flex flex-gap-20">
        <Tabs
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
        </Tabs>
      </div>
    </div>
  );
};

export default MatchesInfo;
