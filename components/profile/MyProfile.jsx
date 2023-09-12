"use client"

import { Alert, Anchor, Button, Divider } from "@mantine/core"
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed, IconPlayerRecordFilled } from '@tabler/icons-react';
import ThemeIconComp from "../global/ThemeIconComp";
import { btnBackground } from "@/styles/library/mantine";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { heightCalculator } from "@/utils/heightCalculator";
import { calculateAge } from "@/utils/calculateAge";
import { notSpecfied } from "@/staticData/image";
const imageUrl = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80';

const MyProfile = () => {
    const { userInfo } = useSelector(state => state.user);
    const partnerPreferencesRef = useRef(null);
    const router = useRouter();

    const { location: { city, residencyStatus }, doctrine: { caste } = {}, appearance: { height } = {}, education: { college, education } = {}, family: { children, livingWith } = {}, lifestyle: { diet, maritalStatus } = {}, profession: { employer, income, occupation, workingWith } = {}, trait: { aboutMe } = {}, phone, profilePicture: { url }, fullName, userId, dateOfBirth, postedBy, religion, community, country } = userInfo || {};

    const scrollToPartnerPreferences = () => {
        if (partnerPreferencesRef.current) {
            partnerPreferencesRef.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    console.log('userinfo', userInfo);

    // console.log('heightCalculator(height)', heightCalculator(height));
    // console.log('heightCalculator(height)', calculateAge(dateOfBirth));

    return (
        <div className="myProfile container">
            <div className="myProfile__top container-box-bg p-15">
                <Alert title={<h2>{fullName}<p>({userId})</p></h2>} color="red">
                </Alert>

                <div className="myProfile__top--wrapper">
                    <div className="profile-img">
                        <img src={url || imageUrl} alt="Profile" />
                    </div>
                    <div>
                        <div className="profile-info">
                            <div>
                                <div className="single-item">
                                    <p className="left">Age/Height</p>
                                    <p className="right">: {calculateAge(dateOfBirth)}/{heightCalculator(height)}</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Marital Status</p>
                                    <p className="right">: {maritalStatus || notSpecfied}</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Posted by</p>
                                    <p className="right">: {postedBy || notSpecfied}</p>
                                </div>
                            </div>

                            <div>
                                <div className="single-item">
                                    <p className="left">Religion/Community</p>
                                    <p className="right">: {religion || notSpecfied}, {community}</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Location</p>
                                    <p className="right">: {country || notSpecfied}</p>
                                </div>
                                {/* <div className="single-item">
                                    <p className="left">Mother Tonue</p>
                                    <p className="right">: Bengali</p>
                                </div> */}
                            </div>
                        </div>
                        <Divider my={10}></Divider>

                        <div className="manage-profile mt-25 border-1 p-15 mr-5 rounded-10">
                            <h3 className="secondary-text">Manage your profile</h3>
                            <div className="mt-10 flex align-center flex-gap-15">
                                {/* <List
                                    spacing="xs"
                                    size="sm"
                                    center
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                    // className="flex align-center flex-wrap flex-gap-10"
                                    icon={
                                        <ThemeIcon color="pink" size={16} radius="xl">
                                            <IconPlayerRecordFilled size="12" />
                                        </ThemeIcon>
                                    }
                                >
                                    <List.Item>
                                        <Anchor href="/" target="_blank">
                                            Edit Personal Profile
                                        </Anchor>
                                    </List.Item>
                                    <List.Item>
                                        <Anchor href="/" target="_blank">
                                            Edit Personal Profile
                                        </Anchor>
                                    </List.Item>
                                    <List.Item>
                                        <Anchor href="/" target="_blank">
                                            Edit Personal Profile
                                        </Anchor>
                                    </List.Item>
                                </List> */}
                                <div className="flex align-center flex-gap-5">
                                    <ThemeIconComp iconComp={<IconPlayerRecordFilled size="10" />} size="10"></ThemeIconComp>
                                    <Anchor href="/" target="_blank">
                                        Edit Personal Profile
                                    </Anchor>
                                </div>

                                <div className="flex align-center flex-gap-5">
                                    <ThemeIconComp iconComp={<IconPlayerRecordFilled size="10" />} size="10"></ThemeIconComp>
                                    <Anchor href="/" target="_blank">
                                        View Profile Stats
                                    </Anchor>
                                </div>

                                <div className="flex align-center flex-gap-5">
                                    <ThemeIconComp iconComp={<IconPlayerRecordFilled size="10" />} size="10"></ThemeIconComp>
                                    <Anchor href="/" target="_blank">
                                        Set Contact Filters
                                    </Anchor>
                                </div>
                            </div>

                            <div className="mt-10 flex align-center flex-gap-15">

                                <div className="flex align-center flex-gap-5">
                                    <ThemeIconComp iconComp={<IconPlayerRecordFilled size="10" />} size="10"></ThemeIconComp>
                                    <Anchor href="/" target="_blank">
                                        Edit Partner Profile
                                    </Anchor>
                                </div>

                                <div className="flex align-center flex-gap-5">
                                    <ThemeIconComp iconComp={<IconPlayerRecordFilled size="10" />} size="10"></ThemeIconComp>
                                    <Anchor href="/" target="_blank">
                                        Add Photos
                                    </Anchor>
                                </div>

                                <div className="flex align-center flex-gap-5">
                                    <ThemeIconComp iconComp={<IconPlayerRecordFilled size="10" />} size="10"></ThemeIconComp>
                                    <Anchor href="/" target="_blank">
                                        Delete Profile
                                    </Anchor>
                                </div>
                            </div>

                            <div className="mt-10 flex align-center flex-gap-15">
                                <div className="flex align-center flex-gap-5">
                                    <ThemeIconComp iconComp={<IconPlayerRecordFilled size="10" />} size="10"></ThemeIconComp>
                                    <Anchor href="/" target="_blank">
                                        Edit Contact Details
                                    </Anchor>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="myProfile__top--about">
                    <div>
                        <Divider color="#9880E7" size={"md"} mt={15}></Divider>
                        <div className="flex">
                            <Button
                                size="xs"
                                radius="xl"
                                // leftIcon={<IconArrowNarrowLeft />}
                                style={btnBackground} type="button"
                                className={`button mt-10`}
                                component="a"
                                href="#myself"
                            >
                                About Myself
                            </Button>

                            <Button
                                variant="outline"
                                size="xs"
                                radius="xl"
                                color="pink"
                                className={`button mt-10`}
                                onClick={scrollToPartnerPreferences}
                            >
                                Partner Preferences
                            </Button>
                        </div>
                    </div>

                    <div className="personality mt-20" id="myself">
                        <div className="flex justify-between align-center">
                            <h3 className="secondary-text">Personality, Family Details, Career, Partner Expectations etc.</h3>
                            <Button
                                variant="light"
                                size="xs"
                                radius="xl"
                                color="pink"
                                className={`button mt-10`}
                            >
                                Edit
                            </Button>
                        </div>
                        <Divider mt={5}></Divider>
                        <p className="mt-5">
                            It feels good to introduce myself. Post my academics, I work as a Software Developer.
                            My mind is creatively inclined with a deep artistic sense. I seek a compatible life partner; someone who is supportive and understanding would be a perfect match. Thanks for stopping by and having a look.
                        </p>
                    </div>

                    {/* Basic lifestyle */}
                    <div className="basic-lifestyle info-section mt-20">
                        <div className="flex justify-between align-center">
                            <h3 className="secondary-text">Basic & Lifestyle</h3>
                            <Button
                                variant="light"
                                size="xs"
                                radius="xl"
                                color="pink"
                                className={`button mt-10`}
                            >
                                Edit
                            </Button>
                        </div>
                        <Divider mt={5}></Divider>
                        <div className="profile-info mt-10">
                            <div>
                                <div className="single-item">
                                    <p className="left">Age</p>
                                    <p className="right">: 25</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Marital Status</p>
                                    <p className="right">: Never Married</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Date of Birth</p>
                                    <p className="right">: 18-Aug-1998</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Height</p>
                                    <p className="right">: 5'6''</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Grew up in</p>
                                    <p className="right">: Bangladesh</p>
                                </div>
                            </div>

                            <div>
                                <div className="single-item">
                                    <p className="left">Diet</p>
                                    <p className="right">: Non-Veg</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Blood Groop</p>
                                    <p className="right">: O+</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Disbalility</p>
                                    <p className="right">: None</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Religious Background */}
                    <div className="religious-background info-section mt-20">
                        <div className="flex justify-between align-center">
                            <h3 className="secondary-text">Religious Background</h3>
                            <Button
                                variant="light"
                                size="xs"
                                radius="xl"
                                color="pink"
                                className={`button mt-10`}
                            >
                                Edit
                            </Button>
                        </div>
                        <Divider mt={5}></Divider>
                        <div className="profile-info mt-10">
                            <div>
                                <div className="single-item">
                                    <p className="left">Religion</p>
                                    <p className="right">: Muslim</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Community</p>
                                    <p className="right">: Sunni</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Sub community</p>
                                    <p className="right">: Not Specified</p>
                                </div>
                            </div>

                            <div>
                                <div className="single-item">
                                    <p className="left">Mother Tongue</p>
                                    <p className="right">: Bengali</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Family Details */}
                    <div className="family-details info-section mt-20">
                        <div className="flex justify-between align-center">
                            <h3 className="secondary-text">Family Details</h3>
                            <Button
                                variant="light"
                                size="xs"
                                radius="xl"
                                color="pink"
                                className={`button mt-10`}
                            >
                                Edit
                            </Button>
                        </div>
                        <Divider mt={5}></Divider>
                        <div className="profile-info mt-10">
                            <div>
                                <div className="single-item">
                                    <p className="left">Father's Status</p>
                                    <p className="right">: Not Specified</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Mother's Status</p>
                                    <p className="right">: Not Specified</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Family Location</p>
                                    <p className="right">: Dhaka Bangladesh</p>
                                </div>
                            </div>

                            <div>
                                <div className="single-item">
                                    <p className="left">No. of Brothers</p>
                                    <p className="right">: Not Specified</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">No. of Sisters</p>
                                    <p className="right">: Not Specified</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Family Type</p>
                                    <p className="right">: Not Specified</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education & Career */}
                    <div className="family-details info-section mt-20">
                        <div className="flex justify-between align-center">
                            <h3 className="secondary-text">Education & Career</h3>
                            <Button
                                variant="light"
                                size="xs"
                                radius="xl"
                                color="pink"
                                className={`button mt-10`}
                            >
                                Edit
                            </Button>
                        </div>
                        <Divider mt={5}></Divider>
                        <div className="profile-info mt-10">
                            <div>
                                <div className="single-item">
                                    <p className="left">Highest Qualification</p>
                                    <p className="right">: B.Eng (Hons) - Engineeringd</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">College(s) Attended</p>
                                    <p className="right">: American International University-Bangladesh</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Annual Income</p>
                                    <p className="right">: Upto USD 40K</p>
                                </div>
                            </div>

                            <div>
                                <div className="single-item">
                                    <p className="left">Working With</p>
                                    <p className="right">: Private Company</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Working As</p>
                                    <p className="right">: Software Developer</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Employer Name</p>
                                    <p className="right">: TECH SERVE4</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location of Groom */}
                    <div className="family-details info-section mt-20">
                        <div className="flex justify-between align-center">
                            <h3 className="secondary-text">Location of Groom</h3>
                            <Button
                                variant="light"
                                size="xs"
                                radius="xl"
                                color="pink"
                                className={`button mt-10`}
                            >
                                Edit
                            </Button>
                        </div>
                        <Divider mt={5}></Divider>
                        <div className="profile-info mt-10">
                            <div>
                                <div className="single-item">
                                    <p className="left">Current Residence</p>
                                    <p className="right">: Dhaka, Bangladesh</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">State Of Residence</p>
                                    <p className="right">: Dhaka</p>
                                </div>
                            </div>

                            <div>
                                <div className="single-item">
                                    <p className="left">Residency Status</p>
                                    <p className="right">: Permanent Resident</p>
                                </div>
                                <div className="single-item">
                                    <p className="left">Zip / Pin code</p>
                                    <p className="right">: Not Specified</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-15" id="partner-preferences" ref={partnerPreferencesRef}>
                        <Alert title={<h3>Partner Prefrences</h3>} color="red">
                        </Alert>

                        {/* Basic Info */}
                        <div className="family-details info-section mt-20">
                            <div className="flex justify-between align-center">
                                <h3 className="secondary-text">Basic Info</h3>
                                <Button
                                    variant="light"
                                    size="xs"
                                    radius="xl"
                                    color="pink"
                                    className={`button mt-10`}
                                >
                                    Edit
                                </Button>
                            </div>
                            <Divider mt={5}></Divider>
                            <div className="profile-info mt-10">
                                <div>
                                    <div className="single-item">
                                        <p className="left">Age</p>
                                        <p className="right">: 18 to 22</p>
                                    </div>
                                    <div className="single-item">
                                        <p className="left">Height</p>
                                        <p className="right">: 6'5'' to 6'11''</p>
                                    </div>
                                    <div className="single-item">
                                        <p className="left">Religion</p>
                                        <p className="right">: Muslim:Sunni, Muslim:Bengali, Muslim:Sunni Hanafi, Muslim:Arain, Muslim:Jat, Muslim:Siddiqui,</p>
                                    </div>
                                </div>

                                <div>
                                    <div className="single-item">
                                        <p className="left">Mother tongue</p>
                                        <p className="right">: Doesn't Matter</p>
                                    </div>
                                    <div className="single-item">
                                        <p className="left">Marital status</p>
                                        <p className="right">: Never Married</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location Details */}
                        <div className="family-details info-section mt-20">
                            <div className="flex justify-between align-center">
                                <h3 className="secondary-text">Location Details</h3>
                                <Button
                                    variant="light"
                                    size="xs"
                                    radius="xl"
                                    color="pink"
                                    className={`button mt-10`}
                                >
                                    Edit
                                </Button>
                            </div>
                            <Divider mt={5}></Divider>
                            <div className="profile-info mt-10">
                                <div>
                                    <div className="single-item">
                                        <p className="left">Country living in</p>
                                        <p className="right">: Bangladesh</p>
                                    </div>
                                    <div className="single-item">
                                        <p className="left">State living in</p>
                                        <p className="right">: Doesn't Matter</p>
                                    </div>
                                    <div className="single-item">
                                        <p className="left">City / District</p>
                                        <p className="right">: Doesn't Matter</p>
                                    </div>
                                </div>

                                <div>

                                </div>
                            </div>
                        </div>


                        {/* Education & Career */}
                        <div className="family-details info-section mt-20">
                            <div className="flex justify-between align-center">
                                <h3 className="secondary-text">Education & Career</h3>
                                <Button
                                    variant="light"
                                    size="xs"
                                    radius="xl"
                                    color="pink"
                                    className={`button mt-10`}
                                >
                                    Edit
                                </Button>
                            </div>
                            <Divider mt={5}></Divider>
                            <div className="profile-info mt-10">
                                <div>
                                    <div className="single-item">
                                        <p className="left">Education</p>
                                        <p className="right">: Doesn't Matter</p>
                                    </div>
                                    <div className="single-item">
                                        <p className="left">Working with</p>
                                        <p className="right">: Doesn't Matter</p>
                                    </div>
                                    <div className="single-item">
                                        <p className="left">Profession area</p>
                                        <p className="right">: Doesn't Matter</p>
                                    </div>
                                </div>

                                <div>
                                    <div className="single-item">
                                        <p className="left">Working as</p>
                                        <p className="right">: Doesn't Matter</p>
                                    </div>
                                    <div className="single-item">
                                        <p className="left">Icome</p>
                                        <p className="right">: USD less than 40,000 to 80,000.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyProfile