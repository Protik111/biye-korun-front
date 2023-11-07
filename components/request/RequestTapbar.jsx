"use client";
import { fontSizeMnd } from "@/styles/library/mantine";
import { Tabs } from "@mantine/core";
import { IconArrowDownRight } from "@tabler/icons-react";
import { IconArrowDownLeft, IconArrowUpRight, IconFriends, IconUsers } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";

const RequestTapbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleChangeTab = (value) => {
    // console.log("value", value);
    router.push(`/${value}`);
  };

  return (
    <div className="tapbar p-15">
      <div className="container">
        <Tabs
          defaultValue={pathname.replace(/^\/+/, "")}
          color="pink"
          variant="pills"
        >
          <Tabs.List grow position="apart">
            <Tabs.Tab
              sx={fontSizeMnd}
              value="recieved"
              onClick={() => handleChangeTab("recieved")}
              icon={<IconArrowDownRight />}
            >
              Received
            </Tabs.Tab>
            <Tabs.Tab
              sx={fontSizeMnd}
              value="accepted"
              onClick={() => handleChangeTab("accepted")}
              icon={<IconUsers />}
            >
              My Connections
            </Tabs.Tab>
            {/* <Tabs.Tab
              sx={fontSizeMnd}
              value="requests"
              onClick={() => handleChangeTab("requests")}
            >
              My Requests List
            </Tabs.Tab> */}
            <Tabs.Tab
              sx={fontSizeMnd}
              value="sent"
              onClick={() => handleChangeTab("sent")}
              icon={<IconArrowUpRight />}
            >
              Sent
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
    </div>
  );
};

export default RequestTapbar;
