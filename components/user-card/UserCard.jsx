import React from 'react'
import { Card, Group, Text, Menu, ActionIcon, Avatar, Indicator, Divider } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';
import { abbreviateName } from '@/utils/abbreviation';
import { calculateAge } from '@/utils/calculateAge';
import { heightCalculator } from '@/utils/heightCalculator';
import { useSelector } from 'react-redux';

const UserCard = (props) => {
    const { userInfo } = useSelector((state) => state.user);

    const { profile, handleSendRequest, handleFriendsUpdate } = props

    // console.log(profile)

    return (
        <>
            <Card shadow="sm" radius={10} className='user-card'>
                <div className='card-avatar'>
                    <Indicator inline size={27} offset={17} position="bottom-end" color={"rgba(0, 193, 119, 1)"} withBorder>
                        {/* In active Color: rgba(0, 0, 0, 0.3) */}
                        <Avatar
                            size={110}
                            radius={"50%"}
                            src={profile?.profilePicture?.url?.small}
                        />
                    </Indicator>
                </div>

                <Card.Section className='card-section' px={20} py={20}>
                    <div className='card-content'>
                        <Group className='card-group'>
                            <Text size={20} fw={600} color='black' pb={7}>{abbreviateName(profile?.firstName + " " + profile?.lastName)} <span className='userId'>#{profile?.userId}</span></Text>
                            <Menu withinPortal position="bottom-end" shadow="sm">
                                <Menu.Target>
                                    <ActionIcon variant="subtle" color="gray">
                                        <IconDots size={24} color={"rgba(0, 0, 0, 0.6)"} />
                                    </ActionIcon>
                                </Menu.Target>
                            </Menu>
                        </Group>
                        <ul className='card-list'>
                            <li>{profile?.educationCareer?.occupation}{profile?.educationCareer?.education && ` - ${profile?.educationCareer?.education}`}</li>
                            <li>
                                {profile?.basicInfo?.dateOfBirth ? `${calculateAge(profile?.basicInfo?.dateOfBirth)} Years` : "18 Years"}
                                {profile?.basicInfo?.height && `, ${heightCalculator(profile?.basicInfo?.height)}`}
                            </li>
                            <li>
                                {profile?.location?.city && `${profile?.location?.city}, `}
                                {profile?.location?.country && `${profile?.location?.country}`}
                            </li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <Divider size={1} color={"#00000026"} />
                        <Group className='card-group' pt={20}>
                            <div>
                                <button className='btn-icon' style={{ marginRight: "7px" }}>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M11.5518 18.8301C11.2496 18.9368 10.7518 18.9368 10.4496 18.8301C7.87182 17.9501 2.11182 14.279 2.11182 8.05678C2.11182 5.31011 4.32515 3.08789 7.05404 3.08789C8.67182 3.08789 10.1029 3.87011 11.0007 5.079C11.8985 3.87011 13.3385 3.08789 14.9474 3.08789C17.6763 3.08789 19.8896 5.31011 19.8896 8.05678C19.8896 14.279 14.1296 17.9501 11.5518 18.8301Z" stroke="#F42A41" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                {
                                    profile?.friendships !== null && profile?.friendships?.status !== "accepted" &&
                                    <button className='btn-icon'>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.0854 15.2916L17.4321 18.1005C17.521 18.8383 16.7298 19.3538 16.0987 18.9716L12.3743 16.7582C11.9654 16.7582 11.5654 16.7316 11.1743 16.6783C11.8321 15.9049 12.2232 14.9271 12.2232 13.8694C12.2232 11.3449 10.0365 9.30051 7.33428 9.30051C6.30317 9.30051 5.35206 9.59382 4.56095 10.1094C4.53429 9.88715 4.52539 9.66492 4.52539 9.43381C4.52539 5.38937 8.0365 2.10938 12.3743 2.10938C16.7121 2.10938 20.2232 5.38937 20.2232 9.43381C20.2232 11.8338 18.9876 13.9583 17.0854 15.2916Z" stroke="#F42A41" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12.2226 13.8696C12.2226 14.9274 11.8315 15.9052 11.1737 16.6785C10.2937 17.7452 8.89816 18.4296 7.33371 18.4296L5.01371 19.8074C4.6226 20.0474 4.12482 19.7185 4.17816 19.2652L4.40038 17.5141C3.20927 16.6874 2.44482 15.363 2.44482 13.8696C2.44482 12.3052 3.28038 10.9274 4.56038 10.1096C5.3515 9.59409 6.3026 9.30078 7.33371 9.30078C10.0359 9.30078 12.2226 11.3452 12.2226 13.8696Z" stroke="#F42A41" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                }
                            </div>
                            <div>
                                {
                                    profile?.friendships !== null && profile?.friendships?.status === "accepted" ?
                                        <button className='btn-fill'>Send Message</button>
                                        :
                                        <>
                                            {
                                                profile?.friendships === null &&
                                                <button className='btn-fill' onClick={() => handleSendRequest(profile?._id)}>Send Request</button>
                                            }
                                            {
                                                profile?.friendships !== null && profile?.friendships?.requester === userInfo?._id &&
                                                <button className='btn-light' onClick={() => handleFriendsUpdate(profile?.friendships?._id, 'cancel')}>Cancel Request</button>
                                            }
                                            {
                                                profile?.friendships !== null && profile?.friendships?.recipient === userInfo?._id &&
                                                <>
                                                    <button className='btn-fill' style={{ marginRight: "8px" }} onClick={() => handleFriendsUpdate(profile?.friendships?._id, 'accepted')}>Accept</button>
                                                    <button className='btn-light' onClick={() => handleFriendsUpdate(profile?.friendships?._id, 'declined')}>Decline</button>
                                                </>
                                            }
                                        </>
                                }

                                {/* <button className='btn-fill' style={{ marginRight: "8px" }}>Accept</button>
                                <button className='btn-light'>Decline</button> */}
                                {/* <button className='btn-fill'>Send Request</button> */}
                                {/* <button className='btn-light'>Cancel Request</button> */}
                            </div>
                        </Group>
                    </div>
                </Card.Section>
            </Card >
        </>
    )
}

export default UserCard