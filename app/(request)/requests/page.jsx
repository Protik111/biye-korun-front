"use client"
import AcceptedList from '@/components/request/Accepted/AcceptedList'
import { fontSizeMnd } from "@/styles/library/mantine";
import { Tabs } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleChangeTab = (value) => {
        // router.push(`/${value}`);
    };
    return (
        <div className='container'>
            <Tabs defaultValue={pathname.replace(/^\/+/, '')} color="pink">
                <Tabs.List grow position="apart">
                    <Tabs.Tab
                        sx={fontSizeMnd}
                        value="recieved"
                        onClick={() => handleChangeTab("recieved")}
                    >
                        Pending Requests
                    </Tabs.Tab>
                    <Tabs.Tab
                        sx={fontSizeMnd}
                        value="accepted"
                        onClick={() => handleChangeTab("accepted")}
                    >
                        Accepted Requests
                    </Tabs.Tab>
                    <Tabs.Tab
                        sx={fontSizeMnd}
                        value="requests"
                        onClick={() => handleChangeTab("requests")}
                    >
                        Sent Requests
                    </Tabs.Tab>
                </Tabs.List>
            </Tabs>
            <AcceptedList></AcceptedList>
        </div>
    )
}

export default page