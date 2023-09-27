import { Button, Divider, NavLink } from "@mantine/core"
import { IconHome2 } from "@tabler/icons-react"
import { useState } from "react";
import { IconGauge, IconFingerprint, IconActivity, IconChevronRight } from '@tabler/icons-react';
import NameComp from "./NameComp";
import { useSelector } from "react-redux";
import PhoneComp from "./PhoneComp";
import EmailComp from "./EmailComp";
import PhotoComp from "./PhotoComp";
import DobComp from "./DobComp";
import IncomeComp from "./IncomeComp";

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


const Settings = () => {
    const { userInfo, message } = useSelector(state => state.user)
    const [active, setActive] = useState(0);
    const [openHidden, setOpenHidden] = useState({});

    const { firstName = {}, lastName = {}, location: { city, residencyStatus } = {}, doctrine: { caste, motherTongue } = {}, appearance: { height } = {}, education: { college, education } = {}, family: { children, livingWith } = {}, lifestyle: { diet, maritalStatus } = {}, profession: { employer, income, occupation, workingWith } = {}, trait: { aboutMe } = {}, phone, bloodGroup } = userInfo || {};

    const [profileData, setProfileData] = useState({
        firstName: firstName ? firstName : '',
        lastName: lastName ? lastName : '',
        phone: '',
        email: '',
        photo: ''
    })

    console.log('userInfo', userInfo);


    const listItems = [
        {
            id: 1,
            label: 'Display Name as',
            value: 'Rafiur Rahman Protik',
            hiddenComp: <NameComp profileData={profileData} setProfileData={setProfileData}></NameComp>,
            hiddenCompVisible: false
        },
        {
            id: 2,
            label: 'Phone',
            value: 'Only Premium Members',
            hiddenComp: <PhoneComp profileData={profileData} setProfileData={setProfileData}></PhoneComp>
        },
        {
            id: 3,
            label: 'Email',
            value: 'Visible to all Premium Members',
            hiddenComp: <EmailComp profileData={profileData} setProfileData={setProfileData}></EmailComp>
        },
        {
            id: 4,
            label: 'Photo',
            value: 'Visible to all Members',
            hiddenComp: <PhotoComp profileData={profileData} setProfileData={setProfileData}></PhotoComp>
        },
        {
            id: 5,
            label: 'Date of Birth',
            value: 'Show my full Date of Birth (dd/mm/yyyy)',
            hiddenComp: <DobComp profileData={profileData} setProfileData={setProfileData}></DobComp>
        },
        {
            id: 6,
            label: 'Annual Income',
            value: 'Visible to all Members',
            hiddenComp: <IncomeComp profileData={profileData} setProfileData={setProfileData}></IncomeComp>
        },
        {
            id: 7,
            label: 'Visitors Setting',
            value: 'Let other Members know that I have visited their Profile',
            hiddenComp: "Comming soon"
        },
        {
            id: 8,
            label: 'Do not disturb',
            value: 'Can call me for Premium Membership related offers.',
            hiddenComp: "Comming soon"
        },
        {
            id: 9,
            label: 'Profile Privacy',
            value: 'Visible to all, including unregistered visitors',
            hiddenComp: "Comming soon"
        },
        {
            id: 10,
            label: 'Web Notifications',
            value: 'Unsubscribed',
            hiddenComp: "Comming soon"
        },
    ]

    const items = data.map((item, index) => (
        <NavLink
            key={item.label}
            active={index === active}
            label={item.label}
            description={item.description}
            rightSection={item.rightSection}
            icon={<item.icon size="1rem" stroke={1.5} />}
            onClick={() => {
                setActive(index)
            }}
            color="pink"
            variant="filled"
            className="rounded-10"
        />
    ));

    const handleEdit = (id) => {
        setOpenHidden((prevItem) => ({
            ...prevItem,
            [id]: !prevItem[id]
        }))

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
                                        <div>
                                            <p className="right">{item?.value}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-start">
                                        <Button onClick={() => handleEdit(item?.id)} variant="light" color="pink" size="xs" radius="xl">Edit</Button>
                                    </div>
                                </div>
                                {openHidden[item?.id] && (
                                    <div className={`hidden-component ${openHidden[item.id] ? "open" : ""}`}>
                                        {item.hiddenComp}
                                    </div>
                                )}
                                <Divider my="sm" variant="dotted" />
                            </>)
                        }
                    </div>
                </div>
            </>
        </div>
    )
}

export default Settings