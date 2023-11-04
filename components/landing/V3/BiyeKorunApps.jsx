import React from 'react'

const BiyeKorunApps = () => {
    return (
        <div className='biyeKorunApps'>
            <div className='biyeKorunApps__wrapper container'>
                <div className='biyeKorunApps__wrapper--left py-30'>
                    <h2>BiyeKorun Apps</h2>
                    <p className='mt-15'>Over 1 lakh+ installs</p>
                    <p>Always stay up to date with faster & easier matchmaking <br />
                        Get 24/7 support and world class user experience.
                    </p>
                    <h4 className='mt-15'>Download Now</h4>

                    <div className='flex flex-gap-10 store flex-wrap'>
                        <img className='small' src="/V3/landing/google-play.png" alt="Honeymoon" loading="lazy" />

                        <img className='small' src="/V3/landing/apple-store.png" alt="Honeymoon" loading="lazy" />
                    </div>
                </div>

                <div className='biyeKorunApps__wrapper--right'>
                    <img className='small' src="/V3/landing/app.png" alt="Honeymoon" loading="lazy" />
                </div>
            </div>
        </div>
    )
}

export default BiyeKorunApps