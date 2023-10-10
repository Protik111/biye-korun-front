"use client";

import { Button } from '@mantine/core'
import { btnBackground } from '@/styles/library/mantine'

const DownloadApp = () => {
    return (
        <div className='downloadApp'>
            <div className='downloadApp__wrapper grid grid-cols-3 grid-cols-3-responsive grid-gap-20 container place-center'>
                <div className='mobile-demo'>
                    <img src="/about-us/mobile-app.svg" alt="About" />
                </div>

                <div>
                    <Button
                        className="mt-25 app-btn"
                        // style={btnBackground}
                        size="md"
                        radius="lg"
                    // onClick={handleLetsBegin}
                    >
                        Download Our Mobile App
                    </Button>
                </div>

                <div>
                    <div className='cursor pointer'>
                        <img src="/about-us/app-1.svg" alt="App Store" />
                    </div>
                    <div className='mt-10 pointer'>
                        <img src="/about-us/app-2.svg" alt="App Store" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadApp