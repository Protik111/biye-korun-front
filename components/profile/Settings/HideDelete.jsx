import { Button } from '@mantine/core'
import React from 'react'

const HideDelete = () => {
    return (
        <div>
            <div className='container-box-bg flex align-center justify-between border-1 py-30 px-15'>
                <div className='w-75'>
                    <h3>Hide Profile</h3>
                    <p className='mt-5'>When you hide your Profile, you will not be visible on Shaadi.com. You will neither be able to send invitations or messages.</p>
                </div>
                <Button variant="light" color="pink" size="xs" radius="xl">Hide</Button>
            </div>

            <div className='container-box-bg flex align-center justify-between border-1 py-30 px-15 mt-15'>
                <div className='w-75'>
                    <h3>Delete Profile</h3>
                    <p className='mt-5'>You will permanently lose all profile information, Match interactions and paid memberships.</p>
                </div>
                <Button variant="filled" color="pink" size="xs" radius="xl">Delete</Button>
            </div>
        </div>
    )
}

export default HideDelete