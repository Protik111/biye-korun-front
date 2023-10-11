"use client"

const lists = [
    "Unique Selling Point",
    "Interactions and Engagement",
    "Chat Features including voice, video and text",
    "Fund Raise Features",
    "Private, personalized, and highly confidential service",
    "Trusted service for matrimony"
]

const Specialty = () => {
    return (
        <div className='visionContainer'>
            <div className='vision container rounded-10'>
                <div className='vision__wrapper grid grid-cols-2 grid-cols-2-responsive grid-gap-20'>

                    <div className='vision__wrapper--right '>
                        <img src="/about-us/specialty.svg" alt="Vision" />
                    </div>

                    <div className='vision__wrapper--left'>
                        <h2>Our Specialty</h2>
                        <div className='list-item'>
                            {
                                lists?.map(item => <div className="mt-15 flex align-center flex-gap-5">
                                    <img src="/about-us/tick.svg" alt="Tick" />
                                    <p>{item}</p>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialty