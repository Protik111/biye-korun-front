"use client"
import { btnBackground } from '@/styles/library/mantine'
import { Button } from '@mantine/core'
import Link from 'next/link'

const Vision = () => {
    return (
        <div className='vision container rounded-10'>
            <div className='vision__wrapper grid grid-cols-2 grid-cols-2-responsive grid-gap-20'>
                <div className='vision__wrapper--left'>

                    <div>
                        <h2>Our Mission & Vision</h2>
                        <p>BiyeKorun's mission is to bridge the gap for Bangladeshis around the world seeking marital ties. Currently, no platform caters specifically to this community's matrimonial needs. BiyeKorun envisions a world where Bangladeshis globally can confidently rely on a platform that ensures accurate, validated, and verified information to help them find their life partner. Family members can also engage in the search for potential brides or grooms for their loved ones.</p>
                    </div>

                    {/* <div className='mt-30'>
                        <h2>Our Vision</h2>
                        <p></p>
                    </div> */}


                    <Link href="/login">
                        <Button
                            className="mt-25"
                            style={btnBackground}
                            size="md"
                            radius="lg"
                        // onClick={handleLetsBegin}
                        >
                            Register Now
                        </Button>
                    </Link>
                </div>

                <div className='vision__wrapper--right '>
                    <img className='rounded-10' src="/about-us/vision-image.svg" alt="Vision" />
                </div>
            </div>
        </div>
    )
}

export default Vision