import { fontSizeMnd } from '@/styles/library/mantine';
import { Tabs } from '@mantine/core';
import { useRouter } from 'next/navigation';
import TodaysMatch from './TodaysMatch';
import TodaysMatchPage from '@/app/(dashboad)/todays-matches/page';

const Tapbar = () => {
    const router = useRouter();

    const handleChangeTab = (value) => {
        console.log('value', value);
        // router.push(`/${value}`);
    };
    return (
        <div className='tapbar'>
            <div className='container'>
                <Tabs defaultValue="todays-matches" color='pink'>
                    <Tabs.List grow position="apart">
                        <Tabs.Tab onClick={handleChangeTab} sx={fontSizeMnd} value="profile">Profile</Tabs.Tab>
                        <Tabs.Tab sx={fontSizeMnd} value="new-matches">New Matches</Tabs.Tab>
                        <Tabs.Tab sx={fontSizeMnd} value="todays-matches">Today's Matches <b>(19)</b></Tabs.Tab>
                        <Tabs.Tab sx={fontSizeMnd} value="my-matches">My Matches <b>(99)</b></Tabs.Tab>
                        <Tabs.Tab sx={fontSizeMnd} value="recently-viewed">Recently Viewed <b>(3)</b></Tabs.Tab>
                        <Tabs.Tab sx={fontSizeMnd} value="more-matches">More Matches</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="todays-matches" pt="xs">
                        {/* <TodaysMatch></TodaysMatch> */}
                        {/* <TodaysMatchPage></TodaysMatchPage> */}
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div >
    )
}

export default Tapbar