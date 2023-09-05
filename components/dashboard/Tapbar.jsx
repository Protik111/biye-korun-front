"use client"
import { fontSizeMnd } from "@/styles/library/mantine";
import { Tabs } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";

const Tapbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleChangeTab = (value) => {
    router.push(`/${value}`);
  };

  return (
    <div className="tapbar">
      <div className="container">
        <Tabs defaultValue={pathname.replace(/^\/+/, '')} color="pink" variant="pills">
          <Tabs.List grow position="apart">
            <Tabs.Tab
              sx={fontSizeMnd}
              value="new-matches"
              onClick={() => handleChangeTab("new-matches")}
            >
              New Matches
            </Tabs.Tab>
            <Tabs.Tab
              sx={fontSizeMnd}
              value="todays-matches"
              onClick={() => handleChangeTab("todays-matches")}
            >
              Today's Matches <b>(19)</b>
            </Tabs.Tab>
            <Tabs.Tab
              sx={fontSizeMnd}
              value="my-matches"
              onClick={() => handleChangeTab("my-matches")}
            >
              My Matches <b>(99)</b>
            </Tabs.Tab>
            <Tabs.Tab
              sx={fontSizeMnd}
              value="recently-viewed"
              onClick={() => handleChangeTab("recently-viewed")}
            >
              Recently Viewed <b>(3)</b>
            </Tabs.Tab>
            {/* <Tabs.Tab sx={fontSizeMnd} value="more-matches">More Matches</Tabs.Tab> */}
          </Tabs.List>
        </Tabs>
      </div>
    </div>
  );
};

export default Tapbar;
