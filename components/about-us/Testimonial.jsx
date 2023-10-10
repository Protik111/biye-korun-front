"use client"
import { imageUrl } from '@/staticData/image'
import { btnBackground } from '@/styles/library/mantine'
import { Avatar, Button, Rating } from '@mantine/core'

const Testimonial = () => {
    return (
        <div>
            <div className='vision testimonial container border-1 rounded-10 p-30'>
                <div className='vision__wrapper grid grid-cols-2 grid-cols-2-responsive grid-gap-20'>
                    <div className='vision__wrapper--left'>
                        <h2>Bride & Groom Testimonials</h2>
                    </div>

                    <div className='vision__wrapper--right '>
                        <div className='flex flex-gap-10'>
                            <Avatar
                                size="lg"
                                radius="xl"
                                src={imageUrl}
                                alt="My Profile"
                            />

                            <div>
                                <p style={{ color: 'black' }}>I recently had the opportunity to use Biyekorun.us, it has been an excellent experience. As someone based in the USA with Bangladeshi roots, I found their marriage media service to be a perfect platform for finding potential life partners.</p>
                                <div className='mt-10'>
                                    <Rating defaultValue={5} size="sm" />
                                    <h3>Rafsan Al Rafa</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial