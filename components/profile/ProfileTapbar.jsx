"use client"
import { fontSizeMnd } from "@/styles/library/mantine";
import { Tabs } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";

const ProfileTapbar = () => {
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
                            onClick={() => handleChangeTab("dashboard")}
                        >
                            Dashboard
                        </Tabs.Tab>
                        <Tabs.Tab
                            sx={fontSizeMnd}
                            value="todays-matches"
                            onClick={() => handleChangeTab("my-profile")}
                        >
                            My Profile
                        </Tabs.Tab>
                        <Tabs.Tab
                            sx={fontSizeMnd}
                            value="my-matches"
                            onClick={() => handleChangeTab("my-photos")}
                        >
                            My Photos
                        </Tabs.Tab>
                        <Tabs.Tab
                            sx={fontSizeMnd}
                            value="recently-viewed"
                            onClick={() => handleChangeTab("settings")}
                        >
                            Settings
                        </Tabs.Tab>
                        {/* <Tabs.Tab sx={fontSizeMnd} value="more-matches">More Matches</Tabs.Tab> */}
                    </Tabs.List>
                </Tabs>
            </div>
        </div>
    );
};

export default ProfileTapbar;
