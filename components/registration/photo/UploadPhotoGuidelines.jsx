import { Alert, Avatar, List, ThemeIcon } from '@mantine/core'
import { IconCheck, IconX, IconCircleCheck, IconCircleDashed } from '@tabler/icons-react'
import React from 'react'

const UploadPhotoGuidelines = () => {
    return (
        <div className='photoGuidelines mt-30'>
            <h3 className='pt-25'>
                Photo guidelines
            </h3>

            <div className='flex flex-wrap flex-gap-25 mt-10'>
                <div>
                    <p className='pb-5 flex align-center small-text'><IconCheck color='green' size={16} /> Close up</p>
                    <Avatar size="xl" src="/potrait/closeup.jpg" />
                </div>

                <div>
                    <p className='pb-5 flex align-center small-text'><IconCheck color='green' size={16} /> Half View</p>

                    <Avatar size="xl" src="/potrait/mid-shoot.jpg" />
                </div>

                <div>
                    <p className='pb-5 flex align-center small-text'><IconCheck color='green' size={16} /> Full view</p>

                    <Avatar size="xl" src="/potrait/full-size.jpg" />
                </div>
            </div>

            <div className='flex flex-wrap flex-gap-25 mt-25'>
                <div>
                    <p className='pb-5 flex align-center small-text'><IconX color='red' size={16} /> Side face</p>
                    <Avatar size="xl" src="/potrait/side-view.jpg" />
                </div>

                <div>
                    <p className='pb-5 flex align-center small-text'><IconX color='red' size={16} /> Group</p>

                    <Avatar size="xl" src="/potrait/group.jpg" />
                </div>

                <div>
                    <p className='pb-5 flex align-center small-text'><IconX color='red' size={16} /> Unclear</p>

                    <Avatar size="xl" src="/potrait/unclear.jpg" />
                </div>
            </div>

            <h3 className='pt-25'>
                Know more
            </h3>

            <div>
                <p className='photoGuidelines__list-header'>Do's</p>

                <div className="mt-10">
                    <List
                        spacing="xs"
                        size="sm"
                        center
                        icon={
                            <ThemeIcon color="teal" size={24} radius="xl">
                                <IconCheck size={16} />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>Your Photo should be front facing and your entire face should be visible.</List.Item>
                        <List.Item>Ensure that your Photo is recent and not with a group.</List.Item>
                        <List.Item>You can upload upto 20 Photos to your Profile.</List.Item>
                        <List.Item>Each Photo must be less than 15 MB in size and must be in one of the following formats: jpg, jpeg, png or webp.</List.Item>
                    </List>
                </div>
            </div>

            <div className='mt-15'>
                <p className='photoGuidelines__list-header'>Dont's</p>

                <div className="mt-10">
                    <List
                        spacing="xs"
                        size="sm"
                        center
                        icon={
                            <ThemeIcon color="red" size={24} radius="xl">
                                <IconX size={16} />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>Watermarked, digitally enhanced, morphed Photos or Photos with your personal information will be rejected.</List.Item>
                        <List.Item>Irrelevant Photographs will lead to deactivation of your Profile and Membership.</List.Item>
                    </List>
                </div>
            </div>

            <div className='mt-15'>
                <Alert color="red">
                    Photos will be screened, optimized and added to your Profile within few hours.
                </Alert>
            </div>
        </div>
    )
}

export default UploadPhotoGuidelines