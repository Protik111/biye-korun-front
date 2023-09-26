import { Button, Divider, NavLink } from "@mantine/core"
import { IconHome2 } from "@tabler/icons-react"
import { useState } from "react";
import { IconGauge, IconFingerprint, IconActivity, IconChevronRight } from '@tabler/icons-react';

const data = [
    {
        icon: IconFingerprint,
        label: 'Account Settings',
    },
    {
        icon: IconFingerprint,
        label: 'Contact Filters',
    },
    {
        icon: IconFingerprint,
        label: 'Email / SMS Alerts',
    },
    { icon: IconGauge, label: 'Privacy Options', description: 'All about your basic info' },
    {
        icon: IconFingerprint,
        label: 'Hide / Delete Profile',
    },
    { icon: IconActivity, label: 'Messages' },
];

const listItems = [
    {
        id: 1,
        label: 'Display Name as',
        value: 'Rafiur Rahman Protik',
        hiddenComp: "Comming soon"
    },
    {
        id: 2,
        label: 'Phone',
        value: 'Only Premium Members',
        hiddenComp: "Comming soon"
    },
    {
        id: 3,
        label: 'Email',
        value: 'Visible to all Premium Members',
        hiddenComp: "Comming soon"
    },
    {
        id: 4,
        label: 'Photo',
        value: 'Visible to all Members',
        hiddenComp: "Comming soon"
    },
    {
        id: 5,
        label: 'Date of Birth',
        value: 'Show my full Date of Birth (dd/mm/yyyy)',
        hiddenComp: "Comming soon"
    },
    {
        id: 6,
        label: 'Annual Income',
        value: 'Visible to all Members',
        hiddenComp: "Comming soon"
    },
]

const Settings = () => {
    const [active, setActive] = useState(0);

    const items = data.map((item, index) => (
        <NavLink
            key={item.label}
            active={index === active}
            label={item.label}
            description={item.description}
            rightSection={item.rightSection}
            icon={<item.icon size="1rem" stroke={1.5} />}
            onClick={() => setActive(index)}
            color="pink"
            variant="filled"
            className="rounded-10"
        />
    ));

    const handleEdit = (id) => {

    }


    return (
        <div className="settings container">
            <>
                {/* <div className="">
                    <h2 className="text-center mb-15">
                        Privacy Settings
                    </h2>
                </div> */}

                <div className="settings__wrapper">
                    <div className="settings__wrapper--requestBox">
                        <div className="menuBox-container">
                            <div className="menus">
                                {items}
                            </div>
                        </div>
                    </div>
                    <div className="settings__wrapper--contentBox">
                        {
                            listItems?.map(item => <>
                                <div className="privacy-items">
                                    <div className="privacy-items-single">
                                        <p className="left opacity-4">{item?.label}</p>
                                        <p className="right">{item?.value}</p>
                                    </div>
                                    <div className="flex justify-start">
                                        <Button onClick={() => handleEdit(item?.id)} variant="light" color="pink" size="xs" radius="xl">Edit</Button>
                                    </div>
                                </div>
                                <Divider my="sm" variant="dotted" />
                            </>)
                        }
                        {/* <div className="privacy-items">
                            <div className="privacy-items-single">
                                <p className="left opacity-4">Display Name as</p>
                                <p className="right">Rafiur Rahman Protik</p>
                            </div>
                            <div className="flex justify-start">
                                <Button variant="light" color="pink" size="xs" radius="xl">Edit</Button>
                            </div>
                        </div>
                        <Divider my="sm" variant="dotted" />

                        <div className="privacy-items">
                            <div className="privacy-items-single">
                                <p className="left opacity-4">Phone</p>
                                <p className="right">Only Premium Members</p>
                            </div>
                            <div>
                                <Button variant="light" color="pink" size="xs" radius="xl">Edit</Button>
                            </div>
                        </div>
                        <Divider my="sm" variant="dotted" />

                        <div className="privacy-items">
                            <div className="privacy-items-single">
                                <p className="left opacity-4">Email</p>
                                <p className="right">Visible to all Premium Members</p>
                            </div>
                            <div>
                                <Button variant="light" color="pink" size="xs" radius="xl">Edit</Button>
                            </div>
                        </div>
                        <Divider my="sm" variant="dotted" />

                        <div className="privacy-items">
                            <div className="privacy-items-single">
                                <p className="left opacity-4">Photo</p>
                                <p className="right">Visible to all Members</p>
                            </div>
                            <div>
                                <Button variant="light" color="pink" size="xs" radius="xl">Edit</Button>
                            </div>
                        </div>
                        <Divider my="sm" variant="dotted" />


                        <div className="privacy-items">
                            <div className="privacy-items-single">
                                <p className="left opacity-4">Date of birth</p>
                                <p className="right">Show my full Date of Birth (dd/mm/yyyy)</p>
                            </div>
                            <div>
                                <Button variant="light" color="pink" size="xs" radius="xl">Edit</Button>
                            </div>
                        </div>
                        <Divider my="sm" variant="dotted" />


                        <div className="privacy-items">
                            <div className="privacy-items-single">
                                <p className="left opacity-4">Annual Income</p>
                                <p className="right">Visible to all Members</p>
                            </div>
                            <div>
                                <Button variant="light" color="pink" size="xs" radius="xl">Edit</Button>
                            </div>
                        </div>
                        <Divider my="sm" variant="dotted" />

                        <div className="privacy-items">
                            <div className="privacy-items-single">
                                <p className="left opacity-4">Visitors Setting</p>
                                <p className="right">Let other Members know that I have visited their Profile</p>
                            </div>
                            <div>
                                <Button variant="light" color="pink" size="xs" radius="xl">Edit</Button>
                            </div>
                        </div>
                        <Divider my="sm" variant="dotted" />

                        <div className="privacy-items">
                            <div className="privacy-items-single">
                                <p className="left opacity-4">Do not disturb</p>
                                <p className="right">can call me for Premium Membership related offers and on behalf of Premium Members who wish to Connect with me</p>
                            </div>
                            <div>
                                <Button variant="light" color="pink" size="xs" radius="xl">Edit</Button>
                            </div>
                        </div>
                        <Divider my="sm" variant="dotted" />

                        <div className="privacy-items">
                            <div className="privacy-items-single">
                                <p className="left opacity-4">Profile Privacy</p>
                                <p className="right">Visible to all, including unregistered visitors (Photo and Name will not be visible on Profile)</p>
                            </div>
                            <div>
                                <Button variant="light" color="pink" size="xs" radius="xl">Edit</Button>
                            </div>
                        </div>
                        <Divider my="sm" variant="dotted" />

                        <div className="privacy-items">
                            <div className="privacy-items-single">
                                <p className="left opacity-4">Web Notifications</p>
                                <p className="right">Unsubscribed</p>
                            </div>
                            <div>
                                <Button variant="light" color="pink" size="xs" radius="xl">Edit</Button>
                            </div>
                        </div>
                        <Divider my="sm" variant="dotted" /> */}
                    </div>
                </div>
            </>
        </div>
    )
}

export default Settings