import { Timeline, Text, Badge, List, ThemeIcon, Avatar, Divider, Button } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots, IconUserCircle, IconAddressBook, IconCircleCheck, IconSchool, IconBrandCashapp, IconArchive, IconDeviceIpadSearch, IconPhone, IconCircleLetterX, IconEye } from '@tabler/icons-react';
import ThemeIconComp from '../global/ThemeIconComp';
import { useSelector } from 'react-redux';
import { imageUrl } from '@/staticData/image';
import useAxios from '@/hooks/axios/useAxios';
import axios from 'axios';
import { useState } from 'react';

const ProfileDetails = ({ profile }) => {
    const { userInfo } = useSelector(state => state.user);
    const { data, error, loading, refetch } = useAxios(`user/compare-partner-preference/${userInfo._id}`);
    const [contactInfo, setContactInfo] = useState({})

    const { expire } = userInfo?.validPackage;

    console.log('profile', profile);

    const handleContactView = (id) => {
        axios.get(`user/get-contact/${id}`)
            .then((response) => {
                if (response?.data?.success) {
                    // console.log(response?.data);
                    setContactInfo(response?.data?.data)
                }
            })
            .catch((error) => {
                notifyError("Error occurred!")
            });
    }

    console.log('contactInfo', contactInfo);

    return (
        <div>
            <Timeline color='pink' active={4} bulletSize={40} lineWidth={3}>
                <Timeline.Item bullet={<IconUserCircle size={24} />} title={`About ${profile?.firstName + " " + profile?.lastName}`}>
                    <div className='flex align-center flex-gap-15 mt-5'>
                        <Badge color="pink">ID: {profile?.userId}</Badge>
                        <Badge color="pink">Profile created by {profile?.postedBy}</Badge>
                    </div>

                    <Text size="md" mt={4}>{profile?.trait?.aboutMe}</Text>
                </Timeline.Item>

                <Timeline.Item bullet={<IconAddressBook size={24} />} title="Contact Details">
                    <div className='border-1 p-15 w-50 rounded-15 flex justify-between align-center'>
                        {
                            (contactInfo?.email || contactInfo?.phone) ?
                                <div>
                                    <div className='flex flex-gap-10'>
                                        <div>
                                            <img style={{ height: '25px' }} src="/profile/phone-call.svg" alt="phone" />
                                        </div>
                                        <div>
                                            <p>Contact Number</p>
                                            <p>{contactInfo?.phone}</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-gap-10 mt-10'>
                                        <div>
                                            <img style={{ height: '25px' }} src="/profile/email.svg" alt="phone" />
                                        </div>
                                        <div>
                                            <p>Email Id</p>
                                            <p>{contactInfo?.email}</p>
                                        </div>
                                    </div>
                                </div> :
                                <div>
                                    <div className='flex flex-gap-10'>
                                        <div>
                                            <img style={{ height: '25px' }} src="/profile/phone-call.svg" alt="phone" />
                                        </div>
                                        <div>
                                            <p>Contact Number</p>
                                            <p>+880985 XXXXX</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-gap-10 mt-10'>
                                        <div>
                                            <img style={{ height: '25px' }} src="/profile/email.svg" alt="phone" />
                                        </div>
                                        <div>
                                            <p>Email Id</p>
                                            <p>XXXXXXXXXX@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                        }

                        <div>
                            {!expire ? <Button onClick={() => handleContactView(profile?._id)} rightIcon={<IconEye></IconEye>} size='xs' variant="light" color="red">
                                View Details
                            </Button> :
                                !expire && !expire?.isContactValid ?
                                    <Button onClick={() => window.open('/plans')} rightIcon={<IconEye></IconEye>} size='xs' variant="light" color="red">
                                        Upgrade Plan
                                    </Button> :
                                    <Button onClick={() => window.open('/plans')} rightIcon={<IconEye></IconEye>} size='xs' variant="light" color="red">
                                        Buy Premium
                                    </Button>
                            }
                        </div>
                    </div>
                </Timeline.Item>

                <Timeline.Item title="Education & Career" bullet={<IconSchool size={24} />}>
                    <List
                        spacing="xs"
                        size="md"
                        center
                    // icon={
                    //     // <ThemeIcon color="teal" size={14} radius="xl">
                    //     // </ThemeIcon>
                    //     <IconCircleCheck size="12" />
                    // }
                    >
                        <List.Item icon={<ThemeIcon color="teal" size={24} radius="xl"> <IconSchool size="18" /></ThemeIcon>}>{profile?.education?.education}</List.Item>

                        <List.Item icon={<ThemeIcon color="teal" size={24} radius="xl"> <IconArchive size="18" /></ThemeIcon>}>{profile?.education?.college}</List.Item>

                        <List.Item icon={<ThemeIcon color="teal" size={24} radius="xl"> <IconSchool size="18" /></ThemeIcon>}>Company, {profile?.profession?.employer}</List.Item>

                        {/* <List.Item icon={<ThemeIcon color="teal" size={24} radius="xl"> <IconBrandCashapp size="18" /></ThemeIcon>}>Earns Upto BDT 40K monthly</List.Item> */}
                        {(!profile?.profession?.income?.min && profile?.profession?.income?.max) ? <List.Item icon={<ThemeIcon color="teal" size={24} radius="xl"> <IconBrandCashapp size="18" /></ThemeIcon>}>Earns Upto BDT {profile?.profession?.income?.max}K monthly</List.Item>
                            :
                            <List.Item icon={<ThemeIcon color="teal" size={24} radius="xl"> <IconBrandCashapp size="18" /></ThemeIcon>}>Earns Upto BDT {profile?.profession?.income?.min}K - {profile?.profession?.income?.max}K monthly</List.Item>}
                    </List>
                </Timeline.Item>

                <Timeline.Item title="What she is looking for" bullet={<IconDeviceIpadSearch size={24} />}>
                    <div className='flex justify-between mt-10 align-center'>
                        <div className='flex flex-column align-center'>
                            <Avatar
                                size="xl"
                                radius="xl"
                                src={userInfo?.profilePicture?.url?.small || imageUrl}
                                alt="My Profile"
                            />
                            <p>Your Preferences</p>
                        </div>
                        <div>
                            --------<Badge size='lg' color="pink">You matches 7/7 of her preferences</Badge>--------
                        </div>



                        <div className='flex flex-column align-center'>
                            <Avatar
                                size="xl"
                                radius="xl"
                                src={profile?.profilePicture?.url?.small || imageUrl}
                                alt="User profile"
                            />
                            <p>Her Preferences</p>
                        </div>
                    </div>

                    <div className='mt-25'>
                        {
                            data?.data?.map((item, i) => <div key={i}>
                                <div className="flex justify-between mt-25">
                                    <div>
                                        <p className='secondary-text'>{item?.name}</p>
                                        <p className='small-text'>{item?.value}</p>
                                    </div>
                                    {
                                        item?.isMatch ?
                                            <ThemeIconComp iconComp={<IconCircleCheck size="18" />}></ThemeIconComp>
                                            :
                                            <ThemeIcon color="black" radius="xl">
                                                <IconCircleLetterX size="18"></IconCircleLetterX>
                                            </ThemeIcon>
                                    }
                                </div>
                                <Divider mt={10} size="sm" />
                            </div>)
                        }



                        {/* <div className="flex justify-between mt-25">
                            <div>
                                <p className='secondary-text'>Hegiht</p>
                                <p className='small-text'>5'2''</p>
                            </div>
                            <ThemeIconComp iconComp={<IconCircleCheck size="18" />}></ThemeIconComp>
                        </div>
                        <Divider mt={10} size="sm" />

                        <div className="flex justify-between mt-25">
                            <div>
                                <p className='secondary-text'>Marital Status</p>
                                <p className='small-text'>Never Married</p>
                            </div>
                            <ThemeIconComp iconComp={<IconCircleCheck size="18" />}></ThemeIconComp>
                        </div>
                        <Divider mt={10} size="sm" />

                        <div className="flex justify-between mt-25">
                            <div>
                                <p className='secondary-text'>Mother Tongue</p>
                                <p className='small-text'>Bengali, English</p>
                            </div>
                            <ThemeIconComp iconComp={<IconCircleCheck size="18" />}></ThemeIconComp>
                        </div>
                        <Divider mt={10} size="sm" />

                        <div className="flex justify-between mt-25">
                            <div>
                                <p className='secondary-text'>Country Living in</p>
                                <p className='small-text'>Bangladesh</p>
                            </div>
                            <ThemeIconComp iconComp={<IconCircleCheck size="18" />}></ThemeIconComp>
                        </div>
                        <Divider mt={10} size="sm" />

                        <div className="flex justify-between mt-25">
                            <div>
                                <p className='secondary-text'>Monthly Income</p>
                                <p className='small-text'>Upto BDT 40K</p>
                            </div>
                            <ThemeIconComp iconComp={<IconCircleCheck size="18" />}></ThemeIconComp>
                        </div>
                        <Divider mt={10} size="sm" />

                        <div className="flex justify-between mt-25">
                            <div>
                                <p className='secondary-text'>Age</p>
                                <p className='small-text'>21 to 29</p>
                            </div>
                            <ThemeIconComp iconComp={<IconCircleCheck size="18" />}></ThemeIconComp>
                        </div>
                        <Divider mt={10} size="sm" /> */}

                    </div>

                </Timeline.Item>

            </Timeline>
        </div>
    )
}

export default ProfileDetails