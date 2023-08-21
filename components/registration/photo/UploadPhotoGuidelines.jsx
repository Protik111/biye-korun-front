import { Avatar, Icon, Text } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react'
import React from 'react'

const UploadPhotoGuidelines = () => {
    return (
        <div className='photoGuidelines mt-30'>
            <h3>
                Photo guidelines
            </h3>

            <div className='flex flex-wrap flex-gap-25'>
                <div>
                    <p className='pb-5 flex align-center'><IconCheck color='green' size={16} /> Close up</p>
                    <Avatar size="xl" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
                </div>

                <div>
                    <p className='pb-5 flex align-center'><IconCheck color='green' size={16} /> Close up</p>

                    <Avatar size="xl" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
                </div>

                <div>
                    <p className='pb-5 flex align-center'><IconCheck color='green' size={16} /> Close up</p>

                    <Avatar size="xl" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
                </div>
            </div>

            <div className='flex flex-wrap flex-gap-25 mt-25'>
                <div>
                    <p className='pb-5 flex align-center'><IconX color='red' size={16} /> Close up</p>
                    <Avatar size="xl" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
                </div>

                <div>
                    <p className='pb-5 flex align-center'><IconX color='red' size={16} /> Close up</p>

                    <Avatar size="xl" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
                </div>

                <div>
                    <p className='pb-5 flex align-center'><IconX color='red' size={16} /> Close up</p>

                    <Avatar size="xl" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
                </div>
            </div>
        </div>
    )
}

export default UploadPhotoGuidelines