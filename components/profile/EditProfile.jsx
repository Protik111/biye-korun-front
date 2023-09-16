import { Accordion, Button } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicLifeStyle from "./EditProfiles/BasicLifeStyle";
import ReliousBackground from "./EditProfiles/ReliousBackground";
import EducationCareer from "./EditProfiles/EducationCareer";
import { btnBackground } from "@/styles/library/mantine";
import { updateUserProfile } from "@/redux/features/user/userSlice";
import { notifyError, notifySuccess } from "@/utils/showNotification";

const EditProfile = () => {
    const { userInfo } = useSelector(state => state.user) || {};
    const [openItems, setOpenItems] = useState(["customization"]); // Set the initially open item
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();


    const {
        location: { city, residencyStatus } = {},
        doctrine: { caste, motherTongue } = {},
        appearance: { height } = {},
        education: { college, education } = {},
        family: { children, livingWith } = {},
        lifestyle: { diet, maritalStatus } = {},
        profession: { employer, income: { min, max } = {}, occupation, workingWith } = {},
        trait: { aboutMe } = {},
        phone, profilePicture: { url } = {},
        fullName,
        firstName,
        lastName,
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
        city: city ? city : '',
        diet: diet ? diet : '',
        height: height ? height : '',
        religion: religion ? religion : '',
        community: community ? community : '',
        caste: caste ? caste : '',
        motherTongue: motherTongue ? motherTongue : '',
        education: education ? education : '',
        college: college ? college : '',
        income: '',
        occupation: occupation ? occupation : '',
        workingWith: workingWith ? workingWith : '',
        employer: employer ? employer : ''
    })


    const handleAccordionChange = (value) => {
        // Toggle the open/closed state of the clicked accordion item
        if (openItems.includes(value)) {
            setOpenItems(openItems.filter((item) => item !== value));
        } else {
            setOpenItems([...openItems, value]);
        }
    };

    // console.log('profileDatas', profileDatas);

    // console.log('userInfo', userInfo);
    const handleUpdate = () => {
        // console.log('profileDatas', profileDatas);
        dispatch(updateUserProfile(profileDatas))
            .unwrap()
            .then(() => {
                notifySuccess("Updated successfully!")
                setLoading(false)
            })
            .catch(() => {
                notifyError("Somthing went wrong!")
                setLoading(false)
            })
    }


    return (
        <div className='editProfile container container-box-bg mt-15'>
            <div className="flex justify-between">
                <h2>Edit Personal Profile</h2>
                <div>
                    <Button
                        size="md"
                        // leftIcon={<IconArrowNarrowLeft />}
                        style={btnBackground} type="button"
                        className={`button`}
                        onClick={handleUpdate}
                        disabled={loading}
                    >
                        Update Your Profile
                    </Button>
                </div>
            </div>
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

                <Accordion.Item value="education-career">
                    <Accordion.Control>Education Career</Accordion.Control>
                    <Accordion.Panel>
                        <EducationCareer profileDatas={profileDatas} setProfileDatas={setProfileDatas}></EducationCareer>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default EditProfile