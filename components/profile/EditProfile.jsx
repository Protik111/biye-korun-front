import { Accordion } from "@mantine/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import BasicLifeStyle from "./EditProfiles/BasicLifeStyle";
import ReliousBackground from "./EditProfiles/ReliousBackground";

const EditProfile = () => {
    const { userInfo } = useSelector(state => state.user) || {};
    const [openItems, setOpenItems] = useState(["customization"]); // Set the initially open item


    const {
        location: { city, residencyStatus } = {},
        doctrine: { caste } = {},
        appearance: { height } = {},
        education: { college, education } = {},
        family: { children, livingWith } = {},
        lifestyle: { diet, maritalStatus } = {},
        profession: { employer, income, occupation, workingWith } = {},
        trait: { aboutMe } = {},
        phone, profilePicture: { url } = {},
        fullName,
        userId,
        dateOfBirth,
        postedBy,
        religion,
        community,
        country
    } = userInfo || {};


    const [profileDatas, setProfileDatas] = useState({
        maritalStatus: maritalStatus ? maritalStatus : '',
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : '',
        country: country ? country : '',
        diet: diet ? diet : '',
        height: height ? height : '',
        religion: religion ? religion : '',
        community: community ? community : '',
        caste: caste ? caste : ''
    })


    const handleAccordionChange = (value) => {
        // Toggle the open/closed state of the clicked accordion item
        if (openItems.includes(value)) {
            setOpenItems(openItems.filter((item) => item !== value));
        } else {
            setOpenItems([...openItems, value]);
        }
    };

    console.log('profileDatas', profileDatas);

    console.log('userInfo', userInfo);


    return (
        <div className='editProfile container container-box-bg mt-15'>
            <h2>Edit Personal Profile</h2>
            <Accordion mt={15} variant="separated" radius="md" defaultValue="customization">
                <Accordion.Item
                    value="customization"
                    onClick={() => handleAccordionChange("customization")}
                >
                    <Accordion.Control>Basic & Lifestyle</Accordion.Control>
                    <Accordion.Panel>
                        <BasicLifeStyle profileDatas={profileDatas} setProfileDatas={setProfileDatas}></BasicLifeStyle>
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item
                    value="religious-background"
                    onClick={() => handleAccordionChange("religious-background")}
                >
                    <Accordion.Control>Religious Background</Accordion.Control>
                    <Accordion.Panel>
                        <ReliousBackground profileDatas={profileDatas} setProfileDatas={setProfileDatas}></ReliousBackground>
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="focus-ring">
                    <Accordion.Control>No annoying focus ring</Accordion.Control>
                    <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default EditProfile