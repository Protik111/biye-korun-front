"use client"

const lists = [
    "Unique Selling Point",
    "Interactions and Engagement",
    "Chat Features including voice, video and text",
    "Fund Raise Features",
    "Private, personalized, and highly confidential service",
    "Trusted service for matrimony"
]

const CEO = () => {
    return (
        <div className='visionContainer'>
            <h2 className="text-center py-15">BiyeKorun: A Unique Platform for Bangladeshi Matrimony</h2>
            <div className='vision container rounded-10 border-1 py-15 mb-25'>
                <div className='vision__wrapper grid grid-cols-2 grid-cols-2-responsive grid-gap-20'>

                    <div className='vision__wrapper--right text-center' >
                        <img className="rounded-15" src="/about-us/shiblu-boss-image-1.png" alt="Vision" />
                    </div>

                    <div className='vision__wrapper--left'>
                        <h2>Story of The Founder</h2>
                        <p className="mt-10">
                            The personal love story of Shiblu Ahmad serves as the inspiration behind BiyeKorun. He met his American wife on Yahoo chat in 2005, leading to their marriage in 2009. Shiblu's journey from Bangladesh to Singapore for studies and then finding love across continents underpins the platform's core value: connecting Bangladeshis worldwide.
                        </p>
                        <h4 className="mt-5"> - Shiblu Ahmad</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CEO