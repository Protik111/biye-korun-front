"use client"
import { btnBackground } from '@/styles/library/mantine'
import { Button } from '@mantine/core'

const Vision = () => {
    return (
        <div className='vision container border-1 rounded-10'>
            <div className='vision__wrapper grid grid-cols-2 grid-cols-2-responsive grid-gap-20'>
                <div className='vision__wrapper--left'>
                    <h2>Our Vision</h2>
                    <p>We aspire to inspire and nurture love, building a community where meaningful relationships flourish. Our mission is to bring people together, making the world a happier and more loving place. We believe that love transcends borders, and our mission is to help you find it, wherever you are.
                        Let Biyekorun.us be your passport to a world of possibilities.</p>
                    <Button
                        className="mt-25"
                        style={btnBackground}
                        size="md"
                        radius="lg"
                    // onClick={handleLetsBegin}
                    >
                        Register Now
                    </Button>
                </div>

                <div className='vision__wrapper--right '>
                    <img src="/about-us/vision-image.svg" alt="Vision" />
                </div>
            </div>
        </div>
    )
}

export default Vision