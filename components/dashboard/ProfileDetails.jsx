import { Timeline, Text, Badge, List, ThemeIcon, Avatar, Divider } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots, IconUserCircle, IconAddressBook, IconCircleCheck, IconSchool, IconBrandCashapp, IconArchive, IconDeviceIpadSearch } from '@tabler/icons-react';
import ThemeIconComp from '../global/ThemeIconComp';

const ProfileDetails = () => {
    return (
        <div>
            <Timeline color='pink' active={4} bulletSize={40} lineWidth={3}>
                <Timeline.Item bullet={<IconUserCircle size={24} />} title="About Nadia Rahman">
                    <div className='flex align-center flex-gap-15 mt-5'>
                        <Badge color="pink">ID: SH80814944</Badge>
                        <Badge color="pink">Profile created by self</Badge>
                    </div>

                    <Text size="md" mt={4}>The bride, adorned in an elegant ivory gown that cascades into a delicate train, radiates an aura of timeless beauty and anticipation. Her cascading veil, intricately embroidered with delicate lace, veils her face, adding an air of mystery. The bride's eyes shimmer with excitement, and a gentle smile graces her lips as she clutches a bouquet of roses and baby's breath. Her hair is meticulously styled in a classic updo, showcasing the graceful curve of her neck.</Text>
                </Timeline.Item>

                <Timeline.Item bullet={<IconAddressBook size={24} />} title="Contact Details">
                    <Text size="md" mt={4}>The bride, adorned in an elegant ivory gown that cascades into a delicate train, radiates an aura of timeless beauty and anticipation. Her cascading veil, intricately embroidered with delicate lace, veils her face, adding an air of mystery. The bride's eyes shimmer with excitement, and a gentle smile graces her lips as she clutches a bouquet of roses and baby's breath. Her hair is meticulously styled in a classic updo, showcasing the graceful curve of her neck.</Text>
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
                        <List.Item icon={<ThemeIcon color="teal" size={24} radius="xl"> <IconSchool size="18" /></ThemeIcon>}>Bsc. in Computer Science Engineering</List.Item>

                        <List.Item icon={<ThemeIcon color="teal" size={24} radius="xl"> <IconArchive size="18" /></ThemeIcon>}>Engineering</List.Item>

                        <List.Item icon={<ThemeIcon color="teal" size={24} radius="xl"> <IconSchool size="18" /></ThemeIcon>}>Company, TS4U</List.Item>

                        <List.Item icon={<ThemeIcon color="teal" size={24} radius="xl"> <IconBrandCashapp size="18" /></ThemeIcon>}>Earns Upto BDT 40K monthly</List.Item>
                    </List>
                </Timeline.Item>

                <Timeline.Item title="What she is looking for" bullet={<IconDeviceIpadSearch size={24} />}>
                    <div className='flex justify-between mt-10 align-center'>
                        <div className='flex flex-column align-center'>
                            <Avatar
                                size="xl"
                                radius="xl"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                                alt="it's me"
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
                                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                                alt="it's me"
                            />
                            <p>Her Preferences</p>
                        </div>
                    </div>

                    <div className='mt-25'>
                        <div className="flex justify-between">
                            <div>
                                <p className='secondary-text'>Age</p>
                                <p className='small-text'>21 to 29</p>
                            </div>
                            <ThemeIconComp iconComp={<IconCircleCheck size="18" />}></ThemeIconComp>
                        </div>
                        <Divider mt={10} size="sm" />


                        <div className="flex justify-between mt-25">
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
                        <Divider mt={10} size="sm" />

                    </div>

                </Timeline.Item>

            </Timeline>
        </div>
    )
}

export default ProfileDetails