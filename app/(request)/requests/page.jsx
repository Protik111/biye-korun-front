"use client"
import Accepted from '@/components/request/MyRequests/Accepted';
import Pending from '@/components/request/MyRequests/Pending';
import SendRequest from '@/components/request/Sent/SendRequest';
import { fontSizeMnd } from "@/styles/library/mantine";
import { Tabs } from "@mantine/core";

const page = () => {

    return (
        <div className='container'>
            <Tabs defaultValue={"accepted"} color="pink">
                <Tabs.List grow position="apart">
                    <Tabs.Tab
                        sx={fontSizeMnd}
                        value="accepted"
                    >
                        Accepted Requests
                    </Tabs.Tab>
                    <Tabs.Tab
                        sx={fontSizeMnd}
                        value="recieved"
                    >
                        Pending Requests
                    </Tabs.Tab>

                    <Tabs.Tab
                        sx={fontSizeMnd}
                        value="sent"
                    >
                        Sent Requests
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="recieved">
                    <Pending></Pending>
                </Tabs.Panel>

                <Tabs.Panel value="accepted">
                    <Accepted></Accepted>
                </Tabs.Panel>

                <Tabs.Panel value="sent">
                    <SendRequest></SendRequest>
                </Tabs.Panel>

            </Tabs>
        </div>
    )
}

export default page