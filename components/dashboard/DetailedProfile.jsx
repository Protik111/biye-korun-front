import { fontSizeMnd } from '@/styles/library/mantine';
import { Tabs } from '@mantine/core';
import ProfileDetails from './ProfileDetails';

const DetailedProfile = () => {
    return (
        <div className='detailedProfile container-box-bg p-15 mt-25'>
            <Tabs defaultValue="detailed-profile" color='pink'>
                <Tabs.List grow position="apart">
                    <Tabs.Tab sx={fontSizeMnd} value="detailed-profile">Detailed Profile</Tabs.Tab>
                    <Tabs.Tab sx={fontSizeMnd} value="partner-preferences">Partner Preferenecs</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="detailed-profile" pt="xs">
                    <ProfileDetails></ProfileDetails>
                </Tabs.Panel>
            </Tabs>
        </div>
    )
}

export default DetailedProfile