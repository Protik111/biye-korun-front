import React from 'react'

const HappyCouples = () => {
    return (
        <div className='root-happy__couple'>
            <div className="happy__couple container">
                <div className="happy__couple--left">
                    <div className='info'>
                        <div className='flex flex-column align-center flex-gap-15'>
                            <div className=''>
                                <img src="/V3/landing/quote.png" alt="Quote" loading="lazy" />
                            </div>
                            <p className='desc'>We are very happy in our married life. We found our life partner through Biye korun platform. Biye korun is an excellent platform. Many many thanks to the owner of this platform</p>
                            <p className='name'>Anika Sarma & Rahul Ganguli</p>
                            <p className='title'>Happy Couple</p>
                        </div>
                    </div>
                </div>
                <div className="happy__couple--right rounded-15">

                    <img src="/V3/landing/slide.png" alt="Gift Collection" loading="lazy" />
                </div>
            </div>

            <div className='container next-prev'>
                <div className='flex flex-gap-25 justify-center'>
                    <img src="/V3/landing/left.svg" alt="Gift Collection" loading="lazy" />
                    <img src="/V3/landing/right.svg" alt="Gift Collection" loading="lazy" />
                </div>
            </div>
        </div>
    )
}

export default HappyCouples