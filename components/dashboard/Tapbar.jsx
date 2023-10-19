"use client"
import useAxios from "@/hooks/axios/useAxios";
import { fontSizeMnd } from "@/styles/library/mantine";
import { Tabs } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";

const Tapbar = () => {
  const { data, error, loading, refetch } = useAxios("user/match-count")

  // console.log('data', data);

  const router = useRouter();
  const pathname = usePathname();

  const handleChangeTab = (value) => {
    router.push(`/${value}`);
    refetch()
  };

  const { data: { myMatchTotal, newMatchTotal, recentViewTotal, todayMatchTotal } = {} } = data || {};


  return (
    <div className="tapbar">
      <div className="container">
        <Tabs defaultValue={pathname.replace(/^\/+/, '')} color="pink" variant="pills">
          <Tabs.List grow position="apart">
            {/* <Tabs.Tab
              sx={fontSizeMnd}
              value="new-matches"
              onClick={() => handleChangeTab("new-matches")}
            >
              New Matches <b>{newMatchTotal ? `(${newMatchTotal})` : ''}</b>
            </Tabs.Tab> */}
            <Tabs.Tab
              sx={fontSizeMnd}
              value="todays-matches"
              onClick={() => handleChangeTab("todays-matches")}
            >
              Today's Matches <b>{todayMatchTotal ? `(${todayMatchTotal})` : ''}</b>
            </Tabs.Tab>
            <Tabs.Tab
              sx={fontSizeMnd}
              value="my-matches"
              onClick={() => handleChangeTab("my-matches")}
            >
              My Matches <b>{myMatchTotal ? `(${myMatchTotal})` : ''}</b>
            </Tabs.Tab>
            <Tabs.Tab
              sx={fontSizeMnd}
              value="recently-viewed"
              onClick={() => handleChangeTab("recently-viewed")}
            >
              Recently Viewed <b>{recentViewTotal ? `(${recentViewTotal})` : ''}</b>
            </Tabs.Tab>
            {/* <Tabs.Tab sx={fontSizeMnd} value="more-matches">More Matches</Tabs.Tab> */}
          </Tabs.List>
        </Tabs>
      </div>
    </div>
  );
};

export default Tapbar;
