"use client"
import { fontSizeMnd } from "@/styles/library/mantine";
import { Tabs } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";

const RequestTapbar = () => {
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
                            value="recieved"
                            onClick={() => handleChangeTab("recieved")}
                        >
                            Recieved
                        </Tabs.Tab>
                        <Tabs.Tab
                            sx={fontSizeMnd}
                            value="accepted"
                            onClick={() => handleChangeTab("accepted")}
                        >
                            Accepted
                        </Tabs.Tab>
                        <Tabs.Tab
                            sx={fontSizeMnd}
                            value="requests"
                            onClick={() => handleChangeTab("requests")}
                        >
                            Requests
                        </Tabs.Tab>
                        <Tabs.Tab
                            sx={fontSizeMnd}
                            value="sent"
                            onClick={() => handleChangeTab("sent")}
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
